<template>
<div class="bg-gray-100 h-screen flex items-center justify-center p-6">
    <form class="w-full max-w-lg bg-white p-8 rounded-md shadow-md">
    <div class="space-y-12">
        <div class="pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">
            <br />User Information
        </h2>
        <div class="w-full max-w-xs mx-auto">
            <label for="userId" class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
            v-model="state.user.id"
            type="text"
            id="userId"
            class="block w-full p-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled
            />
        </div>
        <div class="w-full max-w-xs mx-auto">
            <label for="userId" class="block text-sm font-medium text-gray-700 mb-2">User Name</label>
            <input
            :value="fullName"
            type="text"
            id="fullname"
            class="block w-full p-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled
            />
        </div>
        <div class="w-full max-w-xs mx-auto">
            <label for="userId" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
            v-model="state.user.email"
            type="text"
            id="email"
            class="block w-full p-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled
            />
        </div>

        <h2 class="text-base font-semibold leading-7 text-gray-900">
            Add Document and Permission
        </h2>
        <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
            <div class="max-w-md">
                <label for="example-combobox" class="block mt-4 text-sm font-medium text-gray-700">Select Document</label>

                <div class="relative mt-1">
                        <select v-if="!state.isTableLoading" class="block w-full h-10 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-3 py-1.5">
                        <!-- Dynamically generate <option> for each role -->
                            <option v-for="document in state.document" :key="document.id" :value="document.id">
                                {{ document.description }} 
                                <!-- Display docu name in the dropdown -->
                            </option>
                        </select>
                </div>
                <label for="example-combobox" class="block mt-4 text-sm font-medium text-gray-700">Select Permission</label>
                <!-- Display checkboxes for each permission -->
                <div v-if="!state.isTableLoading" class="flex flex-col mt-2">
                    <div
                        v-for="permission in state.permission"
                        :key="permission.id"
                        class="flex items-center pt-2">
                        <input
                        type="checkbox"
                        :id="`permission-${permission.id}`"
                        :value="permission.id"
                        v-model="selectedPermissions"
                        class="mr-2 w-5 h-5"
                        />
                        <label
                        :for="`permission-${permission.id}`"
                        class="text-sm text-gray-700 font-large "
                        >
                        {{ permission.description }}
                        </label>
                    </div>
                </div>
                <!-- Display loading indicator -->
                <div v-if="state.isTableLoading" class="mt-4 text-sm text-gray-700">
                Loading permissions...
                </div>
                <!-- Display error message -->
            </div>
            </div>
        </div>
        </div>
    </div>
    <div class="mt-6 flex items-center justify-end gap-x-6">
        <button @click="back" type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel </button>
        <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
    </div>
    </form>
</div>
</template>

    <script setup lang="ts">
    import { ref, reactive, onMounted } from 'vue';
import { UserService } from '~/models/User';
    import { apiService } from '~/routes/api/API'; // Adjust path as necessary

    const state = reactive({
    permission: [], // Holds fetched roles data
    document: [], // Holds fetched roles data
    user: [],
    error: "error", // Stores any error messages
    isTableLoading: true, // Track loading state
    });

    const selectedPermissions = ref([]); // Store selected checkboxes

    // Function to fetch permission data from the API
        async function fetchPermissionandDocuments() {
            try {
                const params = {}; // Define params if needed
                const permissions = await apiService.getPermission(params);
                const documents = await apiService.getDocumentMap(params);
                const users = await apiService.getUserById(params, UserService.usr_id);
                // Check if the response contains a "data" property with an array of permissions
                if (users && users.data && !Array.isArray(users.data) && permissions && permissions.data && Array.isArray(permissions.data)&& documents && documents.data && Array.isArray(documents.data)) {
                    state.permission = permissions.data; // Assign the array to state.permission
                    state.document = documents.data; // Assign the array to state.permission
                    state.user = users.data;

                    console.log('Fetched permission data:', state.permission);
                    console.log('Fetched permission data:', state.document);
                } else {
                    console.warn('Unexpected response format:', permissions);
                    state.error = 'Unexpected response format.';
                }
            } catch (error) {
                console.error('Error fetching roles:', error);
                state.error = 'Failed to fetch roles. Please try again.';
            } finally {
                state.isTableLoading = false; // Set loading to false after fetching
            }
        }

        function back()
        {
            navigateTo('userTable');
        }

        // Fetch permission data when the component is mounted
        onMounted(() => {
        console.log('Component mounted, triggering fetchPermission');
        fetchPermissionandDocuments();
        });

        const fullName = computed(() => `${state.user.first_name} ${state.user.last_name} ${state.user.middle_name}` );
    </script>
