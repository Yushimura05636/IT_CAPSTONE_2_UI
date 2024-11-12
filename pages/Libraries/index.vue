<template>
    <NuxtLayout name="admin">
      <div>
        <Head>
          <Title>Libraries</Title>
        </Head>

        <!-- Header Section -->
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="m-6 text-lg font-bold leading-6 text-gray-900 text-center sm:text-left">Libraries</h1>
          </div>
        </div>

        <!-- Action Buttons and Search/Combobox -->
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
          <!-- Buttons Container -->
          <div class="flex space-x-4 justify-center sm:justify-start mb-4 sm:mb-0">
            <button
              type="button"
              @click="createLibrary"
              class="rounded bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 transition"
            >
              Create
            </button>
            <button
              type="button"
              @click="updateLibrary"
              :disabled="!selectedLibraryId"
              class="rounded bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 disabled:opacity-50 transition"
            >
              Update
            </button>
            <button
              type="button"
              @click="deleteLibrary"
              :disabled="!selectedLibraryId"
              class="rounded bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 disabled:opacity-50 transition"
            >
              Delete
            </button>
          </div>

          <!-- Search Field (left side) -->
          <div class="w-full sm:w-1/3 mb-4 sm:mb-0 mx-10">
            <label for="searchQuery" class="block text-sm font-medium text-gray-700">Search:</label>
            <input
              id="searchQuery"
              v-model="state.searchQuery"
              @input="filterLibraries"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Search by description"
            />
          </div>

          <!-- Combobox Container (right side) -->
          <div class="w-full sm:w-1/3 sm:ml-auto">
            <label for="modelType" class="block text-sm font-medium text-gray-700">Select Model Type:</label>
            <select
              id="modelType"
              v-model="state.modeltype"
              @change="fetchLibraries"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option v-for="type in modelTypes" :key="type.value" :value="type.value">{{ type.label }}</option>
            </select>
          </div>
        </div>

        <!-- Error Alert -->
        <div class="mt-2">
          <Alert type="danger" :text="state.error?.message" v-if="state.error" />

          <!-- Responsive Table -->
          <div class="overflow-x-auto">
            <div class="min-w-full max-h-96 overflow-y-auto">
              <Table
                class="w-full"
                :columnHeaders="state.columnHeaders"
                :data="state.filteredLibraries"
                :isLoading="state.isTableLoading"
                :sortData="state.sortData"
                @sort="sort"
              >
                <template #body>
                  <tr v-for="(lib, index) in state.filteredLibraries" :key="index">
                    <td class="py-2 px-4 border-b border-gray-300 text-center">
                      <input
                        type="radio"
                        :value="lib.id"
                        v-model="selectedLibraryId"
                        class="cursor-pointer"
                      />
                    </td>
                    <td class="py-2 px-4 border-b border-gray-300 text-center space-x-10">
  <span>{{ lib.description }}</span>
  <span v-if="state.modeltype == 'customer_group'">{{ lib.last_name }} {{ lib.first_name }} {{ lib.middle_name }}</span>
</td>

                  </tr>
                </template>
              </Table>
            </div>
          </div>

          <!-- Pagination -->
          <Pagination :data="state.datas" @previous="previous" @next="next" />
        </div>
      </div>
    </NuxtLayout>
  </template>

<script setup lang="ts">
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { ref, reactive, onMounted, computed } from 'vue';
import { libraryService } from '~/models/Library';
import { apiService } from '~/routes/api/API';
import { PageNameService } from '~/models/PageName';

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
  filteredLibraries: [], // Track filtered libraries
  modeltype: '',
  collectorName: '',
  collectorId: 0,
});

// Watch for changes in modeltype and update columnHeaders
watch(() => state.modeltype, (newType) => {
  if (newType === 'customer_group') {
    state.columnHeaders = [
      { name: 'Select' },
      { name: 'Description' },
      { name: 'Collector' }, // Additional column for customer_group
    ];
  } else {
    state.columnHeaders = [
      { name: 'Select' },
      { name: 'Description' },
    ];
  }
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
    { value: 'requirement', label: 'Requirement' },
  ];

let selectedLibraryId = ref(null); // Track selected library

onMounted(() => {
  state.modeltype = 'customer_group'
  fetchLibraries();
});

async function createLibrary() {
  try {
    const response = await apiService.authLibrariesCreate({});
    navigateTo('/libraries/create');
  } catch (error) {
    toast.error(`${error}`, {
      autoClose: 5000,
    });
  }
}

async function updateLibrary() {
  try {
    const response = await apiService.authLibrariesUpdate({});
    if (selectedLibraryId.value) {
      let selectedDescription = null;
      for (let i = 0; i < state.datas?.data.length; i++) {
        const library = state.datas.data[i];
        if (library.id == parseInt(selectedLibraryId.value)?.toString()) {
          selectedDescription = library.description;
            state.collectorName = library.last_name + ' ' + library.first_name + ' ' + library.middle_name;
            state.collectorId = library.collector_id;
            break;
        }
      }
      libraryService.id = selectedLibraryId.value;
      libraryService.modelType = state.modeltype;
      libraryService.oldText = selectedDescription;
      libraryService.collectorName = state.collectorName;
      libraryService.collectorId = state.collectorId;
      navigateTo('/libraries/update');
    }
  } catch (error) {
    toast.error(`${error}`, {
      autoClose: 5000,
    });
  }
}

function deleteLibrary() {
  if (selectedLibraryId.value) {
    console.log('Delete library with id:', selectedLibraryId.value);
  }
}

async function fetchLibraries() {
    debugger
  state.isTableLoading = true;
  state.error = null;
  try {
    const params = {};
    const response = await apiService.get(params, state.modeltype); // Fetch data with the default model
    state.datas = response;
    state.filteredLibraries = response.data; // Initialize filtered libraries with all data
  } catch (error) {
    state.error = error;
  }
  state.isTableLoading = false;
}

function filterLibraries() {
  const query = state.searchQuery.toLowerCase();
  state.filteredLibraries = state.datas.data.filter((lib) =>
    lib.description.toLowerCase().includes(query) // Filter by description
  );
}
</script>
