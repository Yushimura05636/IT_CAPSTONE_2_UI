<template>
<NuxtLayout name="admin">
    <div class="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-16">
    <!-- Top Action Bar -->
    <div class="flex justify-between items-center mb-6 space-x-4">
        <div class="flex space-x-4">
        <button @click="createFee" class="px-5 py-2 bg-green-600 text-white font-medium rounded-full shadow hover:bg-green-500 transition duration-200">
            Create
        </button>
        <button @click="updateFee" class="px-5 py-2 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-500 transition duration-200">
            Modify
        </button>
        <button @click="deleteFee" class="px-5 py-2 bg-red-600 text-white font-medium rounded-full shadow hover:bg-red-500 transition duration-200">
            Delete
        </button>
        </div>
        <div class="relative flex-grow max-w-xs">
        <input
            v-model="searchQuery"
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
        <table class="min-w-full bg-white border-collapse border border-gray-200 rounded-lg shadow-sm">
        <thead class="bg-gray-800 text-white">
            <tr>
            <th class="py-4 px-6 text-left">Select</th>
            <th class="py-4 px-6 text-left">Fees</th>
            <th class="py-4 px-6 text-left">Description</th>
            <th class="py-4 px-6 text-left">Amount</th>
            <th class="py-4 px-6 text-left">Is Active</th>
            <th class="py-4 px-6 text-left">Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr
            v-for="(fee, index) in filteredFees"
            :key="index"
            class="border-b last:border-0 hover:bg-gray-50 transition duration-150"
            >
            <td class="py-4 px-6">
                <input type="radio" v-model="selectedFeeId" :value="fee.id" />
            </td>
            <td class="py-4 px-6">{{ fee.fees }}</td>
            <td class="py-4 px-6">{{ fee.description }}</td>
            <td class="py-4 px-6">{{ formatCurrency(fee.amount) }}</td>
            <td class="py-4 px-6">{{ fee.isActive ? 'Yes' : 'No' }}</td>
            <td class="py-4 px-6">{{ fee.notes }}</td>
            </tr>
            <tr v-if="filteredFees.length === 0">
            <td colspan="6" class="text-center py-6 text-gray-500">No fees found</td>
            </tr>
        </tbody>
        </table>
    </div>
    </div>
</NuxtLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const feesList = ref([
{ id: 1, fees: 'Service Fee', description: 'Fee for service', amount: 100, isActive: true, notes: 'Monthly charge' },
{ id: 2, fees: 'Late Fee', description: 'Fee for late payment', amount: 25, isActive: true, notes: 'Applied after due date' },
// Add more fee items here for testing
]);

const searchQuery = ref('');
const selectedFeeId = ref<number | null>(null);

    // Function to create a new fee
    function createFee() {
    // Implement logic to create a new fee
    navigateTo('Fee/create');
    }

// Function to update an existing fee
function updateFee() {
if (selectedFeeId.value) {
    // Implement logic to update the selected fee
    console.log(`Updating fee with ID: ${selectedFeeId.value}`);
} else {
    alert('Please select a fee to update.');
}
}

// Function to delete a fee
function deleteFee() {
if (selectedFeeId.value) {
    // Implement logic to delete the selected fee
    console.log(`Deleting fee with ID: ${selectedFeeId.value}`);
} else {
    alert('Please select a fee to delete.');
}
}

// Computed property to filter fees based on the search query
const filteredFees = computed(() => {
if (!searchQuery.value) return feesList.value; // Return all fees if no search query
return feesList.value.filter((fee) =>
    fee.fees.toLowerCase().includes(searchQuery.value.toLowerCase())
);
});

// Format currency
const formatCurrency = (amount: number) => {
return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
}).format(amount);
};
</script>

<style scoped>
.mt-16 {
margin-top: 4rem; /* Adjusted margin for better spacing */
}

table {
border-collapse: separate;
border-spacing: 0;
}

th {
border-bottom: 2px solid #e2e8f0;
}

td {
border-bottom: 1px solid #e2e8f0;
}

button {
transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

button:hover {
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
