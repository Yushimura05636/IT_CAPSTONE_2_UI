<template>
    <label class="flex items-center space-x-2">
      <input
        type="checkbox"
        :value="{ documentId, permission }"
        v-model="documentPermissions"
        class="w-5 h-5"
      />
      <span>{{ permission.charAt(0).toUpperCase() + permission.slice(1) }}</span>
    </label>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps } from 'vue';
  
  const props = defineProps({
    documentId: {
      type: Number,
      required: true,
    },
    permission: {
      type: String,
      required: true,
    },
  });
  
  // You can use `documentPermissions` from the parent component context if needed
  const documentPermissions = ref([]);
  </script>
  