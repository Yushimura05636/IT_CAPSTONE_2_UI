<template>
<div class="bg-gray-100 h-screen flex items-center justify-center p-6">
    <form @submit.prevent="createUser" class="w-full max-w-lg bg-white p-8 rounded-md shadow-md">
        <div class="container mx-auto p-4">
            <div class="border-b border-gray-900/10 pb-12">
                <h1 class="text-xl font-bold leading-7 text-gray-900">Create User</h1>
                <div class="mt-10 grid grid-rows-1 gap-x-6 gap-y-8 sm:grid-rows-6">
                    <div class="sm:col-span-2">
                        <label for="employee_id" class="block text-sm font-bold leading-6 text-gray-900">Employee ID <span class="text-red-600">*</span></label>
                        <select id="employee_id" v-if="!state.isTableLoading" class="block w-full h-10 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-3 py-1.5">
                            <option v-for="employee in state.employee" :key="employee.id"  :value="employee.id">
                                {{ employee.id }}
                            </option>
                        </select>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="lastName" class="block text-sm font-bold leading-6 text-gray-900">Last Name <span class="text-red-600">*</span></label>
                        <div class="mt-2">
                        <input v-model="user.family_name" type="text"  id="lastName"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6" />
                        </div>
                    </div>
                    

                    <div class="sm:col-span-2">
                        <label for="firstName" class="block text-sm font-bold leading-6 text-gray-900">First Name <span class="text-red-600">*</span></label>
                        <div class="mt-2">
                        <input v-model="user.first_name" type="text"  id="firstName" class="block w-full rounded-md border-0 		py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 		focus:ring-indigo-600 sm:text-xl sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="middleName" class="block text-sm font-bold leading-6 text-gray-900">Middle Name <span class="text-red-600">*</span></label>
                        <div class="mt-2">
                        <input v-model="user.middle_name" type="text"  id="middleName"  class="block w-full rounded-md border-0 		py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 		focus:ring-indigo-600 sm:text-xl sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="password" class="block text-sm font-bold leading-6 text-gray-900">Password <span class="text-red-600">*</span></label>
                        <div class="mt-2">
                        <input v-model="user.password" type="password"  id="password"  	class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-		400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="" class="block text-sm font-bold leading-6 text-gray-900">Confirm Password <span class="text-red-600">*</span></label>
                        <div class="mt-2">
                        <input type="password"  id=""  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-		400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" class="text-sm font-bold leading-6 text-gray-900">
            <a href="/">Cancel</a>
            
        </button>
        <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
    </form>
</div>
</template>



<script setup lang="ts">
    import { ref } from 'vue';
import { Employee } from '~/models/Employee';
    import { apiService } from '~/routes/api/API';

    const state = reactive({
    employee: [],
    error: "error",
    isTableLoading: true,
    });
        // Fetch empID and document data from API
        async function fetchEmployeeIDnotInUser() {
        try {
            const params = {};
            const employeeID = await apiService.getEmplooyeIDnotInUser(params);
            
            if (employeeID && employeeID.data) {
            state.employee = employeeID.data;
            console.log(employeeID);
            } else {
            state.error = 'Unexpected response format.';
                }
            } catch (error) {
                state.error = 'Failed to fetch roles. Please try again.';
            } finally {
                state.isTableLoading = false;
            }
        }

onMounted(() => {
    fetchEmployeeIDnotInUser();
});


    const user = ref({
    status_id: 0,
    emplooye_id:'',
    family_name: '',
    middle_name: '',
    first_name: '',
    email_address: '',
    password:''
    })

    // create user data
    const createUser = async () => {
    try {
        const jsonObject = {
        user: {
            status_id: user.value.status_id,
            family_name: user.value.family_name,
            middle_name: user.value.middle_name,
            first_name: user.value.first_name,
            email_address: user.value.email_address,
            password: user.value.password,
            },
        };

        debugger;
        await apiService.createUser(jsonObject);
        alert('User created successfully!');
        navigateTo('/Permission/userTable'); // Redirect to the customer list page
    } catch (error) {
        alert('Error creating user: ' + error);
        console.error(error);
    }
    };
    
    
</script>

<!-- <script setup>
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'

function submitForm(event) {
// Get all the form fields
const formFields = event.target.elements

// Check if all required fields are filled
for (const field of formFields) {
if (field.required && field.value.trim() === '') {
    alert('Please fill in all required fields')
    return
}
}

// If all fields are filled, submit the form
// You can add your form submission logic here
console.log('Form submitted')
}
</script> -->