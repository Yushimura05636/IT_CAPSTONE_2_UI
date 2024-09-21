<template>
    <div class="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <form @submit.prevent="submitForm" class="w-full max-w-4xl bg-white p-8 rounded-md shadow-md space-y-6">
        
        <!-- User Information Section -->
        <div class="space-y-6">
          <h2 class="text-lg font-semibold text-gray-900">User Information</h2>
  
          <!-- Full Name Field -->
          <div class="w-full">
            <label for="fullname" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              :value="fullName"
              type="text"
              id="fullname"
              class="block w-full p-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
              disabled
            />
          </div>
  
          <!-- Email Field -->
          <div class="w-full">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              v-model="state.user.email"
              type="text"
              id="email"
              class="block w-full p-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
              disabled
            />
          </div>
        </div>
  
        <!-- Document Permission Table Section -->
        <div class="space-y-6">
          <h2 class="text-lg font-semibold text-gray-900">Document Permissions</h2>
  
          <!-- Check All / Uncheck All Buttons -->
          <div class="flex justify-end space-x-4 mb-4">
            <button type="button" @click="checkAll" class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500">Check All</button>
            <button type="button" @click="uncheckAll" class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500">Uncheck All</button>
          </div>
  
          <!-- Document Permission Table -->
          <div class="overflow-x-auto">
            <table class="min-w-full table-auto divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Select</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permissions</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="document in state.document" :key="document.id">
                  <!-- Select Column -->
                  <td class="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      :value="document.id"
                      v-model="selectedDocuments"
                      class="w-5 h-5"
                    />
                  </td>
  
                  <!-- Document Column -->
                  <td class="px-6 py-4 whitespace-nowrap">
                    {{ document.description }}
                  </td>
  
                  <!-- Permission Column -->
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex space-x-4">
                      <label class="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          :value="{ documentId: document.id, permission: 'view' }"
                          v-model="documentPermissions"
                          class="w-5 h-5"
                        />
                        <span>View</span>
                      </label>
                      <label class="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          :value="{ documentId: document.id, permission: 'create' }"
                          v-model="documentPermissions"
                          class="w-5 h-5"
                        />
                        <span>Create</span>
                      </label>
                      <label class="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          :value="{ documentId: document.id, permission: 'update' }"
                          v-model="documentPermissions"
                          class="w-5 h-5"
                        />
                        <span>Update</span>
                      </label>
                      <label class="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          :value="{ documentId: document.id, permission: 'delete' }"
                          v-model="documentPermissions"
                          class="w-5 h-5"
                        />
                        <span>Delete</span>
                      </label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  
        <!-- Submit Button -->
        <div class="flex justify-end space-x-4 mt-6">
          <button @click="back" type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
          <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500">Save</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive, computed, onMounted } from 'vue';
  import { UserService } from '~/models/User';
  import { apiService } from '~/routes/api/API'; // Adjust path as necessary
  
  const state = reactive({
    permission: [],
    document: [],
    user: [],
    error: "error",
    isTableLoading: true,
  });
  
  const selectedDocuments = ref([]); // Store selected document IDs
  const documentPermissions = ref([]); // Store selected permissions
  
  // Fetch permission and document data from API
  async function fetchPermissionandDocuments() {
    try {
      const params = {};
      const permissions = await apiService.getPermission(params);
      const documents = await apiService.getDocumentMap(params);
      const users = await apiService.getUserById(params, UserService.usr_id);
      
      if (permissions && permissions.data && documents && documents.data && users && users.data) {
        state.permission = permissions.data;
        state.document = documents.data;
        state.user = users.data;
      } else {
        state.error = 'Unexpected response format.';
      }
    } catch (error) {
      state.error = 'Failed to fetch roles. Please try again.';
    } finally {
      state.isTableLoading = false;
    }
  }
  
  function submitForm() {
  // Filter permissions for selected documents only
  const filteredPermissions = documentPermissions.value.filter(permission =>
    selectedDocuments.value.includes(permission.documentId)
  );

  console.log("Selected Documents:", selectedDocuments.value);
  console.log("Filtered Permissions:", filteredPermissions);

  // Proceed with form submission using selected documents and filtered permissions
  }
  
  function back() {
    navigateTo('userTable');
  }

  // Check all documents and permissions
function checkAll() {
  // Select all documents
  selectedDocuments.value = state.document.map((doc) => doc.id);

  // Check all permissions for each document
  documentPermissions.value = [];
  state.document.forEach((document) => {
    documentPermissions.value.push(
      { documentId: document.id, permission: 'view' },
      { documentId: document.id, permission: 'create' },
      { documentId: document.id, permission: 'update' },
      { documentId: document.id, permission: 'delete' }
    );
  });
}

// Uncheck all documents and permissions
function uncheckAll() {
  // Clear selected documents and permissions
  selectedDocuments.value = [];
  documentPermissions.value = [];
}
  
  // Fetch data on component mount
  onMounted(() => {
    fetchPermissionandDocuments();
  });
  
  const fullName = computed(() => `${state.user.first_name} ${state.user.last_name} ${state.user.middle_name}`);
  </script>  