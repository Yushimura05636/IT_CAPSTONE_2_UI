<template>
    <NuxtLayout name="admin">
            <div class="p-4">
                <div class="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div class="font-bold">Loan Release</div>

                    <!-- Action Buttons -->
                    <div class="flex justify-between items-center mb-8 mt-8">

                        <!-- Left: Action Buttons -->
                        <div class="flex space-x-4">
                            <!-- <button  class="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
                            @click="">
                            Create
                            </button> -->

                            <button 
                            type="button" 
                            class="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                            v-if="selectedLoanReleaseID"
                            @click="updateLoanRelease"
                            >
                            Modify
                            </button>
                            
                            <button type="button" 
                            class="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 "
                            v-if="selectedLoanReleaseID"
                            >
                            Delete
                            </button>
                        </div>

                        <!-- Right: Search Bar -->
                        <div class="flex items-center space-x-2">
                            <input
                            type="text"
                            placeholder="Search"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                            />
                            <button class="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                            Search
                            </button>
                        </div>
                    </div>
                    <div class="overflow-x-auto">
                        <Table class="w-full table-auto border-collapse " 
                            :columnHeaders="state.columnHeaders" 
                            :data="state.loanRelease" 
                            :isLoading="state.isTableLoading"
                            :sortData="state.sortData" 
                            >
                            <template #body
                                v-if="!(state.isTableLoading || (state.loanRelease?.data === 0))">
                                <tr v-for="(release, index) in state.loanRelease?.data" :key="index" class=" px-4  py-2">
                                    
                                    <td class="py-2 border-b border-gray-300 ">
                                        <input
                                        type="radio"
                                        :value="release.id"
                                        v-model="selectedLoanReleaseID"
                                        class="cursor-pointer"
                                        />
                                    </td>
                                    <td class="px-4  py-2 border-b border-gray-300  ">
                                        <span>{{ release.id}} </span>
                                    </td>
                                    <td class="px-4  py-2 border-b border-gray-300 ">
                                        <span>{{ release.datetime_prepared }}</span>
                                    </td>
                                    <td class="px-4  py-2 border-b border-gray-300 ">
                                        <span>{{ release.passbook_number}}</span>
                                    </td>
                                    <td class="px-4  py-2 border-b border-gray-300 ">
                                        <span>{{ release.loan_application_id }}</span>
                                    </td>
                                    <td class="px-4  py-2 border-b border-gray-300 ">
                                        <span>{{ release.prepared_by_id }}</span>
                                    </td>
                                    <td class="px-4  py-2 border-b border-gray-300 ">
                                        <span>{{ release.datetime_first_due }}</span>
                                    </td>
                                    <td class="px-4  py-2 border-b border-gray-300 ">
                                        <span>{{ release.notes }}</span>
                                    </td>
                                </tr>
                            </template>
                        </Table>
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
    import { loanReleaseService } from '~/models/LoanRelease'
import { PermissionService } from '~/models/Permission';
    


    const state = reactive({
        columnHeaders: [
            { name: '' },
            { name: 'ID' },
            // { name: 'Date Time Created ' },
            { name: 'Date Time Prepared ' },
            { name: 'Passbook Number' },
            { name: 'Loan Application ID ' },
            { name: 'Prepared by ' },
            { name: 'Date Time First Due ' },
            { name: 'Notes' },
        ],
        error: null,
        isTableLoading: false,
        sortData: {
            sortField: 'id',
            sortOrder: 'descend',
        },
        loanRelease: [],
        searchQuery: '',
    })

    let selectedLoanReleaseID = ref(null); // Track selected library

    async function fetchLoanRelease() {
        state.isTableLoading = true
        state.error = null
        try {
            const params = {}
            const response = await apiService.getLoanRelease(params)
            state.loanRelease = response
            console.log(state.loanRelease);
        } catch (error: any) {
            toast.error(error.message, {
                autoClose: 5000,
            })
        }
        state.isTableLoading = false
    }
    onMounted(() => {
        fetchLoanRelease()
    })

    async function updateLoanRelease(){
        try {
            const response = await apiService.authLoanReleaseUpdate({})
            if (selectedLoanReleaseID.value) {

        let datetime_prepared = null;
        let passbook_number = null;
        let prepared_by = null;
        let datetime_first_due = null;
        let notes = null;

        // Iterate through the data using a for loop
        for (let i = 0; i < state.loanRelease?.data.length; i++) {
            const loanRelease = state.loanRelease.data[i];

            // Check if the current library's id matches the selectedLibraryId
            if (loanRelease.id == parseInt(selectedLoanReleaseID.value)?.toString()) {
                datetime_prepared = loanRelease.datetime_prepared
                passbook_number = loanRelease.passbook_number
                prepared_by = loanRelease.prepared_by_id
                datetime_first_due = loanRelease.datetime_first_due
                notes = loanRelease.notes;
            break; // Exit the loop once we find the selected library
            }
        }
        loanReleaseService.id = selectedLoanReleaseID.value;
        loanReleaseService.datetime_prepared = datetime_prepared;
        loanReleaseService.passbook_number = passbook_number;
        loanReleaseService.prepared_by = prepared_by;
        loanReleaseService.datetime_firstdue = datetime_first_due;
        loanReleaseService.notes = notes;
        
        // console.log(loanReleaseService.notes);
        navigateTo('loan_release/update');
        }
        } catch (error) {
            toast.error(error.message, {
        autoClose: 5000,
    })
        }
    }

</script>