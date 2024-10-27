<template>
  <NuxtLayout name="admin">
    <div class="p-6 max-w-screen-lg mx-auto bg-white shadow-lg rounded-lg">
      <!-- Header -->
      <div class="text-2xl font-bold mb-4 text-gray-800">Customers</div>

      <!-- Action Bar -->
      <div class="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        <!-- Buttons on the left -->
        <div class="flex space-x-2 justify-center md:justify-start">
          <button
            @click="createItem"
            class="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            Create
          </button>
          <button
            @click="viewSelected"
            :disabled="!selectedId"
            class="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition disabled:opacity-50"
          >
            View
          </button>
          <button
            @click="updateSelected"
            :disabled="!selectedId"
            class="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition disabled:opacity-50"
          >
            Update
          </button>
        </div>

        <!-- Search Input on the right -->
        <div class="w-full md:w-1/2 relative">
          <input
            v-model="searchQuery"
            placeholder="Search customers..."
            class="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
            type="text"
          />
          <span class="absolute right-4 top-3 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.286 4.285a1 1 0 01-1.415 1.415l-4.285-4.286zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead class="bg-gray-200 text-gray-600 uppercase text-sm">
            <tr>
              <th class="px-4 py-2 border">Select</th>
              <th class="px-4 py-2 border">Name</th>
              <th class="px-4 py-2 border">Email</th>
              <th class="px-4 py-2 border">Phone Number</th>
              <th class="px-4 py-2 border">Birthday</th>
              <th class="px-4 py-2 border">Gender</th>
              <th class="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            <!-- Loading State -->
            <tr v-if="isLoading">
              <td colspan="6" class="text-center py-4 text-gray-500">Loading...</td>
            </tr>

            <!-- No Data State -->
            <tr v-else-if="filteredTableItems.length === 0">
              <td colspan="6" class="text-center py-4 text-gray-500">No data</td>
            </tr>

            <!-- Data Rows -->
            <tr
              v-else
              v-for="item in filteredTableItems"
              :key="item.customerId"
              class="hover:bg-gray-50 transition"
            >
              <td class="px-4 py-2 border text-center">
                <input type="radio" :value="item.customerId" v-model="selectedId" />
              </td>
              <td class="px-4 py-2 border">{{ item.name }}</td>
              <td class="px-4 py-2 border">{{ item.email }}</td>
              <td class="px-4 py-2 border">{{ item.telephoneNumber }}</td>
              <td class="px-4 py-2 border">{{ item.birthday }}</td>
              <td class="px-4 py-2 border">{{ item.gender }}</td>
              <td class="px-4 py-2 border">{{ item.personality_status_description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { CustomersService } from '~/models/Customer';
import { apiService } from '~/routes/api/API';

const searchQuery = ref<string>('');
const tableItems = ref<TableItem[]>([]);
const isLoading = ref(true);
const selectedId = ref<string | null>(null);

interface TableItem {
  customerId: string;
  name: string;
  email: string;
  telephoneNumber: string;
  birthday: string;
  gender: string;
  personality_status_description: string;
}

const filteredTableItems = computed(() => {
  return tableItems.value.filter(item =>
    Object.values(item).some(value =>
      String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  );
});

onMounted(async () => {
  await fetchCustomers();
  isLoading.value = false;
});

async function fetchCustomers() {
  try {
    isLoading.value = true;
    const response = await apiService.getCustomers({});
    storeResponseInTableItems(response.data);
  } catch (error: any) {
    toast.error(`${error.message}`, { autoClose: 3000 });
  } finally {
    isLoading.value = false;
  }
}

function storeResponseInTableItems(data: any[]) {
  tableItems.value = data.map(customer => ({
    customerId: customer.customer.id.toString(),
    name: `${customer.personality.first_name} ${customer.personality.family_name}`,
    email: customer.personality.email_address,
    telephoneNumber: customer.personality.telephone_no,
    birthday: customer.personality.birthday,
    gender: parseInt(customer.personality.gender_code) === 1 ? 'Male' : 'Female',
    personality_status_description: customer.personality.personality_status_description,
  }));
}

async function createItem() {
  try {
    await apiService.authCustomersCreate({});
    navigateTo('/customers/create');
  } catch (error: any) {
    toast.error(`${error}`, { autoClose: 5000 });
  }
}

async function viewSelected() {
  if (selectedId.value) {
    try {
      CustomersService.id = parseInt(selectedId.value);
      const response = await apiService.authCustomersUpdate({});
      navigateTo(`/customers/view`);
    } catch (error) {
      toast.error(`${error}`, { autoClose: 5000 });
    }
  }
}

async function updateSelected() {
  try {
    CustomersService.id = parseInt(selectedId.value);
    const response = await apiService.authCustomersUpdate({});
    navigateTo(`/customers/update`);
    // toast.success(`Update button clicked for Customer ID: ${selectedId.value}`);
  } catch (error) {
    toast.error(`${error}`);
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
}

.flex {
  display: flex;
}

.space-x-2 > * + * {
  margin-left: 0.5rem;
}

button:disabled {
  cursor: not-allowed;
}
</style>
