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
      <div v-else>
        <p>Token: {{ token }}</p>
        <p>Email: {{ email }}</p>
        <button @click="hideInfo">Hide Info</button>
        <!-- Add your reset password form here -->
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  const route = useRoute();
  const router = useRouter();

  const token = computed(() => route.query.token);
  const email = computed(() => route.query.email);
  const loading = ref(true);

  const hideInfo = () => {
    // Logic to hide info or reset form fields
  };

  const redirectToLogin = () => {
    router.push('/login'); // Adjust the route as necessary
  };

  onMounted(() => {
    // Simulate an API call to verify token and email
    setTimeout(() => {
      // Here, you would replace this with actual verification logic
      if (token.value && email.value) {
        loading.value = false; // Set loading to false if token and email are valid
      } else {
        loading.value = false; // Even if invalid, stop loading
      }
    }, 2000); // Simulating a 2-second loading time
  });
  </script>

  <style scoped>
  .error {
    color: red;
  }
  </style>
