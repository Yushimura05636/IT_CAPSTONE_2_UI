<template>
    <NuxtLayout name="admin">
        <div>
            <Head>
                <Title>Users</Title>
            </Head>
            
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 class="m-6 text-base font-bold leading-6 text-gray-900">Users</h1>
                </div>
            </div>
            
            <div class="mt-5">
                <Alert type="danger" :text="state.error?.message" v-if="state.error" />
                    <div class="overflow-x-auto  ">
                            <Table class="w-full " 
                            :columnHeaders="state.columnHeaders" 
                            :data="state.users" 
                            :isLoading="state.isTableLoading"
                            :sortData="state.sortData" 
                            >
                                <template #body
                                    v-if="!(state.isTableLoading || (state.users?.data === 0))">
                                    
                                    <tr v-for="(user, index) in state.users?.data" :key="index" class="">
                                        
                                        <td class="py-2 border-b border-gray-300 ">
                                            <span>{{ user.id }}</span>
                                        </td>
                                        <td class="py-2 border-b border-gray-300  ">
                                            <span>{{ user.first_name }} {{ user.middle_name }} {{ user.last_name }}</span>
                                        </td>
                                        <td class="py-2 border-b border-gray-300 ">
                                            <span>{{ user.email }}</span>
                                        </td>
                                        <td class="border-b border-gray-300 cursor-pointer ">
                                            <FormButton @click="managePermissions(user.id)" class="bg-blue-600 hover:bg-blue-800 text-white rounded pl-5 pr-5">Manage</FormButton>
                                        </td>
                                    </tr>
                                </template>
                            </Table>
                        </div>
                        <!-- <Pagination :data="state.datas" @previous="previous" @next="next" /> -->
                        <div class="ml-10 mb-5 ">
                    </div>
            </div>
    </div>
    </NuxtLayout>
</template>


    <script setup lang="ts">
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

    import { ref, reactive, onMounted } from 'vue'
    import { apiService } from '~/routes/api/API'
    import { UserService } from '~/models/User';
import { navigateTo } from 'nuxt/app';
import { PermissionService } from '~/models/Permission';


    const state = reactive({
        columnHeaders: [
            { name: 'Select' },
            { name: 'Full Name' },
            { name: 'Email' },
            { name: 'Action' }
        ],
        error: null,
        isTableLoading: false,
        sortData: {
            sortField: 'id',
            sortOrder: 'descend',
        },
        users: [],
        searchQuery: '',
    })

    async function fetchUsers() {
        state.isTableLoading = true
        state.error = null;
        ;
        try {
            const params = {};
            const response = await apiService.getUser(params)
            state.users = response
            console.log(state.users);
            // assuming response.data is an array of users
        } catch (error: any) {
            state.error = error;
            state.isTableLoading = true;
        }
        state.isTableLoading = false
    }

    async function managePermissions(userId: number) {
        try {
            UserService.usr_id = userId;
            const response = await apiService.authUsersUpdate({});
            navigateTo('/permission/manage');
        } catch (error: any) {
            state.error = error;
        }
        state.isTableLoading = true;
    }

    // function managePermissions(userId: number) {
    //     console.log('User ID:', userId); // Log the ID to check
    //     navigateTo({ name: 'Permission', params: { id: userId } });
    // }

    onMounted(() => {
        fetchUsers()
    })
    </script>


