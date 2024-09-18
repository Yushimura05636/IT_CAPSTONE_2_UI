<template>
    <div>
            <Head>
                <Title>Students</Title>
            </Head>
            
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 class="m-6 text-base font-bold leading-6 text-gray-900">Students</h1>
                </div>
                <div class=" mr-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button type="button" @click="addLibraries()"
                        class=" rounded bg-indigo-600 px-10 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add
                        libraries</button>
                </div>
            </div>
            
            <div class="mt-2">
                <Alert type="danger" :text="state.error?.message" v-if="state.error" />
                <div class="overflow-x-auto  ">
                    <Table class="w-full " :columnHeaders="state.columnHeaders" :data="state.students" :isLoading="state.isTableLoading"
                        :sortData="state.sortData" @sort="sort">
                        <template #body
                            v-if="!(state.isTableLoading || (state.datas?.data && state.students?.data.length === 0))">
                            
                            <tr v-for="(lib, index) in state.datas?.data" :key="index">
                                
                                <td class="py-2 px-4 border-b border-gray-300 text-center ">
                                    <span>{{ lib.id }}</span>
                                </td>
                                <td class="py-2 px-4 border-b border-gray-300 text-center ">
                                    <span>{{ lib.description }}</span>
                                </td>
                                <td class="border-b border-gray-300 text-center  text-indigo-600 semi-bold cursor-pointer " @click="edit(student)">
                                    <FormButton @click="editButton(lib.id)">
                                        Edit
                                    </FormButton>
                                </td>
                            </tr>
                        </template>
                    </Table>
                </div>
                <Pagination :data="state.datas" @previous="previous" @next="next" />
                <div class="ml-10 mb-5 ">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { libraryService } from '~/models/Library';
import { apiService } from '~/routes/api/API';


const runtimeConfig = useRuntimeConfig()
let currentTablePage = 1

const state = reactive({
    columnHeaders: [
        { name: 'Id' },
        { name: 'Description' },
        { name: 'Action' }
    ],
    studentData: {},
    error: null,
    isTableLoading: false,
    sortData: {
        sortField: 'id',
        sortOrder: 'descend',
    },
    datas: [],
    searchQuery: '',
    modeltype: libraryService.description,
    
})

onMounted(() => {
    fetchStudents()
})

function addLibraries()
{
    navigateTo('./create');
}

function editButton(id: any)
{
    libraryService.description = "city";
    libraryService.id = id;
    navigateTo('./update');
}

async function fetchStudents() {
    state.isTableLoading = true
    state.error = null
    try {
        const params = {

        }
        const response = await apiService.get(params, state.modeltype)
        state.datas = response
    } catch (error: any) {
        state.error = error
    }
    state.isTableLoading = false
}
</script>
