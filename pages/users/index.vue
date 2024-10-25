<template>
  <NuxtLayout name="admin">
    <div class="p-6">
      <div><h1>Users</h1></div>
      <!-- Buttons and Search -->
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-4 sm:space-y-0">
        <!-- Action Buttons -->
        <div class="flex space-x-4 justify-center sm:justify-start">
          <button
            @click="createUser"
            class="bg-green-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-600 transition"
          >
            Create
          </button>
          <button
            @click="updateUser"
            class="bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 transition disabled:opacity-50"
            :disabled="!selectedUserId"
          >
            Modify
          </button>
          <button
            @click="deleteUser"
            class="bg-red-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-600 transition disabled:opacity-50"
            :disabled="!selectedUserId"
          >
            Delete
          </button>
        </div>

        <!-- Search Bar -->
        <div class="flex justify-center sm:justify-end w-full sm:w-auto">
          <input
            v-model="state.searchQuery"
            type="text"
            placeholder="Search users"
            class="p-2 border border-gray-300 rounded-l-md focus:outline-none w-full sm:w-auto"
          />
          <button class="bg-blue-500 text-white py-2 px-4 rounded-r-md">Search</button>
        </div>
      </div>

      <!-- User Table -->
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border rounded-lg">
          <thead class="bg-blue-900 text-white">
            <tr>
              <th class="p-3 text-left">Select</th>
              <th class="p-3 text-left">Full Name</th>
              <th class="p-3 text-left">Email</th>
            </tr>
          </thead>
          <tbody class="text-gray-700">
            <tr v-for="(user, index) in state.users?.data" :key="index" class="hover:bg-gray-100">
              <td class="p-3 border-b">
                <input type="radio" v-model="selectedUserId" :value="user.id" class="cursor-pointer" />
              </td>
              <td class="p-3 border-b">
                {{ user.first_name }} {{ user.middle_name }} {{ user.last_name }}
              </td>
              <td class="p-3 border-b">
                {{ user.email }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { ref, reactive, onMounted } from 'vue';
import { apiService } from '~/routes/api/API';
import { UserService } from '~/models/User';
import { navigateTo } from 'nuxt/app';

const state = reactive({
  columnHeaders: [
    { name: 'Select' },
    { name: 'Full Name' },
    { name: 'Email' },
  ],
  error: null,
  isTableLoading: false,
  users: [],
  searchQuery: '',
});

const selectedUserId = ref<string | null>(null);

async function fetchUsers() {
  state.isTableLoading = true;
  state.error = null;

  try {
    const params = {};
    const response = await apiService.getUser(params);
    state.users = response;
  } catch (error: any) {
    state.error = error;
  }
  state.isTableLoading = false;
}

async function createUser() {
  try {
    await apiService.authUsersCreate({});
    navigateTo('/users/create');
  } catch (error) {
    toast.error(`${error}`, { autoClose: 5000 });
  }
}

async function updateUser() {
  if (selectedUserId.value) {
    try {
      UserService.usr_id = parseInt(selectedUserId.value);
      await apiService.authUsersUpdate({});
      navigateTo(`/users/update/`);
    } catch (error) {
      toast.error(`${error}`, { autoClose: 5000 });
    }
  } else {
    alert("Please select a user to update.");
  }
}

onMounted(() => {
  fetchUsers();
});
</script>
