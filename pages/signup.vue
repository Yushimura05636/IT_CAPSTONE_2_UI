<template>
    <div class="min-h-screen flex flex-col md:flex-row bg-teal-50">
      <!-- Left Section with Image/Background -->
      <div class="md:w-1/2 bg-cover bg-center" style="background-image: url('/placeholder.svg?height=1080&width=1080')">
        <div class="h-full w-full bg-teal-800/30 flex items-center justify-center">
          <img
            src="../img/2019-04-14.jpg"
            alt="Company Logo"
            class="w-32 h-32 object-contain"
          />
        </div>
      </div>

      <!-- Right Section with Sign-up Form -->
      <div class="md:w-1/2 flex items-center justify-center p-8">
        <div class="w-full max-w-md">
          <h2 class="text-3xl font-bold mb-6 text-center text-teal-800">Sign Up</h2>
          <p class="text-sm text-gray-600 mb-8 text-center">Create an account to get started</p>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                id="email"
                v-model="email"
                type="email"
                placeholder="john@example.com"
                required
                :class="[
                  'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
                  errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-teal-500 focus:ring-teal-500'
                ]"
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div class="relative">
                <input
                  id="password"
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  :class="[
                    'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
                    errors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-teal-500 focus:ring-teal-500'
                  ]"
                />
                <button
                  type="button"
                  @click="togglePasswordVisibility"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <EyeIcon v-if="!showPassword" class="h-5 w-5" />
                  <EyeOffIcon v-else class="h-5 w-5" />
                </button>
              </div>
              <p v-if="errors.password" class="mt-1 text-sm text-red-600">{{ errors.password }}</p>
            </div>

            <button
              type="submit"
              class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-800 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out"
              :disabled="isLoading"
            >
              {{ isLoading ? 'Signing Up...' : 'Sign Up' }}
            </button>
          </form>

          <p v-if="generalError" class="mt-4 text-sm text-red-600 text-center">{{ generalError }}</p>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import { ref, reactive } from 'vue'
  import { EyeIcon, EyeOffIcon } from 'lucide-vue-next'

  const email = ref('')
  const password = ref('')
  const showPassword = ref(false)
  const isLoading = ref(false)
  const generalError = ref('')

  const errors = reactive({
    email: '',
    password: ''
  })

  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  const handleSubmit = async () => {
    // Reset errors
    errors.email = ''
    errors.password = ''
    generalError.value = ''

    // Validate inputs
    if (!email.value) {
      errors.email = 'Email is required'
    } else if (!validateEmail(email.value)) {
      errors.email = 'Please enter a valid email address'
    }

    if (!password.value) {
      errors.password = 'Password is required'
    } else if (password.value.length < 6) {
      errors.password = 'Password must be at least 6 characters long'
    }

    // If there are any errors, stop the submission
    if (errors.email || errors.password) {
      return
    }

    // Simulate API call
    isLoading.value = true
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate network delay

      // Simulate authentication logic (replace with actual API call)
      if (email.value === 'test@example.com' && password.value === 'password123') {
        console.log('Sign up successful', { email: email.value, password: password.value })
        // Redirect or show success message here
      } else {
        generalError.value = 'Invalid email or password. Please try again.'
      }
    } catch (error) {
      console.error('Sign up error:', error)
      generalError.value = 'An error occurred. Please try again later.'
    } finally {
      isLoading.value = false
    }
  }
  </script>
