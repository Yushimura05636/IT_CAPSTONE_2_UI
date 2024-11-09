<template>
<div v-if="show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
    <div class="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
    <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold">
        ×
    </button>
    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Log in</h2>
    <button 
        @click="employeeLogin"
        class="w-full bg-green-600 text-white py-2 rounded-md mb-4 hover:bg-green-600 transition">
        Employee
    </button>
    <button 
        @click="clientLogin"
        class="w-full bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition">
        Client
    </button>
    </div>
</div>
</template>

<script>
export default {
props: {
    show: Boolean,
},
methods: {
    closeModal() {
        this.$emit("close");
    },
    employeeLogin() {
        this.$emit("employeeLogin");
    },
    clientLogin() {
        this.$emit("clientLogin");
    },
},
};
</script>

<style scoped>
/* Scoped styles aren't necessary here since Tailwind provides all needed classes */
</style>
