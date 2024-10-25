<template>
    <div>
      <!-- Search Input -->
      <input
        v-model="searchQuery"
        placeholder="Search..."
        class="border px-2 py-1 mb-4 rounded"
        type="text"
      />

      <!-- Table -->
      <table class="min-w-full border-collapse border">
        <thead>
          <tr>
            <th class="px-4 py-2 border">Employee ID</th>
            <th class="px-4 py-2 border">Name</th>
            <th class="px-4 py-2 border">Email</th>
            <th class="px-4 py-2 border">Phone Number</th>
            <th class="px-4 py-2 border">Birthday</th>
            <th class="px-4 py-2 border">Gender</th>
            <th class="px-4 py-2 border">Group Name</th>
            <th class="px-4 py-2 border">City</th>
            <!-- Add more table headers as needed -->
          </tr>
        </thead>
        <tbody>
          <!-- Loading State -->
          <tr v-if="isLoading">
            <td colspan="8" class="text-center py-4">Loading...</td>
          </tr>

          <!-- No Data State -->
          <tr v-else-if="filteredTableItems.length === 0">
            <td colspan="8" class="text-center py-4">No data</td>
          </tr>

          <!-- Data Rows -->
          <tr v-else v-for="item in filteredTableItems" :key="item.employeeId">
            <td class="px-4 py-2 border">{{ item.employeeId }}</td>
            <td class="px-4 py-2 border">{{ item.name }}</td>
            <td class="px-4 py-2 border">{{ item.email }}</td>
            <td class="px-4 py-2 border">{{ item.telephoneNumber }}</td>
            <td class="px-4 py-2 border">{{ item.birthday }}</td>
            <td class="px-4 py-2 border">{{ item.gender }}</td>
            <td class="px-4 py-2 border">{{ item.groupName }}</td>
            <td class="px-4 py-2 border">{{ item.city }}</td>
            <!-- Add more data cells as needed -->
          </tr>
        </tbody>
      </table>
    </div>
  </template>

  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';
  import { apiService } from '~/routes/api/API';

  const searchQuery = ref<string>('');
  const tableItems = ref<TableItem[]>([]);
  const isLoading = ref(true);

  interface TableItem {
    employeeId: string;
    name: string;
    email: string;
    telephoneNumber: string;
    birthday: string;
    gender: string;
    groupName: string;
    city: string;
    // Add more fields as needed
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
      const response = await apiService.getCustomersNoAuth({});
      storeResponseInTableItems(response.data);
    } catch (error) {
      toast.error('Failed to load customers data');
    } finally {
      isLoading.value = false;
    }
  }

  // Function to map API response to table items
  function storeResponseInTableItems(data: any[]) {
    tableItems.value = []; // Initialize tableItems to an empty array

for (let i = 0; i < data.length; i++) {
    debugger;
  const customer = data[i];

  tableItems.value.push({
    employeeId: customer.customer.id.toString(),
    name: `${customer.personality.first_name} ${customer.personality.family_name}`,
    email: customer.personality.email_address,
    telephoneNumber: customer.personality.telephone_no,
    birthday: customer.personality.birthday,
    gender: customer.personality.gender_code === 1 ? 'Male' : 'Female',
    groupName: customer.customer.group_id,
    city: customer.personality.city_id,
    // Map other fields as needed
  });
}

  }
  </script>

  <style scoped>
  /* Add custom styling here if needed */
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 8px;
    border: 1px solid #ddd;
    text-align: left;
  }
  </style>
