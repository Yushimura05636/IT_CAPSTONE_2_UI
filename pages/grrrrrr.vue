<template>
    <NuxtLayout name="admin">
            <div class="p-4">
                <div class="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div class="font-bold">Group</div>

                    <!-- Action Buttons -->
                    <div class="flex justify-between items-center mb-8 mt-8">

                        <!-- Left: Action Buttons -->
                        <div class="flex space-x-4">
                            <button  class="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
                            @click="createPaymentFrequency">
                            Create
                            </button>

                            <button 
                            type="button" 
                            class="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                            v-if="selectedDurationID"
                            @click="updateDuration"
                            >
                            Modify
                            </button>
                            
                            <button type="button" 
                            class="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 "
                            v-if="selectedDurationID"
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

                    <Table class="w-full  " 
                        :columnHeaders="state.columnHeaders" 
                        :data="state.groups" 
                        :isLoading="state.isTableLoading"
                        :sortData="state.sortData" 
                        >
                        <template #body
                            v-if="!(state.isTableLoading || (state.groups?.data === 0))">
                            
                            <tr v-for="(groups, index) in state.groups?.data" :key="index" class="">
                                
                                <td class="py-2 border-b border-gray-300 ">
                                    <input
                                    type="radio"
                                    :value="groups.id"
                                    v-model="selectedDurationID"
                                    class="cursor-pointer"
                                />
                                </td>
                                <td class="py-2 border-b border-gray-300 ">
                                    <span>{{ groups.id }} </span>
                                </td>
                                <td class="py-2 border-b border-gray-300  ">
                                    <span>{{ groups.description }} </span>
                                </td>
                                <!-- <td class="border-b border-gray-300 cursor-pointer ">
                                    <FormButton class="bg-blue-600 hover:bg-blue-800 text-white rounded pl-5 pr-5"></FormButton>
                                </td> -->
                            </tr>
                        </template>
                    </Table>
                </div>
            </div>
    </NuxtLayout>
</template>


<script setup lang="ts">
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

    import { ref, reactive, onMounted } from 'vue'
    import { apiService } from '~/routes/api/API'
    import { paymentDurationService } from '~/models/PaymentDuration'
    
    const state = reactive({
        columnHeaders: [
            { name: 'Select' },
            { name: 'Id' },
            { name: 'Description' },
        ],
        error: null,
        isTableLoading: false,
        sortData: {
            sortField: 'id',
            sortOrder: 'descend',
        },
        groups: [],
        searchQuery: '',
    })

    let selectedDurationID = ref(null); // Track selected library

    
    async function fetchGroups() {
        state.isTableLoading = true
        state.error = null
        try {
            const params = {}
            const response = await apiService.getCustomerGroup1(params)
            state.groups = response
            console.log(response);
        } catch (error: any) {
            state.error = error
        }
        state.isTableLoading = false
    }
    onMounted(() => {
        fetchGroups()
    })

    function updateDuration(){
        if (selectedDurationID.value) {
        let numOfPayments = null;
        let description = null;
        let notes = null;

        // Iterate through the data using a for loop
        for (let i = 0; i < state.duration?.data.length; i++) {
            const duration = state.duration.data[i];

            // Check if the current library's id matches the selectedLibraryId
            if (duration.id == parseInt(selectedDurationID.value)?.toString()) {
                description = duration.description;
                numOfPayments = duration.number_of_payments;
                notes = duration.notes;
            break; // Exit the loop once we find the selected library
            }
        }
        paymentDurationService.id = selectedDurationID.value;
        paymentDurationService.description = description;
        paymentDurationService.number_of_payments = numOfPayments;
        paymentDurationService.notes = notes;

        console.log(paymentDurationService.id);
        console.log(paymentDurationService.description);
        console.log(paymentDurationService.number_of_payments);
        console.log(paymentDurationService.notes);
        navigateTo('payment_duration/update');
        }
    }
    function createPaymentFrequency() {
    navigateTo('payment_duration/create');
    }

</script>