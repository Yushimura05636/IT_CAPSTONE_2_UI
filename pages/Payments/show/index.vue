<template>
    <NuxtLayout name="admin">
      <div class="p-8">
        <h1 class="text-2xl font-bold mb-4">Show Payment</h1>

        <div class="space-y-4">
          <div>
            <label for="customer_id" class="block mb-1">Customer ID:</label>
            <input
              type="number"
              id="customer_id"
              :value="paymentData.customer_id"
              class="border rounded px-4 py-2 w-full"
              readonly
            />
          </div>

          <div>
            <label for="prepared_at" class="block mb-1">Prepared At:</label>
            <input
              type="datetime-local"
              id="prepared_at"
              :value="paymentData.prepared_at"
              class="border rounded px-4 py-2 w-full"
              readonly
            />
          </div>

          <div>
            <label for="document_status_code" class="block mb-1">Document Status Code:</label>
            <input
              type="text"
              id="document_status_code"
              :value="paymentData.document_status_code"
              class="border rounded px-4 py-2 w-full"
              readonly
            />
          </div>

          <div>
            <label for="prepared_by_id" class="block mb-1">Prepared By ID:</label>
            <input
              type="number"
              id="prepared_by_id"
              :value="paymentData.prepared_by_id"
              class="border rounded px-4 py-2 w-full"
              readonly
            />
          </div>

          <div>
            <label for="amount_paid" class="block mb-1">Amount Paid:</label>
            <input
              type="number"
              id="amount_paid"
              :value="paymentData.amount_paid"
              class="border rounded px-4 py-2 w-full"
              readonly
            />
          </div>

          <div>
            <label for="notes" class="block mb-1">Notes:</label>
            <textarea
              id="notes"
              :value="paymentData.notes"
              class="border rounded px-4 py-2 w-full"
              readonly
            ></textarea>
          </div>

          <div class="flex space-x-4">
            <button type="button" @click="acceptPayment" class="bg-green-500 text-white px-4 py-2 rounded">Accept</button>
            <button type="button" @click="rejectPayment" class="bg-red-500 text-white px-4 py-2 rounded">Reject</button>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </template>

  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { toast } from 'vue3-toastify';
  import { paymentServices } from '~/models/Payments';
  import { apiService } from '~/routes/api/API';

  const route = useRoute();
  const router = useRouter();
  const paymentData = ref({
    id: null,
    customer_id: '',
    prepared_at: '',
    document_status_code: '',
    prepared_by_id: '',
    amount_paid: '',
    notes: '',
  });

  const state = {
    payment: null,
  }

  // Fetch the selected payment data when the component is mounted
  async function fetchPayment() {
    try {
      const response = await apiService.getPaymentByIdNoAuth({}, paymentServices.id);
      const payment = response.data;
      state.payment = response.data;
      paymentData.value = payment;
    } catch (error) {
      toast.error(`${error}`, { autoClose: 3000 });
    }
  }

  // Call fetchPayment when the component is mounted
  onMounted(() => {
    fetchPayment();
  });

  // Accept payment function
  async function acceptPayment() {
    try {
        debugger;
      await apiService.approvePayment({state}, paymentServices.id);
      toast.success('Payment accepted successfully!', { autoClose: 3000 });
      router.push('/payments');
    } catch (error) {
      toast.error(`Failed to accept payment: ${error}`, { autoClose: 3000 });
    }
  }

  // Reject payment function
  async function rejectPayment() {
    try {
      await apiService.updatePaymentData({ ...paymentData.value, status: 'rejected' });
      toast.success('Payment rejected successfully!', { autoClose: 3000 });
      router.push('/payments');
    } catch (error) {
      toast.error(`Failed to reject payment: ${error}`, { autoClose: 3000 });
    }
  }
  </script>

  <style scoped>
  body {
    font-family: 'Roboto', sans-serif;
  }
  </style>
