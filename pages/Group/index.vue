<template>
  Processing..    
</template>
  
<script setup lang="ts">
onMounted(() => {
  goTOUI();
})

function goTOUI()
{
  navigateTo('/libraries');
}
</script>
