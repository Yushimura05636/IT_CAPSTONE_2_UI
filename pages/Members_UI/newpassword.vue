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

      <!-- Create Password Section -->
      <section>
        <div class="bg-green-50 flex items-center justify-center min-h-screen">
          <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
            <h2 class="text-xl font-semibold mb-4">Create New Password</h2>
            <form @submit.prevent="submitForm">
              <div class="mb-4">
                <label class="block text-gray-500 mb-2" for="old-password">Old Password</label>
                <div class="relative">
                  <input
                    id="old-password"
                    type="password"
                    class="w-full p-2 border rounded"
                    :type="showOldPassword ? 'text' : 'password'"
                    v-model="oldPassword"
                  />
                  <button
                    type="button"
                    class="absolute inset-y-0 right-0 px-3 text-gray-500"
                    @click="togglePasswordVisibility('old')"
                  >
                    <i :class="showOldPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                  </button>
                </div>
              </div>
              <div class="mb-4">
                <label class="block text-gray-500 mb-2" for="new-password">Create New Password</label>
                <div class="relative">
                  <input
                    id="new-password"
                    type="password"
                    class="w-full p-2 border rounded"
                    :type="showNewPassword ? 'text' : 'password'"
                    v-model="newPassword"
                  />
                  <button
                    type="button"
                    class="absolute inset-y-0 right-0 px-3 text-gray-500"
                    @click="togglePasswordVisibility('new')"
                  >
                    <i :class="showNewPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                  </button>
                </div>
              </div>
              <div class="mb-4">
                <label class="block text-gray-500 mb-2" for="retype-password">Re-type New Password</label>
                <div class="relative">
                  <input
                    id="retype-password"
                    type="password"
                    class="w-full p-2 border rounded"
                    :type="showRetypePassword ? 'text' : 'password'"
                    v-model="retypePassword"
                  />
                  <button
                    type="button"
                    class="absolute inset-y-0 right-0 px-3 text-gray-500"
                    @click="togglePasswordVisibility('retype')"
                  >
                    <i :class="showRetypePassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                  </button>
                </div>
              </div>
              <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue';

  // Define reactive states for passwords and visibility toggles
  const oldPassword = ref('');
  const newPassword = ref('');
  const retypePassword = ref('');
  const showOldPassword = ref(false);
  const showNewPassword = ref(false);
  const showRetypePassword = ref(false);

  // Toggle password visibility function
  function togglePasswordVisibility(type) {
    if (type === 'old') showOldPassword.value = !showOldPassword.value;
    else if (type === 'new') showNewPassword.value = !showNewPassword.value;
    else if (type === 'retype') showRetypePassword.value = !showRetypePassword.value;
  }

  // Submit form function (optional)
  function submitForm() {
    console.log("Old Password:", oldPassword.value);
    console.log("New Password:", newPassword.value);
    console.log("Re-typed Password:", retypePassword.value);

    // After processing, redirect to the login page
  router.push({ name: 'login' });
  }
  </script>

  <style scoped>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

  body {
    font-family: 'Inter', sans-serif;
  }
  </style>
