<template>
    <NuxtLayout name="admin">
            <div class="p-4">
                <div class="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div class="font-bold">Factor Rate</div>

                    <!-- Action Buttons -->
                    <div class="flex justify-between items-center mb-8 mt-8">

                        <!-- Left: Action Buttons -->
                        <div class="flex space-x-4">
                            <button  class="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
                            @click="createFactorRate">
                            Create
                            </button>

                            <button 
                            type="button" 
                            class="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                            v-if="selectedFrequencyID"
                            @click="updateFactorRate">
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
                        :data="state.factorRate" 
                        :isLoading="state.isTableLoading"
                        :sortData="state.sortData" 
                        >
                        <template #body
                            v-if="!(state.isTableLoading || (state.factorRate?.data === 0))">
                            
                            <tr v-for="(factorRate, index) in state.factorRate?.data" :key="index" class="">
                                
                                <td class="py-2 border-b border-gray-300 ">
                                    <input
                                    type="radio"
                                    :value="factorRate.id"
                                    v-model="selectedFrequencyID"
                                    class="cursor-pointer"
                                    />
                                </td>
                                <td class="py-2 border-b border-gray-300  ">
                                    <span>{{ factorRate.payment_frequency_id }} </span>
                                </td>
                                <td class="py-2 border-b border-gray-300 ">
                                    <span>{{ factorRate.payment_duration_id }}</span>
                                </td>
                                <td class="py-2 border-b border-gray-300 ">
                                    <span>{{ factorRate.description }}</span>
                                </td>
                                <td class="py-2 border-b border-gray-300 ">
                                    <span>{{ factorRate.values }}</span>
                                </td>
                                <td class="py-2 border-b border-gray-300 ">
                                    <span>{{ factorRate.notes }}</span>
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


    const state = reactive({
        columnHeaders: [
            { name: 'ID' },
            { name: 'Payment Frequency' },
            { name: 'Payment Duration' },
            { name: 'Description' },
            { name: 'Value' },
            { name: 'Notes' },
        ],
        error: null,
        isTableLoading: false,
        sortData: {
            sortField: 'id',
            sortOrder: 'descend',
        },
        factorRate: [],
        searchQuery: '',
    })

    let selectedFrequencyID = ref(null); // Track selected library

    
    async function fetchFactorRate() {
        state.isTableLoading = true
        state.error = null
        try {
            const params = {}
            const response = await apiService.getFactorRate(params)
            state.factorRate = response
            console.log(state.factorRate);
        } catch (error: any) {
            state.error = error
        }
        state.isTableLoading = false
    }
    onMounted(() => {
        fetchFactorRate()
    })

    function createFactorRate() {
    navigateTo('factor_rate/create');
    }

    function updateFactorRate() {
    navigateTo('factor_rate/update');
    }

</script>