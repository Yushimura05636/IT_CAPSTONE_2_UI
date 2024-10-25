<template>
    <div class="bg-gray-100 h-screen flex items-center justify-center p-6">
        <form @submit.prevent="handleSubmit" class="w-full max-w-lg bg-white p-8 rounded-md shadow-md">
            <div class="container mx-auto p-4">
                <div class="border-b border-gray-900/10 pb-10">
                    <h1 class="text-xl font-bold leading-7 text-gray-900">Check Documents</h1>
                    <div class="mt-10 grid grid-rows-1 gap-x-6 gap-y-8 sm:grid-rows-6">
                        <div class="sm:col-span-2 flex items-center">
                            <input type="checkbox" v-model="barangayCertificate" class="form-checkbox h-5 w-5 text-green-600" />
                            <span class="ml-2 text-gray-700">Barangay Certificate </span>
                        </div>
                        <div class="sm:col-span-2">
                            <input type="checkbox" v-model="birthCertificate" class="form-checkbox h-5 w-5 text-green-600" />
                            <span class="ml-2 text-gray-700">Birth Certificate</span>
                        </div>
                        <div class="sm:col-span-2">
                            <input type="checkbox" v-model="validID" class="form-checkbox h-5 w-5 text-green-600" />
                            <span class="ml-2 text-gray-700">Valid ID</span>
                        </div>
                        <div class="sm:col-span-2">
                            <input type="checkbox" v-model="proofOfAddress" class="form-checkbox h-5 w-5 text-green-600" />
                            <span class="ml-2 text-gray-700">Proof of Address</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" class="text-sm font-bold leading-6 text-gray-900" @click="back">
                    <a>Cancel</a>
                </button>
                <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { CustomersService } from '~/models/Customer';
import { apiService } from '~/routes/api/API';

// Checkbox state refs
const barangayCertificate = ref(false);
const birthCertificate = ref(false);
const validID = ref(false);
const proofOfAddress = ref(false);

// Personality and customer refs
const personality = ref({
    first_name: '',
    family_name: '',
    middle_name: '',
    email_address: '',
    telephone_no: '',
    birthday: '',
    gender_code: '',
    civil_status: '',
    house_street: '',
    cellphone_no: '',
    purok_zone: '',
    postal_code: '',
    barangay_id: '',
    city_id: '',
    country_id: '',
    province_id: '',
    credit_status_id: '',
    datetime_registered: '',
    name_type: 1, // for customer
    personality_status_code: '',
    notes: '',
});

const customer = ref({
    group_id: '',
    passbook_no: '',
    loan_count: 0,
    enable_mortuary: '',
    mortuary_coverage_start: '',
    mortuary_coverage_end: '',
    personality_id: 0,
});

function handleSubmit() {
    // Check if all checkboxes are selected
    if (barangayCertificate.value && birthCertificate.value && validID.value && proofOfAddress.value) {
        // Update the personality status code
        personality.value.personality_status_code = '2'; // Set status code to "2"
        updateCustomer();
        toast.success("Customer approved successfully!", {
            autoClose: 2000,
        });

        // Introduce a delay before navigating
        setTimeout(() => {
            navigateTo('/customers'); // Redirect to the customer list page
        }, 2000);
    } else {
        toast.error("Select all the checkbox", {
            autoClose: 2000,
        });
    }
}

const fetchCustomer = async () => {
    try {
        const customerId = CustomersService.id;

        // Check if customerId is defined and is a valid number
        if (!customerId || isNaN(Number(customerId))) {
            toast.error('Invalid Id!', {
                autoClose: 5000,
            });
            navigateTo('/customers'); // Redirect to the customer list page or show an error
            return;
        }

        // Fetch customer data
        const response = await apiService.getCustomerById({}, customerId);

        // Merge response data into customer and personality
        Object.assign(customer.value, response.customer);
        Object.assign(personality.value, response.personality);

        // Log the updated customer and personality data
        console.log("Updated Customer Data:", customer.value);
        console.log("Updated Personality Data:", personality.value);

    } catch (error) {
        toast.error(`${error}`, {
            autoClose: 5000,
        });
    }
}

const updateCustomer = async () => {
    try {
        const customerId = CustomersService.id;
        const jsonObject = {
            customer: {
                group_id: customer.value.group_id,
                passbook_no: customer.value.passbook_no,
                loan_count: customer.value.loan_count,
                enable_mortuary: customer.value.enable_mortuary,
                personality_id: customer.value.personality_id,
            },
            personality: {
                datetime_registered: personality.value.datetime_registered,
                family_name: personality.value.family_name,
                middle_name: personality.value.middle_name,
                first_name: personality.value.first_name,
                birthday: personality.value.birthday,
                civil_status: personality.value.civil_status,
                gender_code: personality.value.gender_code,
                house_street: personality.value.house_street,
                purok_zone: personality.value.purok_zone,
                postal_code: personality.value.postal_code,
                telephone_no: personality.value.telephone_no,
                email_address: personality.value.email_address,
                cellphone_no: personality.value.cellphone_no,
                name_type_code: personality.value.name_type,
                personality_status_code: personality.value.personality_status_code,
                barangay_id: personality.value.barangay_id,
                city_id: personality.value.city_id,
                country_id: personality.value.country_id,
                province_id: personality.value.province_id,
                credit_status_id: personality.value.credit_status_id,
                notes: personality.value.notes,
            }
        };

        await apiService.updateCustomer(jsonObject, customerId);
    } catch (error) {
        toast.error('Error updating customer: ' + error);
        toast.error(`${error}`, {
            autoClose: 5000,
        });
    }
};

function back() {
    navigateTo("/customers");
}

// Fetch customer data when the component is mounted
onMounted(() => {
    fetchCustomer();
});
</script>
