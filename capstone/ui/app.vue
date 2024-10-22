<template>
  <div>
    <NuxtPage :class="{ 'dark': darkModeStore.getDarkMode }" />
  </div>
</template>

<script setup>
import { useDarkModeStore } from '@/store/darkMode'

const darkModeStore = useDarkModeStore()
</script>
