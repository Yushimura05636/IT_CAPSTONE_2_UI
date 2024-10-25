<template>
  <NuxtLayout name="admin">
    <div class="p-4 sm:p-8 bg-white shadow-md rounded-lg">
      <!-- Action buttons and search bar -->
      <div class="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-2 sm:space-y-0">
        <div class="flex space-x-2">
          <button @click="createEmployee" class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
            Create
          </button>
          <button :disabled="!selectedEmployeeId" @click="viewEmployee" class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition disabled:opacity-50 disabled:cursor-not-allowed">
            View
          </button>
          <button :disabled="!selectedEmployeeId" @click="updateEmployee" class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition disabled:opacity-50 disabled:cursor-not-allowed">
            Update
          </button>
        </div>
        <input
          v-model="searchQuery"
          placeholder="Search..."
          class="border px-3 py-2 rounded w-full sm:w-1/3 focus:outline-none focus:ring focus:border-blue-500 transition"
          type="text"
        />
      </div>

      <!-- Responsive Table -->
      <div class="overflow-auto">
        <table class="min-w-full border-collapse border text-sm">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-4 py-2 border text-left">Select</th>
              <th class="px-4 py-2 border text-left">Name</th>
              <th class="px-4 py-2 border text-left">Email</th>
              <th class="px-4 py-2 border text-left">Phone Number</th>
              <th class="px-4 py-2 border text-left">Birthday</th>
              <th class="px-4 py-2 border text-left">Gender</th>
              <th class="px-4 py-2 border text-left">City</th>
              <th class="px-4 py-2 border text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <!-- Loading state -->
            <tr v-if="isLoading">
              <td colspan="8" class="text-center py-4">Loading...</td>
            </tr>

            <!-- No data state -->
            <tr v-else-if="filteredTableItems.length === 0">
              <td colspan="8" class="text-center py-4">No data available</td>
            </tr>

            <!-- Data rows -->
            <tr v-else v-for="item in filteredTableItems" :key="item.employeeId" class="hover:bg-gray-50 transition">
              <td class="px-4 py-2 border text-center">
                <input type="radio" :value="item.employeeId" v-model="selectedEmployeeId" />
              </td>
              <td class="px-4 py-2 border">{{ item.first_name }} {{ item.family_name }}</td>
              <td class="px-4 py-2 border">{{ item.email }}</td>
              <td class="px-4 py-2 border">{{ item.telephoneNumber }}</td>
              <td class="px-4 py-2 border">{{ item.birthday }}</td>
              <td class="px-4 py-2 border">{{ item.gender }}</td>
              <td class="px-4 py-2 border">{{ item.city }}</td>
              <td class="px-4 py-2 border">{{ item.personalityStatus }}</td>
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
import { EmployeesService } from '~/models/Employee';
import { apiService } from '~/routes/api/API';

const searchQuery = ref<string>('');
const tableItems = ref<TableItem[]>([]);
const isLoading = ref(true);
const selectedEmployeeId = ref<string | null>(null);

interface TableItem {
  employeeId: string;
  first_name: string;
  family_name: string;
  email: string;
  telephoneNumber: string;
  birthday: string;
  gender: string;
  city: string;
  personalityStatus: string;
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
  await fetchEmployees();
  isLoading.value = false;
});

// Fetch employees from API
async function fetchEmployees() {
  try {
    const response = await apiService.getEmployees({});
    storeResponseInTableItems(response.data);
  } catch (error) {
    toast.error(`${error}`, {
      autoClose: 3000,
    });
  } finally {
    isLoading.value = false;
  }
}

// Function to map API response to table items
function storeResponseInTableItems(data: any[]) {
  tableItems.value = data.map(employeeData => {
    const { personality, employee } = employeeData;
    return {
      employeeId: employee.id.toString(),
      first_name: personality.first_name,
      family_name: personality.family_name,
      email: personality.email_address,
      telephoneNumber: personality.telephone_no,
      birthday: personality.birthday,
      gender: personality.gender_code === 1 ? 'Male' : 'Female',
      city: `City ${personality.city_id}`,
      personalityStatus: mapPersonalityStatus(personality.personality_status_code),
    };
  });
}

// Example helper function for personality status mapping
function mapPersonalityStatus(statusCode: number) {
  const statuses: { [key: number]: string } = {
    1: 'Active',
    2: 'Inactive',
    3: 'Suspended',
  };
  return statuses[statusCode] || 'Unknown';
}

// Action buttons functions
async function createEmployee() {
  try {
    const response = await apiService.authEmployeesCreate({});
    navigateTo('employees/create');
  } catch (error) {
    toast.error(`${error}`, {
      autoClose: 5000,
    })
  }
}

async function viewEmployee() {
  try {
    if (selectedEmployeeId.value) {
      EmployeesService.id = parseInt(selectedEmployeeId.value?.toString());
      const response = await apiService.authEmployeesUpdate({});
      navigateTo('employees/update');
    }
  } catch (error) {
    toast.error(`${error}`, {
      autoClose: 5000,
    })
  }
}

function updateEmployee() {
  if (selectedEmployeeId.value) {
    toast.info(`Updating employee ${selectedEmployeeId.value}`);
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
</style>
