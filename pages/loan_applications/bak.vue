<template>
    <NuxtLayout name="admin">
        <main>
            <div class="flex justify-center items-center bg-gray-100">
                <div class="bg-white border border-gray-300 rounded-lg p-6 shadow-md w-full">
                    <div class="text-center font-bold text-xl mb-4">Transaction Form</div>
                    <form>
                        <div class="mb-4">
                            <label class="block text-gray-700">Group Name</label>
                            <select v-model="selectedGroupId" @change="fetchCustomers" class="w-full border rounded-lg px-4 py-2">
                                <option v-for="group in state.groups" :key="group.id" :value="group.id">
                                    {{ group.description }}
                                </option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700">Customer Name</label>
                            <select class="w-full border border-gray-300 rounded p-2">
                                <option v-if="state.customers.length === 0" disabled>No customers available</option>
                                <option v-for="customer in state.customers" :key="customer.id" :value="customer.id">
                                    {{ customer.personality.first_name }}
                                    {{ customer.personality.middle_name }}
                                    {{ customer.personality.family_name }}
                                </option>
                            </select>
                        </div>

                        <!-- <div class="mb-4">
                            <label class="block text-gray-700">Date Created</label>
                            <input
                                type="date"
                                v-model="form.dateCreated"
                                class="w-full border border-gray-300 rounded p-2"
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700">Date Prepared</label>
                            <input
                                type="date"
                                v-model="form.datePrepared"
                                class="w-full border border-gray-300 rounded p-2"
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700">Document Status</label>
                            <input
                                type="text"
                                v-model="form.documentStatus"
                                class="w-full border border-gray-300 rounded p-2"
                            />
                        </div> -->
                        <!-- <div class="mb-4">
                            <label class="block text-gray-700">Date Last Updated</label>
                            <input
                                type="date"
                                v-model="form.dateLastUpdated"
                                class="w-full border border-gray-300 rounded p-2"
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700">Loan Application No</label>
                            <input
                                type="text"
                                v-model="form.loanApplicationNo"
                                class="w-full border border-gray-300 rounded p-2"
                            />
                        </div> -->
                        <div class="mb-4">
                            <label class="block text-gray-700">Loan Amount</label>
                            <input
                                type="number"
                                class="w-full border border-gray-300 rounded p-2"
                            />
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700">Factor Rate</label>
                            <select  class="w-full border rounded-lg px-4 py-2">
                                <option v-for="factorRate in state.factorRates" :key="factorRate.id" :value="factorRate.id">
                                    {{ factorRate.value }}
                                </option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700">Payment Frequency</label>
                            <select  class="w-full border rounded-lg px-4 py-2">
                                <option  readonly v-for="factorRate in state.factorRates" :key="factorRate.id" :value="factorRate.id">
                                    {{ factorRate.payment_frequency.description }}
                                </option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700">Payment Duration</label>
                            <select  class="w-full border rounded-lg px-4 py-2">
                                <option  readonly v-for="factorRate in state.factorRates" :key="factorRate.id" :value="factorRate.id">
                                    {{ factorRate.payment_duration.description }}
                                </option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700">Interest Amount</label>
                            <input
                                type="number"
                                step="0.01"
                                class="w-full border border-gray-300 rounded p-2"
                            />
                        </div>
                        <!-- <div class="mb-4">
                            <label class="block text-gray-700">Amount Paid</label>
                            <input
                                type="number"
                                step="0.01"
                                v-model="form.amountPaid"
                                class="w-full border border-gray-300 rounded p-2"
                            />
                        </div> -->
                        <div class="mb-4">
                            <label class="block text-gray-700">Release Schedule</label>
                            <input
                                type="date"
                                class="w-full border border-gray-300 rounded p-2"
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700">Date Fully Paid</label>
                            <input
                                type="date"
                                class="w-full border border-gray-300 rounded p-2"
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700">Date Approved</label>
                            <input
                                type="date"
                                class="w-full border border-gray-300 rounded p-2"
                            />
                        </div>


                        <!-- <div class="mb-4">
                            <label class="block text-gray-700">Payment Frequency</label>
                            <input type="number" class="w-full border rounded-lg px-4 py-2" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700">Payment Duration</label>
                            <input
                                type="number"
                                class="w-full border border-gray-300 rounded p-2"
                            />
                        </div> -->


                        <div class="mb-4">
                            <label class="block text-gray-700">Approved By</label>
                            <input
                                type="text"
                                
                                class="w-full border border-gray-300 rounded p-2"
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700">Prepared By</label>
                            <input
                                type="text"
                                
                                class="w-full border border-gray-300 rounded p-2"
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700">Released By</label>
                            <input
                                type="text"
                                
                                class="w-full border border-gray-300 rounded p-2"
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700">Last Modified By</label>
                            <input
                                type="text"
                                
                                class="w-full border border-gray-300 rounded p-2"
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700">Notes</label>
                            <textarea
                                
                                class="w-full border border-gray-300 rounded p-2"
                            ></textarea>
                        </div>
                        <div class="text-center">
                            <button
                                type="submit"
                                class="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { apiService } from '~/routes/api/API';


const state = ref({
    groups: [],
    customers: [], 
    factorRates: [],
    isTableLoading: false,
});



onMounted(() => {
    fetchGroups();
    // fetchCustomers();
    fetchFactorRate();
});


    const fetchGroups = async () => {
    try {
        const response = await apiService.getNoAuth({}, "customer_group");
        state.value.groups = response.data;
        console.log("Group"+response)
    } catch (error) {
        toast.error(error.message, {
        autoClose: 5000,
        })
    }
};

const selectedGroupId = ref(null);

    const fetchCustomers = async () => {
        if (selectedGroupId.value) {
        try {
            const response = await apiService.getCustomerByGroupId({}, selectedGroupId.value);
            state.value.customers = response.data;
        } catch (error) {
            toast.error(error.message, { autoClose: 5000 });
        }
    } else {
        toast.error('Please select a group.', { autoClose: 5000 });
    }
};


    const fetchFactorRate = async () => {
        try {
            const response = await apiService.getFactorRate({});
            state.value.factorRates = response.data;
            console.log("Factor Rate"+response)
            
        } catch (error) {
            toast.error(error.message, { autoClose: 5000 });
        }
    };

    watch(selectedGroupId, (newGroupId) => {
    if (newGroupId) {
        fetchCustomers();
    }
});

</script>






<style scoped>
button {
    padding: 8px 12px;
    font-size: 0.875rem;
    text-align: center;
}
input[type="text"],
input[type="date"],
input[type="number"],
select,
textarea {
    width: 100%;
}
textarea {
    resize: vertical;
}
</style>