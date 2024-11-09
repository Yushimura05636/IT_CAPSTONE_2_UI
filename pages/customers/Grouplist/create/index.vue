<template>
<NuxtLayout name="admin">
    <div class="p-6 max-w-screen-lg mx-auto bg-white shadow-lg rounded-lg">
    <h1 class="text-3xl font-bold mb-6 text-teal-800">Create Group</h1>

    <form @submit.prevent="submitForm" class="space-y-6">
        <div>
        <label for="groupSelect" class="block text-sm font-medium text-gray-700 mb-2">Select Group</label>
        <select
            id="groupSelect"
            v-model="selectedGroup"
            @change="loadGroupMembers"
            class="w-full border-2 border-teal-300 rounded-lg px-4 py-2 focus:outline-none focus:border-teal-500"
        >
            <option value="">Select a group</option>
            <option v-for="group in groups" :key="group.id" :value="group.id">{{ group.name }}</option>
        </select>
        </div>

        <div v-if="selectedGroup">
        <h2 class="text-xl font-semibold mb-3 text-teal-700">Group Members</h2>
        <div class="overflow-x-auto bg-teal-50 p-4 rounded-lg shadow-md">
            <table class="min-w-full bg-white border border-teal-200 rounded-lg shadow-lg">
            <thead class="bg-teal-100 text-teal-700 uppercase text-sm">
                <tr>
                <th class="px-6 py-3 text-left">Name</th>
                <th class="px-6 py-3 text-left">Date Added</th>
                <th class="px-6 py-3 text-left">Loan Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="member in groupMembers" :key="member.id" class="hover:bg-teal-50 transition duration-150">
                <td class="px-6 py-4 border-b border-teal-100">{{ member.name }}</td>
                <td class="px-6 py-4 border-b border-teal-100">{{ member.dateAdded }}</td>
                <td class="px-6 py-4 border-b border-teal-100">{{ member.loanAmount }}</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>

        <div>
        <label for="collectorSelect" class="block text-sm font-medium text-gray-700 mb-2">Collector's Name</label>
        <select
            id="collectorSelect"
            v-model="selectedCollector"
            class="w-full border-2 border-teal-300 rounded-lg px-4 py-2 focus:outline-none focus:border-teal-500"
        >
            <option value="">Select a collector</option>
            <option v-for="collector in collectors" :key="collector.id" :value="collector.id">{{ collector.name }}</option>
        </select>
        </div>

        <div class="flex justify-between">
        <button
            type="button"
            @click="cancelCreation"
            class="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-400 transition"
        >
            Cancel
        </button>
        <button
            type="submit"
            class="px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition"
            :disabled="!isFormValid"
        >
            Create Group
        </button>
        </div>
    </form>
    </div>
</NuxtLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const groups = ref([
{ id: 1, name: 'Group A' },
{ id: 2, name: 'Group B' },
{ id: 3, name: 'Group C' },
]);

const collectors = ref([
{ id: 1, name: 'John Doe' },
{ id: 2, name: 'Jane Smith' },
{ id: 3, name: 'Alice Johnson' },
]);

const selectedGroup = ref('');
const groupMembers = ref([]);
const selectedCollector = ref('');

const isFormValid = computed(() => {
return selectedGroup.value !== '' && selectedCollector.value !== '';
});

function loadGroupMembers() {
// Simulating an API call to fetch group members
const mockMembers = [
    { id: 1, name: 'John Doe', dateAdded: '2023-05-01', loanAmount: 1000 },
    { id: 2, name: 'Jane Smith', dateAdded: '2023-05-02', loanAmount: 1500 },
    { id: 3, name: 'Alice Johnson', dateAdded: '2023-05-03', loanAmount: 2000 },
    { id: 4, name: 'Bob Brown', dateAdded: '2023-05-04', loanAmount: 1800 },
];

groupMembers.value = mockMembers;
}

function submitForm() {
if (isFormValid.value) {
    // Here you would typically send the form data to your backend
    console.log('Form submitted', {
    groupId: selectedGroup.value,
    collectorId: selectedCollector.value,
    members: groupMembers.value
    });

    // Navigate back to the group list or to the newly created group
    router.push('/customers/Grouplist');
}
}

function cancelCreation() {
// Navigate back to the group list without creating a new group
router.push('/customers/Grouplist');
}
</script>