<template>
  <NuxtLayout name="admin">
    <div class="p-8">
      <h1 class="text-2xl font-bold mb-4">Update Payments</h1>
      <form   @submit.prevent="submitForm"  class="space-y-4">
        <div>
          <label class="block text-gray-700">Prepared at</label>
          <input v-model="form.prepared_at" type="date" class="border rounded px-4 py-2 w-full">
        </div>
        <div>
          <label class="block text-gray-700">Document Status </label>
          <input v-model="form.document_status_code" type="text" class="border rounded px-4 py-2 w-full">
        </div>
        <div>
          <label class="block text-gray-700">Prepared By</label>
          <input v-model="form.prepared_by_id" type="text" class="border rounded px-4 py-2 w-full">
        </div>
        <div>
          <label class="block text-gray-700">Amount Paid</label>
          <input v-model="form.amount_paid" type="number" class="border rounded px-4 py-2 w-full">
        </div>
        <div>
          <label class="block text-gray-700">Notes</label>
          <input v-model="form.notes" type="text" class="border rounded px-4 py-2 w-full">
        </div>
        <div class="flex space-x-2">
          <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">Update Payment</button>
          <button type="button" @click="cancel" class="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
        </div>
      </form>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

    import { ref } from 'vue';
    import { apiService } from '~/routes/api/API'
    import { paymentServices } from '~/models/Payments'




    const form = ref({
    id: paymentServices.id,
    prepared_at: paymentServices.prepared_at,
    document_status_code: paymentServices.document_status_code,
    prepared_by_id: paymentServices.prepared_by_id,
    amount_paid: paymentServices.amount_paid,
    notes: paymentServices.notes,
    });

    const successMessage = ref<string | null>(null);

    // Function to handle form submission
    const submitForm = () => {
        if (form.value.notes && form.value.id) {
            console.log('Form Data:', form.value);
            create();

            form.value.id = '';
            form.value.notes = '';
    } else {
        // Handle empty fields (optional)
        successMessage.value = 'Please fill in all the fields.';
    }
    };

    async function create() {
    try {
        const params = {
        id: form.value.id,
        prepared_at: form.value.prepared_at,
        document_status_code: form.value.document_status_code,
        prepared_by_id: form.value.prepared_by_id,
        amount_paid: form.value.amount_paid,
        notes: form.value.notes,
        };

        const response = await apiService.updatePayment(params, parseInt(form.value.id));
        if (response.data) {
            toast.success("Payment Updated successfully!", {
                autoClose: 2000,
                });
                // Introduce a delay before navigating
                setTimeout(() => {
                    navigateTo('/Payments');
                }, 2000);
                // Redirect to the customer list page
        }
    } catch (error: any) {
        toast.error("Error: " + error);
    }
    }

    // Function to handle cancel action
    const cancel = () => {
    // Navigate to the libraries page or perform any other action
    navigateTo("/Payments");
    };

onMounted(async () => {
  //Promise for authentication
  const state_response = ref('');
  try {
    const response = await apiService.authPaymentUpdate({})
    state_response.value = response.data;
  } catch (error) {
    toast.error(`${error}`, { autoClose: 3000, })
  }
  finally
  {
    if(state_response.value == null || state_response.value.length <= 0)
    {
      navigateTo(`/payments`)
    }
  }
})
</script>

  <style scoped>
  body {
    font-family: 'Roboto', sans-serif;
  }
  </style>
