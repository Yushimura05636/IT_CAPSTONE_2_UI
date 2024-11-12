<template v-if="">
</template>
<template>
</template>

<script setup lang="ts">
import { apiService } from '~/routes/api/API';

const user = ref([]);

async function getCusotmerDetails()
{
    try {
        const response = await apiService.getDashboardEmployeeDetails({});
        user.value = response;
        debugger
    } catch (error) {

    }
}

onMounted(() => {
    getCusotmerDetails();
});
</script>
