<template>
    <NuxtLayout name="admin">
        <div>
      <Head>
        <Title>Libraries</Title>
      </Head>
  
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="m-6 text-base font-bold leading-6 text-gray-900">Libraries</h1>
        </div>
      </div>
  
      <!-- Action Buttons on the left -->
      <div class="flex justify-between items-center mb-4">
        <div class="flex space-x-4">
          <button
            type="button"
            @click="createLibrary"
            class="rounded bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500"
          >
            Create
          </button>
          <button
            type="button"
            @click="updateLibrary"
            :disabled="!selectedLibraryId"
            class="rounded bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 disabled:opacity-50"
          >
            Update
          </button>
          <button
            type="button"
            @click="deleteLibrary"
            :disabled="!selectedLibraryId"
            class="rounded bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 disabled:opacity-50"
          >
            Delete
          </button>
        </div>
  
        <!-- Combobox on the right -->
        <div class="flex-none">
          <label for="modelType" class="block text-sm font-medium text-gray-700">Select Model Type:</label>
          
          <select
            id="modelType"
            v-model="state.modeltype"
            @change="fetchLibraries"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            <option v-for="type in modelTypes" :key="type.value" :value="type.value">{{ type.label }}</option>
          </select>

        </div>
      </div>
  
      <div class="mt-2">
        <Alert type="danger" :text="state.error?.message" v-if="state.error" />
        
        <!-- Scrollable Table Container -->
        <div class="overflow-x-auto">
          <div class="min-w-full max-h-96 overflow-y-auto"> <!-- Add max-h for vertical scroll if needed -->
            <Table
              class="w-full"
              :columnHeaders="state.columnHeaders"
              :data="state.libraries"
              :isLoading="state.isTableLoading"
              :sortData="state.sortData"
              @sort="sort"
            >
              <template #body
                v-if="!(state.isTableLoading || (state.datas?.data && state.libraries?.data.length === 0))"
              >
                <tr v-for="(lib, index) in state.datas?.data" :key="index">
                  <td class="py-2 px-4 border-b border-gray-300 text-center">
                    <input
                      type="radio"
                      :value="lib.id"
                      v-model="selectedLibraryId"
                      class="cursor-pointer"
                    />
                  </td>
                  <td class="py-2 px-4 border-b border-gray-300 text-center">
                    <span>{{ lib.description }}</span>
                  </td>
                </tr>
              </template>
            </Table>
          </div>
        </div>
  
        <Pagination :data="state.datas" @previous="previous" @next="next" />
        <div class="ml-10 mb-5"></div>
      </div>
        </div>
    </NuxtLayout>
  </template>
  
  <script setup lang="ts">
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

  import { ref, reactive, onMounted } from 'vue';
  import { libraryService } from '~/models/Library';
import { PermissionService } from '~/models/Permission';
  import { apiService } from '~/routes/api/API';
  
  const state = reactive({
    columnHeaders: [
      { name: 'Select' },
      { name: 'Description' },
    ],
    libraryData: {},
    error: null,
    isTableLoading: false,
    sortData: {
      sortField: 'id',
      sortOrder: 'descend',
    },
    datas: [],
    searchQuery: '',
    modeltype: 'customer_group',
  });
  
  const modelTypes = [
  { value: 'barangay', label: 'Barangay' },
  { value: 'branch', label: 'Branch' },
  { value: 'city', label: 'City' },
  { value: 'civil_status', label: 'Civil Status' },
  { value: 'gender_map', label: 'Gender Map' },
  { value: 'country', label: 'Country' },
  { value: 'province', label: 'Province' },
  { value: 'credit_status', label: 'Credit Status' },
  { value: 'personality_status_map', label: 'Personality Status Map' },
  { value: 'user_account_status', label: 'User Account Status' },
  { value: 'document_map', label: 'Document Map' },
  { value: 'document_permission_map', label: 'Document Permission Map' },
  { value: 'name_type', label: 'Name Type' },
  { value: 'customer_group', label: 'Customer Group' },
  { value: 'document_status_code', label: 'Document Status Code' },
];

  let selectedLibraryId = ref(null); // Track selected library
  
  onMounted(() => {
    fetchLibraries();
  });
  
 async function createLibrary() {
    try {
      const response = await apiService.authLibrariesCreate({})
      navigateTo('libraries/create');
    } catch (error) {
      toast.error(error.message, {
      autoClose: 5000,
    })
    }
  }
  
  async function updateLibrary() {
    try {
      const response = await apiService.authLibrariesUpdate({});
      if (selectedLibraryId.value) {
        let selectedDescription = null;
  
        // Iterate through the data using a for loop
        for (let i = 0; i < state.datas?.data.length; i++) {
          const library = state.datas.data[i];
  
          // Check if the current library's id matches the selectedLibraryId
          if (library.id == parseInt(selectedLibraryId.value)?.toString()) {
            selectedDescription = library.description;
            break; // Exit the loop once we find the selected library
          }
        }
  
        libraryService.id = selectedLibraryId.value;
        libraryService.description = state.modeltype;
        libraryService.oldText = selectedDescription;
        navigateTo('libraries/update');
      }
    } catch (error) {
      toast.error(error.message, {
      autoClose: 5000,
    })
    }
  }
  
  function deleteLibrary() {
    if (selectedLibraryId.value) {
      // Add logic for deletion
      console.log('Delete library with id:', selectedLibraryId.value);
    }
  }
  
  async function fetchLibraries() {
    state.isTableLoading = true;
    state.error = null;
    try {
      const params = {};
      const response = await apiService.get(params, state.modeltype);
      state.datas = response;
    } catch (error) {
      state.error = error;
    }
    state.isTableLoading = false;
  }
  </script>
  