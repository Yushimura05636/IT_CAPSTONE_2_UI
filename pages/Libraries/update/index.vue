<template>
  <NuxtLayout name="admin">
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 class="text-2xl font-semibold mb-6 text-center">{{ (form.modeltype)?.toUpperCase() }} <br /> UPDATE FORM</h1>

        <form @submit.prevent="submitForm">

          <!-- Model Type Field -->
          <div class="mb-4">
            <label for="modeltype" class="block text-sm font-medium text-gray-700">Model Type</label>
            <input
              disabled
              v-model="form.modeltype"
              type="text"
              id="modeltype"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Model Type"
            />
          </div>

          <div class="mb-4">
            <label for="olddescription" class="block text-sm font-medium text-gray-700">Old Description</label>
            <input
              disabled
              v-model="form.olddescription"
              type="text"
              id="olddescription"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Old Description"
            />
          </div>

          <!-- Description Field -->
          <div class="mb-4">
            <label for="description" class="block text-sm font-medium text-gray-700">New Description</label>
            <textarea
              v-model="form.description"
              id="description"
              rows="4"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Description"
            ></textarea>
          </div>

          <!-- Submit and Cancel Buttons -->
          <div class="mt-6 flex justify-between">
            <button
              type="button"
              @click="cancel"
              class="w-full bg-black text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="w-full bg-black text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>

        <!-- Success Message -->
        <div v-if="successMessage" class="mt-4 p-4 text-green-700 bg-green-100 rounded-md">
          {{ successMessage }}
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import { libraryService } from '~/models/Library';
import { PermissionService } from '~/models/Permission';
import { apiService } from '~/routes/api/API';

const form = ref({
  id: libraryService.id,
  modeltype: libraryService.description,
  description: '',
  olddescription: libraryService.oldText,
});

const successMessage = ref<string | null>(null);

// Function to handle form submission
const submitForm = () => {
  if (form.value.id && form.value.modeltype && form.value.description) {
    // Process form submission, e.g., send data to the backend API
    console.log('Form Data:', form.value);

    update(); // Call the renamed update function

    // Clear the form
    form.value.id = '';
    form.value.modeltype = '';
    form.value.description = '';
  } else {
    // Handle empty fields (optional)
    successMessage.value = 'Please fill in all the fields.';
  }
};

async function update() { // Renamed from create to update
  try {
    const params = {
      id: form.value.id,
      modeltype: form.value.modeltype,
      description: form.value.description,
    };
    const response = await apiService.update(params, parseInt(form.value.id));
    if (response.data) {

      toast.success("Edit successfully!", {
          autoClose: 2000,
      });
      // Introduce a delay before navigating
      setTimeout(() => {
          navigateTo('/libraries');
      }, 2000);
    }
  } catch (error: any) {
    toast.error("Error: " + error);
  }
}

// Function to handle cancel action
const cancel = () => {
  // Navigate to the libraries page or perform any other action
  navigateTo("/libraries");
};
</script>

<style scoped>
/* You can add custom styles here, or rely on TailwindCSS for design */
</style>
