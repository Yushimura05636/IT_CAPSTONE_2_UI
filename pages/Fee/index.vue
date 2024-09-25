<template>
    <NuxtLayout name="admin">
        <div class="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-16">
        <!-- Top Action Bar -->
        <div class="flex justify-between items-center mb-6 space-x-4">
            <div class="flex space-x-4">
            <button  class="px-5 py-2 bg-green-600 text-white font-medium rounded-full shadow hover:bg-green-500 transition duration-200"
            @click="createFee">
                Create
            </button>
            <button  class="px-5 py-2 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-500 transition duration-200"
            v-if="selectedFeeID"
            @click="updateFee">
                Modify
            </button>
            <button  class="px-5 py-2 bg-red-600 text-white font-medium rounded-full shadow hover:bg-red-500 transition duration-200">
                Delete
            </button>
            </div>
            <div class="relative flex-grow max-w-xs">
            <input
                type="text"
                placeholder="Search fees"
                class="w-full border border-gray-300 rounded-full px-5 py-2 pr-12 shadow-sm focus:outline-none focus:border-blue-500 transition duration-200"
            />
            <button class="absolute right-4 top-2 text-blue-500 hover:text-blue-700">
                Search
            </button>
            </div>
        </div>

        <!-- Fees Table -->
            <div class="overflow-x-auto">
                <Table class="w-full  " 
                    :columnHeaders="state.columnHeaders" 
                    :data="state.fee" 
                    :isLoading="state.isTableLoading"
                    :sortData="state.sortData" 
                    >
                    <template #body
                        v-if="!(state.isTableLoading || (state.fee?.data === 0))">
                        
                        <tr v-for="(fee, index) in state.fee?.data" :key="index" class="">
                            
                            <td class="py-2 border-b border-gray-300 ">
                                <input
                                type="radio"
                                :value="fee.id"
                                v-model="selectedFeeID"
                                class="cursor-pointer"
                                />
                            </td>
                            <td class="py-2 border-b border-gray-300  ">
                                <span>{{ fee.description }} </span>
                            </td>
                            <td class="py-2 border-b border-gray-300 ">
                                <span>{{ fee.amount }}</span>
                            </td>
                            <td class="py-2 border-b border-gray-300 ">
                                <span>{{ fee.isactive }}</span>
                            </td>
                            <td class="py-2 border-b border-gray-300 ">
                                <span>{{ fee.notes }}</span>
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
    import { feeService } from '~/models/Fee'
    
    const state = reactive({
        columnHeaders: [
            { name: 'ID' },
            { name: 'Description' },
            { name: 'Amount' },
            { name: 'Is Active' },
            { name: 'Notes' }
        ],
        error: null,
        isTableLoading: false,
        sortData: {
            sortField: 'id',
            sortOrder: 'descend',
        },
        fee: [],
        searchQuery: '',
    })

    let selectedFeeID = ref(null); // Track selected library

    
    async function fetchFee() {
        state.isTableLoading = true
        state.error = null
        try {
            const params = {}
            const response = await apiService.getFee(params)
            state.fee = response
            console.log(state.fee);
        } catch (error: any) {
            state.error = error
        }
        state.isTableLoading = false
    }
    onMounted(() => {
        fetchFee()
    })

    function updateFee(){
        if (selectedFeeID.value) {
            let description = null;
            let amount = null;
            let isactive = null;
            let notes = null;

        // Iterate through the data using a for loop
        for (let i = 0; i < state.fee?.data.length; i++) {
            const fee = state.fee.data[i];

            // Check if the current library's id matches the selectedLibraryId
            if (fee.id == parseInt(selectedFeeID.value)?.toString()) {
                description = fee.description;
                amount = fee.amount;
                isactive = fee.isactive;
                notes = fee.notes;
            break; // Exit the loop once we find the selected library
            }
        }
        feeService.id = selectedFeeID.value;
        feeService.amount = amount;
        feeService.description = description;
        feeService.isActive = isactive;
        feeService.notes = notes;

        console.log(feeService.id);
        console.log(feeService.amount);
        console.log(feeService.description);
        console.log(feeService.isActive);
        console.log(feeService.notes);
        navigateTo('Fee/update');
        }
    }
    function createFee() {
    navigateTo('Fee/create');
    }
</script>