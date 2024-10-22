<template>
    <NuxtLayout name="admin">
      <main>
        <div class="p-8">
          <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl font-bold">Payment Schedule</h1>
            <div class="flex space-x-2">
              <button @click="createPaySched" class="bg-green-500 text-white px-4 py-2 rounded">Create</button>
              <button @click="updatePaySched" :disabled="!selectedPaySched" class="bg-blue-300 text-white px-4 py-2 rounded">Update</button>
              <button @click="deletePaySched" :disabled="!selectedPaySched" class="bg-red-300 text-white px-4 py-2 rounded">Delete</button>
            </div>
          </div>
  
          <div class="flex justify-center mb-2">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search payment schedule"
              class="border rounded px-4 py-2 w-1/2"
            />
          </div>
  
          <div class="flex justify-end space-x-2 mb-4">
            <button @click="printSchedule" class="bg-yellow-500 text-white px-4 py-2 rounded flex items-center" :disabled="!selectedPaySched">
              <PrinterIcon class="h-5 w-5 mr-2" aria-hidden="true" /> Print
            </button>
            <button @click="rejectPaySched" :disabled="!selectedPaySched" class="bg-red-300 text-white px-4 py-2 rounded">Reject</button>
            <button @click="approvePaySched" :disabled="!selectedPaySched" class="bg-blue-500 text-white px-4 py-2 rounded">Approve</button>
          </div>
  
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white">
              <thead class="bg-gray-800 text-white">
                <tr>
                  <th class="py-2 px-4">Select</th>
                  <th class="py-2 px-4">Payment Schedule ID</th>
                  <th class="py-2 px-4">Date Created</th>
                  <th class="py-2 px-4">Customer</th>
                  <th class="py-2 px-4">Loan Release</th>
                  <th class="py-2 px-4">Date Due</th>
                  <th class="py-2 px-4">Amount Due</th>
                  <th class="py-2 px-4">Amount Interest</th>
                  <th class="py-2 px-4">Amount Paid</th>
                  <th class="py-2 px-4">Payment Status</th>
                  <th class="py-2 px-4">Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(line, index) in filteredPaySched" :key="index">
                  <td class="text-center py-2">
                    <input type="radio" name="select" v-model="selectedPaySched" :value="line.PaymentScheduleID">
                  </td>
                  <td class="py-2 px-4">{{ line.PaymentScheduleID }}</td>
                  <td class="py-2 px-4">{{ line.DateCreated }}</td>
                  <td class="py-2 px-4">{{ line.Customer }}</td>
                  <td class="py-2 px-4">{{ line.LoanRelease }}</td>
                  <td class="py-2 px-4">{{ line.DateDue }}</td>
                  <td class="py-2 px-4">{{ line.AmountDue }}</td>
                  <td class="py-2 px-4">{{ line.AmountInterest }}</td>
                  <td class="py-2 px-4">{{ line.AmountPaid }}</td>
                  <td class="py-2 px-4">{{ line.PaymentStatus }}</td>
                  <td class="py-2 px-4">{{ line.Remarks }}</td>
                </tr>
                <tr v-if="filteredPaySched.length === 0">
                  <td colspan="7" class="text-center py-4">No data found</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <!-- Hidden print section -->
          <div v-if="selectedPaySched" ref="printArea" style="display: none;">
            <h2>Payment Schedule Details</h2>
            <p><strong>Payment Schedule ID:</strong> {{ selectedPayment.PaymentScheduleID }}</p>
            <p><strong>Date Created:</strong> {{ selectedPayment.DateCreated }}</p>
            <p><strong>Customer:</strong> {{ selectedPayment.Customer }}</p>
            <p><strong>Loan Release:</strong> {{ selectedPayment.LoanRelease }}</p>
            <p><strong>Date Due:</strong> {{ selectedPayment.DateDue }}</p>
            <p><strong>Amount Due:</strong> {{ selectedPayment.AmountDue }}</p>
            <p><strong>Amount Interest:</strong> {{ selectedPayment.AmountInterest }}</p>
            <p><strong>Amount Paid:</strong> {{ selectedPayment.AmountPaid }}</p>
            <p><strong>Payment Status:</strong> {{ selectedPayment.PaymentStatus }}</p>
            <p><strong>Remarks:</strong> {{ selectedPayment.Remarks }}</p>
          </div>
        </div>
      </main>
    </NuxtLayout>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { PrinterIcon } from '@heroicons/vue/24/outline'; // Importing the printer icon
//   import { useToast } from 'vue-toastification'; // Import toast notifications
  
  // Interfaces for the payment schedule data
  interface PaymentSchedule {
    PaymentScheduleID: string;
    DateCreated: string;
    Customer: string;
    LoanRelease: string;
    DateDue: string;
    AmountDue: number;
    AmountInterest: number;
    AmountPaid: number;
    PaymentStatus: string;
    Remarks: string;
  }
  
  const router = useRouter();
//   const toast = useToast();
  
  // PaySched data (fetch real data here or pass via props)
  const paySched = ref<PaymentSchedule[]>([]);
  
  // Search functionality
  const searchQuery = ref('');
  const selectedPaySched = ref<string | null>(null); // Keep track of selected Payment Schedule ID
  
  // Computed property to filter payment sched based on search query
  const filteredPaySched = computed(() => {
    if (!searchQuery.value) return paySched.value;
    return paySched.value.filter((line) =>
      Object.values(line).some((value) =>
        String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );
  });
  
  // Computed property to get selected payment details
  const selectedPayment = computed(() => {
    return paySched.value.find(line => line.PaymentScheduleID === selectedPaySched.value) || {};
  });
  
  // Create payment sched (add your create logic here)
  const createPaySched = () => {
    router.push('/PaymentSchedule/create'); // Change route or trigger modal
  };
  
  // Update payment sched (add your update logic here)
  const updatePaySched = () => {
    if (selectedPaySched.value) {
      router.push(`/PaymentSchedule/update/${selectedPaySched.value}`); // Redirect to update
    } else {
      //toast.error('Please select a payment schedule to update.');
    }
  };
  
  // Delete payment sched (add your delete logic here)
  const deletePaySched = () => {
    if (selectedPaySched.value) {
      const index = paySched.value.findIndex(line => line.PaymentScheduleID === selectedPaySched.value);
      if (index !== -1) {
        paySched.value.splice(index, 1); // Remove payment sched from list
        selectedPaySched.value = null;
       // toast.success('Payment Schedule deleted successfully.');
      }
    } else {
     // toast.error('Please select a payment schedule to delete.');
    }
  };
  
  // Reject payment sched
  const rejectPaySched = () => {
    if (selectedPaySched.value) {
    //   toast.error(`Payment Schedule with ID ${selectedPaySched.value} has been rejected.`);
    } else {
     // toast.error('Please select a payment schedule to reject.');
    }
  };
  
  // Approve payment sched
  const approvePaySched = () => {
    if (selectedPaySched.value) {
      //toast.success(`Payment Schedule with ID ${selectedPaySched.value} has been approved.`);
    } else {
     // toast.error('Please select a payment schedule to approve.');
    }
  };
  
  // Print function
  const printSchedule = () => {
    const printArea = document.querySelector('div[ref="printArea"]');
    if (!printArea) {
     // toast.error('No content available for printing.');
      return;
    }
    const printContents = printArea.innerHTML;
    const printWindow = window.open('', '', 'width=800,height=600');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head><title>Print Payment Schedule</title></head>
          <body>${printContents}</body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
      printWindow.close();
    }
  };
  </script>
  
  <style scoped>
  body {
    font-family: 'Roboto', sans-serif;
  }
  </style>
  