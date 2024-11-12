<template>
    <NuxtLayout name="client">
        <div class="p-6 bg-gray-100 min-h-screen">
            <h1 class="text-2xl font-semibold mb-6">Customer Dashboard</h1>
            
            <!-- Loan Overview Section -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <h2 class="text-lg font-semibold mb-2">Total Loan Balance</h2>
                    <p class="text-2xl font-bold text-blue-600">$12,000</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <h2 class="text-lg font-semibold mb-2">Number of Loans</h2>
                    <p class="text-2xl font-bold text-green-600">5</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <h2 class="text-lg font-semibold mb-2">Outstanding Balance</h2>
                    <p class="text-2xl font-bold text-red-600">$3,000</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <h2 class="text-lg font-semibold mb-2">Total Payments</h2>
                    <p class="text-2xl font-bold text-green-700">$69,000</p>
                </div>
            </div>
            
            <!-- Applied Loans Table -->
            <div class="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 class="text-xl font-semibold mb-4">Applied Loans</h2>
                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th class="px-4 py-2 border-b font-semibold text-left">Loan ID</th>
                                <th class="px-4 py-2 border-b font-semibold text-left">Amount</th>
                                <th class="px-4 py-2 border-b font-semibold text-left">Date Applied</th>
                                <th class="px-4 py-2 border-b font-semibold text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="hover:bg-gray-50">
                                <td class="px-4 py-2 border-b">12345</td>
                                <td class="px-4 py-2 border-b">$5,000</td>
                                <td class="px-4 py-2 border-b">2024-01-15</td>
                                <td class="px-4 py-2 border-b text-yellow-500 font-bold">Pending</td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="px-4 py-2 border-b">12346</td>
                                <td class="px-4 py-2 border-b">$3,000</td>
                                <td class="px-4 py-2 border-b">2024-02-10</td>
                                <td class="px-4 py-2 border-b text-green-500 font-bold">Approved</td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="px-4 py-2 border-b">12347</td>
                                <td class="px-4 py-2 border-b">$4,000</td>
                                <td class="px-4 py-2 border-b">2024-03-05</td>
                                <td class="px-4 py-2 border-b text-red-500 font-bold">Rejected</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <!-- Loan Status Section -->
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold mb-4">Loan Status</h2>
                <div class="flex flex-col md:flex-row md:space-x-4">
                    <div class="flex items-center mb-4 md:mb-0">
                        <span class="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>Pending
                    </div>
                    <div class="flex items-center mb-4 md:mb-0">
                        <span class="w-4 h-4 bg-green-500 rounded-full mr-2"></span>Approved
                    </div>
                    <div class="flex items-center">
                        <span class="w-4 h-4 bg-red-500 rounded-full mr-2"></span>Rejected
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
