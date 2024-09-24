<template>
<div class="bg-white border border-gray-300 rounded-lg shadow-md p-4">
    <div class="border-b border-gray-300 p-2 text-center font-semibold">Fees</div>
    <form @submit.prevent="submitForm" class="space-y-4 mt-4">
    <div class="flex items-center">
        <label for="id" class="w-1/4 font-semibold">ID</label>
        <input type="text" id="id" v-model="form.id" name="id" class="w-3/4 border border-gray-300 rounded p-2">
    </div>
    <div class="flex items-center">
        <label for="description" class="w-1/4">Description</label>
        <select id="description" v-model="form.description" name="description" class="w-3/4 border border-gray-300 rounded p-2">
        <option value="passbook fee">Passbook Fee</option>
        <option value="membership fee">Membership Fee</option>
        </select>
    </div>
    <div class="flex items-center">
        <label for="amount" class="w-1/4">Amount</label>
        <input type="text" id="amount" v-model="form.amount" name="amount" class="w-3/4 border border-gray-300 rounded p-2">
    </div>
    <div class="flex items-center">
        <label for="isactive" class="w-1/4">Is Active</label>
        <select id="isactive" v-model="form.isactive" name="isactive" class="w-3/4 border border-gray-300 rounded p-2">
        <option value="active">Active</option>
        <option value="not active">Not Active</option>
        </select>
    </div>
    <div class="flex items-center">
        <label for="notes" class="w-1/4">Notes</label>
        <input type="text" id="notes" v-model="form.notes" name="notes" class="w-3/4 border border-gray-300 rounded p-2">
    </div>
    <div class="flex justify-end">
        <button type="submit" class="bg-blue-500 text-white rounded p-2">Submit</button>
    </div>
    </form>
</div>
</template>

<script>
export default {
data() {
    return {
    form: {
        id: '',
        description: '',
        amount: '',
        isactive: '',
        notes: ''
    }
    };
},
methods: {
    submitForm() {
    console.log(this.form);
    alert('Form submitted! Check console for data.');
    }
}
};
</script>