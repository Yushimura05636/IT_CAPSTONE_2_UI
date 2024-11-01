<template>
  <NuxtLayout name="admin">
    <h1 class="text-2xl font-bold">Loan Counts</h1>

    <div class="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-16">
      <!-- Top Action Bar -->
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <!-- Action Buttons -->
        <div class="flex space-x-4 justify-center sm:justify-start">
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

        <!-- Search Input -->
        <div class="relative flex-grow max-w-xs w-full sm:w-auto">
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
                <input type="radio" v-model="selectedLoanId" :value="loan.id" class="cursor-pointer" />
              </td>
              <td class="py-4 px-6">{{ loan.loan_count }}</td>
              <td class="py-4 px-6">{{ (loan.min_amount) }}</td>
              <td class="py-4 px-6">{{ (loan.max_amount) }}</td>
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
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { ref, computed, onMounted } from 'vue';
import { UserService } from '~/models/User';
import { apiService } from '~/routes/api/API';
import { PageNameService } from '~/models/PageName';

const state = {
    loancount: ref([]),
};

async function createloancount(){
  try {
      const response = await apiService.authLoanCountsCreate({});
      navigateTo('/loan_counts/create');
  } catch (error) {
      toast.error(`${error}`, {
    autoClose: 5000,
  })
  }
}

async function updateloancount()
{
  try {
      const response = await apiService.authLoanCountsUpdate({});
      UserService.usbl_id = selectedLoanId.value;
      navigateTo('/loan_counts/update');
  } catch (error) {
      toast.error(`${error}`, {
    autoClose: 5000,
  })
  }
}

async function fetchloancount() {
    try {
        const response = await apiService.getLoanCount({});
        state.loancount.value = response.data;
    } catch (error) {
        toast.error(`${error}`, {
      autoClose: 5000,
    });
    }
}

const searchQuery = ref('');
const selectedLoanId = ref<number | null>(null);

const filteredLoans = computed(() => {
    if (!searchQuery.value) return state.loancount.value;
    return state.loancount.value.filter((loan) =>
        loan.loan_count.toString().includes(searchQuery.value)
    );
});

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
};

onMounted(() => {
    PageNameService.pageName = 'Loan Counts';
    fetchloancount();
});
</script>

<style scoped>
.mt-16 {
    margin-top: 4rem;
}

table {
    border-collapse: separate;
    border-spacing: 0;
}

th, td {
    border-bottom: 1px solid #e2e8f0;
}

button {
    transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

button:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
