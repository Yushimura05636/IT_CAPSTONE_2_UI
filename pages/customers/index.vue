<template>
    <NuxtLayout name="admin">
      <div class="bg-white">
        <header class="py-8 px-4 md:px-16">
          <div class="container mx-auto flex justify-between items-center">
            <img src="/img/LendCash_Logo-removebg-preview.png" class="w-20" alt="logo" />
          </div>
        </header>
      </div>
      <div class="max-w-screen-xl mx-auto px-4 md:px-8">
        <!-- Title Section -->
        <div class="items-start justify-between md:flex mt-8">
          <div class="max-w-lg">
            <h3 class="text-gray-800 text-xl font-bold sm:text-2xl mb-4">Customers</h3>
          </div>
        </div>

        <div class="max-w-screen-xl mx-auto px-4 md:px-8">
          <!-- Action Buttons -->
          <div class="flex justify-between items-center mb-8">
            <div class="flex space-x-4">
              <button @click="createCustomer" class="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">
                Create
              </button>
              <button @click="modifyCustomer" :disabled="!selectedEmployeeId" class="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 disabled:opacity-50">
                Modify
              </button>
              <button @click="deleteEmployee" :disabled="!selectedEmployeeId" class="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 disabled:opacity-50">
                Delete
              </button>
              <button @click="approveOrReject" :disabled="!selectedEmployeeId" class="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-red-600 disabled:opacity-50">
                {{ isHovered ? 'Reject' : 'Approved' }}
              </button>
            </div>

            <div class="flex items-center space-x-2">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search customers"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <!-- Customer Table -->
          <div class="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table class="w-full table-auto text-sm text-left">
              <thead class="bg-gray-50 text-gray-600 font-medium border-b">
                <tr>
                  <th class="py-3 px-6"></th>
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
                  <th class="py-3 px-6">Postal Code</th>
                  <th class="py-3 px-6">Personality Status</th>
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
                </tr>
              </thead>
              <tbody class="text-gray-600 divide-y">
                <tr v-for="(item, idx) in filteredTableItems" :key="idx">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <input type="radio" :value="item.employeeId" v-model="selectedEmployeeId" />
                  </td>
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
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span :class="{'bg-green-500': item.mortuaryStatus, 'bg-red-500': !item.mortuaryStatus}" class="inline-block w-3 h-3 rounded-full"></span>
                    {{ item.mortuaryStatus ? 'Enabled' : 'Disabled' }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ item.mortuaryCoverageStart }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ item.mortuaryCoverageEnd }}</td>
                </tr>
                <tr v-if="filteredTableItems.length === 0">
                  <td colspan="26" class="text-center py-4 text-gray-600">No data found</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </template>

  <script setup lang="ts">
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';

  import { ref, computed } from 'vue';
  import { apiService } from '~/routes/api/API';

  const isHovered = ref(false);
  const searchQuery = ref<string>('');
  const selectedEmployeeId = ref<number | null>(null);
  const tableItems = ref<TableItem[]>([]);

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

  const mapCivilStatus = (status: number): string => {
    const statuses = ['Single', 'Married', 'Divorced', 'Widowed'];
    return statuses[status] || 'Unknown';
  };

  const storeResponseInTableItems = (responseData: any[]) => {
    tableItems.value = responseData.map((customer: any) => ({
      employeeId: customer.id,
      name: `${customer.first_name} ${customer.last_name}`,
      email: customer.email,
      telephoneNumber: customer.telephone_number,
      birthday: customer.birthday,
      gender: customer.gender,
      civilStatus: mapCivilStatus(customer.civil_status),
      groupName: customer.group_name,
      houseStreet: customer.house_street,
      purokZone: customer.purok_zone,
      postalCode: customer.postal_code,
      personalityStatus: mapPersonalityStatus(customer.personality_status),
      Barangay: mapBarangay(customer.barangay),
      city: mapCity(customer.city),
      country: mapCountry(customer.country),
      province: mapProvince(customer.province),
      creditStatus: mapCreditStatus(customer.credit_status),
      dateCreated: customer.created_at,
      dateLastModified: customer.updated_at,
      passbookNumber: customer.passbook_no,
      loanCount: customer.loan_count,
      mortuaryStatus: Boolean(customer.mortuary_status),
      mortuaryCoverageStart: customer.mortuary_coverage_start,
      mortuaryCoverageEnd: customer.mortuary_coverage_end,
    }));
  };

  const fetchCustomers = async () => {
    try {
      const response = await apiService.get('/customers');
      storeResponseInTableItems(response.data);
    } catch (error) {
      toast.error('Error fetching customers');
    }
  };

  const createCustomer = () => {
    navigateTo('/customers/create');
  };

  const modifyCustomer = () => {
    if (selectedEmployeeId.value) {
      navigateTo(`/customers/update?id=${selectedEmployeeId.value}`);
    }
  };

  const deleteEmployee = async () => {
    if (selectedEmployeeId.value) {
      try {
        await apiService.delete(`/customers/${selectedEmployeeId.value}`);
        fetchCustomers();
        toast.success('Customer deleted successfully');
      } catch (error) {
        toast.error('Error deleting customer');
      }
    }
  };

  const approveOrReject = () => {
    isHovered.value = !isHovered.value;
  };

  const filteredTableItems = computed(() => {
    return tableItems.value.filter(item => item.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
  });

  fetchCustomers();
  </script>

  <style scoped>
  /* Add your CSS styling here */
  </style>
