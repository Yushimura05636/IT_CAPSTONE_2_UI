<template>
    <NuxtLayout name="admin">
        <div class="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-16">
      <!-- Top Action Bar -->
      <div class="flex justify-between items-center mb-6 space-x-4">
        <div class="flex space-x-4">
          <button @click="createloancount" class="px-5 py-2 bg-green-600 text-white font-medium rounded-full shadow hover:bg-green-500 transition duration-200">
            Create
          </button>
          <button @click="updateloancount" class="px-5 py-2 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-500 transition duration-200">
            Modify
          </button>
          <button class="px-5 py-2 bg-red-600 text-white font-medium rounded-full shadow hover:bg-red-500 transition duration-200">
            Delete
          </button>
        </div>
        <div class="relative flex-grow max-w-xs">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search loan count"
            class="w-full border border-gray-300 rounded-full px-5 py-2 pr-12 shadow-sm focus:outline-none focus:border-blue-500 transition duration-200"
          />
          <button class="absolute right-4 top-2 text-blue-500 hover:text-blue-700">
            Search
          </button>
        </div>
      </div>
  
      <!-- Loan Table -->
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border-collapse border border-gray-200 rounded-lg shadow-sm">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="py-4 px-6 text-left">Select</th>
              <th class="py-4 px-6 text-left">Loan Count</th>
              <th class="py-4 px-6 text-left">Min Amount</th>
              <th class="py-4 px-6 text-left">Max Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(loan, index) in filteredLoans"
              :key="index"
              class="border-b last:border-0 hover:bg-gray-50 transition duration-150"
            >
              <td class="py-4 px-6">
                <input type="radio" v-model="selectedLoanId" :value="loan.id" />
              </td>
              <td class="py-4 px-6">{{ loan.loan_count }}</td>
              <td class="py-4 px-6">{{ formatCurrency(loan.min_amount) }}</td>
              <td class="py-4 px-6">{{ formatCurrency(loan.max_amount) }}</td>
            </tr>
            <tr v-if="filteredLoans.length === 0">
              <td colspan="4" class="text-center py-6 text-gray-500">No loans found</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </NuxtLayout>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
import { PermissionService } from '~/models/Permission';
import { UserService } from '~/models/User';
  import { apiService } from '~/routes/api/API';
  
  const state = {
      loancount: ref([]), // Make it a ref to keep it reactive
  }

  async function createloancount(){
    try {
        const response = await apiService.auth({
          docId: PermissionService._LOANCOUNT,
          perm: PermissionService._CREATE,
        });
        navigateTo('/loancount/create');
    } catch (error) {
        alert(error);
    }
  }

  async function updateloancount()
  {
    try {
        const response = await apiService.auth({
          docId: PermissionService._LOANCOUNT,
          perm: PermissionService._UPDATE,
        });
        UserService.usr_id = selectedLoanId.value;
        navigateTo('/loancount/update');
    } catch (error) {
        alert(error);
    }
  }
  
  async function fetchloancount() {
      try {
          const response = await apiService.getLoanCount({
            docId: PermissionService._LOANCOUNT,
            permId: PermissionService._VIEW,
          });
          state.loancount.value = response.data; // Update the reactive ref
      } catch (error) {
          console.error(error);
      }
  }
  
  const searchQuery = ref('');
  const selectedLoanId = ref<number | null>(null);
  
  // Computed property to filter loans based on search query
  const filteredLoans = computed(() => {
      if (!searchQuery.value) return state.loancount.value; // Reference the reactive state
      return state.loancount.value.filter((loan) =>
          loan.loan_count.toString().includes(searchQuery.value)
      );
  });
  
  // Format currency
  const formatCurrency = (amount: number) => {
      return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
      }).format(amount);
  };
  
  onMounted(() => {
      fetchloancount();
  });
  </script>
  
  <style scoped>
  .mt-16 {
      margin-top: 4rem; /* Adjusted margin for better spacing */
  }
  
  table {
      border-collapse: separate;
      border-spacing: 0;
  }
  
  th {
      border-bottom: 2px solid #e2e8f0;
  }
  
  td {
      border-bottom: 1px solid #e2e8f0;
  }
  
  button {
      transition: background-color 0.2s ease, box-shadow 0.2s ease;
  }
  
  button:hover {
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  </style>
  