<template>
    <NuxtLayout name="admin">
        <main>
            <div class="p-4">
                <div class="flex justify-between items-center mb-4">
                    <div>
                        <select v-model="category" class="w-48 h-12 bg-white border border-black">
                            <option value="city">City</option>
                            <option value="province">Province</option>
                            <option value="country">Country</option>
                            <option value="nameType">Name Type</option>
                        </select>
                    </div>
                    <div>
                        <button @click="createNewEntry" class="w-24 h-12 bg-blue-500 text-white border border-black">
                            Create
                        </button>
                    </div>
                </div>

                <div class="w-full border border-black">
                    <div class="flex justify-between items-center bg-gray-800 text-white p-2 border-b border-black">
                        <div class="font-bold">Name</div>
                        <div class="flex space-x-2">
                            <button @click="createEntry" class="w-16 h-8 bg-blue-500 text-white border border-black">
                                Create
                            </button>
                            <button @click="viewEntry" class="w-16 h-8 bg-green-500 text-white border border-black">
                                View
                            </button>
                            <button @click="updateEntry" class="w-16 h-8 bg-yellow-500 text-white border border-black">
                                Update
                            </button>
                        </div>
                    </div>
                    <div class="p-2">
                        <div class="flex items-center space-x-2 py-1">
                            <input type="checkbox" v-model="cityChecked" class="form-checkbox h-5 w-5 text-blue-600">
                            <div>City</div>
                        </div>
                        <div class="flex items-center space-x-2 py-1">
                            <input type="checkbox" v-model="provinceChecked" class="form-checkbox h-5 w-5 text-blue-600">
                            <div>Province</div>
                        </div>
                        <div class="flex items-center space-x-2 py-1">
                            <input type="checkbox" v-model="countryChecked" class="form-checkbox h-5 w-5 text-blue-600">
                            <div>Country</div>
                        </div>
                        <div class="flex items-center space-x-2 py-1">
                            <input type="checkbox" v-model="nameTypeChecked" class="form-checkbox h-5 w-5 text-blue-600">
                            <div>Name Type</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const category = ref<string>('');
const cityChecked = ref<boolean>(false);
const provinceChecked = ref<boolean>(false);
const countryChecked = ref<boolean>(false);
const nameTypeChecked = ref<boolean>(false);

const getFormData = () => ({
  category: category.value,
  cityChecked: cityChecked.value,
  provinceChecked: provinceChecked.value,
  countryChecked: countryChecked.value,
  nameTypeChecked: nameTypeChecked.value,
});

const createNewEntry = () => {
  const data = getFormData();
  console.log('Creating new entry:', data);
  alert(`Created a new entry with Category: ${data.category}`);
};

const createEntry = () => {
  const data = getFormData();
  console.log('Creating entry:', data);
  alert(`Created entry for Country: ${data.countryChecked}`);
};

const viewEntry = () => {
  const data = getFormData();
  console.log('Viewing entry:', data);
  alert(`Viewing entry for City: ${data.cityChecked}, Province: ${data.provinceChecked}`);
};

const updateEntry = () => {
  const data = getFormData();
  console.log('Updating entry:', data);
  alert(`Updated entry for Name Type: ${data.nameTypeChecked}`);
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>