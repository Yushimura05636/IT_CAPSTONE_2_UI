<template>
    <NuxtLayout name="admin">
        <div>
      <!-- Action buttons and search bar -->
      <div class="flex justify-between items-center mb-4">
        <div class="flex space-x-2">
          <button @click="createEmployee" class="bg-blue-500 text-white px-3 py-1 rounded">Create</button>
          <button :disabled="!selectedEmployeeId" @click="viewEmployee" class="bg-green-500 text-white px-3 py-1 rounded">View</button>
          <button :disabled="!selectedEmployeeId" @click="updateEmployee" class="bg-yellow-500 text-white px-3 py-1 rounded">Update</button>
        </div>
        <input
          v-model="searchQuery"
          placeholder="Search..."
          class="border px-2 py-1 rounded"
          type="text"
        />
      </div>

      <!-- Table to display employee data -->
      <table class="min-w-full border-collapse border">
        <thead>
          <tr>
            <th class="px-4 py-2 border">Select</th>
            <th class="px-4 py-2 border">Name</th>
            <th class="px-4 py-2 border">Email</th>
            <th class="px-4 py-2 border">Phone Number</th>
            <th class="px-4 py-2 border">Birthday</th>
            <th class="px-4 py-2 border">Gender</th>
            <th class="px-4 py-2 border">City</th>
            <th class="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          <!-- Loading state -->
          <tr v-if="isLoading">
            <td colspan="9" class="text-center py-4">Loading...</td>
          </tr>

          <!-- No data state -->
          <tr v-else-if="filteredTableItems.length === 0">
            <td colspan="9" class="text-center py-4">No data available</td>
          </tr>

          <!-- Data rows -->
          <tr
            v-else
            v-for="item in filteredTableItems"
            :key="item.employeeId"
          >
            <td class="px-4 py-2 border text-center">
              <input
                type="radio"
                :value="item.employeeId"
                v-model="selectedEmployeeId"
              />
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
        // Logic to view employee details
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
      // Logic to update employee
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
