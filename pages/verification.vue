<template>
    <div class="verification-page">
      <h2>Enter Your 2FA Code</h2>
      <input v-model="code" placeholder="Enter 6-digit code" class="input-code" />
      <button @click="verifyCode" class="verify-button">Verify</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
    </div>
  </template>

  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
import { authService } from '~/components/api/AuthService';
import { UserService } from '~/models/User';

  const code = ref('');
  const errorMessage = ref('');
  const successMessage = ref('');
  const userId = 'user123'; // Replace with actual user ID from login data

  const router = useRouter();

  const verifyCode = async () => {
    try {
        debugger;
      const response = await authService.verifyVerificationCode({
        code: code.value,
        email: UserService.email,
      }, code.value);
      if (response.success) {
        localStorage.setItem("_token", response.data?.token)
        successMessage.value = 'Code verified successfully!';
        errorMessage.value = '';

        // Redirect or take further action after successful verification
        router.push('/dashboard');
      } else {
        errorMessage.value = 'Invalid or expired code.';
      }
    } catch (error) {
      errorMessage.value = 'An error occurred. Please try again.';
    }
  };
  </script>

  <style scoped>
  .verification-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .input-code {
    padding: 8px;
    font-size: 16px;
  }
  .verify-button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  .error {
    color: red;
  }
  .success {
    color: green;
  }
  </style>
