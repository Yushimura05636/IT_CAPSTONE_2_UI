<template>
  <NuxtLayout name="admin">
    <div class="bg-white p-4 md:p-8">
      <h2 class="text-gray-800 text-xl font-bold mb-4">Create Customer</h2>

      <form @submit.prevent="createCustomer">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Personality Fields -->
          <div>
            <label for="firstName" class="block text-gray-700">First Name</label>
            <input v-model="personality.first_name" type="text" id="firstName" class="w-full border rounded-lg px-4 py-2"  />
            <span v-if="validationErrors.first_name" class="text-red-500 text-sm">{{ validationErrors.first_name }}</span>
          </div>

          <div>
            <label for="lastName" class="block text-gray-700">Last Name</label>
            <input v-model="personality.family_name" type="text" id="lastName" class="w-full border rounded-lg px-4 py-2"  />
            <span v-if="validationErrors.family_name" class="text-red-500 text-sm">{{ validationErrors.family_name }}</span>

          </div>

          <div>
            <label for="middleName" class="block text-gray-700">Middle Name</label>
            <input v-model="personality.middle_name" type="text" id="middleName" class="w-full border rounded-lg px-4 py-2"  />
            <span v-if="validationErrors.middle_name" class="text-red-500 text-sm">{{ validationErrors.middle_name }}</span>

          </div>

          <div>
            <label for="email" class="block text-gray-700">Email</label>
            <input v-model="personality.email_address" type="email" id="email" class="w-full border rounded-lg px-4 py-2"  />
            <span v-if="validationErrors.email_address" class="text-red-500 text-sm">{{ validationErrors.email_address }}</span>

          </div>

          <div>
            <label for="telephone" class="block text-gray-700">Telephone#</label>
            <input v-model="personality.telephone_no" type="text" id="telephone" class="w-full border rounded-lg px-4 py-2" />
          </div>

          <div>
            <label for="birthday" class="block text-gray-700">Birthday</label>
            <input v-model="personality.birthday" type="date" id="birthday" class="w-full border rounded-lg px-4 py-2"  />
            <span v-if="validationErrors.birthday" class="text-red-500 text-sm">{{ validationErrors.birthday }}</span>

          </div>

          <div>
            <label for="gender" class="block text-gray-700">Gender</label>
            <select v-model="personality.gender_code" id="gender" class="w-full border rounded-lg px-4 py-2">
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
            <span v-if="validationErrors.gender_code" class="text-red-500 text-sm">{{ validationErrors.gender_code }}</span>

          </div>

          <div>
            <label for="civilStatus" class="block text-gray-700">Civil Status</label>
            <select v-model="personality.civil_status" id="civilStatus" class="w-full border rounded-lg px-4 py-2">
              <option value="1">Single</option>
              <option value="2">Married</option>
              <option value="3">Divorced</option>
              <option value="4">Widowed</option>
            </select>
            <span v-if="validationErrors.civil_status" class="text-red-500 text-sm">{{ validationErrors.civil_status }}</span>

          </div>

          <div>
            <label for="houseStreet" class="block text-gray-700">House Street</label>
            <input v-model="personality.house_street" type="text" id="houseStreet" class="w-full border rounded-lg px-4 py-2" />
            <span v-if="validationErrors.house_street" class="text-red-500 text-sm">{{ validationErrors.house_street }}</span>

          </div>

          <div>
            <label for="Cellphone No" class="block text-gray-700">Cellphone No</label>
            <input v-model="personality.cellphone_no" type="text" id="cellphoneNo" class="w-full border rounded-lg px-4 py-2" />
            <span v-if="validationErrors.cellphone_no" class="text-red-500 text-sm">{{ validationErrors.cellphone_no }}</span>

          </div>

          <div>
            <label for="purokZone" class="block text-gray-700">Purok Zone</label>
            <input v-model="personality.purok_zone" type="text" id="purokZone" class="w-full border rounded-lg px-4 py-2" />
            <span v-if="validationErrors.purok_zone" class="text-red-500 text-sm">{{ validationErrors.purok_zone }}</span>

          </div>

          <div>
            <label for="Postal Code" class="block text-gray-700">Postal Code</label>
            <input v-model="personality.postal_code" type="text" id="postalCode" class="w-full border rounded-lg px-4 py-2" />
            <span v-if="validationErrors.postal_code" class="text-red-500 text-sm">{{ validationErrors.postal_code }}</span>

          </div>

          <!-- Additional Fields -->
          <div>
            <label for="barangayId" class="block text-gray-700">Barangay</label>
            <select v-model="personality.barangay_id" id="barangayId" class="w-full border rounded-lg px-4 py-2">
              <option v-for="barangay in state.barangays" :key="barangay.id" :value="barangay.id">
                {{ barangay.description }}
              </option>
            </select>
            <span v-if="validationErrors.barangay_id" class="text-red-500 text-sm">{{ validationErrors.barangay_id }}</span>

          </div>

          <div>
            <label for="cityId" class="block text-gray-700">City</label>
            <select v-model="personality.city_id" id="cityId" class="w-full border rounded-lg px-4 py-2">
              <option v-for="city in state.cities" :key="city.id" :value="city.id">
                {{ city.description }}
              </option>
            </select>
            <span v-if="validationErrors.city_id" class="text-red-500 text-sm">{{ validationErrors.city_id }}</span>

          </div>

          <div>
            <label for="countryId" class="block text-gray-700">Country</label>
            <select v-model="personality.country_id" id="countryId" class="w-full border rounded-lg px-4 py-2">
              <option v-for="country in state.countries" :key="country.id" :value="country.id">
                {{ country.description }}
              </option>
            </select>
            <span v-if="validationErrors.country_id" class="text-red-500 text-sm">{{ validationErrors.country_id }}</span>

          </div>

          <div>
            <label for="provinceId" class="block text-gray-700">Province</label>
            <select v-model="personality.province_id" id="provinceId" class="w-full border rounded-lg px-4 py-2">
              <option v-for="province in state.provinces" :key="province.id" :value="province.id">
                {{ province.description }}
              </option>
            </select>
            <span v-if="validationErrors.province_id" class="text-red-500 text-sm">{{ validationErrors.province_id }}</span>

          </div>

          <div>
            <label for="creditStatusId" class="block text-gray-700">Credit Status</label>
            <select v-model="personality.credit_status_id" id="creditStatusId" class="w-full border rounded-lg px-4 py-2">
              <option v-for="creditStatus in state.creditStatuses" :key="creditStatus.id" :value="creditStatus.id">
                {{ creditStatus.description }}
              </option>
            </select>
            <span v-if="validationErrors.credit_status_id" class="text-red-500 text-sm">{{ validationErrors.credit_status_id }}</span>

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
            <span v-if="validationErrorsForCustomer.group_id" class="text-red-500 text-sm">{{ validationErrorsForCustomer.group_id }}</span>

          </div>

          <div>
            <label for="passbookNo" class="block text-gray-700">Passbook No</label>
            <input v-model="customer.passbook_no" type="number" id="passbookNo" class="w-full border rounded-lg px-4 py-2" />
            <span v-if="validationErrorsForCustomer.passbook_no" class="text-red-500 text-sm">{{ validationErrorsForCustomer.passbook_no }}</span>

          </div>

          <div>
            <label for="groupId" class="block text-gray-700">Loan Count</label>
            <select v-model="customer.loan_count_id" id="groupId" class="w-full border rounded-lg px-4 py-2" v-if="!state.isTableLoading">
              <option v-for="groups in state.loan_count" :key="groups.id" :value="groups.id">
                {{ groups.loan_count }}
              </option>
            </select>
            <span v-if="validationErrorsForCustomer.loan_count_id" class="text-red-500 text-sm">{{ validationErrorsForCustomer.loan_count_id }}</span>

          </div>

          <div>
            <label for="dateTimeRegistered" class="block text-gray-700">Date Time Registered</label>
            <input v-model="personality.datetime_registered" type="date" id="dateTimeRegistered" class="w-full border rounded-lg px-4 py-2" />
            <span v-if="validationErrorsForCustomer.datetime_registered" class="text-red-500 text-sm">{{ validationErrorsForCustomer.datetime_registered }}</span>

          </div>

          <div>
            <label for="enableMortuary" class="block text-gray-700">Enable Mortuary</label>
            <select v-model="customer.enable_mortuary" id="enable_mortuary" class="w-full border rounded-lg px-4 py-2">
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
            <span v-if="validationErrorsForCustomer.enable_mortuary" class="text-red-500 text-sm">{{ validationErrorsForCustomer.enable_mortuary }}</span>

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
                    <th class="px-4 py-2">Select</th>
                    <th class="px-4 py-2">Description</th>
                    <th class="px-4 py-2">Expiry Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="requirement in requirements" :key="requirement.id">
                    <td class="px-4 py-2">
                        <label class="flex items-center">
                            <input
                                type="checkbox"
                                :value="requirement.id"
                                v-model="selectedRequirements"
                                @change="getSelectedRequirements"
                                class="form-checkbox h-5 w-5 text-green-600"
                            />
                        </label>
                    </td>
                    <td class="px-4 py-2">
                        <span class="text-gray-700">{{ requirement.description }}</span>
                    </td>
                    <td class="px-4 py-2">
                        <input
                            type="date"
                            v-model="requirement.expiry_date"
                            @change="getSelectedRequirements"
                            class="border border-gray-300 rounded-md p-1"
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>




        <div class="mt-4 flex justify-center">
          <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
            Create Customer
          </button>
        </div>
      </form>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { ref, onMounted } from 'vue';

import { PermissionService } from '~/models/Permission';
import { apiService } from '~/routes/api/API';

const requirements = ref({});
const selectedRequirements = ref([]);

// Define the structure for a requirement
interface Requirement {
    id: number;
    description: string;
    expiry_date?: string; // Optional expiry date
}

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
  name_type: 2, //for customer
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
  requirements: [],
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
    fetchNotExpiredCustomerRequirementsNoAUTH(),
  ]);
});


const validationErrors = ref({
      first_name: '',
      family_name: '',
      middle_name: '',
      email_address: '',
      birthday: '',
      gender_code: '',
      civil_status: '',
      house_street: '',
      country_id: '',
      cellphone_no: '',
      purok_zone: '',
      postal_code: '',
      barangay_id: '',
      city_id: '',
      province_id: '',
      credit_status_id: '',
      datetime_registered: '',

      group_id: '',
      passbook_no: '',
      loan_count_id: '',
      enable_mortuary: '',
    });


const validationErrorsForCustomer = ref({
      group_id: '',
      passbook_no: '',
      loan_count_id: '',
      enable_mortuary: '',
    });



const createCustomer = async () => {
  try {

    Object.keys(validationErrors.value).forEach((key) => {
      validationErrors.value[key as keyof typeof validationErrors.value] = '';
    });
    Object.keys(validationErrorsForCustomer.value).forEach((key) => {
      validationErrorsForCustomer.value[key as keyof typeof validationErrorsForCustomer.value] = '';
    });

    // Validate each field in personality and set error if empty
    for (const field in validationErrors.value) {
      if (!personality.value[field as keyof typeof personality.value]) {
        validationErrors.value[field as keyof typeof validationErrors.value] = `Please complete all required fields before proceeding.`;
      }
    }

    for (const field in validationErrorsForCustomer.value) {
      if (!customer.value[field as keyof typeof customer.value]) {
        validationErrorsForCustomer.value[field as keyof typeof validationErrorsForCustomer.value] = `Please complete all required fields before proceeding.`;
      }
    }

        // // First Name validation
        if (!personality.value.first_name   ||
        !personality.value.family_name  ||
        !personality.value.middle_name  ||
        !personality.value.email_address||
        !personality.value.birthday     ||
        !personality.value.gender_code  ||
        !personality.value.civil_status ||
        !personality.value.house_street ||
        !personality.value.cellphone_no ||
        !personality.value.purok_zone   ||
        !personality.value.postal_code  ||
        !personality.value.barangay_id  ||
        !personality.value.city_id      ||
        !personality.value.province_id  ||
        !personality.value.credit_status_id  ||
        !customer.value.group_id  ||
        !customer.value.passbook_no  ||
        !customer.value.loan_count_id  ||
        !customer.value.enable_mortuary  ||
        // !customer.value.mortuary_coverage_start  ||
        // !customer.value.mortuary_coverage_end  ||
        !personality.value.datetime_registered
      )
      {
        toast.error("Please fill all the required fields.", { autoClose: 3000 });
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
        },
        requirements: state.value.requirements,
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

async function fetchNotExpiredCustomerRequirementsNoAUTH() {
      try {
        // Fetch data from your API endpoint
        const response = await apiService.getActiveRequirementsNoAUTH({});
        requirements.value = response.data; // Assumes the API returns an array of requirements
      } catch (error) {
        console.error('Error fetching requirements:', error);
      }
    }

    const getSelectedRequirements = () => {
    const selectedDetails = [];

    for (let i = 0; i < requirements.value.length; i++) {
        const req = requirements.value[i];

        // Check if the requirement ID is in selectedRequirements
        if (selectedRequirements.value.includes(req.id)) {
            selectedDetails.push({
                id: req.id,
                description: req.description,
                expiry_date: formatDate(req.expiry_date),
            });
        }
    }

    debugger;

    // Assuming selectedDataRequirements is an array
    state.value.requirements = []; // Reset the array first

    // Loop through selectedDetails to store values in selectedDataRequirements
    for (let i = 0; i < selectedDetails.length; i++) {
        state.value.requirements.push(selectedDetails[i]);
    }

    console.log(selectedDetails); // Output selected details to console
};


// Format the date when component is mounted
const formatDate = (dateString: any) => {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0]; // Format to YYYY-MM-DD
};

</script>


<style scoped>
/* Add your styles here if needed */
</style>
