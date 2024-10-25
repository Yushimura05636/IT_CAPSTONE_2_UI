<template>
  <NuxtLayout name="admin">
    <div class="p-4 lg:p-8">
      <!-- Header with title and action buttons -->
      <div class="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-2 sm:space-y-0">
        <h1 class="text-xl lg:text-2xl font-bold">Schedules</h1>
        <div class="flex space-x-2">
          <button @click="updatePayment" class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
            Pay
          </button>
          <button @click="deletePayment" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
            Delete
          </button>
        </div>
      </div>

      <!-- Search Bar -->
      <div class="flex justify-center mb-4">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search payments"
          class="border border-gray-300 rounded px-4 py-2 w-full sm:w-1/2 focus:outline-none focus:ring focus:border-blue-500 transition"
        />
      </div>

      <!-- Schedules Table -->
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white text-sm">
          <thead class="bg-gray-900 text-white">
            <tr>
              <th class="py-2 px-4">Select</th>
              <th class="py-2 px-4">Loan Application No</th>
              <th class="py-2 px-4">Family Name</th>
              <th class="py-2 px-4">First Name</th>
              <th class="py-2 px-4">Middle Name</th>
              <th class="py-2 px-4">DateTime Due</th>
              <th class="py-2 px-4">Amount Due</th>
              <th class="py-2 px-4">Amount Interest</th>
              <th class="py-2 px-4">Amount Paid</th>
              <th class="py-2 px-4">Amount Balance</th>
              <th class="py-2 px-4">Payment Status</th>
              <th class="py-2 px-4">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(payment, index) in filteredPayments" :key="index" class="hover:bg-gray-50 transition">
              <td class="text-center py-2 px-4">
                <input type="radio" name="select" v-model="selectedPayment" :value="payment.id" @change="getSelectedValue(payment)">
              </td>
              <td class="py-2 px-4">{{ payment.loan_application_no }}</td>
              <td class="py-2 px-4">{{ payment.family_name }}</td>
              <td class="py-2 px-4">{{ payment.first_name }}</td>
              <td class="py-2 px-4">{{ payment.middle_name }}</td>
              <td class="py-2 px-4">{{ payment.datetime_due }}</td>
              <td class="py-2 px-4">{{ payment.amount_due }}</td>
              <td class="py-2 px-4">{{ payment.amount_interest }}</td>
              <td class="py-2 px-4">{{ payment.amount_paid }}</td>
              <td class="py-2 px-4">{{ payment.balance }}</td>
              <td class="py-2 px-4">{{ payment.payment_status_code }}</td>
              <td class="py-2 px-4">{{ payment.notes }}</td>
            </tr>
            <tr v-if="filteredPayments.length === 0">
              <td colspan="12" class="text-center py-4 text-gray-500">No data found</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Payments Table -->
    <div class="p-4 lg:p-8">
      <h1 class="text-xl lg:text-2xl font-bold mb-4">Payments</h1>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white text-sm">
          <thead class="bg-gray-900 text-white">
            <tr>
              <th class="py-2 px-4">Select</th>
              <th class="py-2 px-4">Family Name</th>
              <th class="py-2 px-4">First Name</th>
              <th class="py-2 px-4">Middle Name</th>
              <th class="py-2 px-4">Prepared At</th>
              <th class="py-2 px-4">Status Code</th>
              <th class="py-2 px-4">Prepared By</th>
              <th class="py-2 px-4">Amount Paid</th>
              <th class="py-2 px-4">Notes</th>
              <th class="py-2 px-4">Created At</th>
              <th class="py-2 px-4">Updated At</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(payment, index) in viewpayments" :key="index" class="hover:bg-gray-50 transition">
              <td class="text-center py-2 px-4">
                <input type="radio" name="selectPayment" v-model="selectedPayment" :value="payment.id">
              </td>
              <td class="py-2 px-4">{{ payment.family_name }}</td>
              <td class="py-2 px-4">{{ payment.first_name }}</td>
              <td class="py-2 px-4">{{ payment.middle_name }}</td>
              <td class="py-2 px-4">{{ payment.prepared_at }}</td>
              <td class="py-2 px-4">{{ payment.document_status_code }}</td>
              <td class="py-2 px-4">{{ payment.prepared_by_id }}</td>
              <td class="py-2 px-4">{{ payment.amount_paid }}</td>
              <td class="py-2 px-4">{{ payment.notes }}</td>
              <td class="py-2 px-4">{{ payment.created_at }}</td>
              <td class="py-2 px-4">{{ payment.updated_at }}</td>
            </tr>
            <tr v-if="viewpayments.length === 0">
              <td colspan="11" class="text-center py-4 text-gray-500">No data found</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Payment Lines Table -->
    <div class="p-4 lg:p-8">
      <h1 class="text-xl lg:text-2xl font-bold mb-4">Payment Lines</h1>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white text-sm">
          <thead class="bg-gray-900 text-white">
            <tr>
              <th class="py-2 px-4">Select</th>
              <th class="py-2 px-4">Balance</th>
              <th class="py-2 px-4">Amount Paid</th>
              <th class="py-2 px-4">Remarks</th>
              <th class="py-2 px-4">Created At</th>
              <th class="py-2 px-4">Updated At</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(paymentLine, index) in viewpaymentLines" :key="index" class="hover:bg-gray-50 transition">
              <td class="text-center py-2 px-4">
                <input type="radio" name="selectPaymentLine" v-model="selectedPaymentLine" :value="paymentLine.id">
              </td>
              <td class="py-2 px-4">{{ paymentLine.balance }}</td>
              <td class="py-2 px-4">{{ paymentLine.amount_paid }}</td>
              <td class="py-2 px-4">{{ paymentLine.remakrs }}</td>
              <td class="py-2 px-4">{{ paymentLine.created_at }}</td>
              <td class="py-2 px-4">{{ paymentLine.updated_at }}</td>
            </tr>
            <tr v-if="viewpaymentLines.length === 0">
              <td colspan="6" class="text-center py-4 text-gray-500">No data found</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { loanApplicationService } from '~/models/LoanApplication';
import { paymentScheduleService } from '~/models/PaymentSchedules';
import { apiService } from '~/routes/api/API';

const router = useRouter();

const payments = ref([]);
const searchQuery = ref('');
const selectedPayment = ref<number | null>(null);
const viewpayments = ref('');
const viewpaymentLines = ref('');
const filteredPayments = computed(() => {
  if (!searchQuery.value) return payments.value;
  return payments.value.filter(payment =>
    Object.values(payment).some(value =>
      String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  );
});

onMounted(() => {
  fetchLoanSchedules();
  fetchPayment();
  fetchPaymentLine();
});

// Fetch data and define button functionalities...
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
