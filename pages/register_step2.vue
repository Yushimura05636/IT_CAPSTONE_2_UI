<template>
  <div class="min-h-screen flex flex-col lg:flex-row">
    <!-- Left section: Image with overlay -->
    <div class="lg:w-1/2 relative h-64 lg:h-auto">
      <img
        alt="People working in an office"
        class="absolute inset-0 w-full h-full object-cover"
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

    <!-- Right section: Form -->
    <div class="lg:w-1/2 bg-gray-900 flex flex-col justify-between">
      <div class="p-6 lg:p-12 text-white">
        <!-- Logo and title -->
        <div class="flex justify-center mb-6 lg:mb-8">
          <img
            alt="LendCash logo"
            class="h-16 lg:h-20"
            src="../img/LendCash_Logo-removebg-preview.png"
          />
        </div>
        <h2 class="text-3xl lg:text-4xl font-bold text-center mb-4">REGISTRATION</h2>
        <h3 class="text-xl lg:text-2xl font-semibold text-center mb-4">
          Step 2 <span class="text-lg">Advance Information</span>
        </h3>
        <p class="text-center mb-6 lg:mb-8 text-sm lg:text-base">
          To become a fully verified member, please send your requirements online, including valid IDs, barangay clearance, PSA, and proof of income.
        </p>

        <!-- Registration form -->
        <form class="space-y-4">
          <input
            class="w-full p-3 rounded-full bg-gray-800 placeholder-gray-400 text-white"
            placeholder="Enter Phone Number"
            type="text"
          />
          <input
            class="w-full p-3 rounded-full bg-gray-800 placeholder-gray-400 text-white"
            placeholder="Enter Valid Email"
            type="email"
          />
          <input
            class="w-full p-3 rounded-full bg-gray-800 placeholder-gray-400 text-white"
            placeholder="Enter Current Address"
            type="text"
          />
          <input
            class="w-full p-3 rounded-full bg-gray-800 placeholder-gray-400 text-white"
            placeholder="Enter Occupation"
            type="text"
          />
          <input
            class="w-full p-3 rounded-full bg-gray-800 placeholder-gray-400 text-white"
            placeholder="Enter Co-Borrower"
            type="text"
          />

          <!-- File upload section -->
          <div class="space-y-4">
            <div class="flex justify-between space-x-2">
              <div class="w-1/2">
                <div class="bg-gray-800 p-3 rounded-full text-center text-white">
                  Valid ID Image
                </div>
                <input class="mt-2 w-full" type="file" accept="image/*" />
              </div>
              <div class="w-1/2">
                <div class="bg-gray-800 p-3 rounded-full text-center text-white">
                  Barangay Clearance Image
                </div>
                <input class="mt-2 w-full" type="file" accept="image/*" />
              </div>
            </div>
            <div class="w-1/2">
              <div class="bg-gray-800 p-3 rounded-full text-center text-white">
                PSA Image
              </div>
              <input class="mt-2 w-full" type="file" accept="image/*" />
            </div>
          </div>
        </form>
      </div>

      <!-- Navigation buttons -->
      <div class="flex justify-between p-6 lg:p-12">
        <button class="bg-purple-600 text-white px-4 lg:px-6 py-3 rounded-full">
          Back
        </button>
        <button class="bg-purple-600 text-white px-4 lg:px-6 py-3 rounded-full">
          <a href="register-final">Next</a>
        </button>
      </div>

      <!-- Footer -->
      <footer class="bg-gray-800 text-center py-4 text-white text-sm lg:text-base">
        <p>2023 LendCash. All Rights Reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
/* Ensures that the layout adjusts to smaller screens */
@media (max-width: 1024px) {
  .lg\\:h-auto {
    height: auto;
  }
}
</style>









