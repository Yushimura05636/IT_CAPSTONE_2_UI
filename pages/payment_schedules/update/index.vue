<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-4">Payment Form</h2>
    <form @submit.prevent="submitPayment">
    <div class="mb-4">
    <label for="loan-select" class="block text-sm font-medium text-gray-700">Loan Application No</label>
    <select
      id="loan-select"
      v-model="selectedLoan.value"
      class="mt-1 block w-full border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
    >
      <option value="" disabled>Select a loan application</option>
      <option v-for="loanApp in loanApps.value" :key="loanApp.Loan_Application.id" :value="getLoanData(loanApp)">
        {{ loanApp.Loan_Application.loan_application_no }}
      </option>
    </select>
  </div>
      <div class="mb-4">
        <label for="customer_fname" class="block text-sm font-medium text-gray-700">Customer First Name</label>
        <input
        readonly
          v-model="personalities.value.family_name"
          type="text"
          id="customer_fname"
          required
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          placeholder="Enter Loan Application ID"
        />
      </div>

      <div class="mb-4">
        <label for="customer_lname" class="block text-sm font-medium text-gray-700">Customer Last Name</label>
        <input
        readonly
          v-model="personalities.value.first_name"
          type="text"
          id="customer_lname"
          required
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          placeholder="Enter Loan Application ID"
        />
      </div>

      <div class="mb-4">
        <label for="customer_mname" class="block text-sm font-medium text-gray-700">Customer Middle Name</label>
        <input
        readonly
          v-model="personalities.value.middle_name"
          type="text"
          id="customer_mname"
          required
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          placeholder="Enter Loan Application ID"
        />
      </div>

      <div class="mb-4">
        <label for="loan_application_id" class="block text-sm font-medium text-gray-700">Amount Due</label>
        <input
        readonly
          v-model="schedules.value.amount_due"
          type="number"
          id="loan_application_id"
          required
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          placeholder="Enter Loan Application ID"
        />
      </div>

      <div class="mb-4">
        <label for="amount_interest" class="block text-sm font-medium text-gray-700">Amount Interest</label>
        <input
        readonly
          v-model="schedules.value.amount_interest"
          type="number"
          id="amount_interest"
          required
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          placeholder="Enter Amount Paid"
        />
      </div>

      <div class="mb-4">
        <label for="amount_paid" class="block text-sm font-medium text-gray-700">Amount Paid</label>
        <input
          v-model="schedules.value.amount_paid"
          type="number"
          id="amount_paid"
          required
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          placeholder="Enter Amount Paid"
        />
      </div>

      <div class="mb-4">
        <label for="loan_application_id" class="block text-sm font-medium text-gray-700">Amount Due Date</label>
        <input
          readonly
          v-model="schedules.value.datetime_due"
          type="text"
          id="loan_application_id"
          required
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          placeholder="Enter Loan Application ID"
        />
      </div>

      <div class="mb-4">
        <label for="status" class="block text-sm font-medium text-gray-700">Notes</label>
        <input disabled
          v-model="schedules.value.payment_status_code"
          id="status"
          rows="3"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          placeholder="UNPAID"
        >
      </div>

      <div class="mb-4">
        <label for="notes" class="block text-sm font-medium text-gray-700">Notes</label>
        <textarea
          v-model="schedules.value.remarks"
          id="notes"
          rows="3"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          placeholder="Enter any notes..."
        ></textarea>
      </div>

      <button type="submit" class="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600">
        Submit Payment
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { paymentScheduleService } from '~/models/PaymentSchedules';
import { apiService } from '~/routes/api/API';

const customers = reactive({
  value: {}
})

const personalities = reactive({
  value: {}
})

const schedules = reactive({
  value: {}
})

const loanApps = reactive({
  value: {}
})

const comboboxLoan = reactive({
  value: {}
})

const state = {
  selectedCustomerValue: 0,
}

const selectedLoan = {
  value: null
}

const payment = ref({
  customer_id: null,
  loan_application_id: null, // Include loan application ID
  amount_paid: null,
  notes: '',
  payment_schedule_id: null,
});


// Call fetchCustomers and fetchLoans when the component is mounted
onMounted(() => {
  fetchCustomers();
  fetchSchedules();
  fetchLoanApp();
});

const fetchLoanApp = async () => {
  try {

    if(paymentScheduleService.customer_id == null)
    {
      navigateTo('/payment_schedules/')
    }
    const response = await apiService.getLoanApplicationNoAUTH({}); // Replace with your actual API endpoint
    // Assuming your API returns a list of customers
    loanApps.value = response.data
    console.log('loanApps: ', loanApps.value[0].Loan_Application.loan_application_no);
  } catch (error) {
    console.error('Error fetching customers:', error);
    // Handle error (e.g., show an error message)
  }
}

const fetchCustomers = async () => {
  try {

    if(paymentScheduleService.customer_id == null)
    {
      navigateTo('/payment_schedules/')
    }
    const response = await apiService.getCustomerByIdNoAuth({}, paymentScheduleService.customer_id); // Replace with your actual API endpoint
    // Assuming your API returns a list of customers
    customers.value = response.customer
    personalities.value = response.personality
    console.log('Fetched customers: ', customers)
    console.log('Fetched personalities: ', personalities)
  } catch (error) {
    console.error('Error fetching customers:', error);
    // Handle error (e.g., show an error message)
  }
};

// Fetch loan applications from the API
const fetchSchedules = async () => {
  try {
    const response = await apiService.getPaymentScheduleById({}, paymentScheduleService._id);
    schedules.value = response.data;
    console.log('schedules: ', response)
  } catch (error) {
    console.error('Error fetching loans:', error);
    // Handle error (e.g., show an error message)
  }
};

const submitPayment = async () => {
  try {

    if(schedules.value.payment_status_code == 'PAID')
    {
        alert('This schedule is already paid!');
    }

    //amount paid
    const customer = customers.value
    const personality = personalities.value
    const schedule = schedules.value
    const loan = comboboxLoan.value
    const json = {
      customer,
      personality,
      schedule,
      loan,
    }
    const response = await apiService.createPayment(json); // Pass payment object
    alert('success!');
    navigateTo('/payment_schedules')
    // Handle success (e.g., show a success message, reset form, etc.)
  } catch (error) {
    console.error('Error submitting payment:', error);
    // Handle error (e.g., show an error message)
  }
};

const getLoanData = async (loan: any) => {
  comboboxLoan.value = loan;

  return loan.Loan_Application.id
}
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
