<template>
    <NuxtLayout name="admin">
      <div class="p-6">
        <!-- Buttons and Search -->
        <div class="flex justify-between items-center mb-4">
          <div class="flex space-x-4">
            <button @click="createUser" class="bg-green-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-600">
              Create
            </button>
            <button @click="updateUser" class="bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600" :disabled="!selectedUserId">
              Modify
            </button>
            <button class="bg-red-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-600" :disabled="!selectedUserId">
              Delete
            </button>
          </div>
          <div class="flex">
            <input 
              v-model="state.searchQuery" 
              type="text" 
              placeholder="Search loan count"
              class="p-2 border border-gray-300 rounded-l-md focus:outline-none"
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
                  <input type="radio" v-model="selectedUserId" :value="user.id" />
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
import { ref, reactive, onMounted } from 'vue';
import { apiService } from '~/routes/api/API';
import { UserService } from '~/models/User';
import { navigateTo } from 'nuxt/app';
import { PermissionService } from '~/models/Permission';

const state = reactive({
  columnHeaders: [
    { name: 'ID' },
    { name: 'Full Name' },
    { name: 'Email' },
  ],
  error: null,
  isTableLoading: false,
  sortData: {
    sortField: 'id',
    sortOrder: 'descend',
  },
  users: [],
  searchQuery: '',
});

const selectedUserId = ref<string | null>(null); // Added selected user ID

async function fetchUsers() {
  state.isTableLoading = true;
  state.error = null;

  try {
    const params = {
      docId: PermissionService._USERACCOUNT,
      perm: PermissionService._VIEW,
    };
    await apiService.auth(params);
    const response = await apiService.getUser(params);
    state.users = response;
    console.log(state.users);
  } catch (error: any) {
    state.error = error;
  }
  state.isTableLoading = false;
}

async function createUser() {
  try {
    await apiService.auth({
      docId: PermissionService._USERACCOUNT,
      perm: PermissionService._CREATE,
    });
    navigateTo('/users/create');
  } catch (error) {
    alert(error);
  }
}

async function updateUser() {
  if (selectedUserId.value) { // Ensure a user is selected
    try {
      UserService.usr_id = parseInt(selectedUserId.value); // Get the selected user ID
      await apiService.auth({
        docId: PermissionService._USERACCOUNT,
        perm: PermissionService._UPDATE,
      });
      navigateTo(`/users/update/`); // Navigate to update page
    } catch (error) {
      alert(error);
    }
  } else {
    alert("Please select a user to update.");
  }
}

async function managePermissions(userId: number) {
  try {
    UserService.usr_id = userId;
    await apiService.auth({
      docId: PermissionService._USERACCOUNT,
      perm: PermissionService._UPDATE,
    });
    navigateTo('/permission/manage');
  } catch (error: any) {
    state.error = error;
  }
}

onMounted(() => {
  fetchUsers();
});
</script>
