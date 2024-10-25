<template>
<NuxtLayout name="admin">
<div class="p-8">
    <div class="flex justify-between items-center mb-4">
    <h1 class="text-2xl font-bold">Payment Line</h1>
    <div class="flex space-x-2">
        <!-- <button @click="createPaymentLine" class="bg-green-500 text-white px-4 py-2 rounded">Create</button> -->
        <button @click="" class="bg-blue-300 text-white px-4 py-2 rounded">Update</button>
        <button @click="" class="bg-red-300 text-white px-4 py-2 rounded">Delete</button>
    </div>
    </div>
    <div class="flex justify-center mb-4">
    <input
        type="text"
        placeholder="Search payment lines"
        class="border rounded px-4 py-2 w-1/2"
    />
    </div>
    <div class="overflow-x-auto">
    <Table class="w-full  " 
        :columnHeaders="state.columnHeaders" 
        :data="state.paymentLine" 
        :isLoading="state.isTableLoading"
        :sortData="state.sortData" 
        >
        <template #body
            v-if="!(state.isTableLoading || (state.paymentLine?.data === 0))">
            
            <tr v-for="(paymentLine, index) in state.paymentLine?.data" :key="index" class="">
                
                <td class="py-2 border-b border-gray-300 ">
                    <input
                    type="radio"
                    :value="paymentLine.id"
                    v-model="selectedPaymentLine"
                    class="cursor-pointer"
                    />
                </td>
                <td class="py-2 border-b border-gray-300  ">
                    <span>{{ paymentLine.payment_id }} </span>
                </td>
                <td class="py-2 border-b border-gray-300 ">
                    <span>{{ paymentLine.payment_schedule_id }}</span>
                </td>
                <td class="py-2 border-b border-gray-300 ">
                    <span>{{ paymentLine.balance }}</span>
                </td>
                <td class="py-2 border-b border-gray-300 ">
                    <span>{{ paymentLine.amount_paid }}</span>
                </td>
                <td class="py-2 border-b border-gray-300 ">
                    <span>{{ paymentLine.remarks }}</span>
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
import { PermissionService } from '~/models/Permission';



const state = reactive({
    columnHeaders: [
        { name: 'Select' },
        { name: 'Payment ID' },
        { name: 'Payment Schedule ID' },
        { name: 'Balance' },
        { name: 'Amount Paid' },
        { name: 'Remarks' },
    ],
    error: null,
    isTableLoading: false,
    sortData: {
        sortField: 'id',
        sortOrder: 'descend',
    },
    paymentLine: [],
    searchQuery: '',
})

let selectedPaymentLine = ref(null); // Track selected library


async function fetchPaymentLine() {
    state.isTableLoading = true
    state.error = null
    try {
        const params = {}
        const response = await apiService.getPaymentLineNoAUTH(params)
        state.paymentLine = response
        console.log(state.paymentLine);
    } catch (error: any) {
        toast.error(error.message, {
            autoClose: 5000,
        })
    }
    state.isTableLoading = false
}
onMounted(() => {
    fetchPaymentLine()
})
</script>

<style scoped>
body {
font-family: 'Roboto', sans-serif;
}
</style>
