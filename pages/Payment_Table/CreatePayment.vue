<template>
    <div class="p-8">
      <h1 class="text-2xl font-bold mb-4">Add Payment</h1>
      <form @submit.prevent="addPayment" class="space-y-4">
        <div>
          <label class="block text-gray-700">Payment ID</label>
          <input v-model="payment.id" type="text" class="border rounded px-4 py-2 w-full" required>
        </div>
        <div>
          <label class="block text-gray-700">Customer Name</label>
          <input v-model="payment.customerName" type="text" class="border rounded px-4 py-2 w-full" required>
        </div>
        <div>
          <label class="block text-gray-700">Date Created</label>
          <input v-model="payment.dateCreated" type="date" class="border rounded px-4 py-2 w-full" required>
        </div>
        <div>
          <label class="block text-gray-700">Date Prepared</label>
          <input v-model="payment.datePrepared" type="date" class="border rounded px-4 py-2 w-full" required>
        </div>
        <div>
          <label class="block text-gray-700">Document Status</label>
          <select v-model="payment.documentStatus" class="border rounded px-4 py-2 w-full" required>
            <option value="" disabled>Select status</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
            <option value="In Review">In Review</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700">Prepared By</label>
          <input v-model="payment.preparedBy" type="text" class="border rounded px-4 py-2 w-full" required>
        </div>
        <div>
          <label class="block text-gray-700">Amount Paid</label>
          <input v-model="payment.amountPaid" type="number" class="border rounded px-4 py-2 w-full" required>
        </div>
        <div>
          <label class="block text-gray-700">Notes</label>
          <textarea v-model="payment.notes" class="border rounded px-4 py-2 w-full"></textarea>
        </div>
        <div class="flex space-x-2">
          <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">Add Payment</button>
          <button type="button" @click="cancelCreatePayment" class="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  // Router instance
  const router = useRouter();
  
  // Payment data
  const payment = ref({
    id: '',
    customerName: '',
    dateCreated: '',
    datePrepared: '',
    documentStatus: '', // Will be updated with the combo box
    preparedBy: '',
    amountPaid: 0,
    notes: ''
  });
  
  // Add payment and redirect to payment table
  const addPayment = () => {
    // Logic to save the payment goes here (e.g., API call or state management)
    console.log('Payment added:', payment.value);
  
    // After saving, navigate back to the payment table
    router.push('/Payment_Table/paymentTable');
  };
  
  // Cancel create payment and navigate back to payment table
  const cancelCreatePayment = () => {
    router.push('/Payment_Table/paymentTable');
  };
  </script>
  
  <style scoped>
  body {
    font-family: 'Roboto', sans-serif;
  }
  </style>
  