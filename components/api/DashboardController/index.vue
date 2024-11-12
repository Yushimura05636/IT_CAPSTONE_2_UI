<template>
    <DashboardClient></DashboardClient>
</template>

<script setup lang="ts">
import { apiService } from '~/routes/api/API';

const user = ref([]);

async function getCusotmerDetails()
{
    try {
        const response = await apiService.getDashboardUserDetails({});
        user.value = response;
        debugger
    } catch (error) {

    }
}

onMounted(() => {
    alert(1)
    getCusotmerDetails();
});
</script>
