<template>
  <div class="min-h-screen flex flex-col">
    <!-- Main Content Section -->
    <div class="flex flex-1 flex-col lg:flex-row">
      <!-- Left Section with Image and Text -->
      <div class="w-full lg:w-1/2 relative">
        <img
          alt="People working in an office setting"
          class="w-full h-64 lg:h-full object-cover"
          src="../img/register-image.png"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-6 lg:p-10">
          <h1 class="text-white text-3xl lg:text-5xl font-bold">
            Small Loans, Big Impact
          </h1>
          <p class="text-white text-sm lg:text-lg mt-2 lg:mt-4">
            Microfinance provides small loans and financial services to individuals and small businesses in underserved communities, empowering them to achieve financial independence and improve their quality of life.
          </p>
        </div>
      </div>

      <!-- Right Section with Form -->
      <div class="w-full lg:w-1/2 bg-gray-800 flex flex-col justify-center items-center p-6 lg:p-10">
        <!-- Responsive Logo -->
        <img
          alt="LendCash logo"
          class="mb-6 w-16 lg:w-24"
          src="../img/LendCash_Logo-removebg-preview.png"
        />
        <h2 class="text-white text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
          REGISTRATION
        </h2>

        <div class="text-white text-base lg:text-lg mb-4">Step 3</div>
        <h3 class="text-white text-xl lg:text-2xl font-bold mb-4">
          Upload Personal Image
        </h3>

        <p class="text-white text-xs lg:text-sm mb-6 text-center">
          This is a Pre-Registration. To become a fully verified member, we require our dear clients to send their requirements online. This includes any type of valid IDs, barangay clearance, PSA, and any type of proof of income.
        </p>

        <!-- File Upload Area -->
        <div class="bg-gray-300 w-full lg:w-64 h-40 flex flex-col items-center justify-center mb-4">
          <!-- Display Image if selected -->
          <img v-if="imageUrl" :src="imageUrl" alt="Selected Image" class="w-full h-full object-cover mb-2" />

          <!-- File Input -->
          <input
            class="hidden"
            id="file-upload"
            type="file"
            @change="handleFileChange"
          />
          <label class="bg-white text-gray-800 py-2 px-4 rounded cursor-pointer" for="file-upload">
            Choose File
          </label>
        </div>

        <!-- Submit Button -->
        <button class="bg-purple-600 text-white py-2 px-6 rounded">
          <a href="/">Submit</a>
        </button>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-white text-center py-4">
      <p class="text-gray-600">
        2023 LendCash. All Rights Reserved.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: null, // Holds the base64 image data
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0]; // Get the selected file
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result; // Set the image URL
      };
      reader.readAsDataURL(file); // Convert file to base64 format
    },
  },
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
