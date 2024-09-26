<template>
    <NuxtLayout name="admin">
            <div class="p-4">
                <div class="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div class="font-bold">Payment Frequency</div>

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
                            v-if="selectedFrequencyID"
                            @click="updateFrequency"
                            >
                            Modify
                            </button>
                            
                            <button type="button" 
                            class="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 "
                            v-if="selectedFrequencyID"
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
                        :data="state.frequency" 
                        :isLoading="state.isTableLoading"
                        :sortData="state.sortData" 
                        >
                        <template #body
                            v-if="!(state.isTableLoading || (state.frequency?.data === 0))">
                            
                            <tr v-for="(frequency, index) in state.frequency?.data" :key="index" class="">
                                
                                <td class="py-2 border-b border-gray-300 ">
                                    <input
                                    type="radio"
                                    :value="frequency.id"
                                    v-model="selectedFrequencyID"
                                    class="cursor-pointer"
                                    />
                                </td>
                                <td class="py-2 border-b border-gray-300  ">
                                    <span>{{ frequency.description }} </span>
                                </td>
                                <td class="py-2 border-b border-gray-300 ">
                                    <span>{{ frequency.days_interval }}</span>
                                </td>
                                <td class="py-2 border-b border-gray-300 ">
                                    <span>{{ frequency.notes }}</span>
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
    import { ref, reactive, onMounted } from 'vue'
    import { apiService } from '~/routes/api/API'
    import { paymentFrequencyService } from '~/models/PaymentFrequency'
import { PermissionService } from '~/models/Permission';
    


    const state = reactive({
        columnHeaders: [
            { name: 'ID' },
            { name: 'Description' },
            { name: 'Days Interval' },
            { name: 'Notes' }
        ],
        error: null,
        isTableLoading: false,
        sortData: {
            sortField: 'id',
            sortOrder: 'descend',
        },
        frequency: [],
        searchQuery: '',
    })

    let selectedFrequencyID = ref(null); // Track selected library

    
    async function fetchFreqandDuration() {
        state.isTableLoading = true
        state.error = null
        try {
            const params = {}
            const response = await apiService.getPaymentFrequency(params)
            state.frequency = response
            console.log(state.frequency);
        } catch (error: any) {
            state.error = error
        }
        state.isTableLoading = false
    }
    onMounted(() => {
        fetchFreqandDuration()
    })

    
    async function updateFrequency(){
        try {
            const response = await apiService.authPaymentFrequenciesUpdate({})
            if (selectedFrequencyID.value) {
        let daysInterval = null;
        let description = null;
        let notes = null;

        // Iterate through the data using a for loop
        for (let i = 0; i < state.frequency?.data.length; i++) {
            const frequency = state.frequency.data[i];

            // Check if the current library's id matches the selectedLibraryId
            if (frequency.id == parseInt(selectedFrequencyID.value)?.toString()) {
                description = frequency.description;
                daysInterval = frequency.days_interval;
                notes = frequency.notes;
            break; // Exit the loop once we find the selected library
            }
        }
        paymentFrequencyService.id = selectedFrequencyID.value;
        paymentFrequencyService.description = description;
        paymentFrequencyService.days_interval = daysInterval;
        paymentFrequencyService.notes = notes;

        console.log(paymentFrequencyService.id);
        console.log(paymentFrequencyService.description);
        console.log(paymentFrequencyService.days_interval);
        console.log(paymentFrequencyService.notes);
        navigateTo('payment_frequency/update');
        }
        } catch (error) {
            alert(error);
        }
    }

    async function createPaymentFrequency() {
        try {
            const response = await apiService.authPaymentFrequenciesCreate({})
            navigateTo('/payment_frequency/create')
        } catch (error) {
            alert(error);
        }
    }

</script>