<template>
    <NuxtLayout name="client">
      <div class="p-6 bg-gray-100 min-h-screen">
        <h1 class="text-2xl font-semibold mb-6">Customer Dashboard</h1>
  
        <!-- Loan Overview Section -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white p-4 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-2">Total Loan Balance</h2>
            <p class="text-2xl font-bold text-blue-600">${{ totalLoanBalance || 0 }}</p> <!-- Fallback to 0 -->
          </div>
          <div class="bg-white p-4 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-2">Number of Loans</h2>
            <p class="text-2xl font-bold text-green-600">{{ numberOfLoans || 0 }}</p> <!-- Fallback to 0 -->
          </div>
          <div class="bg-white p-4 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-2">Outstanding Balance</h2>
            <p class="text-2xl font-bold text-red-600">${{ outstandingBalance || 0 }}</p> <!-- Fallback to 0 -->
          </div>
          <div class="bg-white p-4 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-2">Total Payments</h2>
            <p class="text-2xl font-bold text-green-700">${{ totalPayments || 0 }}</p> <!-- Fallback to 0 -->
          </div>
        </div>
  
        <!-- Susceptible for Reloan Section -->
        <div class="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 class="text-xl font-semibold mb-4">Susceptible for Reloan</h2>
          <p :class="statusClasses(susceptibleForReloan)" class="text-lg font-semibold">
            {{ susceptibleForReloan === 'Yes' ? 'Yes' : susceptibleForReloan === 'No' ? 'No' : 'N/A' }} <!-- Show 'N/A' if status is not set -->
          </p>
        </div>
  
        <!-- Loans Table -->
        <div v-if="loans.length > 0" class="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 class="text-xl font-semibold mb-4">Loans</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th class="px-4 py-2 border-b font-semibold text-left">Loan ID</th>
                  <th class="px-4 py-2 border-b font-semibold text-left">Amount</th>
                  <th class="px-4 py-2 border-b font-semibold text-left">Date Applied</th>
                  <th class="px-4 py-2 border-b font-semibold text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="loan in loans" :key="loan.id" class="hover:bg-gray-50">
                  <td class="px-4 py-2 border-b">{{ loan.id }}</td>
                  <td class="px-4 py-2 border-b">${{ loan.amount || 0 }}</td> <!-- Fallback to 0 -->
                  <td class="px-4 py-2 border-b">{{ loan.dateApplied || 'N/A' }}</td> <!-- Show 'N/A' if no date -->
                  <td class="px-4 py-2 border-b" :class="statusClasses(loan.status)">
                    {{ loan.status || 'N/A' }} <!-- Fallback to 'N/A' -->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  
        <!-- Payments Table -->
        <div v-if="payments.length > 0" class="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 class="text-xl font-semibold mb-4">Payments</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th class="px-4 py-2 border-b font-semibold text-left">Payment ID</th>
                  <th class="px-4 py-2 border-b font-semibold text-left">Loan ID</th>
                  <th class="px-4 py-2 border-b font-semibold text-left">Amount Paid</th>
                  <th class="px-4 py-2 border-b font-semibold text-left">Date Paid</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="payment in payments" :key="payment.id" class="hover:bg-gray-50">
                  <td class="px-4 py-2 border-b">{{ payment.id || 'N/A' }}</td> <!-- Fallback to 'N/A' -->
                  <td class="px-4 py-2 border-b">{{ payment.loanId || 'N/A' }}</td> <!-- Fallback to 'N/A' -->
                  <td class="px-4 py-2 border-b">${{ payment.amountPaid || 0 }}</td> <!-- Fallback to 0 -->
                  <td class="px-4 py-2 border-b">{{ payment.datePaid || 'N/A' }}</td> <!-- Fallback to 'N/A' -->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { apiService } from '~/routes/api/API';
  
  // Temporary variables for dashboard data
  const totalLoanBalance = ref(0)
  const numberOfLoans = ref(0)
  const outstandingBalance = ref(0)
  const totalPayments = ref(0)
  const susceptibleForReloan = ref('') // Tracking the user's reloan eligibility status
  
  // Temporary list of loans for the table
  const loans = ref([
    { id: '12345', amount: 5000, dateApplied: '2024-01-15', status: 'Pending' },
    { id: '12346', amount: 3000, dateApplied: '2024-02-10', status: 'Approved' },
    { id: '12347', amount: 4000, dateApplied: '2024-03-05', status: 'Rejected' },
  ])
  
  // Temporary list of payments for the table
  const payments = ref([
    { id: 'P12345', loanId: '12345', amountPaid: 1500, datePaid: '2024-02-01' },
    { id: 'P12346', loanId: '12346', amountPaid: 1000, datePaid: '2024-03-01' },
    { id: 'P12347', loanId: '12347', amountPaid: 500, datePaid: '2024-04-01' },
  ])
  
  // Mock fetch function to simulate API call
  const fetchDashboardData = async () => {
    const response = await apiService.getDashboardUserLoanDetailsNoAUTH({});
    // Simulate fetching data for loans and payments
    totalLoanBalance.value = response.total_balances;
    numberOfLoans.value = response.number_of_loans;
    outstandingBalance.value = response.outstanding_balance;
    totalPayments.value = response.total_payments;
    susceptibleForReloan.value = 'Yes' // Simulating reloan eligibility status (this should come from the API)
  
    // Simulating fetching loan and payment data from API
    loans.value = response.loan_history;
  
    payments.value = response.payment_history;

    statusClasses
  }
  
  // Status color classes for loan status and reloan eligibility
  const statusClasses = (status: any) => {
    if (status === true) {
        return 'text-blue-500 font-bold'; // For "Yes" status
    } else if (status === false) {
        return 'text-gray-500 font-bold'; // For "No" status
    }
    return ''; // Default return if the status is neither "Yes" nor "No"
}
  
  // Fetch the data when the component is mounted
  onMounted(() => {
    fetchDashboardData()
  })
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  