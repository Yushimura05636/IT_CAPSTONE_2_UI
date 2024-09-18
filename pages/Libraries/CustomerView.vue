<template>
  <div class="bg-white">
    <header class="py-8 px-4 md:px-16">
      <div class="container mx-auto flex justify-between items-center">
        <img src="../../img/LendCash_Logo-removebg-preview.png" class="w-20" alt="logo" />
      </div>
    </header>
  </div>

  <div class="max-w-screen-xl mx-auto px-4 md:px-8">
    <div class="items-start justify-between md:flex">
      <div class="max-w-lg">
        <h3 class="text-gray-800 text-xl font-bold sm:text-2xl">Customers</h3>
      </div>
      <div class="mt-3 md:mt-0 flex flex-col items-start gap-y-4">
        <a href="javascript:void(0)" class="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm">
          Add Customer
        </a>
      </div>
    </div>

    <!-- Search Bar - Centered and Spaced Above Table -->
    <div class="flex justify-center mt-8 mb-6">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search customer"
        class="px-4 py-2 border border-gray-300 rounded-lg"
      />
    </div>

    <!-- Customer Table -->
    <div class="mt-12 shadow-sm border rounded-lg overflow-x-auto">
      <table class="w-full table-auto text-sm text-left">
        <thead class="bg-gray-50 text-gray-600 font-medium border-b">
          <tr>
            <th class="py-3 px-6">Employee ID</th>
            <th class="py-3 px-6">Name</th>
            <th class="py-3 px-6">Email</th>
            <th class="py-3 px-6">Telephone#</th>
            <th class="py-3 px-6">Birthday</th>
            <th class="py-3 px-6">Gender</th>
            <th class="py-3 px-6">Civil Status</th>
            <th class="py-3 px-6">Group Name</th>
            <th class="py-3 px-6">House Street</th>
            <th class="py-3 px-6">Purok Zone</th>
            <th class="py-3 px-6">postal Code</th>
            <th class="py-3 px-6">Pesonality Status</th>
            <th class="py-3 px-6">Barangay</th>
            <th class="py-3 px-6">City</th>
            <th class="py-3 px-6">Country</th>
            <th class="py-3 px-6">Province</th>
            <th class="py-3 px-6">Credit Status</th>
            <th class="py-3 px-6">Date Created</th>
            <th class="py-3 px-6">Date Last Modified</th>
            <th class="py-3 px-6">Passbook Number</th>
            <th class="py-3 px-6">Loan Count</th>
            <th class="py-3 px-6">Mortuary Status</th>
            <th class="py-3 px-6">Mortuary Coverage Start</th>
            <th class="py-3 px-6">Mortuary Coverage End</th>
            <th class="py-3 px-6">Notes</th>
            <th class="py-3 px-6">Action</th>
          </tr>
        </thead>
        <tbody class="text-gray-600 divide-y">
          <tr v-for="(item, idx) in filteredTableItems" :key="idx">
            <td class="px-6 py-4 whitespace-nowrap">{{ item.employeeId }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.name }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.email }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.telephoneNumber }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.birthday }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.gender }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.civilStatus }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.groupName }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.houseStreet }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.purokZone }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.postalCode }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.personalityStatus }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.Barangay }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.city }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.country }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.province }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.creditStatus }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.dateCreated }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.dateLastModified }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.passbookNumber }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.loanCount }}</td>
            <td class="px-6 py-4 whitespace-nowrap"></td>
            <!-- Display Mortuary Status with Color Indicator -->
            <td class="px-6 py-4 whitespace-nowrap">
              <span :class="{'bg-green-500': item.mortuaryStatus, 'bg-red-500': !item.mortuaryStatus}" class="inline-block w-3 h-3 rounded-full"></span>
              {{ item.mortuaryStatus ? 'Enabled' : 'Disabled' }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.mortuaryCoverageStart }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.mortuaryCoverageEnd }}</td>
            <td class="text-right px-6 whitespace-nowrap">
              <button @click="editMember(item)" class="py-1.5 px-3 bg-blue-200 hover:bg-blue-300 rounded">
                Edit
              </button>
            </td>
          </tr>
          <tr v-if="filteredTableItems.length === 0">
            <td colspan="11" class="text-center py-4 text-gray-600">No data found</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CustomersService } from '~/models/Customer';
import { ref, computed } from 'vue'
import { apiService } from '~/routes/api/API'
import { numeric } from '@vuelidate/validators';

const searchQuery = ref<string>('')

const tableItems = ref<TableItem[]>([]); // Initialize tableItems

const state = {
  datas: [],
  customers: [],
  personality: [],
};

// Fetch customers when necessary
fetchCustomers();

const filteredTableItems = computed(() => {
  return tableItems.value.filter(item => {
    return Object.values(item).some(value =>
      String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })
})

const editMember = (item: TableItem) => {
  CustomersService.id = parseInt(item.employeeId);
  navigateTo(`/Libraries/CustomerUpdate`)
  console.log('Editing member:', item)
}

interface TableItem {
  employeeId: string;
  name: string;
  email: string;
  telephoneNumber: string;
  birthday: string;
  gender: string;
  civilStatus: string;
  groupName: string;
  houseStreet: string;
  purokZone: string;
  postalCode: string;
  personalityStatus: string;
  Barangay: string;
  city: string;
  country: string;
  province: string;
  creditStatus: string;
  dateCreated: string;
  dateLastModified: string;
  passbookNumber: string;
  loanCount: number;
  mortuaryStatus: boolean;
  mortuaryCoverageStart: string | undefined;
  mortuaryCoverageEnd: string | undefined;
}

// Fetching customers from the API
async function fetchCustomers() {
  try {
    debugger;
    const params = {}; // Your query params for the API
    const response = await apiService.getCustomers(params); // Fetch customer data from API

    // Store API response in state (assuming API returns arrays)
    state.datas = response // An array of personality objects

    // Call the function to map the API data to tableItems
    storeResponseInTableItems();

    alert('Data fetched successfully');
  } catch (error) {
    alert('Error fetching data from API: ' + error);
    console.error(error);
  }
}

// Function to map customer and personality data to tableItems
function storeResponseInTableItems() {
  // Clear table items before pushing new data
  tableItems.value = [];

  for (let i = 0; i < state.datas.data.length; i++)
  {
    const personality = state.datas.data[i].personality;
    const customer = state.datas.data[i].customer;

    tableItems.value.push({
      employeeId: customer.id.toString(), // Assuming passbook_no is like employeeId
      name: `${personality.first_name} ${personality.family_name}`,
      email: personality.email_address,
      telephoneNumber: personality.telephone_no,
      birthday: personality.birthday, // Make sure it's properly formatted
      gender: personality.gender_code === 1 ? 'Male': 'Female', // Example: gender_code mapping
      civilStatus: mapCivilStatus(personality.civil_status), // Map the civil_status code
      groupName: `Group ${customer.group_id}`, // Assuming group_id is like groupName
      houseStreet: personality.house_street,
      purokZone: personality.purok_zone,
      postalCode: personality.postal_code,
      personalityStatus: mapPersonalityStatus(personality.personality_status_code), // Example mapping
      Barangay: mapBarangay(personality.barangay_id), // Example: You might want to map IDs to names
      city: mapCity(personality.city_id),
      country: mapCountry(personality.country_id),
      province: mapProvince(personality.province_id),
      creditStatus: mapCreditStatus(personality.credit_status_id), // Example mapping
      dateCreated: new Date().toISOString().split('T')[0], // Set current date as dateCreated
      dateLastModified: new Date().toISOString().split('T')[0], // Set current date as dateLastModified
      passbookNumber: customer.passbook_no.toString(),
      loanCount: customer.loan_count,
      mortuaryStatus: customer.enable_mortuary === 1,
      mortuaryCoverageStart: customer.mortuary_coverage_start,
      mortuaryCoverageEnd: customer.mortuary_coverage_end,
    });
  }

  // // Loop through each customer and personality data (assuming they have matching indices)
  // state.datas?.data.forEach((customer, index) => {
    
  // });
}

// Example helper function to map civil status codes to human-readable values
function mapCivilStatus(civilStatusCode: number) {
  const statuses: { [key: number]: string } = {
    1: 'Single',
    2: 'Married',
    3: 'Divorced',
    4: 'Widowed',
  };
  return statuses[civilStatusCode] || 'Unknown';
}

// Example helper function for personality status
function mapPersonalityStatus(statusCode: number) {
  const statuses: { [key: number]: string } = {
    1: 'Active',
    2: 'Inactive',
    3: 'Suspended',
  };
  return statuses[statusCode] || 'Unknown';
}

// Add your own mapping functions for barangay, city, province, etc.
function mapBarangay(barangayId: number) {
  // Mapping logic for barangay IDs to names
  return `Brgy ${barangayId}`;
}

function mapCity(cityId: number) {
  return `City ${cityId}`;
}

function mapCountry(countryId: number) {
  return `Country ${countryId}`;
}

function mapProvince(provinceId: number) {
  return `Province ${provinceId}`;
}

function mapCreditStatus(creditStatusId: number) {
  const statuses: { [key: number]: string } = {
    1: 'Good',
    2: 'Fair',
    3: 'Poor',
  };
  return statuses[creditStatusId] || 'Unknown';
}
</script>