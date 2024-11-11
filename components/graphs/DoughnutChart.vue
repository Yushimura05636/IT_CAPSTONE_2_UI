<template>
<div >
    <Doughnut :data="chartData" :options="chartOptions" />
</div>
</template>

<script>
import { Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Tooltip, Legend, ArcElement);

export default {
name: 'DoughnutChart',
components: {
    Doughnut,
},
props: {
    data: {
    type: Object,
    required: true,
    },
},
computed: {
    chartData() {
    return this.data;
    },
    chartOptions() {
    return {
        responsive: true,
        plugins: {
        legend: {
            position: 'top',
        },
        },
    };
    },
},
};
</script>

<style scoped>
.chart-container {
margin: auto;
}
</style>
