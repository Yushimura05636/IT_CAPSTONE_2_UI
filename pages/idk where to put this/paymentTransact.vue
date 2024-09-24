<template>
<div class="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">Payment Transaction Form</h2>
    <form class="space-y-6">
    <!-- Loan Application Fee Section -->
    <div class="grid grid-cols-2 gap-4">
        <div>
        <label class="block text-sm font-medium text-gray-700">Loan Application Fee</label>
        <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
        <label class="block text-sm font-medium text-gray-700">Loan Application ID</label>
        <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
        <label class="block text-sm font-medium text-gray-700">Fee ID</label>
        <input type="text" v-model="feeId" @input="fetchFeeDescription" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div v-if="feeDescription.length">
        <label class="block text-sm font-medium text-gray-700">Fee Description</label>
        <select class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option v-for="desc in feeDescription" :key="desc">{{ desc }}</option>
        </select>
        </div>
        <div>
        <label class="block text-sm font-medium text-gray-700">Amount</label>
        <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
        <label class="block text-sm font-medium text-gray-700">Is Active</label>
        <input type="checkbox" class="mt-1 block" />
        </div>
        <div>
        <label class="block text-sm font-medium text-gray-700">Encoding Order</label>
        <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
        <label class="block text-sm font-medium text-gray-700">Notes</label>
        <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
    </div>

    <!-- Payment Frequency Section -->
    <div class="grid grid-cols-2 gap-4">
        <div>
        <label class="block text-sm font-medium text-gray-700">Payment Frequency</label>
        <select class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
        </select>
        </div>
        <div>
        <label class="block text-sm font-medium text-gray-700">Days Interval</label>
        <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
        <label class="block text-sm font-medium text-gray-700">Notes</label>
        <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
    </div>

    <!-- Payment Duration Section -->
    <div class="grid grid-cols-2 gap-4">
        <div>
        <label class="block text-sm font-medium text-gray-700">Payment Duration</label>
        <select class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option>Short Term</option>
            <option>Long Term</option>
        </select>
        </div>
        <div>
        <label class="block text-sm font-medium text-gray-700">Number of Payments</label>
        <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
        <label class="block text-sm font-medium text-gray-700">Notes</label>
        <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
    </div>

    <!-- Factor Rate Section -->
    <div class="grid grid-cols-2 gap-4">
        <div>
        <label class="block text-sm font-medium text-gray-700">Factor Rate</label>
        <select class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
        </select>
        </div>
        <div>
        <label class="block text-sm font-medium text-gray-700">Description</label>
        <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
        <label class="block text-sm font-medium text-gray-700">Value</label>
        <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
        <label class="block text-sm font-medium text-gray-700">Notes</label>
        <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
    </div>

    <!-- Loan Count Section -->
    <div class="grid grid-cols-2 gap-4">
        <div>
        <label class="block text-sm font-medium text-gray-700">Loan Count</label>
        <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
        <label class="block text-sm font-medium text-gray-700">Minimum Loan Count</label>
        <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
        <label class="block text-sm font-medium text-gray-700">Maximum Loan Count</label>
        <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
    </div>

    <!-- Submit Button -->
    <div class="flex justify-center">
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
    </div>
    </form>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const feeId = ref('');
const feeDescription = ref<string[]>([]);

const fetchFeeDescription = () => {
if (feeId.value) {
    feeDescription.value = ['Membership fee', 'Repayment'];
} else {
    feeDescription.value = [];
}
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
