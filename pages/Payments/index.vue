<template>
    <NuxtLayout name="admin">
      <div class="p-8">
        <!-- Title Section -->
        <div class="mb-4">
          <h1 class="text-2xl font-bold mb-2">Payments</h1>
        </div>

        <!-- Buttons and Search Field Section -->
        <div class="flex justify-between items-center mb-4">
          <div class="flex space-x-2">
            <button @click="createPayment" class="bg-green-500 text-white px-4 py-2 rounded">Create</button>
            <button @click="viewItem" class="bg-blue-500 text-white px-4 py-2 rounded">View</button>
            <button @click="updatePayment" class="bg-yellow-500 text-white px-4 py-2 rounded">Update</button>
          </div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search payments"
            class="border rounded px-4 py-2 w-1/2"
          />
        </div>

        <!-- Table Section -->
        <div class="overflow-x-auto">
          <Table
            class="w-full table-auto border-collapse"
            :columnHeaders="state.columnHeaders"
            :data="state.payment"
            :isLoading="state.isTableLoading"
            :sortData="state.sortData"
          >
            <tr v-for="(payments, index) in state.payment?.data" :key="index" class="px-4 py-2">
              <td class="py-2 border-b border-gray-300">
                <input
                  type="radio"
                  :value="payments.id"
                  v-model="selectedPaymentID"
                  class="cursor-pointer"
                />
              </td>
              <td class="px-4 py-2 border-b border-gray-300">
                <span>{{ payments.customer_id }}</span>
              </td>
              <td class="px-4 py-2 border-b border-gray-300">
                <span>{{ payments.prepared_at }}</span>
              </td>
              <td class="px-4 py-2 border-b border-gray-300">
                <span>{{ payments.document_status_code }}</span>
              </td>
              <td class="px-4 py-2 border-b border-gray-300">
                <span>{{ payments.prepared_by_id }}</span>
              </td>
              <td class="px-4 py-2 border-b border-gray-300">
                <span>{{ payments.amount_paid }}</span>
              </td>
              <td class="px-4 py-2 border-b border-gray-300">
                <span>{{ payments.notes }}</span>
              </td>
            </tr>
          </Table>
        </div>
      </div>
    </NuxtLayout>
  </template>

<script setup lang="ts">
    import { ref, computed } from 'vue';
    import { useRouter } from 'vue-router';
    import { toast } from 'vue3-toastify';
    import { apiService } from '~/routes/api/API';
    import { paymentServices } from '~/models/Payments'

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



const state = reactive({
        columnHeaders: [
            { name: 'Select' },
            { name: 'Customer ID' },
            { name: 'Prepared at' },
            { name: 'Document Status Code' },
            { name: 'Prepared By' },
            { name: 'Amount Paid' },
            { name: 'Notes' },
        ],
        error: null,
        isTableLoading: false,
        sortData: {
            sortField: 'id',
            sortOrder: 'descend',
        },
        payment: [],
        searchQuery: '',
    })

    let selectedPaymentID = ref(null); // Track selected library

    async function fetchPayment() {
        state.isTableLoading = true
        state.error = null
        try {
            const params = {}
            const response = await apiService.getPayment(params)
            state.payment = response
            console.log(state.payment);
        } catch (error: any) {
            toast.error(error.message, {
                autoClose: 5000,
            })
        }
        state.isTableLoading = false
    }
    onMounted(() => {
      fetchPayment()
    })

    async function updatePayment(){
        try {
            const response = await apiService.authPaymentUpdate({})
            if (selectedPaymentID.value) {

        let prepared_at = null;
        let document_status_code = null;
        let prepared_by_id = null;
        let amount_paid = null;
        let notes = null;

        // Iterate through the data using a for loop
        for (let i = 0; i < state.payment?.data.length; i++) {
            const payments = state.payment.data[i];

            // Check if the current library's id matches the selectedLibraryId
            if (payments.id == parseInt(selectedPaymentID.value)?.toString()) {

              prepared_at = payments.prepared_at
              document_status_code = payments.document_status_code
              prepared_by_id = payments.prepared_by_id
              amount_paid = payments.amount_paid
              notes  = payments.notes
            break; // Exit the loop once we find the selected library
            }
        }

        paymentServices.id = selectedPaymentID.value;
        paymentServices.prepared_at = prepared_at;
        paymentServices.document_status_code = document_status_code;
        paymentServices.prepared_by_id = prepared_by_id;
        paymentServices.amount_paid = amount_paid;
        paymentServices.notes = notes;

        console.log(paymentServices.id);
        console.log(paymentServices.prepared_at);
        console.log(paymentServices.document_status_code);
        console.log(paymentServices.prepared_by_id);
        console.log(paymentServices.amount_paid);
        console.log(paymentServices.notes);
        navigateTo('payments/update');
        }
        } catch (error) {
            toast.error(error.message, {
        autoClose: 5000,
    })
        }
}
function createPayment(){
    try {
        navigateTo(`/payments/create/`);
    } catch (error) {
        toast.error(`${error}`);
    }
}
</script>

<style scoped>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
