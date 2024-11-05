<template>
    <div class="forgot-password-container">
      <div v-if="!codeSent">
        <h2>Forgot Password</h2>
        <input v-model="email" type="email" placeholder="Enter your email" />
        <button @click="sendResetLink">Send Reset Link</button>
        <p v-if="errorMessage">{{ errorMessage }}</p>
      </div>

      <div v-else>
        <h2>Visit your email to reset your password</h2>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref } from 'vue';
import { authService } from '~/components/api/AuthService';

  const email = ref('');
  const verificationCode = ref('');
  const codeSent = ref(false);
  const errorMessage = ref('');
  const verificationError = ref('');

  async function sendResetLink() {

      debugger
      try {
        // Call your API to send the reset link
        const params = {
            email: email.value,
            method: 'forgot',
        }
        debugger
        const response = await authService.sendVerification(params);

        if(response)
        {
          codeSent.value = true;
        }
      } catch (error) {
        console.log(`${error}`)
      }
  }
  </script>

  <style scoped>
  .forgot-password-container {
    max-width: 400px;
    margin: auto;
  }
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
  }
  button {
    padding: 10px;
  }
  .error {
    color: red;
  }
  </style>
