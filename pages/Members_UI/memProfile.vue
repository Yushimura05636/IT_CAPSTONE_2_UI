<template>
    <div class="max-w-4xl mx-auto p-6 bg-teal-50">
      <!-- Profile Header -->
      <section class="bg-teal-600 p-6 rounded-lg shadow-md text-white">
        <h1 class="text-xl font-semibold mb-4">My Profile</h1>
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center">
            <img
              src="https://storage.googleapis.com/a1aa/image/ig7XeZWfFfWtuo7ZLBbl3etLp6yveOvtNfVjYMVlmC18O2S7E.jpg"
              alt="Profile of John Doe"
              class="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h2 class="text-lg font-semibold">John Doe</h2>
              <p>+1 202 555 0156</p>
              <p class="flex items-center">
                Registered Member
                <i class="fas fa-check-circle text-blue-500 ml-2"></i>
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Personal Information Section -->
      <section class="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 class="text-lg font-semibold mb-4">Personal Information</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p class="text-gray-600">First Name</p>
            <p class="font-semibold">John</p>
          </div>
          <div>
            <p class="text-gray-600">Last Name</p>
            <p class="font-semibold">Doe</p>
          </div>
          <div>
            <p class="text-gray-600">Phone</p>
            <p class="font-semibold">+1 202 555 0156</p>
          </div>
          <div>
            <p class="text-gray-600">Country</p>
            <p class="font-semibold">United States of America</p>
          </div>
          <div>
            <p class="text-gray-600">City/State</p>
            <p class="font-semibold">California, USA</p>
          </div>
          <div>
            <p class="text-gray-600">Postal Code</p>
            <p class="font-semibold">ERT 62574</p>
          </div>
        </div>
      </section>

      <!-- Credentials Section -->
      <section class="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 class="text-lg font-semibold mb-4">Credentials</h2>
        <div>
          <p class="text-gray-600">Email Address</p>
          <p class="font-semibold">johndoe@lendcash.erd.ph</p>
        </div>
        <div class="flex items-center justify-between mt-4">
          <div>
            <p class="text-gray-600">Password</p>
            <p class="font-semibold">create new password</p>
          </div>
          <a href="/newpassword" class="text-blue-500 hover:text-blue-700">
            <i class="fas fa-edit"></i> Edit
          </a>
        </div>
      </section>
    </div>
  </template>

  <script setup>
  // Currently, no reactive properties are required for this simple layout.
  </script>

  <style scoped>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

  body {
    font-family: 'Inter', sans-serif;
  }
  </style>
