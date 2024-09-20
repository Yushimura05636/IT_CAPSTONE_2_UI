<template>
  <div class="bg-white p-4 md:p-8">
    <h2 class="text-gray-800 text-xl font-bold mb-4">Edit Customer</h2>

    <form @submit.prevent="updateCustomer">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Personality Fields -->
        <div>
          <label for="firstName" class="block text-gray-700">First Name</label>
          <input v-model="personality.first_name" type="text" id="firstName" class="w-full border rounded-lg px-4 py-2" required />
        </div>

        <div>
          <label for="lastName" class="block text-gray-700">Last Name</label>
          <input v-model="personality.family_name" type="text" id="lastName" class="w-full border rounded-lg px-4 py-2" required />
        </div>

        <div>
          <label for="middleName" class="block text-gray-700">Middle Name</label>
          <input v-model="personality.middle_name" type="text" id="middleName" class="w-full border rounded-lg px-4 py-2" required />
        </div>

        <div>
          <label for="email" class="block text-gray-700">Email</label>
          <input v-model="personality.email_address" type="email" id="email" class="w-full border rounded-lg px-4 py-2" required />
        </div>

        <div>
          <label for="telephone" class="block text-gray-700">Telephone#</label>
          <input v-model="personality.telephone_no" type="text" id="telephone" class="w-full border rounded-lg px-4 py-2" />
        </div>

        <div>
          <label for="birthday" class="block text-gray-700">Birthday</label>
          <input v-model="personality.birthday" type="date" id="birthday" class="w-full border rounded-lg px-4 py-2" required />
        </div>

        <div>
          <label for="gender" class="block text-gray-700">Gender</label>
          <select v-model="personality.gender_code" id="gender" class="w-full border rounded-lg px-4 py-2">
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
        </div>

        <div>
          <label for="civilStatus" class="block text-gray-700">Civil Status</label>
          <select v-model="personality.civil_status" id="civilStatus" class="w-full border rounded-lg px-4 py-2">
            <option value="0">Select</option>
            <option value="1">Single</option>
            <option value="2">Married</option>
            <option value="3">Divorced</option>
            <option value="4">Widowed</option>
          </select>
        </div>

        <div>
          <label for="houseStreet" class="block text-gray-700">House Street</label>
          <input v-model="personality.house_street" type="text" id="houseStreet" class="w-full border rounded-lg px-4 py-2" />
        </div>

        <div>
          <label for="purokZone" class="block text-gray-700">Purok Zone</label>
          <input v-model="personality.purok_zone" type="text" id="purokZone" class="w-full border rounded-lg px-4 py-2" />
        </div>

        <!-- Customer Fields -->
        <div>
          <label for="groupId" class="block text-gray-700">Group ID</label>
          <input v-model="customer.group_id" type="number" id="groupId" class="w-full border rounded-lg px-4 py-2" />
        </div>

        <div>
          <label for="passbookNo" class="block text-gray-700">Passbook No</label>
          <input v-model="customer.passbook_no" type="number" id="passbookNo" class="w-full border rounded-lg px-4 py-2" />
        </div>

        <div>
          <label for="loanCount" class="block text-gray-700">Loan Count</label>
          <input v-model="customer.loan_count" type="number" id="loanCount" class="w-full border rounded-lg px-4 py-2" />
        </div>

        <div>
          <label for="enableMortuary" class="block text-gray-700">Enable Mortuary</label>
          <input v-model="customer.enable_mortuary" type="number" id="enableMortuary" class="w-full border rounded-lg px-4 py-2" />
        </div>

        <div>
          <label for="mortuaryCoverageStart" class="block text-gray-700">Mortuary Coverage Start</label>
          <input v-model="customer.mortuary_coverage_start" type="date" id="mortuaryCoverageStart" class="w-full border rounded-lg px-4 py-2" />
        </div>

        <div>
          <label for="mortuaryCoverageEnd" class="block text-gray-700">Mortuary Coverage End</label>
          <input v-model="customer.mortuary_coverage_end" type="date" id="mortuaryCoverageEnd" class="w-full border rounded-lg px-4 py-2" />
        </div>
      </div>

      <div>
          <label for="dateTimeRegistered" class="block text-gray-700">Date Time Registered</label>
          <input v-model="personality.datetime_registered" type="date" id="dateTimeRegistered" class="w-full border rounded-lg px-4 py-2" />
        </div>

      <div class="mt-4">
        <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
          Update Customer
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { CustomersService } from '~/models/Customer';
import { apiService } from '~/routes/api/API';

const route = useRoute();
const router = useRouter();

const personality = ref({
  first_name: '',
  family_name: '',
  middle_name: '',
  email_address: '',
  telephone_no: '',
  birthday: new Date().toISOString().split('T')[0], // Set to current date
  gender_code: 0, // Default or set as needed (1 for Male, 2 for Female)
  civil_status: 0, // Default or set as needed
  house_street: '',
  purok_zone: '',
  postal_code: '',
  cellphone_no: '',
  personality_status_code: 0,
  barangay_id: 0,
  city_id: 0,
  country_id: 0,
  province_id: 0,
  credit_status_id: 0,
  notes: undefined, // Optional
  datetime_registered: new Date().toISOString().split('T')[0],
  name_type_code: 0,
})

const customer = ref({
  group_id: 0, // Set as necessary
  passbook_no: 0, // Set as necessary
  loan_count: 0, // Set as necessary
  enable_mortuary: 0, // Set as necessary
  mortuary_coverage_start: undefined, // Optional
  mortuary_coverage_end: undefined, // Optional
  personality_id: 0,
});


// Call the fetch function
fetchCustomerData();

function formatDateTimeToMySQL(date: any) {
  const pad = (num: any) => (num < 10 ? '0' + num : num);
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`; // Return as Y-m-d H:i:s
}

function formatDateToMySQL(date: any) {
  const pad = (num: any) => (num < 10 ? '0' + num : num);
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1); // Months are zero-based
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


// Fetch customer data when the component is mounted
async function fetchCustomerData() {
  const customerId = CustomersService.id;
  debugger;
  // Check if customerId is defined and is a valid number
  if (!customerId || isNaN(Number(customerId))) {
    alert('Invalid customer ID');
    navigateTo('/Libraries/CustomerView'); // Redirect to the customer list page or show an error
    return;
  } // Assuming you pass the ID in the route
  const response = await apiService.getCustomerById([],customerId);
  debugger; // Fetch customer data
  Object.assign(customer.value, response.customer);
  Object.assign(personality.value, response.personality) // Merge response data into customer
}

const updateCustomer = async () => {
  try {
    const customerId = CustomersService.id;
    // Check if customerId is defined and is a valid number
    if (!customerId || isNaN(Number(customerId))) {
      alert('Invalid customer ID');
      router.push('/customer'); // Redirect to the customer list page or show an error
      return;
    }
    
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
            family_name: personality.value.family_name, // Get from personality ref
            middle_name: personality.value.middle_name, // Assuming this remains unchanged
            first_name: personality.value.first_name, // Get from personality ref
            birthday: personality.value.birthday, // Get from personality ref
            civil_status: personality.value.civil_status, // Get from personality ref
            gender_code: personality.value.gender_code, // Get from personality ref
            house_street: personality.value.house_street, // Get from personality ref
            purok_zone: personality.value.purok_zone, // Get from personality ref
            postal_code: personality.value.postal_code, // Get from personality ref
            telephone_no: personality.value.telephone_no, // Get from personality ref
            email_address: personality.value.email_address, // Get from personality ref
            cellphone_no: personality.value.cellphone_no, // Get from personality ref
            name_type_code: personality.value.name_type_code, // Assuming this remains unchanged
            personality_status_code: personality.value.personality_status_code, // Get from personality ref
            barangay_id: personality.value.barangay_id, // Get from personality ref
            city_id: personality.value.city_id, // Get from personality ref
            country_id: personality.value.country_id, // Get from personality ref
            province_id: personality.value.province_id, // Get from personality ref
            credit_status_id: personality.value.credit_status_id, // Get from personality ref
            notes: personality.value.notes, // Get from personality ref, optional
        }
    };

    debugger;
    await apiService.updateCustomer(jsonObject, customerId);
    alert('Customer updated successfully!');
    navigateTo('/Libraries/CustomerView'); // Redirect to the customer list page
  } catch (error) {
    alert('Error updating customer: ' + error);
    console.error(error);
  }
};
</script>