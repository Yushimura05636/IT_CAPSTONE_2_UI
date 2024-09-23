<template>
    <NuxtLayout name="admin">
        <main>
            <div class="flex justify-center items-center h-screen bg-gray-100">
            <div class="bg-white border border-gray-300 rounded-lg p-6 shadow-md w-full max-w-lg">
            <div class="text-center font-bold text-xl mb-4">Transaction Form</div>
            <form @submit.prevent="submitForm">
                <div class="mb-4">
                    <label class="block text-gray-700">Customer Name</label>
                    <input
                        type="text"
                        v-model="form.customerName"
                        class="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Group Name</label>
                    <input
                        type="text"
                        v-model="form.groupName"
                        class="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Date Created</label>
                    <input
                        type="date"
                        v-model="form.dateCreated"
                        class="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Date Prepared</label>
                    <input
                        type="date"
                        v-model="form.datePrepared"
                        class="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Document Status</label>
                    <input
                        type="text"
                        v-model="form.documentStatus"
                        class="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Date Last Updated</label>
                    <input
                        type="date"
                        v-model="form.dateLastUpdated"
                        class="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Loan Application No</label>
                    <input
                        type="text"
                        v-model="form.loanApplicationNo"
                        class="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Loan Amount</label>
                    <input
                        type="number"
                        v-model="form.loanAmount"
                        class="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Factor Rate</label>
                    <input
                        type="number"
                        step="0.01"
                        v-model="form.factorRate"
                        class="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Interest Amount</label>
                    <input
                        type="number"
                        step="0.01"
                        v-model="form.interestAmount"
                        class="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Amount Paid</label>
                    <input
                        type="number"
                        step="0.01"
                        v-model="form.amountPaid"
                        class="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Release Schedule</label>
                    <input
                        type="date"
                        v-model="form.releaseSchedule"
                        class="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Date Fully Paid</label>
                    <input
                        type="date"
                        v-model="form.dateFullyPaid"
                        class="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Date Approved</label>
                    <input
                        type="date"
                        v-model="form.dateApproved"
                        class="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Payment Frequency</label>
                    <select
                        v-model="form.paymentFrequency"
                        class="w-full border border-gray-300 rounded p-2"
                    >
                        <option value="weekly">Weekly</option>
                        <option value="bi-weekly">Bi-Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Payment Duration</label>
                    <select
                        v-model="form.paymentDuration"
                        class="w-full border border-gray-300 rounded p-2"
                    >
                        <option value="6 months">6 Months</option>
                        <option value="12 months">12 Months</option>
                        <option value="24 months">24 Months</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Approved By</label>
                    <input
                        type="text"
                        v-model="form.approvedBy"
                        class="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Prepared By</label>
                    <input
                        type="text"
                        v-model="form.preparedBy"
                        class="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Released By</label>
                    <input
                        type="text"
                        v-model="form.releasedBy"
                        class="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Last Modified By</label>
                    <input
                        type="text"
                        v-model="form.lastModifiedBy"
                        class="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Notes</label>
                    <textarea
                        v-model="form.notes"
                        class="w-full border border-gray-300 rounded p-2"
                    ></textarea>
                </div>
                <div class="text-center">
                    <button
                        type="submit"
                        class="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
        </main>
    </NuxtLayout>
</template>

<script>
export default {
    data() {
        return {
            form: {
                customerName: '',
                groupName: '',
                dateCreated: '',
                datePrepared: '',
                documentStatus: '',
                dateLastUpdated: '',
                loanApplicationNo: '',
                loanAmount: '',
                factorRate: '',
                interestAmount: '',
                amountPaid: '',
                releaseSchedule: '',
                dateFullyPaid: '',
                dateApproved: '',
                paymentFrequency: '',
                paymentDuration: '',
                approvedBy: '',
                preparedBy: '',
                releasedBy: '',
                lastModifiedBy: '',
                notes: ''
            }
        };
    },
    methods: {
        submitForm() {
            console.log('Form Submitted:', this.form);
            alert('Form submitted successfully!');
            // Add further form processing logic here if needed
        }
    }
};
</script>

<style scoped>
button {
    padding: 8px 12px;
    font-size: 0.875rem;
    text-align: center;
}

input[type="text"],
input[type="date"],
input[type="number"],
select,
textarea {
    width: 100%;
}

textarea {
    resize: vertical;
}
</style>
