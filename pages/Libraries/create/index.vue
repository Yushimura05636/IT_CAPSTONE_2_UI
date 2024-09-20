<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
      <h1 class="text-2xl font-semibold mb-6 text-center">Create Form</h1>

      <form @submit.prevent="submitForm">

        <!-- Model Type Field -->
        <div class="mb-4">
          <label for="modeltype" class="block text-sm font-medium text-gray-700">Model Type</label>
          <input
            v-model="form.modeltype"
            type="text"
            id="modeltype"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Model Type"
          />
        </div>

        <!-- Description Field -->
        <div class="mb-4">
          <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            v-model="form.description"
            id="description"
            rows="4"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Description"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="mt-6">
          <button
            type="submit"
            class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { apiService } from '~/routes/api/API';
import { libraryService } from '~/models/Library';

const form = ref({
  id: '',
  modeltype: libraryService.description,
  description: ''
});

const successMessage = ref<string | null>(null);

// Function to handle form submission
const submitForm = () => {
  if (form.value.modeltype && form.value.description) {
    try
    {
      // Process form submission, e.g., send data to the backend API
      console.log('Form Data:', form.value);

      debugger;
      create();

      // Clear the form
      form.value.modeltype = '';
      form.value.description = '';
    }
    catch(error: any)
    {
      console.log(error);
    }
  } else {
    // Handle empty fields (optional)
    successMessage.value = 'Please fill in all the fields.';
  }
};

async function create()
{
  try {
          const params = {
              modeltype: form.value.modeltype.toLowerCase(),
              description: form.value.description,
          }
          const response = await apiService.create(params);
          if (response.data) {
              alert("login successfully!");
              navigateTo('./view');
          }
      } catch (error: any) {
          alert("error: " + error);
      }
}
</script>

<style scoped>
/* You can add custom styles here, or rely on TailwindCSS for design */
</style>
