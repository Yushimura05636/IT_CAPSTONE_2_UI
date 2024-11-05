<template>
    <div class="forgot-password-container flex flex-col items-center justify-center h-screen bg-gray-100">
      <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Forgot Password</h2>
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          class="input-field"
        />
        <button @click="sendResetLink" class="submit-button w-full mt-4">Send Reset Link</button>
        <p v-if="errorMessage" class="error text-red-600 mt-2">{{ errorMessage }}</p>
      </div>

      <div v-if="codeSent" class="mt-4">
        <h2 class="text-lg text-gray-700">
            An email has been sent to {{ displayCensoredEmail(email) }} to reset your password.
        </h2>
        <button @click="resendEmail" class="mt-2 btn-secondary">
        Resend Email
        </button>
    </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref } from 'vue';
  import { authService } from '~/components/api/AuthService';
import { apiService } from '~/routes/api/API';

  const email = ref('');
  const codeSent = ref(false);
  const errorMessage = ref('');

  async function sendResetLink() {

    try {

        alert(1)
        debugger
      //check if email is legit
      const params = {
        email: email.value,
      }
      const response = await apiService.verifyEmailNoAUTH(params)

      if(!response)
      {
        errorMessage.value = 'Failed to find email'
      }

      const parameters = {
        email: email.value,
        method: 'forgot',
      };

      const result = await authService.sendVerification(parameters);

    if (result) {
        codeSent.value = false;
    }

    codeSent.value = true;

    } catch (error) {
      errorMessage.value = 'Failed to send reset link. Please try again.';
    }
  }

  const displayCensoredEmail = (email) => {
  if (!email) return '';
  const [localPart, domain] = email.split('@');
  const censoredLocalPart = localPart.length > 2
    ? `${localPart[0]}***${localPart[localPart.length - 1]}`
    : `${localPart[0]}**`;
  return `${censoredLocalPart}@${domain}`;
};

async function resendEmail() {
  try {
    // Call your API to resend the reset link
    const params = {
      email: email.value,
      method: 'forgot',
    };
    const response = await authService.sendVerification(params);

    if (response) {
      // Show a success message or flash a notification
      console.log('Email resent successfully');

      errorMessage.value = '';
    }
  } catch (error) {
    console.log('Error resending email:', error);
  }
}

  </script>

  <style scoped>
  .forgot-password-container {
    background-color: #f7fafc;
  }

  .input-field {
    padding: 12px;
    border: 1px solid #cbd5e0;
    border-radius: 8px;
    transition: border-color 0.2s ease-in-out;
  }

  .input-field:focus {
    border-color: #4f46e5; /* Change to your brand color */
    outline: none;
  }

  .submit-button {
    background-color: #4f46e5; /* Change to your brand color */
    color: white;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    transition: background-color 0.3s ease;
    cursor: pointer;
  }

  .submit-button:hover {
    background-color: #4338ca; /* Darker shade for hover effect */
  }

  .error {
    color: red;
    font-size: 14px;
  }

  .btn-secondary {
  background-color: #f3f4f6;
  color: #4b5563;
  padding: 10px;
  font-weight: bold;
  border-radius: 8px;
  text-align: center;
  transition: background-color 0.3s ease;
}

.btn-secondary:hover {
  background-color: #e5e7eb;
}
  </style>
