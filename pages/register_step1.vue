<template>
  <div class="min-h-screen flex flex-col lg:flex-row">
    <!-- Left Section with Image -->
    <div class="w-full lg:w-1/2 relative">
      <img
        alt="People working in an office"
        class="w-full h-64 lg:h-full object-cover"
        src="../img/register-image.png"
      />
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="absolute inset-0 flex flex-col justify-center items-start p-5 lg:p-10 text-white">
        <h1 class="text-2xl lg:text-4xl font-bold">Small Loans, Big Impact</h1>
        <p class="mt-2 lg:mt-4 text-sm lg:text-lg">
          Microfinance provides small loans and financial services to individuals and small businesses in underserved communities, empowering them to achieve financial independence and improve their quality of life.
        </p>
      </div>
    </div>

    <!-- Right Section with Form -->
    <div class="w-full lg:w-1/2 bg-gray-800 p-5 lg:p-10">
      <div class="flex justify-center mb-6">
        <img
          alt="LendCash Logo"
          class="h-16 w-16 lg:h-20 lg:w-20"
          src="../img/LendCash_Logo-removebg-preview.png"
        />
      </div>
      <h2 class="text-2xl lg:text-3xl font-bold text-white text-center mb-4">REGISTRATION</h2>
      <h3 class="text-lg lg:text-xl font-semibold text-white mb-2">
        Step 1 <span class="font-normal">| Basic Information</span>
      </h3>
      <p class="text-white text-sm lg:text-base mb-4 lg:mb-6">
        This is a Pre-Registration. To become a fully verified member, we require our dear clients to send their requirements onsite. This includes any type of valid IDs, barangay clearance, PSA, and any type of proof of income.
      </p>
      <form class="space-y-4">
        <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <input
            class="w-full lg:w-1/2 p-3 rounded-full bg-white text-gray-800"
            placeholder="Enter Last Name"
            type="text"
          />
          <input
            class="w-full lg:w-1/2 p-3 rounded-full bg-white text-gray-800"
            placeholder="Enter First Name"
            type="text"
          />
        </div>
        <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <input
            class="w-full lg:w-1/2 p-3 rounded-full bg-white text-gray-800"
            placeholder="Enter Middle Name"
            type="text"
          />
          <input
            class="w-full lg:w-1/2 p-3 rounded-full bg-white text-gray-800"
            placeholder="Enter Birth Date"
            type="date"
          />
        </div>
        <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <input
            class="w-full lg:w-1/2 p-3 rounded-full bg-white text-gray-800"
            placeholder="Enter Civil Status"
            type="text"
          />
          <input
            class="w-full lg:w-1/2 p-3 rounded-full bg-white text-gray-800"
            placeholder="Enter Birth Place"
            type="text"
          />
        </div>
        <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <input
            class="w-full lg:w-1/2 p-3 rounded-full bg-white text-gray-800"
            placeholder="Enter Gender"
            type="text"
          />
          <input
            class="w-full lg:w-1/2 p-3 rounded-full bg-white text-gray-800"
            placeholder="Enter Date Registered"
            type="date"
          />
        </div>
        <div class="flex justify-between mt-6">
          <button
            class="px-6 py-3 rounded-full bg-purple-600 text-white"
            type="button"
            @click="index"
          >
            Cancel
          </button>
          <button class="px-6 py-3 rounded-full bg-purple-600 text-white" type="button">
            <a href="register-submitted">Next </a>
          </button>
        </div>
      </form>
    </div>
  </div>
  <footer class="text-center py-4 bg-white text-gray-800">
    2024 LendCash. All Rights Reserved.
  </footer>
</template>

<script>
export default {
  head: {
    title: 'Register',
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
      },
    ],
  },
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
