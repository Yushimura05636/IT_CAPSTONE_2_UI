<template>
  <NuxtLayout name="admin">
    <div class="bg-white p-4 md:p-8">
      <h2 class="text-gray-800 text-xl font-bold mb-4">Create Customer</h2>

      <form @submit.prevent="createCustomer">
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
            <label for="Cellphone No" class="block text-gray-700">Cellphone No</label>
            <input v-model="personality.cellphone_no" type="text" id="cellphoneNo" class="w-full border rounded-lg px-4 py-2" />
          </div>

          <div>
            <label for="purokZone" class="block text-gray-700">Purok Zone</label>
            <input v-model="personality.purok_zone" type="text" id="purokZone" class="w-full border rounded-lg px-4 py-2" />
          </div>

          <div>
            <label for="Postal Code" class="block text-gray-700">Postal Code</label>
            <input v-model="personality.postal_code" type="text" id="postalCode" class="w-full border rounded-lg px-4 py-2" />
          </div>

          <!-- Additional Fields -->
          <div>
            <label for="barangayId" class="block text-gray-700">Barangay</label>
            <select v-model="personality.barangay_id" id="barangayId" class="w-full border rounded-lg px-4 py-2">
              <option v-for="barangay in state.barangays" :key="barangay.id" :value="barangay.id">
                {{ barangay.description }}
              </option>
            </select>
          </div>

          <div>
            <label for="cityId" class="block text-gray-700">City</label>
            <select v-model="personality.city_id" id="cityId" class="w-full border rounded-lg px-4 py-2">
              <option v-for="city in state.cities" :key="city.id" :value="city.id">
                {{ city.description }}
              </option>
            </select>
          </div>

          <div>
            <label for="countryId" class="block text-gray-700">Country</label>
            <select v-model="personality.country_id" id="countryId" class="w-full border rounded-lg px-4 py-2">
              <option v-for="country in state.countries" :key="country.id" :value="country.id">
                {{ country.description }}
              </option>
            </select>
          </div>

          <div>
            <label for="provinceId" class="block text-gray-700">Province</label>
            <select v-model="personality.province_id" id="provinceId" class="w-full border rounded-lg px-4 py-2">
              <option v-for="province in state.provinces" :key="province.id" :value="province.id">
                {{ province.description }}
              </option>
            </select>
          </div>

          <div>
            <label for="creditStatusId" class="block text-gray-700">Credit Status</label>
            <select v-model="personality.credit_status_id" id="creditStatusId" class="w-full border rounded-lg px-4 py-2">
              <option v-for="creditStatus in state.creditStatuses" :key="creditStatus.id" :value="creditStatus.id">
                {{ creditStatus.description }}
              </option>
            </select>
          </div>

          <!-- <div>
            <label for="creditStatusId" class="block text-gray-700">Personality Status</label>
            <select v-model="personality.personality_status_code" id="creditStatusId" class="w-full border rounded-lg px-4 py-2">
              <option v-for="creditStatus in state.personality_status_code" :key="creditStatus.id" :value="creditStatus.id">
                {{ creditStatus.description }}
              </option>
            </select>
          </div> -->

          <!-- Customer Fields -->
          <div>
            <label for="groupId" class="block text-gray-700">Group Name</label>
            <select v-model="customer.group_id" id="groupId" class="w-full border rounded-lg px-4 py-2" v-if="!state.isTableLoading">
              <option v-for="groups in state.groups" :key="groups.id" :value="groups.id">
                {{ groups.description }} 
              </option>
            </select>
          </div>

          <div>
            <label for="passbookNo" class="block text-gray-700">Passbook No</label>
            <input v-model="customer.passbook_no" type="number" id="passbookNo" class="w-full border rounded-lg px-4 py-2" />
          </div>

          <div>
            <label for="groupId" class="block text-gray-700">Loan Count</label>
            <select v-model="customer.loan_count_id" id="groupId" class="w-full border rounded-lg px-4 py-2" v-if="!state.isTableLoading">
              <option v-for="groups in state.loan_count" :key="groups.id" :value="groups.id">
                {{ groups.loan_count }} 
              </option>
            </select>
          </div>

          <div>
            <label for="dateTimeRegistered" class="block text-gray-700">Date Time Registered</label>
            <input v-model="personality.datetime_registered" type="date" id="dateTimeRegistered" class="w-full border rounded-lg px-4 py-2" />
          </div>

          <div>
            <label for="enableMortuary" class="block text-gray-700">Enable Mortuary</label>
            <select v-model="customer.enable_mortuary" id="enable_mortuary" class="w-full border rounded-lg px-4 py-2">
              <option value="0">Select</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
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
        <div class="mt-4">
          <table class="min-w-full table-auto">
                <thead>
                    <tr>
                        <th class="px-4 py-2">Select Document</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="px-4 py-2">
                            <label class="flex items-center">
                                <input type="checkbox" v-model="barangayCertificate" class="form-checkbox h-5 w-5 text-green-600" />
                                <span class="ml-2 text-gray-700">Barangay Certificate</span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2">
                            <label class="flex items-center">
                                <input type="checkbox" v-model="birthCertificate" class="form-checkbox h-5 w-5 text-green-600" />
                                <span class="ml-2 text-gray-700">Birth Certificate</span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2">
                            <label class="flex items-center">
                                <input type="checkbox" v-model="validID" class="form-checkbox h-5 w-5 text-green-600" />
                                <span class="ml-2 text-gray-700">Valid ID</span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2">
                            <label class="flex items-center">
                                <input type="checkbox" v-model="proofOfAddress" class="form-checkbox h-5 w-5 text-green-600" />
                                <span class="ml-2 text-gray-700">Proof of Address</span>
                            </label>
                        </td>
                    </tr>
                </tbody>
          </table>
        </div>

        <div class="mt-4">
          <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
            Create Customer
          </button>
        </div>
      </form>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { ref, onMounted } from 'vue';

import { PermissionService } from '~/models/Permission';
import { apiService } from '~/routes/api/API';

const barangayCertificate = ref(false);
const birthCertificate = ref(false);
const validID = ref(false);
const proofOfAddress = ref(false);


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
  name_type: 1, //for customer
  personality_status_code: '', // pending
  notes: '',
});

const customer = ref({
  group_id: '',
  passbook_no: '',
  loan_count_id: 0,
  enable_mortuary: '',
  mortuary_coverage_start: '',
  mortuary_coverage_end: '',
});

const state = ref({
  barangays: [],
  cities: [],
  countries: [],
  provinces: [],
  creditStatuses: [],
  groups: [],
  personality_status_code: [],
  loan_count: [],
  isTableLoading: false,
});

const fetchBarangays = async () => {
  // Replace with your actual API call
  try {
    const response = await apiService.getNoAuth({}, "barangay");

    state.value.barangays = response.data;
  } catch (error) {
    toast.error(error.message, {
      autoClose: 5000,
    })
  }
};

const fetchCities = async () => {
  // Replace with your actual API call
  try {
    const response = await apiService.getNoAuth({}, "city");

    state.value.cities = response.data;

  } catch (error) {
    toast.error(error.message, {
      autoClose: 5000,
    })
  }
};

const fetchCountries = async () => {
  try {
    const response = await apiService.getNoAuth({}, "country");

    state.value.countries = response.data;
  } catch (error) {
    toast.error(error.message, {
      autoClose: 5000,
    })
  }
};

const fetchProvinces = async () => {
  // Replace with your actual API call
  try {
    const response = await apiService.getNoAuth({}, "province");
    state.value.provinces = response.data;
  } catch (error) {
    toast.error(error.message, {
      autoClose: 5000,
    })
  }
};

const fetchCreditStatuses = async () => {
  // Replace with your actual API call
  try {
    const response = await apiService.getNoAuth({}, "credit_status");
    state.value.creditStatuses = response.data;
  } catch (error) {
    toast.error(error.message, {
      autoClose: 5000,
    })
  }
};

const fetchGroups = async () => {
  // Replace with your actual API call
  try {
    const response = await apiService.getNoAuth({}, "customer_group");

    state.value.groups = response.data;
  } catch (error) {
    toast.error(error.message, {
      autoClose: 5000,
    })
  }
};

const fetchPersonalityStatusCode = async () => {
  // Replace with your actual API call
  try {
    const response = await apiService.getNoAuth({}, "personality_status_map");
    state.value.personality_status_code = response.data;
  } catch (error) {
    toast.error(error.message, {
      autoClose: 5000,
    })
  }
};

const fetchLoanCount = async () => {
  // Replace with your actual API call
  try {
    const response = await apiService.getLoanCountNoAuth({});

    state.value.loan_count = response.data;

    debugger;
  } catch (error) {
    toast.error(error.message, {
      autoClose: 5000,
    })
  }
};

onMounted(async () => {
  await Promise.all([
    fetchBarangays(),
    fetchCities(),
    fetchCountries(),
    fetchProvinces(),
    fetchCreditStatuses(),
    fetchGroups(),
    // fetchPersonalityStatusCode(),
    fetchLoanCount(),
  ]);
});




const createCustomer = async () => {
  try {
     // Check if all required documents (checkboxes) are checked
    if (barangayCertificate.value && birthCertificate.value && validID.value && proofOfAddress.value) {
      // If all checkboxes are checked, set personality_status_code to 2 (verified)
      personality.value.personality_status_code = 2;
    } else if(barangayCertificate.value || birthCertificate.value || validID.value || proofOfAddress.value) {
      // If any checkbox is unchecked, set personality_status_code to 1 (pending)
      personality.value.personality_status_code = 1;
    // Exit the function early if not all checkboxes are checked
    }else{
      toast.error("Please check all required documents before proceeding", {
        autoClose: 2000,
      });
      return; 
    }
    const jsonObject = { 
      customer: {
            group_id: customer.value.group_id,
            passbook_no: customer.value.passbook_no,
            loan_count: customer.value.loan_count_id,
            enable_mortuary: customer.value.enable_mortuary,
            personality_id: 0,
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
            name_type_code: personality.value.name_type, // Assuming this remains unchanged
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
    await apiService.createCustomer(jsonObject);
    toast.success("Customer create successfully!", {
          autoClose: 2000,
          });
          // Introduce a delay before navigating
          setTimeout(() => {
            navigateTo('/customers');  
          }, 2000); // Redirect to the customer list page
  } catch (error) {
    toast.error('Error creating customer');
    toast.error(error.message, {
        autoClose: 5000,
      });
  }
};
</script>

<style scoped>
/* Add your styles here if needed */
</style>
