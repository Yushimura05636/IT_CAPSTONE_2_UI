<template>
    <div class="p-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Payment Line</h1>
        <div class="flex space-x-2">
          <button @click="createPaymentLine" class="bg-green-500 text-white px-4 py-2 rounded">Create</button>
          <button @click="updatePaymentLine" class="bg-blue-300 text-white px-4 py-2 rounded">Update</button>
          <button @click="deletePaymentLine" class="bg-red-300 text-white px-4 py-2 rounded">Delete</button>
        </div>
      </div>
      <div class="flex justify-center mb-4">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search payment lines"
          class="border rounded px-4 py-2 w-1/2"
        />
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="py-2 px-4">Select</th>
              <th class="py-2 px-4">Payment Line ID</th>
              <th class="py-2 px-4">Payment</th>
              <th class="py-2 px-4">Payment Schedule</th>
              <th class="py-2 px-4">Balance</th>
              <th class="py-2 px-4">Amount Paid</th>
              <th class="py-2 px-4">Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(line, index) in filteredPaymentLines" :key="index">
              <td class="text-center py-2">
                <input type="radio" name="select" v-model="selectedPaymentLine" :value="line.id">
              </td>
              <td class="py-2 px-4">{{ line.id }}</td>
              <td class="py-2 px-4">{{ line.payment }}</td>
              <td class="py-2 px-4">{{ line.paymentSchedule }}</td>
              <td class="py-2 px-4">{{ line.balance }}</td>
              <td class="py-2 px-4">{{ line.amountPaid }}</td>
              <td class="py-2 px-4">{{ line.remarks }}</td>
            </tr>
            <tr v-if="filteredPaymentLines.length === 0">
              <td colspan="7" class="text-center py-4">No data found</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  // Payment line data (fetch real data here or pass via props)
  const paymentLines = ref<any[]>([]); // Replace any[] with the proper type
  
  // Search functionality
  const searchQuery = ref('');
  const selectedPaymentLine = ref<number | null>(null);
  
  // Computed property to filter payment lines based on search query
  const filteredPaymentLines = computed(() => {
    if (!searchQuery.value) return paymentLines.value;
    return paymentLines.value.filter((line) =>
      Object.values(line).some((value) =>
        String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );
  });
  
  // Create payment line (add your create logic here)
  const createPaymentLine = () => {
    router.push('/paymentLine_Table/createPayLine'); // Change route or trigger modal
  };
  
  // Update payment line (add your update logic here)
  const updatePaymentLine = () => {
    if (selectedPaymentLine.value) {
      router.push(`/paymentLine_Table/updatePayLine/${selectedPaymentLine.value}`); // Redirect to update
    } else {
      alert('Please select a payment line to update.');
    }
  };
  
  // Delete payment line (add your delete logic here)
  const deletePaymentLine = () => {
    if (selectedPaymentLine.value) {
      const index = paymentLines.value.findIndex(
        (line) => line.id === selectedPaymentLine.value
      );
      if (index !== -1) {
        paymentLines.value.splice(index, 1); // Remove payment line from list
        selectedPaymentLine.value = null;
        alert('Payment line deleted successfully.');
      }
    } else {
      alert('Please select a payment line to delete.');
    }
  };
  </script>
  
  <style scoped>
  body {
    font-family: 'Roboto', sans-serif;
  }
  </style>
  