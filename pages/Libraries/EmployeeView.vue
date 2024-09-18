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
        <h3 class="text-gray-800 text-xl font-bold sm:text-2xl">Employees</h3>
      </div>
      <div class="mt-3 md:mt-0 flex flex-col items-start gap-y-4">
        <a href="javascript:void(0)" class="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm">
          Add Employee
        </a>
      </div>
    </div>

    <!-- Search Bar - Centered and Spaced Above Table -->
    <div class="flex justify-center mt-8 mb-6">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search employees"
        class="px-4 py-2 border border-gray-300 rounded-lg"
      />
    </div>

    <!-- Employee Table -->
    <div class="mt-12 shadow-sm border rounded-lg overflow-x-auto">
      <table class="w-full table-auto text-sm text-left">
        <thead class="bg-gray-50 text-gray-600 font-medium border-b">
          <tr>
            <th class="py-3 px-6">Employee ID</th>
            <th class="py-3 px-6">Name</th>
            <th class="py-3 px-6">Email</th>
            <th class="py-3 px-6">SSS Number</th>
            <th class="py-3 px-6">PhilHealth Number</th>
            <th class="py-3 px-6">TIN Number</th>
            <th class="py-3 px-6">Date Hired</th>
            <th class="py-3 px-6">Date Resigned</th>
            <th class="py-3 px-6">Telephone#</th>
            <th class="py-3 px-6">Birthday</th>
            <th class="py-3 px-6">Gender</th>
            <th class="py-3 px-6">Civil Status</th>
            <th class="py-3 px-6">House Street</th>
            <th class="py-3 px-6">Purok Zone</th>
            <th class="py-3 px-6">postal Code</th>
            <th class="py-3 px-6">Pesonality Status</th>
            <th class="py-3 px-6">Barangay</th>
            <th class="py-3 px-6">City</th>
            <th class="py-3 px-6">Country</th>
            <th class="py-3 px-6">Province</th>
            <th class="py-3 px-6">Date Created</th>
            <th class="py-3 px-6">Date Last Modified</th>
            <th class="py-3 px-6">Notes</th>
            <th class="py-3 px-6">Action</th>
          </tr>
        </thead>
        <tbody class="text-gray-600 divide-y">
          <tr v-for="(item, idx) in filteredTableItems" :key="idx">
            <td class="px-6 py-4 whitespace-nowrap">{{ item.employeeId }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.name }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.email }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.sssno }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.phicno }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.tinno }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.datetime_hired }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.datetime_resigned }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.telephoneNumber }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.birthday }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.gender }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.civilStatus }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.houseStreet }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.purokZone }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.postalCode }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.personalityStatus }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.Barangay }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.city }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.country }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.province }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.dateCreated }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.dateLastModified }}</td>
            <td class="text-right px-6 whitespace-nowrap">
              
            </td>
            <td class="text-right px-6 whitespace-nowrap">
              <button @click="editEmployee(item)" class="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                Edit
              </button>
            </td>
          </tr>
          <tr v-if="filteredTableItems.length === 0">
            <td colspan="8" class="text-center py-4 text-gray-600">No data found</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EmployeesService } from '~/models/Employee';
import { ref, computed } from 'vue'
import { apiService } from '~/routes/api/API'
import Customers from '../customers.vue';


const searchQuery = ref<string>('')

const tableItems = ref<TableItem[]>([]); // Initialize tableItems

const state = {
  datas: [] as any[],
  employees: [] as any[], // Array to store multiple customers
  personalities: [] as any[], // Array to store multiple personalities
};

const filteredTableItems = computed(() => {
  return tableItems.value.filter(item => {
    return Object.values(item).some(value =>
      String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })
})

const editEmployee = (item: TableItem) => {
  debugger;
  EmployeesService.id = parseInt(item.employeeId);
  navigateTo(`/Libraries/EmployeeUpdate`)
  // console.log('Editing member:', item)
}


interface TableItem {
  employeeId: string;
  name: string;
  birthday: string;
  civilStatus: string;
  gender: string;
  houseStreet: string;
  purokZone: string;
  postalCode: string;
  telephoneNumber: string;
  email: string;
  cellphoneNo: string;
  personalityStatus: string;
  Barangay: string;
  city: string;
  country: string;
  province: string;
  dateCreated: string;
  dateLastModified: string;
  sssno: number;
  phicno: number;
  tinno: number;
  datetime_hired: string;
  datetime_resigned: string;

}

async function fetchEmployees() {
  try {
    const params = {}; // Your query params for the API
    const response = await apiService.getEmployees(params); // Fetch customer data from API

    state.datas = response;
    
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
    const employees = state.datas.data[i].employee;

    tableItems.value.push({
      employeeId: employees.id.toString(), // Assuming passbook_no is like employeeId
      name: `${personality.first_name} ${personality.family_name}`,
      birthday: personality.birthday, // Make sure it's properly formatted
      civilStatus: mapCivilStatus(personality.civil_status), // Map the civil_status code
      gender: personality.gender_code === 1 ? 'Male' : 'Female', // Example: gender_code mapping
      houseStreet: personality.house_street,
      purokZone: personality.purok_zone,
      postalCode: personality.postal_code,
      telephoneNumber: personality.telephone_no,
      email: personality.email_address,
      cellphoneNo: personality.cellphone_no,
      personalityStatus: mapPersonalityStatus(personality.personality_status_code), // Example mapping
      Barangay: mapBarangay(personality.barangay_id), // Example: You might want to map IDs to names
      city: mapCity(personality.city_id),
      country: mapCountry(personality.country_id),
      province: mapProvince(personality.province_id),
      dateCreated: new Date().toISOString().split('T')[0], // Set current date as dateCreated
      dateLastModified: new Date().toISOString().split('T')[0], // Set current date as dateLastModified
      sssno: employees.sss_no,
      phicno: employees.phic_no,
      tinno: employees.tin_no,
      datetime_hired: employees.datetime_hired,
      datetime_resigned:  employees.datetime_resigned,
    });
  }
}


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

fetchEmployees();
</script>
