<template>
<div class="bg-white border border-gray-300 rounded-lg shadow-md p-6 w-full max-w-md">
    <h2 class="text-xl font-bold mb-4">Loan Application Fees</h2>
    <form @submit.prevent="submitForm">
    <div class="mb-4">
        <label for="loan_application_id" class="block text-gray-700 font-bold mb-2">Loan Application ID</label>
        <input 
        type="text" 
        id="loan_application_id" 
        v-model="loanApplicationId" 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
    </div>
    <div class="mb-4">
        <label for="fee_id" class="block text-gray-700 font-bold mb-2">Fee</label>
        <select 
        id="fee_id" 
        v-model="feeId" 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
        <option value="membership_fee">Membership Fee</option>
        <option value="passbook_fee">Passbook Fee</option>
        </select>
    </div>
    <div class="mb-4">
        <label for="amount" class="block text-gray-700 font-bold mb-2">Amount</label>
        <input 
        type="text" 
        id="amount" 
        v-model="amount" 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
    </div>
    <div class="mb-4">
        <label for="encoding_order" class="block text-gray-700 font-bold mb-2">Encoding Order</label>
        <input 
        type="text" 
        id="encoding_order" 
        v-model="encodingOrder" 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
    </div>
    <div class="flex items-center justify-between">
        <button 
        type="submit" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
        Submit
        </button>
    </div>
    </form>
    <div v-if="submitted" class="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
    <p><strong>Loan Application ID:</strong> {{ loanApplicationId }}</p>
    <p><strong>Fee:</strong> {{ feeId }}</p>
    <p><strong>Amount:</strong> {{ amount }}</p>
    <p><strong>Encoding Order:</strong> {{ encodingOrder }}</p>
    </div>
</div>
</template>

<script>
export default {
data() {
    return {
    loanApplicationId: '',
    feeId: '',
    amount: '',
    encodingOrder: '',
    submitted: false
    };
},
methods: {
    submitForm() {
    // For demonstration purposes, we're just logging the values and setting the submitted flag
    console.log({
        loanApplicationId: this.loanApplicationId,
        feeId: this.feeId,
        amount: this.amount,
        encodingOrder: this.encodingOrder
    });
    
    // Set the submitted flag to true to show the confirmation message
    this.submitted = true;
    
    // for reset form after submission
//resetForm(){
this.form = {
    // this.loanApplicationId = '';
    // this.feeId = '';
    // this.amount = '';
    // this.encodingOrder = '';
    }
}
}}
</script>

<style scoped>
/* Add any specific styles for this component here */
</style>
