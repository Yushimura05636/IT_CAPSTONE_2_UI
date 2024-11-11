<template>
    <NuxtLayout name="admin">
        <div class="p-4">
            <div class="max-w-screen-xl mx-auto px-4 md:px-8">
                <div class="font-bold text-2xl mb-4">Loan Disbursement Summary</div>
    
                <!-- Action Buttons -->
                <div class="flex justify-between items-center mb-8 mt-8">
                    <div class="flex space-x-4">
                        <button class="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">
                            Generate Report
                        </button>
                    </div>
                </div>
    
                <!-- Chart Container with Flex for Side-by-Side Alignment -->
                <div class="flex flex-wrap justify-center gap-8">
                    <!-- Pie Chart Section -->
                    <div class="flex-1 text-center">
                        <h2 class="font-semibold text-lg mb-4">Collection Pie Report</h2>
                        <PieChart :data="chartData" />
                    </div>
    
                    <!-- Doughnut Chart Section -->
                    <div class="flex-1 text-center">
                        <h2 class="font-semibold text-lg mb-4">Collection Doughnut Report</h2>
                        <DoughnutChart :data="chartData" />
                    </div>
                    <div class="flex-1 text-center">
                        <h2 class="font-semibold text-lg mb-4">Collection Line Report</h2>
                        <LineChart :data="lineData" />
                    </div>

                    <div class="flex-1 text-center">
                        <h2 class="font-semibold text-lg mb-4">Collection Polar Area Report</h2>
                        <PolarAreaChart :data="polarData" />
                    </div> 
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import PieChart from '~/components/graphs/PieChart.vue';
import DoughnutChart from '~/components/graphs/DoughnutChart.vue';
import LineChart from '~/components/graphs/LineChart.vue';
import PolarAreaChart from '~/components/graphs/PolarAreaChart.vue';

const state = reactive({
// Your existing reactive state
});


const chartData = {
labels: ['Red', 'Blue', 'Yellow'],
datasets: [
    {
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
    hoverOffset: 4,
    },
],
};

const lineData = {
labels: ['January', 'Febuary', 'March','April','May','June','July'],
datasets: [
    {
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
    },
    ],
    };

const polarData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
        label: 'Dataset 1',
        data: [11, 16, 7, 14, 5, 10],
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
        ],
        borderWidth: 2,
        },
    ],
    };
</script>
