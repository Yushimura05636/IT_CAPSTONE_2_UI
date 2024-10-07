<template>
    <NuxtLayout name="admin">
        <main>
            <div class="flex justify-center items-center bg-gray-100">
                <div class="bg-white border border-gray-300 rounded-lg p-6 shadow-md w-full">
                    <div class="text-center font-bold text-xl mb-4">Loan Application Update Form</div>
                        <div class="mb-4">
                            <label class="block text-gray-700">Loan Amount</label>
                            <input
                                v-model="form.amount_loan"  
                                type="number"
                                class="w-full border border-gray-300 rounded p-2"
                            />

                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700">Factor Rate</label>
                            <select  v-model="form.factor_rate" class="w-full border rounded-lg px-4 py-2">
                                <option  v-for="factorRate in state.factorRates" :key="factorRate.id" :value="factorRate.value">
                                    {{ factorRate.value }}
                                </option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700">Interest Amount</label>
                            <input
                                v-model="form.amount_interest"
                                type="number"
                                step="0.01"
                                class="w-full border border-gray-300 rounded p-2"
                            />
                        </div>

                        <!-- Add Amount Paid Field -->
                        <div class="mb-4">
                            <label class="block text-gray-700">Amount Paid</label>
                            <input
                                v-model="form.amount_paid"
                                type="number"
                                class="w-full border border-gray-300 rounded p-2"
                                readonly
                            />
                        </div>


                        <div class="mb-4">
                            <label class="block text-gray-700">Release Schedule</label>
                            <input
                                v-model="form.datetime_target_release"
                                type="date"
                                class="w-full border border-gray-300 rounded p-2"
                            />
                        </div>

                        <!-- Automatically Updated Fields -->
                        <div class="mb-4">
                            <label class="block text-gray-700">Payment Frequency</label>
                            <select v-model="form.payment_frequency_id" class="w-full border rounded-lg px-4 py-2">
                                <option v-for="frequency in state.paymentFrequencies" :key="frequency.id" :value="frequency.id">
                                    {{ frequency.description }}
                                </option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700">Duration</label>
                            <select v-model="form.payment_duration_id" class="w-full border rounded-lg px-4 py-2">
                                <option v-for="duration in state.durations" :key="duration.id" :value="duration.id">
                                    {{ duration.description }}
                                </option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700">Comment</label>
                            <textarea
                                v-model="form.notes"  
                                class="w-full border border-gray-300 rounded p-2"
                            ></textarea>
                        </div>
                        
                        <!-- <div v-if="state.fees.length > 0" class="overflow-x-auto">
                            <table class="min-w-full bg-white border border-gray-300 mb-4">
                                <thead>
                                    <tr>
                                        <th class="px-4 py-2 border text-left">Select</th>
                                        <th class="px-4 py-2 border text-left">Fee Description</th>
                                        <th class="px-4 py-2 border text-left">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="fee in state.fees" :key="fee.id">
                                        <td class="px-4 py-2 border text-left">
                                            <input
                                                type="checkbox"
                                                :value="fee.id"
                                                :checked="customerData[selectedCustomerId].selectedFees.includes(fee.id)"
                                                @change="updateSelectedFees(fee.id, $event.target.checked)"
                                            />
                                        </td>
                                        <td class="px-4 py-2 border">{{ fee.description }}</td>
                                        <td class="px-4 py-2 border">{{ fee.amount }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> -->

                        <!-- <div class="mb-4">
                            <label class="block text-gray-700">Total Fees</label>
                            <input
                                v-model="customerData[selectedCustomerId].totalFees"
                                type="number"
                                class="w-full border border-gray-300 rounded p-2"
                                readonly
                            />
                        </div>-->

                        <div class="text-center mt-4">
                            <button @click="submitForm" class="bg-blue-500 text-white px-4 py-2 rounded">
                                Update
                            </button>
                        </div> 
                    </div> 
                </div>
        </main>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { apiService } from '~/routes/api/API';
import { loanApplicationService } from '~/models/LoanApplication'


const state = ref({
    factorRates: [],
    paymentFrequencies: [],
    durations: [],
    fees: [],
});

onMounted(() => {
    fetchFactorRate();
    fetchPaymentFrequencies();
    fetchDurations();
    fetchFees();
});

const fetchFees = async () => {
    try {
        const response = await apiService.getFeeNoAuth({});
        state.value.fees = response.data;
    } catch (error) {
        toast.error(error.message, { autoClose: 5000 });
    }
}

const fetchFactorRate = async () => {
    try {
        const response = await apiService.getFactorRateNoAuth({});
        state.value.factorRates = response.data;
    } catch (error) {
        toast.error(error.message, { autoClose: 5000 });
    }
};

const fetchPaymentFrequencies = async () => {
    try {
        const response = await apiService.getPaymentFrequencyNoAuth({});
        state.value.paymentFrequencies = response.data;
    } catch (error) {
        toast.error(error.message, { autoClose: 5000 });
    }
};

// Fetch duration values from the server
const fetchDurations = async () => {
    try {
        const response = await apiService.getPaymentdurationNoAuth({});
        state.value.durations = response.data;
    } catch (error) {
        toast.error(error.message, { autoClose: 5000 });
    }
};

const form = ref({
    id: loanApplicationService.id,
    datetime_prepared: loanApplicationService.datetime_prepared,
    document_status_code: loanApplicationService.document_status,
    loan_application_no: loanApplicationService.loan_application_no,
    amount_loan: loanApplicationService.amount_loan,
    factor_rate: loanApplicationService.factor_rate,
    amount_interest: loanApplicationService.amount_interest,
    amount_paid: loanApplicationService.amount_paid,
    datetime_target_release: loanApplicationService.datetime_target_release  
    ? new Date(loanApplicationService.datetime_target_release).toISOString().split('T')[0]
    : null, // Format datetime_target_release to YYYY-MM-DD,
    datetime_fully_paid: loanApplicationService.datetime_fully_paid,
    datetime_approved: loanApplicationService.datetime_approved,
    payment_frequency_id: loanApplicationService.payment_frequency_id,
    payment_duration_id: loanApplicationService.payment_duration_id,
    approved_by_id: loanApplicationService.approved_by_id,
    prepared_by_id: loanApplicationService.prepared_by_id,
    released_by_id: loanApplicationService.released_by_id,
    last_modified_by_id: loanApplicationService.last_modified_by_id,
    notes: loanApplicationService.notes,
    });

    const successMessage = ref<string | null>(null);

// Function to handle form submission
const submitForm = () => {
    if (
    form.value.id && // Check form fields instead of loanApplicationService
    // form.value.datetime_prepared &&
    // form.value.document_status_code &&
    // form.value.loan_application_no &&
    form.value.amount_loan &&
    form.value.factor_rate &&
    form.value.amount_interest &&
    form.value.amount_paid &&
    form.value.datetime_target_release &&
    // form.value.datetime_fully_paid &&
    // form.value.datetime_approved &&
    form.value.payment_frequency_id &&
    form.value.payment_duration_id &&
    // form.value.approved_by_id &&
    // form.value.prepared_by_id &&
    // form.value.released_by_id &&
    // form.value.last_modified_by_id &&
    form.value.notes // Ensure all required fields are filled
    ) {
        console.log('Form Data:', form.value);
        // alert("test")
        create();

    // // Clear the form
    // form.value.id = '';
    // form.value.datetime_prepared = '';
    // form.value.numOfPayments = '';
    // form.value.notes = '';
    } else {
    toast.error("Please fill in all the fields.", 
    { autoClose: 5000 });
    // Handle empty fields (optional)
}
};

async function create() {
try {
    const params = {
        id: form.value.id,
        // datetime_prepared: form.value.datetime_prepared,
        // document_status_code: form.value.document_status_code,
        // loan_application_no: form.value.loan_application_no,
        amount_loan: form.value.amount_loan,
        factor_rate: form.value.factor_rate,
        amount_interest: form.value.amount_interest,
        amount_paid: form.value.amount_paid,
        datetime_target_release: form.value.datetime_target_release,
        // datetime_fully_paid: form.value.datetime_fully_paid,
        // datetime_approved: form.value.datetime_approved,
        payment_frequency_id: form.value.payment_frequency_id,
        payment_duration_id: form.value.payment_duration_id,
        // approved_by_id: form.value.approved_by_id,
        // prepared_by_id: form.value.prepared_by_id,
        // released_by_id: form.value.released_by_id,
        // last_modified_by_id: form.value.last_modified_by_id,
        notes: form.value.notes,
    };
    const response = await apiService.updateLoanApplication(params, parseInt(form.value.id));
    if (response.data) {
        toast.success("Loan Application updated successfully!", {
            autoClose: 2000,
            });
            // Introduce a delay before navigating
            setTimeout(() => {
                navigateTo('/loan_applications');  
            }, 2000);
    }
} catch (error: any) {
    toast.error("Error: " + error);
}
}



// Function to handle cancel action
const cancel = () => {
// Navigate to the libraries page or perform any other action
navigateTo("/loan_applications");
};

</script>