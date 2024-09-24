<template>
    <div>
            <Head>
                <Title>Payment Frequency</Title>
            </Head>
            
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 class="m-6 text-base font-bold leading-6 text-gray-900">Payment Frequency</h1>
                </div>
            </div>
            
            <div class="mt-5">
                <Alert type="danger" :text="state.error?.message" v-if="state.error" />
                    <div class="overflow-x-auto  ">
                            <Table class="w-full " 
                            :columnHeaders="state.columnHeaders" 
                            :data="state.freq" 
                            :isLoading="state.isTableLoading"
                            :sortData="state.sortData" 
                            >
                                <template #body
                                    v-if="!(state.isTableLoading || (state.freq?.data === 0))">
                                    
                                    <tr v-for="(frequency, index) in state.freq?.data" :key="index" class="">
                                        
                                        <td class="py-2 border-b border-gray-300 ">
                                            <span>{{ frequency.id }}</span>
                                        </td>
                                        <td class="py-2 border-b border-gray-300  ">
                                            <span>{{ frequency.description }} </span>
                                        </td>
                                        <td class="py-2 border-b border-gray-300 ">
                                            <span>{{ frequency.days_interval }}</span>
                                        </td>
                                        <td class="py-2 border-b border-gray-300 ">
                                            <span>{{ frequency.notes }}</span>
                                        </td>
                                        <!-- <td class="border-b border-gray-300 cursor-pointer ">
                                            <FormButton class="bg-blue-600 hover:bg-blue-800 text-white rounded pl-5 pr-5"></FormButton>
                                        </td> -->
                                    </tr>
                                </template>
                            </Table>
                        </div>
                        <!-- <Pagination :data="state.datas" @previous="previous" @next="next" /> -->
                        <div class="ml-10 mb-5 ">
                    </div>
            </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, reactive, onMounted } from 'vue'
    import { apiService } from '~/routes/api/API'


    const state = reactive({
        columnHeaders: [
            { name: 'ID' },
            { name: 'Description' },
            { name: 'Days Interval' },
            { name: 'Notes' }
        ],
        error: null,
        isTableLoading: false,
        sortData: {
            sortField: 'id',
            sortOrder: 'descend',
        },
        freq: [],
        searchQuery: '',
    })

    
    async function fetchFreqandDuration() {
        state.isTableLoading = true
        state.error = null
        try {
            const params = {}
            const response = await apiService.getPaymentFrequency(params)
            state.freq = response
            console.log(state.freq);
        } catch (error: any) {
            state.error = error
        }
        state.isTableLoading = false
    }
    onMounted(() => {
        fetchFreqandDuration()
    })

</script>