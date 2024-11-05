<template>
    <div>
      <div v-if="loading">
        <p>Loading...</p>
        <!-- Add your loading animation here -->
      </div>

      <div v-else-if="!token || !email">
        <p class="error">Invalid token or email. Redirecting to login...</p>
        <button @click="redirectToLogin">Go to Login</button>
      </div>

      <div v-else-if="passwordChanged">
        <p>Password changed successfully!</p>
        <button @click="redirectToLogin">Go to Login</button>
      </div>

      <div v-else>
        <form @submit.prevent="submitForm">
          <div>
            <label for="password">New Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              required
              placeholder="Enter new password"
            />
          </div>

          <div>
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              required
              placeholder="Confirm new password"
            />
          </div>

          <p v-if="error" class="error">{{ error }}</p>
          <button type="submit">Change Password</button>
        </form>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { apiService } from '~/routes/api/API';

  const route = useRoute();
  const router = useRouter();

  const token = computed(() => route.query.token);
  const email = computed(() => route.query.email);
  const loading = ref(true);
  const passwordChanged = ref(false);
  const password = ref('');
  const confirmPassword = ref('');
  const error = ref('');

  const redirectToLogin = () => {
    router.push('/login'); // Adjust the route as necessary
  };

  const verify = async () => {
    try {
      const params = {
        email: email.value,
        token: token.value,
        method: 'forgot',
      };
      const response = await apiService.verifyTokenAndEmailNoAUTH(params, token.value);

      if (response) {
        loading.value = false;
      } else {
        redirectToLogin();
      }
    } catch (error) {
      redirectToLogin();
    } finally {
      loading.value = false;
    }
  };

  const submitForm = async () => {
    if (password.value !== confirmPassword.value) {
      error.value = "Passwords do not match!";
      return;
    }

    try {
      const params = {
        email: email.value,
        token: token.value,
        password: password.value,
      };

      const response = await apiService.updateUserPasswordNoAUTH(params, token.value);

      if (response) {
        passwordChanged.value = true;
        error.value = '';
        password.value = '';
        confirmPassword.value = '';
      } else {
        error.value = 'Error changing password!';
      }
    } catch (err) {
      error.value = 'An unexpected error occurred.';
    }
  };

  onMounted(() => {
    verify();
  });
  </script>

  <style scoped>
  .error {
    color: red;
  }
  </style>
