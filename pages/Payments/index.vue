<template>
  <div class="p-8">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Payments</h1>
      <div class="flex space-x-2">
        <button @click="createPayment" class="bg-green-500 text-white px-4 py-2 rounded">Create</button>
        <button @click="updatePayment" class="bg-yellow-500 text-white px-4 py-2 rounded">Update</button>
        <button @click="deletePayment" class="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
      </div>
    </div>
    <div class="flex justify-center mb-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search payments"
        class="border rounded px-4 py-2 w-1/2"
      />
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead class="bg-gray-900 text-white">
          <tr>
            <th class="py-2 px-4">Select</th>
            <th class="py-2 px-4">Payment ID</th>
            <th class="py-2 px-4">Customer Name</th>
            <th class="py-2 px-4">Date Created</th>
            <th class="py-2 px-4">Date Prepared</th>
            <th class="py-2 px-4">Document Status</th>
            <th class="py-2 px-4">Prepared By</th>
            <th class="py-2 px-4">Amount Paid</th>
            <th class="py-2 px-4">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(payment, index) in filteredPayments" :key="index">
            <td class="text-center py-2">
              <input type="radio" name="select" v-model="selectedPayment" :value="payment.id">
            </td>
            <td class="py-2 px-4">{{ payment.data.id }}</td>
            <td class="py-2 px-4">{{ payment.data.customerName }}</td>
            <td class="py-2 px-4">{{ payment.data.dateCreated }}</td>
            <td class="py-2 px-4">{{ payment.data.datePrepared }}</td>
            <td class="py-2 px-4">{{ payment.data.documentStatus }}</td>
            <td class="py-2 px-4">{{ payment.data.preparedBy }}</td>
            <td class="py-2 px-4">{{ payment.data.amountPaid }}</td>
            <td class="py-2 px-4">{{ payment.data.notes }}</td>
          </tr>
          <tr v-if="filteredPayments.length === 0">
            <td colspan="9" class="text-center py-4 text-gray-500">No data found</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import { apiService } from '~/routes/api/API';

// Router instance
const router = useRouter();

// Payments data would typically be fetched from an API or passed as a prop
const payments = ref([]); // Assume this will be populated from an API or prop

// Reactive state for search and selected payment
const searchQuery = ref('');
const selectedPayment = ref<number | null>(null);

// Computed property to filter payments based on search query
const filteredPayments = computed(() => {
  if (!searchQuery.value) return payments.value;
  return payments.value.filter((payment) =>
    Object.values(payment).some(value =>
      String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  );
});

// Button functionalities
const createPayment = () => {
  router.push('/Payment_Table/CreatePayment');
};

// Redirect to the create payment page for updating payment
const updatePayment = () => {
  if (selectedPayment.value) {
    router.push('/Payment_Table/UpdatePayment');
  } else {
    alert('Please select a payment to update.');
  }
};

// Delete payment
const deletePayment = () => {
  if (selectedPayment.value) {
    const index = payments.value.findIndex(payment => payment.id === selectedPayment.value);
    if (index !== -1) {
      payments.value.splice(index, 1);
      selectedPayment.value = null;
      alert('Payment deleted successfully.');
    }
  } else {
    alert('Please select a payment to delete.');
  }
};

const fetchLoanSchedules = async () => {
  try {
    const response = await apiService.getPaymentScheduleNoAuth({});
    payments.value = response.data;
  } catch (error) {
    toast.error(`${error}`, {
        autoClose: 5000,
      });
  }
}

onMounted(() => {
  fetchLoanSchedules();
})

</script>

<style scoped>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
