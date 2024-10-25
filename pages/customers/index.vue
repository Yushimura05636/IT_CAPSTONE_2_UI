<template>
    <NuxtLayout name="admin">
        <div class="flex justify-between items-center mb-4">
      <!-- Buttons on the left -->
      <div class="flex space-x-2">
        <button @click="createItem" class="bg-blue-500 text-white px-4 py-2 rounded">Create</button>
        <button @click="viewSelected" :disabled="!selectedId" class="bg-green-500 text-white px-4 py-2 rounded">View</button>
        <button @click="updateSelected" :disabled="!selectedId" class="bg-yellow-500 text-white px-4 py-2 rounded">Update</button>
      </div>

      <!-- Search Input on the right -->
      <input
        v-model="searchQuery"
        placeholder="Search..."
        class="border px-2 py-1 rounded"
        type="text"
      />
    </div>

    <!-- Table -->
    <table class="min-w-full border-collapse border">
      <thead>
        <tr>
          <th class="px-4 py-2 border">Select</th>
          <th class="px-4 py-2 border">Name</th>
          <th class="px-4 py-2 border">Email</th>
          <th class="px-4 py-2 border">Phone Number</th>
          <th class="px-4 py-2 border">Birthday</th>
          <th class="px-4 py-2 border">Gender</th>
        </tr>
      </thead>
      <tbody>
        <!-- Loading State -->
        <tr v-if="isLoading">
          <td colspan="9" class="text-center py-4">Loading...</td>
        </tr>

        <!-- No Data State -->
        <tr v-else-if="filteredTableItems.length === 0">
          <td colspan="9" class="text-center py-4">No data</td>
        </tr>

        <!-- Data Rows -->
        <tr v-else v-for="item in filteredTableItems" :key="item.customerId">
          <td class="px-4 py-2 border text-center">
            <input type="radio" :value="item.customerId" v-model="selectedId" />
          </td>
          <td class="px-4 py-2 border">{{ item.name }}</td>
          <td class="px-4 py-2 border">{{ item.email }}</td>
          <td class="px-4 py-2 border">{{ item.telephoneNumber }}</td>
          <td class="px-4 py-2 border">{{ item.birthday }}</td>
          <td class="px-4 py-2 border">{{ item.gender }}</td>
        </tr>
      </tbody>
    </table>
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
const selectedId = ref<string | null>(null); // For tracking the selected row

interface TableItem {
  customerId: string;
  name: string;
  email: string;
  telephoneNumber: string;
  birthday: string;
  gender: string;
  groupName: string;
  city: string;
}

// Computed property for search functionality
const filteredTableItems = computed(() => {
  return tableItems.value.filter(item =>
    Object.values(item).some(value =>
      String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  );
});

// Fetch data when the component is mounted
onMounted(async () => {
  await fetchCustomers();
  isLoading.value = false;
});

// Fetch customers from API
async function fetchCustomers() {
  try {
    isLoading.value = true;
    const response = await apiService.getCustomers({});
    storeResponseInTableItems(response.data);
  } catch (error: any) {
    debugger;
    toast.error(`${error.message}`, {
        autoClose: 3000,
    });
  } finally {
    isLoading.value = false;
  }
}

// Function to map API response to table items
function storeResponseInTableItems(data: any[]) {
  tableItems.value = [];
  for (let i = 0; i < data.length; i++) {
    debugger;
    const customer = data[i];
    tableItems.value.push({
      customerId: customer.customer.id.toString(),
      name: `${customer.personality.first_name} ${customer.personality.family_name}`,
      email: customer.personality.email_address,
      telephoneNumber: customer.personality.telephone_no,
      birthday: customer.personality.birthday,
      gender: parseInt(customer.personality.gender_code) === 1 ? 'Male' : 'Female',
      groupName: customer.customer.group_id,
      city: customer.personality.city_id,
    });
  }
}

// Button actions
async function createItem() {
    try {
    const response = await apiService.authCustomersCreate({});
    navigateTo('/customers/create');
  } catch (error: any) {
    toast.error(`${error}`, {
      autoClose: 5000,
    })
  }
}

async function viewSelected() {
  try {
    if (selectedId.value) {
        CustomersService.id = parseInt(selectedId.value?.toString());
        const response = await apiService.authCustomersUpdate({});
        navigateTo(`customers/update`)
    }
  } catch (error) {
    toast.error(`${error}`, {
        autoClose: 5000,
    })
  }
}

function updateSelected() {
  if (selectedId.value) {
    toast.success(`Update button clicked for Customer ID: ${selectedId.value}`);
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
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
}

.flex {
  display: flex;
}

.justify-between {
  justify-content: space-between;
}

.space-x-2 > * + * {
  margin-left: 0.5rem;
}
</style>
