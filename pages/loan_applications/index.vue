<template>
    <NuxtLayout name="admin">
            <div class="p-4">
                <div class="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div class="font-bold">Loan Applications</div>

                    <!-- Action Buttons -->
                    <div class="flex justify-between items-center mb-8 mt-8">

                        <!-- Left: Action Buttons -->
                        <div class="flex space-x-4">
                            <button  class="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
                            @click="createLoanApplication">
                            Create
                            </button>

                            <button
                            type="button"
                            class="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                            v-if="selectedLoanAppID"
                            @click="updateLoanApp"
                            >
                            APPROVE
                            </button>

                            <button type="button"
                            class="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 "
                            v-if="selectedLoanAppID"
                            >
                            Delete
                            </button>
                        </div>

                        <div class="overflow-x-auto">
        <!-- Search Bar -->
        <div class="mb-4">
            <input
                type="text"
                v-model="searchQuery"
                placeholder="Search Loan Applications..."
                class="border border-gray-300 rounded-md p-2 w-full"
            />
        </div>
                        </div>
                    </div>

                    <div class="overflow-x-auto max-h-[30rem] overflow-y-auto">
    <Table class="w-full"
        :columnHeaders="state.columnHeaders"
        :data="state.loanApp"
        :isLoading="state.isTableLoading"
        :sortData="state.sortData">

        <!-- Remove the template #body and use v-for directly -->
        <tr
            v-for="(loanApp, index) in filteredLoanApps()"
            :key="index"
            class=""
            v-if="!(state.isTableLoading || (state.loanApp === 0))">

            <td class="py-2 border-b border-gray-300 ">
                <input
                    type="radio"
                    :value="loanApp.Loan_Application.id"
                    v-model="selectedLoanAppID"
                    class="cursor-pointer"
                />
            </td>
            <td class="py-2 border-b border-gray-300  ">
                <span>{{ loanApp.Loan_Application.datetime_prepared }} </span>
            </td>
            <td class="py-2 border-b border-gray-300  ">
                <span>{{ loanApp.Loan_Application.document_status_code }} </span>
            </td>
            <td class="py-2 border-b border-gray-300  ">
                <span>{{ loanApp.Loan_Application.loan_application_no }} </span>
            </td>
            <td class="py-2 border-b border-gray-300  ">
                <span>{{ loanApp.Loan_Application.amount_loan }} </span>
            </td>
            <td class="py-2 border-b border-gray-300  ">
                <span>{{ loanApp.Loan_Application.factor_rate }} </span>
            </td>
            <td class="py-2 border-b border-gray-300  ">
                <span>{{ loanApp.Loan_Application.amount_interest }} </span>
            </td>
            <td class="py-2 border-b border-gray-300  ">
                <span>{{ loanApp.Loan_Application.amount_paid }} </span>
            </td>
            <td class="py-2 border-b border-gray-300  ">
                <span>{{ loanApp.Loan_Application.datetime_target_release }} </span>
            </td>
            <td class="py-2 border-b border-gray-300  ">
                <span>{{ loanApp.Loan_Application.datetime_fully_paid }} </span>
            </td>
            <td class="py-2 border-b border-gray-300  ">
                <span>{{ loanApp.Loan_Application.datetime_approved }} </span>
            </td>
            <td class="py-2 border-b border-gray-300  ">
                <span>{{ loanApp.Loan_Application.approved_by_id }} </span>
            </td>
            <td class="py-2 border-b border-gray-300  ">
                <span>{{ loanApp.Loan_Application.prepared_by_id }} </span>
            </td>
            <td class="py-2 border-b border-gray-300  ">
                <span>{{ loanApp.Loan_Application.released_by_id }} </span>
            </td>
            <td class="py-2 border-b border-gray-300  ">
                <span>{{ loanApp.Loan_Application.last_modified_by_id }} </span>
            </td>

            <td class="py-2 border-b border-gray-300  ">
                <span>{{ loanApp.Loan_Application.notes }} </span>
            </td>
        </tr>

    </Table>
</div>

                </div>
            </div>
    </NuxtLayout>
</template>


<script setup lang="ts">
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

    import { ref, reactive, onMounted } from 'vue'
    import { apiService } from '~/routes/api/API'
    import { loanApplicationService } from '~/models/LoanApplication'
    import { PermissionService } from '~/models/Permission';
    import { PaymentFrequency } from '../../models/PaymentFrequency';

    const state = reactive({
        columnHeaders: [
            { name: '' },
            { name: 'Date Time Prepared' },
            { name: 'Status' },
            { name: 'Loan Application No' },
            { name: 'Amount Loan' },
            { name: 'Factor Rate' },
            { name: 'Amount Interest' },
            { name: 'Amount Paid' },
            { name: 'Date Time Target Release' },
            { name: 'Date Time Fully Paid' },
            { name: 'Date Time Approved' },
            { name: 'Approved by' },
            { name: 'Prepared by' },
            { name: 'Released by' },
            { name: 'Last modified by' },
            { name: 'Notes' },
        ],
        error: null,
        isTableLoading: false,
        sortData: {
            sortField: 'id',
            sortOrder: 'descend',
        },
        loanApp: [],
        searchQuery: '',
    })

    let selectedLoanAppID = ref(null); // Track selected library
    const isHovered = ref(false);

    const searchQuery = ref(''); // Holds the search query


    async function approveORreject(){
    try {

        loanApplicationService.id = parseInt(selectedLoanAppID.value?.toString());
        const response = await apiService.authCustomersUpdate({});
        // console.log("test" + CustomersService.id);
        alert("Approved Logic Here");
        // navigateTo(`customers/approve`)
    } catch (error) {
        toast.error(error.message, {
        autoClose: 5000,
        })
    }
}


    async function fetchFreqandDuration() {
        state.isTableLoading = true
        state.error = null
        try {
            const params = {}
            const response = await apiService.getLoanApplication({})
            state.loanApp = response.data

            console.log(state.loanApp);
        } catch (error: any) {
            toast.error(error.message, {
                autoClose: 5000,
            })
        }
        state.isTableLoading = false
    }
    onMounted(() => {
        fetchFreqandDuration()
    })

    async function updateLoanApp(){

        try {
            const response = await apiService.authPaymentDurationsUpdate({})
            if (selectedLoanAppID.value) {
            loanApplicationService.id = selectedLoanAppID.value;

        navigateTo('/loan_applications/approve');
        }
        } catch (error) {
            toast.error(error.message, {
        autoClose: 5000,
    })
        }
    }
    async function createLoanApplication() {
        try {
            // const response = await apiService.authPaymentFrequenciesCreate({
            // })
            navigateTo('/loan_applications/create');
        } catch (error) {
            toast.error(error.message, {
        autoClose: 5000,
    })
        }
    }

    async function updateLoanApplication() {
        try {
            // const response = await apiService.authPaymentFrequenciesCreate({
            // })
            navigateTo('loan_applications/update');
        } catch (error) {
            toast.error(error.message, {
        autoClose: 5000,
    })
        }
    }

    function filteredLoanApps() {
        debugger;
        if (!this.searchQuery) {
                return state.loanApp; // Return all if search is empty
            }
            const query = this.searchQuery.toLowerCase();
            return this.state.loanApp.filter(loanApp =>
                Object.values(loanApp.Loan_Application).some(value =>
                    String(value).toLowerCase().includes(query)
                )
            );
        };

</script>
