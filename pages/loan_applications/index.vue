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
                            Modify
                            </button>
                            
                            <button type="button" 
                            class="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 "
                            v-if="selectedLoanAppID"
                            >
                            Delete
                            </button>
                            <button  @click="approveORreject"
                            :disabled="!selectedLoanAppID" 
                            class="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-red-600 disabled:opacity-50"
                            @mouseenter="isHovered = true" 
                            @mouseleave="isHovered = false">
                            {{ isHovered ? 'Reject' : 'Approved' }}
                            </button>
                        </div>

                        <!-- Right: Search Bar -->
                        <div class="flex items-center space-x-2">
                            <input
                            type="text"
                            placeholder="Search"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                            />
                            <button class="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                            Search
                            </button>
                        </div>
                    </div>

                    <div class="overflow-x-auto">
                        <Table class="w-full  " 
                            :columnHeaders="state.columnHeaders" 
                            :data="state.loanApp" 
                            :isLoading="state.isTableLoading"
                            :sortData="state.sortData" 
                            >
                            <template #body
                                v-if="!(state.isTableLoading || (state.loanApp?.data === 0))">
                                
                                <tr v-for="(loanApp, index) in state.loanApp?.data" :key="index" class="">
                                    
                                    <td class="py-2 border-b border-gray-300 ">
                                        <input
                                        type="radio"
                                        :value="loanApp.id"
                                        v-model="selectedLoanAppID"
                                        class="cursor-pointer"
                                        />
                                    </td>
                                    <td class="py-2 border-b border-gray-300  ">
                                        <span>{{ loanApp.customer_id }} </span>
                                    </td>
                                    <td class="py-2 border-b border-gray-300  ">
                                        <span>{{ loanApp.group_id }} </span>
                                    </td>
                                    <td class="py-2 border-b border-gray-300  ">
                                        <span>{{ loanApp.datetime_prepared }} </span>
                                    </td>
                                    <td class="py-2 border-b border-gray-300  ">
                                        <span>{{ loanApp.document_status_code }} </span>
                                    </td>
                                    <td class="py-2 border-b border-gray-300  ">
                                        <span>{{ loanApp.loan_application_no }} </span>
                                    </td>
                                    <td class="py-2 border-b border-gray-300  ">
                                        <span>{{ loanApp.amount_loan }} </span>
                                    </td>
                                    <td class="py-2 border-b border-gray-300  ">
                                        <span>{{ loanApp.factor_rate }} </span>
                                    </td>
                                    <td class="py-2 border-b border-gray-300  ">
                                        <span>{{ loanApp.amount_interest }} </span>
                                    </td>
                                    <td class="py-2 border-b border-gray-300  ">
                                        <span>{{ loanApp.amount_paid }} </span>
                                    </td>
                                    <td class="py-2 border-b border-gray-300  ">
                                        <span>{{ loanApp.datetime_target_release }} </span>
                                    </td>
                                    <td class="py-2 border-b border-gray-300  ">
                                        <span>{{ loanApp.datetime_fully_paid }} </span>
                                    </td>
                                    <td class="py-2 border-b border-gray-300  ">
                                        <span>{{ loanApp.datetime_approved }} </span>
                                    </td>
                                    <td class="py-2 border-b border-gray-300  ">
                                        <span>{{ loanApp.payment_frequency_id }} </span>
                                    </td>
                                    <td class="py-2 border-b border-gray-300  ">
                                        <span>{{ loanApp.payment_duration_id }} </span>
                                    </td>
                                    <td class="py-2 border-b border-gray-300  ">
                                        <span>{{ loanApp.approved_by_id }} </span>
                                    </td>
                                    <td class="py-2 border-b border-gray-300  ">
                                        <span>{{ loanApp.prepared_by_id }} </span>
                                    </td>
                                    <td class="py-2 border-b border-gray-300  ">
                                        <span>{{ loanApp.released_by_id }} </span>
                                    </td>
                                    <td class="py-2 border-b border-gray-300  ">
                                        <span>{{ loanApp.last_modified_by_id }} </span>
                                    </td>
                                    <td class="py-2 border-b border-gray-300  ">
                                        <span>{{ loanApp.notes }} </span>
                                    </td>
                                </tr>
                            </template>
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
            { name: 'Customer' },
            { name: 'Group' },
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
            { name: 'Payment Frequency' },
            { name: 'Payment Duration' },
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

    
    async function approveORreject(){
    try {
        // debugger;
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
            state.loanApp = response
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
                let customer_id = null;         //!update
                let group_id = null;            
                let datetime_prepared = null;   
                let document_status_code = null;
                let loan_application_no = null;
                let amount_loan = null;
                let factor_rate = null;
                let amount_interest = null;
                let amount_paid = null;
                let datetime_target_release = null;
                let datetime_fully_paid = null;
                let datetime_approved = null;
                let payment_frequency_id = null;
                let payment_duration_id = null;
                let approved_by_id = null;
                let prepared_by_id = null;
                let released_by_id = null;
                let last_modified_by_id = null;
                let notes = null;

        // Iterate through the data using a for loop
        for (let i = 0; i < state.loanApp?.data.length; i++) {
            const loanApp = state.loanApp.data[i];

            // Check if the current library's id matches the selectedLibraryId
            if (loanApp.id == parseInt(selectedLoanAppID.value)?.toString()) {
                group_id = loanApp.group_id;
                datetime_prepared = loanApp.datetime_prepared;
                document_status_code = loanApp.document_status_code;
                loan_application_no = loanApp.loan_application_no;
                amount_loan = loanApp.amount_loan;
                factor_rate = loanApp.factor_rate;
                amount_interest = loanApp.amount_interest;
                amount_paid = loanApp.amount_paid;
                datetime_target_release = loanApp.datetime_target_release;
                datetime_fully_paid = loanApp.datetime_fully_paid;
                datetime_approved = loanApp.datetime_approved;
                payment_frequency_id = loanApp.payment_frequency_id;
                payment_duration_id = loanApp.payment_duration_id;
                approved_by_id = loanApp.approved_by_id;
                prepared_by_id = loanApp.prepared_by_id;
                released_by_id = loanApp.released_by_id;
                last_modified_by_id = loanApp.last_modified_by_id;
                notes = loanApp.notes;
            break; // Exit the loop once we find the selected library
            }
        }

        loanApplicationService.id = selectedLoanAppID.value;
        loanApplicationService.group_id = group_id;
        loanApplicationService.datetime_prepared = datetime_prepared;
        loanApplicationService.document_status = document_status_code;
        loanApplicationService.loan_application_no = loan_application_no;
        loanApplicationService.amount_loan = amount_loan;
        loanApplicationService.factor_rate = factor_rate;
        loanApplicationService.amount_interest = amount_interest;
        loanApplicationService.amount_paid = amount_paid;
        loanApplicationService.datetime_target_release = datetime_target_release;
        loanApplicationService.datetime_fully_paid = datetime_fully_paid;
        loanApplicationService.datetime_approved = datetime_approved;
        loanApplicationService.payment_frequency_id = payment_frequency_id;
        loanApplicationService.payment_duration_id = payment_duration_id;
        loanApplicationService.approved_by_id = approved_by_id;
        loanApplicationService.prepared_by_id = prepared_by_id;
        loanApplicationService.released_by_id = released_by_id;
        loanApplicationService.last_modified_by_id = last_modified_by_id;
        loanApplicationService.notes = notes;

        console.log(loanApplicationService.id);
        console.log(loanApplicationService.group_id = group_id);
        console.log(loanApplicationService.datetime_prepared = datetime_prepared);
        console.log(loanApplicationService.document_status = document_status_code);
        console.log(loanApplicationService.loan_application_no = loan_application_no);
        console.log(loanApplicationService.amount_loan = amount_loan);
        console.log(loanApplicationService.factor_rate = factor_rate);
        console.log(loanApplicationService.amount_interest = amount_interest);
        console.log(loanApplicationService.amount_paid = amount_paid);
        console.log(loanApplicationService.datetime_target_release = datetime_target_release);
        console.log(loanApplicationService.datetime_fully_paid = datetime_fully_paid);
        console.log(loanApplicationService.datetime_approved = datetime_approved);
        console.log(loanApplicationService.payment_frequency_id = payment_frequency_id);
        console.log(loanApplicationService.payment_duration_id = payment_duration_id);
        console.log(loanApplicationService.approved_by_id = approved_by_id);
        console.log(loanApplicationService.prepared_by_id = prepared_by_id);
        console.log(loanApplicationService.released_by_id = released_by_id);
        console.log(loanApplicationService.last_modified_by_id = last_modified_by_id);
        console.log(loanApplicationService.notes = notes);
        navigateTo('loan_applications/update');
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
            navigateTo('loan_applications/create');
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

</script>