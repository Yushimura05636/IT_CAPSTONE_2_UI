<template>
    <NuxtLayout name="admin">
        <main>
            <div class="bg-white">
                <header class="w-full py-8 px-4 md:px-16">
                    <div class="flex justify-between items-center">
                        <img src="../img/LendCash_Logo-removebg-preview.png" class="w-20" alt="logo" />
                    </div>
                </header>
            </div>

            <div class="container mx-auto p-4">
                <div class="flex justify-between items-center mb-4">
                    <h1 class="text-xl font-bold"></h1>
                </div>
                <div class="mb-4">
                    <input
                        v-model="searchQuery"
                        @input="fetchMembers"
                        type="text"
                        placeholder="Search..."
                        class="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <table class="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th class="py-2 px-4 border-b">Group Name</th>
                            <th class="py-2 px-4 border-b">Client Name</th>
                            <th class="py-2 px-4 border-b">Status</th>
                            <th class="py-2 px-4 border-b">Birth Place</th>
                            <th class="py-2 px-4 border-b">Date of Birth</th>
                            <th class="py-2 px-4 border-b">Civil Status</th>
                            <th class="py-2 px-4 border-b">Gender</th>
                            <th class="py-2 px-4 border-b">Occupation</th>
                            <th class="py-2 px-4 border-b">Address</th>
                            <th class="py-2 px-4 border-b">Contact Number</th>
                            <th class="py-2 px-4 border-b">Membership Date</th>
                            <th class="py-2 px-4 border-b">Date Registered</th>
                            <th class="py-2 px-4 border-b">Reference</th>
                            <th class="py-2 px-4 border-b">Miscellaneous</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="member in filteredMembers" :key="member.id">
                            <td class="py-2 px-4 border-b">{{ member.groupName }}</td>
                            <td class="py-2 px-4 border-b">{{ member.clientName }}</td>
                            <td class="py-2 px-4 border-b">{{ member.isActive ? 'Active' : 'Inactive' }}</td>
                            <td class="py-2 px-4 border-b">{{ member.birthPlace }}</td>
                            <td class="py-2 px-4 border-b">{{ member.dateOfBirth }}</td>
                            <td class="py-2 px-4 border-b">{{ member.civilStatus }}</td>
                            <td class="py-2 px-4 border-b">{{ member.gender }}</td>
                            <td class="py-2 px-4 border-b">{{ member.occupation }}</td>
                            <td class="py-2 px-4 border-b">{{ member.address }}</td>
                            <td class="py-2 px-4 border-b">{{ member.contactNumber }}</td>
                            <td class="py-2 px-4 border-b">{{ member.membershipDate }}</td>
                            <td class="py-2 px-4 border-b">{{ member.dateRegistered }}</td>
                            <td class="py-2 px-4 border-b">{{ member.reference }}</td>
                            <td class="py-2 px-4 border-b">{{ member.miscellaneous }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="mt-4">
                <a href="Group" @click.prevent="goBack" class="bg-gray-500 text-white px-4 py-2 rounded inline-block">Back</a>
            </div>

        </main>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// Reactive variables
const members = ref<Array<any>>([
  // Sample member data to avoid errors and for testing
  {
    id: 1,
    groupName: 'Group A',
    clientName: 'John Doe',
    isActive: true,
    birthPlace: 'City A',
    dateOfBirth: '1990-01-01',
    civilStatus: 'Single',
    gender: 'Male',
    occupation: 'Engineer',
    address: '123 Street, City A',
    contactNumber: '1234567890',
    membershipDate: '2023-01-01',
    dateRegistered: '2023-01-01',
    reference: 'Ref 1',
    miscellaneous: 'Misc 1',
  },
  {
    id: 2,
    groupName: 'Group B',
    clientName: 'Jane Smith',
    isActive: false,
    birthPlace: 'City B',
    dateOfBirth: '1992-02-02',
    civilStatus: 'Married',
    gender: 'Female',
    occupation: 'Doctor',
    address: '456 Avenue, City B',
    contactNumber: '0987654321',
    membershipDate: '2023-02-02',
    dateRegistered: '2023-02-02',
    reference: 'Ref 2',
    miscellaneous: 'Misc 2',
  },
]);

const searchQuery = ref<string>('');

// Simulated fetchMembers method (no API, just logs a message)
const fetchMembers = () => {
  console.log('Fetching members...'); // Simulated API call
};

// Automatically fetch members on page load (simulated here)
onMounted(fetchMembers);

// Computed property for filtered members based on search query
const filteredMembers = computed(() => {
  if (searchQuery.value) {
    return members.value.filter(
      (member) =>
        member.groupName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        member.clientName.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
  return members.value;
});
</script>

<style scoped>
.container {
  max-width: auto;
  margin: auto;
}
</style>