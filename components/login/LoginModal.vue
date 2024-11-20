<template>
    <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 backdrop-blur-sm z-50">
      <div class="bg-gradient-to-b from-green-600 to-green-700 rounded-lg shadow-2xl max-w-md w-full relative transform transition-all duration-500 ease-in-out">

        <!-- Bottom Section (Green) with Employee Login Button -->
        <div class="bg-teal-900 p-4 rounded-b-lg flex items-center justify-center rounded-lg">
            <span class="text-white">Login</span>
          <div class="w-full flex items-center justify-between bg-transparent text-white py-3 px-4 rounded-lg"></div>
        </div>
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute top-3 right-3 text-white text-2xl font-bold hover:text-gray-200 transition transform hover:scale-110">
          ×
        </button>

        <!-- Center Section (White Background) -->
        <div class="bg-white p-8 text-center shadow-inner">

          <!-- Modal Header -->
          <h2 class="text-gray-800 text-2xl font-bold mb-8 text-center tracking-wide">
          </h2>

          <!-- Client Login Button -->
          <button
            @click="clientLogin"
            class="flex items-center justify-center w-full bg-teal-700 text-white py-5 rounded-full mb-8 hover:bg-teal-800 transition duration-300 transform hover:scale-105 shadow-lg text-lg font-semibold">
            <span>Client</span>
          </button>
        </div>

        <!-- Bottom Section (Green) with Employee Login Button -->
        <div class="bg-teal-900 p-1 rounded-b-lg flex items-center justify-center">
          <button
            @click="employeeLogin"
            class="w-full flex items-center justify-between bg-transparent text-white py-2 px-4 rounded-lg hover:bg-teal-800 transition duration-300 transform hover:scale-105 shadow-lg text-base font-medium">
            <span>Employee Log in</span>
            <span class="text-xl font-bold">&rsaquo;</span>
          </button>
        </div>
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
