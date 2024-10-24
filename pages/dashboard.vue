<template>
<div>
    <NuxtLayout name="admin">
        <div class="font-bold mt-2">
            <h4 class="font-serif text-xl">Borrowers</h4>
        </div>
        <main>
            <div class="px-4">
                <!-- Information Card Container -->
                <div class="flex flex-wrap -mx-2 mt-10">
                    <!-- Card 1 -->
                    <div class="w-full px-2 sm:w-1/4 xl:w-1/4 mb-4">
                        <div class="relative flex items-center justify-between px-4 py-3 shadow-md rounded-xl bg-white border border-gray-900 h-32">
                            <div class="flex items-center">
                                <div class="p-2 rounded-md bg-gray-900">
                                    <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.45A1 1 0 007 17h10a1 1 0 00.92-.62L21 9m-7 11a2 2 0 11-4 0m6 0a2 2 0 11-4 0"></path>
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <h4 class="text-xl font-bold text-gray-800">{{ totalSales }}</h4>
                                </div>
                            </div>
                            <div class="absolute top-4 right-2 text-black font-bold text-l text-justify font-serif mr-4">
                                New Borrowers
                            </div>
                            <button class="bg-black hover:bg-blue-950 text-white px-2 py-2 text-sm rounded font-serif">
                                <a href="">View</a>
                            </button>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="w-full px-2 sm:w-1/4 xl:w-1/4 mb-4">
                        <div class="relative flex items-center justify-between px-4 py-3 shadow-md rounded-xl bg-white border border-gray-900 h-32">
                            <div class="flex items-center">
                                <div class="p-2 rounded-md bg-gray-900">
                                    <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.45A1 1 0 007 17h10a1 1 0 00.92-.62L21 9m-7 11a2 2 0 11-4 0m6 0a2 2 0 11-4 0"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11l-3 3m0 0l-3-3m3 3V4"></path>
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <h4 class="text-xl font-bold text-gray-800">{{ totalOrders }}</h4>
                                </div>
                            </div>
                            <div class="absolute top-4 right-2 text-black font-bold text-l mr-4 font-serif">
                                Old Borrowers
                            </div>
                            <button class="bg-black hover:bg-blue-950 text-white px-2 py-2 text-sm rounded font-serif">
                                <a href="">View</a>
                            </button>
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="w-full px-2 sm:w-1/4 xl:w-1/4 mb-4">
                        <div class="relative flex items-center justify-between px-4 py-3 shadow-md rounded-xl bg-white border border-gray-900 h-32">
                            <div class="flex items-center">
                                <div class="p-2 rounded-md bg-gray-900">
                                    <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 6h8M8 10h8M8 14h8M4 4v16h16V4H4z"></path>
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <h4 class="text-xl font-bold text-gray-800">{{ totalInvoice }}</h4>
                                </div>
                            </div>
                            <div class="absolute top-4 right-2 text-black font-bold text-l mr-4 font-serif">
                                Borrowers Status
                            </div>
                            <button class="bg-black hover:bg-blue-950 text-white px-2 py-2 text-sm rounded font-serif">
                                <a href="">View</a>
                            </button>
                        </div>
                    </div>

                    <!-- Card 4 -->
                    <div class="w-full px-2 sm:w-1/4 xl:w-1/4 mb-4">
                        <div class="relative flex items-center justify-between px-4 py-3 shadow-md rounded-xl bg-white border border-gray-900 h-32">
                            <div class="flex items-center">
                                <div class="p-2 rounded-md bg-gray-900">
                                    <div class="p-1 rounded-md bg-gray-900">
                                        <svg class="h-3 w-3 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-2h1m0 0h1v-2h-1m-1 2v-2h-1v2h1zm-1 0v2h-1v-2m6-6h-1v-1h1m0 1v-1h1v1m-1 0h-1v-1h1v1zM4 6h16v2H4V6zm0 4h16v2H4v-2zM4 16h16v2H4v-2z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="ml-3">
                                    <h4 class="text-xl font-bold text-gray-800">{{ availableProducts }}</h4>
                                </div>
                            </div>
                            <div class="absolute top-4 right-2 text-black font-bold text-l mr-4 font-serif">
                                Total Borrowers
                            </div>
                            <button class="bg-black hover:bg-blue-950 text-white px-2 py-2 text-sm rounded font-serif">
                                <a href="">View</a>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Parent div with flex layout -->
                <div class="flex p-6 mt-10 space-x-6">
                    <!-- Sales Chart -->
                    <!-- <div class="w-2/3 bg-white rounded-lg shadow-lg p-2">
                        <div class="w-full h-72 relative">
                            <canvas id="salesPurchaseChart" class="w-full h-full"></canvas>
                        </div>
                    </div> -->

                    <!-- <div class="w-1/3 bg-white p-4 rounded-lg shadow-md border border-gray-200 h-75">
                        <div class="flex justify-between items-center mb-4">
                            <h4 class="text-xs font-semibold text-gray-800">Recent Transactions</h4>
                            <button class="bg-gray-900 text-white px-4 py-2 text-xxs font-medium rounded-lg hover:bg-indigo-500 transition-all duration-300">
                                View All
                            </button>
                        </div>

                        <ul class="text-gray-600 text-sm">

                        </ul>
                    </div> -->
                </div>
            </div>

            <div class="font-bold mt-2">
                <h4 class="font-serif text-xl">Collections & Disbursement</h4>
            </div>
            <div class="px-4">
                <!-- Information Card Container -->
                <div class="flex flex-wrap -mx-2 mt-10">
                    <!-- Card 1 -->
                    <div class="w-full px-2 sm:w-1/4 xl:w-1/4 mb-4">
                        <div class="relative flex items-center justify-between px-4 py-3 shadow-md rounded-xl bg-white border border-gray-900 h-32">
                            <div class="flex items-center">
                                <div class="p-2 rounded-md bg-gray-900">
                                    <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.45A1 1 0 007 17h10a1 1 0 00.92-.62L21 9m-7 11a2 2 0 11-4 0m6 0a2 2 0 11-4 0"></path>
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <h4 class="text-xl font-bold text-gray-800">{{ totalSales }}</h4>
                                </div>
                            </div>
                            <div class="absolute top-4 right-2 text-black font-bold text-l mr-4 font-serif">
                                Collected
                            </div>
                            <button class="bg-black hover:bg-blue-950 text-white px-2 py-2 text-sm rounded font-serif">
                                <a href="">View</a>
                            </button>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="w-full px-2 sm:w-1/4 xl:w-1/4 mb-4">
                        <div class="relative flex items-center justify-between px-4 py-3 shadow-md rounded-xl bg-white border border-gray-900 h-32">
                            <div class="flex items-center">
                                <div class="p-2 rounded-md bg-gray-900">
                                    <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.45A1 1 0 007 17h10a1 1 0 00.92-.62L21 9m-7 11a2 2 0 11-4 0m6 0a2 2 0 11-4 0"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11l-3 3m0 0l-3-3m3 3V4"></path>
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <h4 class="text-xl font-bold text-gray-800">{{ totalOrders }}</h4>
                                </div>
                            </div>
                            <div class="absolute top-4 right-2 text-black font-bold text-l mr-4 font-serif">
                                Disbursement
                            </div>
                            <button class="bg-black hover:bg-blue-950 text-white px-2 py-2 text-sm rounded font-serif">
                                <a href="">View</a>
                            </button>
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="w-full px-2 sm:w-1/4 xl:w-1/4 mb-4">
                        <div class="relative flex items-center justify-between px-4 py-3 shadow-md rounded-xl bg-white border border-gray-900 h-32">
                            <div class="flex items-center">
                                <div class="p-2 rounded-md bg-gray-900">
                                    <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 6h8M8 10h8M8 14h8M4 4v16h16V4H4z"></path>
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <h4 class="text-xl font-bold text-gray-800">{{ totalInvoice }}</h4>
                                </div>
                            </div>
                            <div class="absolute top-4 right-2 text-black font-bold text-l mr-4 font-serif">
                                Fully Paid
                            </div>
                            <button class="bg-black hover:bg-blue-950 text-white px-2 py-2 text-sm rounded font-serif">
                                <a href="">View</a>
                            </button>
                        </div>
                    </div>

                    <!-- Card 4 -->
                    <div class="w-full px-2 sm:w-1/4 xl:w-1/4 mb-4">
                        <div class="relative flex items-center justify-between px-4 py-3 shadow-md rounded-xl bg-white border border-gray-900 h-32">
                            <div class="flex items-center">
                                <div class="p-2 rounded-md bg-gray-900">
                                    <div class="p-1 rounded-md bg-gray-900">
                                        <svg class="h-3 w-3 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-2h1m0 0h1v-2h-1m-1 2v-2h-1v2h1zm-1 0v2h-1v-2m6-6h-1v-1h1m0 1v-1h1v1m-1 0h-1v-1h1v1zM4 6h16v2H4V6zm0 4h16v2H4v-2zM4 16h16v2H4v-2z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="ml-3">
                                    <h4 class="text-xl font-bold text-gray-800">{{ availableProducts }}</h4>
                                </div>
                            </div>
                            <div class="absolute top-4 right-2 text-black font-bold text-l mr-4 font-serif">
                                Partially Paid
                            </div>
                            <button class="bg-black hover:bg-blue-950 text-white px-2 py-2 text-sm rounded font-serif">
                                <a href="">View</a>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Parent div with flex layout -->
                <div class="flex p-6 mt-10 space-x-6">
                    <!-- Sales Chart -->
                    <!-- <div class="w-2/3 bg-white rounded-lg shadow-lg p-2">
                        <div class="w-full h-72 relative">
                            <canvas id="salesPurchaseChart" class="w-full h-full"></canvas>
                        </div>
                    </div> -->

                    <!-- <div class="w-1/3 bg-white p-4 rounded-lg shadow-md border border-gray-200 h-75">
                        <div class="flex justify-between items-center mb-4">
                            <h4 class="text-xs font-semibold text-gray-800">Recent Transactions</h4>
                            <button class="bg-gray-900 text-white px-4 py-2 text-xxs font-medium rounded-lg hover:bg-indigo-500 transition-all duration-300">
                                View All
                            </button>
                        </div>

                        <ul class="text-gray-600 text-sm">

                        </ul>
                    </div> -->
                </div>
            </div>

            <div class="font-bold mt-2">
                <h4 class="font-serif text-xl">Groups</h4>
            </div>
            <div class="px-4">
                <!-- Information Card Container -->
                <div class="flex flex-wrap -mx-2 mt-10">
                    <!-- Card 1 -->
                    <div class="w-full px-2 sm:w-1/4 xl:w-1/4 mb-4">
                        <div class="relative flex items-center justify-between px-4 py-3 shadow-md rounded-xl bg-white border border-gray-900 h-32">
                            <div class="flex items-center">
                                <div class="p-2 rounded-md bg-gray-900">
                                    <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.45A1 1 0 007 17h10a1 1 0 00.92-.62L21 9m-7 11a2 2 0 11-4 0m6 0a2 2 0 11-4 0"></path>
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <h4 class="text-xl font-bold text-gray-800">{{ totalSales }}</h4>
                                </div>
                            </div>
                            <div class="absolute top-4 right-2 text-black font-bold text-l mr-4 font-serif">
                                Number of Groups
                            </div>
                            <button class="bg-black hover:bg-blue-950 text-white px-2 py-2 text-sm rounded font-serif">
                                <a href="">View</a>
                            </button>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="w-full px-2 sm:w-1/4 xl:w-1/4 mb-4">
                        <div class="relative flex items-center justify-between px-4 py-3 shadow-md rounded-xl bg-white border border-gray-900 h-32">
                            <div class="flex items-center">
                                <div class="p-2 rounded-md bg-gray-900">
                                    <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.45A1 1 0 007 17h10a1 1 0 00.92-.62L21 9m-7 11a2 2 0 11-4 0m6 0a2 2 0 11-4 0"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11l-3 3m0 0l-3-3m3 3V4"></path>
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <h4 class="text-xl font-bold text-gray-800">{{ totalOrders }}</h4>
                                </div>
                            </div>
                            <div class="absolute top-4 right-2 text-black font-bold text-l mr-4 font-serif">
                                New Groups
                            </div>
                            <button class="bg-black hover:bg-blue-950 text-white px-2 py-2 text-sm rounded font-serif">
                                <a href="">View</a>
                            </button>
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="w-full px-2 sm:w-1/4 xl:w-1/4 mb-4">
                        <div class="relative flex items-center justify-between px-4 py-3 shadow-md rounded-xl bg-white border border-gray-900 h-32">
                            <div class="flex items-center">
                                <div class="p-2 rounded-md bg-gray-900">
                                    <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 6h8M8 10h8M8 14h8M4 4v16h16V4H4z"></path>
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <h4 class="text-xl font-bold text-gray-800">{{ totalInvoice }}</h4>
                                </div>
                            </div>
                            <div class="absolute top-4 right-2 text-black font-bold text-l mr-4 font-serif">
                                Old Groups
                            </div>
                            <button class="bg-black hover:bg-blue-950 text-white px-2 py-2 text-sm rounded font-serif">
                                <a href="">View</a>
                            </button>
                        </div>
                    </div>

                    <!-- Card 4 -->
                    <div class="w-full px-2 sm:w-1/4 xl:w-1/4 mb-4">
                        <div class="relative flex items-center justify-between px-4 py-3 shadow-md rounded-xl bg-white border border-gray-900 h-32">
                            <div class="flex items-center">
                                <div class="p-2 rounded-md bg-gray-900">
                                    <div class="p-1 rounded-md bg-gray-900">
                                        <svg class="h-3 w-3 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-2h1m0 0h1v-2h-1m-1 2v-2h-1v2h1zm-1 0v2h-1v-2m6-6h-1v-1h1m0 1v-1h1v1m-1 0h-1v-1h1v1zM4 6h16v2H4V6zm0 4h16v2H4v-2zM4 16h16v2H4v-2z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="ml-3">
                                    <h4 class="text-xl font-bold text-gray-800">{{ availableProducts }}</h4>
                                </div>
                            </div>
                            <div class="absolute top-4 right-2 text-black font-bold text-l mr-4 font-serif">
                                Groups Status
                            </div>
                            <button class="bg-black hover:bg-blue-950 text-white px-2 py-2 text-sm rounded font-serif">
                                <a href="">View</a>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Parent div with flex layout -->
                <div class="flex p-6 mt-10 space-x-6">
                    <!-- Sales Chart -->
                    <!-- <div class="w-2/3 bg-white rounded-lg shadow-lg p-2">
                        <div class="w-full h-72 relative">
                            <canvas id="salesPurchaseChart" class="w-full h-full"></canvas>
                        </div>
                    </div> -->

                    <!-- <div class="w-1/3 bg-white p-4 rounded-lg shadow-md border border-gray-200 h-75">
                        <div class="flex justify-between items-center mb-4">
                            <h4 class="text-xs font-semibold text-gray-800">Recent Transactions</h4>
                            <button class="bg-gray-900 text-white px-4 py-2 text-xxs font-medium rounded-lg hover:bg-indigo-500 transition-all duration-300">
                                View All
                            </button>
                        </div>

                        <ul class="text-gray-600 text-sm">

                        </ul>
                    </div> -->
                </div>
            </div>

            <div class="font-bold mt-2">
                <h4 class="font-serif text-xl">Warned Borrowers</h4>
            </div>
            <div class="px-4">
                <!-- Information Card Container -->
                <div class="flex flex-wrap -mx-2 mt-10">
                    <!-- Card 1 -->
                    <div class="w-full px-2 sm:w-1/4 xl:w-1/4 mb-4">
                        <div class="relative flex items-center justify-between px-4 py-3 shadow-md rounded-xl bg-white border border-gray-900 h-32">
                            <div class="flex items-center">
                                <div class="p-2 rounded-md bg-gray-900">
                                    <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.45A1 1 0 007 17h10a1 1 0 00.92-.62L21 9m-7 11a2 2 0 11-4 0m6 0a2 2 0 11-4 0"></path>
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <h4 class="text-xl font-bold text-gray-800">{{ totalSales }}</h4>
                                </div>
                            </div>
                            <div class="absolute top-4 right-2 text-black font-bold text-l mr-4 font-serif">
                                Number of Groups
                            </div>
                            <button class="bg-black hover:bg-blue-950 text-white px-2 py-2 text-sm rounded font-serif">
                                <a href="">View</a>
                            </button>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="w-full px-2 sm:w-1/4 xl:w-1/4 mb-4">
                        <div class="relative flex items-center justify-between px-4 py-3 shadow-md rounded-xl bg-white border border-gray-900 h-32">
                            <div class="flex items-center">
                                <div class="p-2 rounded-md bg-gray-900 ">
                                    <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.45A1 1 0 007 17h10a1 1 0 00.92-.62L21 9m-7 11a2 2 0 11-4 0m6 0a2 2 0 11-4 0"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11l-3 3m0 0l-3-3m3 3V4"></path>
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <h4 class="text-xl font-bold text-gray-800">{{ totalOrders }}</h4>
                                </div>
                            </div>
                            <div class="absolute top-4 right-2 text-black font-bold text-l mr-4 font-serif">
                                New Groups
                            </div>
                            <button class="bg-black hover:bg-blue-950 text-white px-2 py-2 text-sm rounded font-serif">
                                <a href="">View</a>
                            </button>
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="w-full px-2 sm:w-1/4 xl:w-1/4 mb-4">
                        <div class="relative flex items-center justify-between px-4 py-3 shadow-md rounded-xl bg-white border border-gray-900 h-32">
                            <div class="flex items-center">
                                <div class="p-2 rounded-md bg-gray-900">
                                    <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 6h8M8 10h8M8 14h8M4 4v16h16V4H4z"></path>
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <h4 class="text-xl font-bold text-gray-800">{{ totalInvoice }}</h4>
                                </div>
                            </div>
                            <div class="absolute top-4 right-2 text-black font-bold text-l mr-4 font-serif">
                                Old Groups
                            </div>
                            <button class="bg-black hover:bg-blue-950 text-white px-2 py-2 text-sm rounded font-serif">
                                <a href="">View</a>
                            </button>
                        </div>
                    </div>

                    <!-- Card 4 -->
                    <div class="w-full px-2 sm:w-1/4 xl:w-1/4 mb-4">
                        <div class="relative flex items-center justify-between px-4 py-3 shadow-md rounded-xl bg-white border border-gray-900 h-32">
                            <div class="flex items-center">
                                <div class="p-2 rounded-md bg-gray-900">
                                    <div class="p-1 rounded-md bg-gray-900">
                                        <svg class="h-3 w-3 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-2h1m0 0h1v-2h-1m-1 2v-2h-1v2h1zm-1 0v2h-1v-2m6-6h-1v-1h1m0 1v-1h1v1m-1 0h-1v-1h1v1zM4 6h16v2H4V6zm0 4h16v2H4v-2zM4 16h16v2H4v-2z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="ml-3">
                                    <h4 class="text-xl font-bold text-gray-800">{{ availableProducts }}</h4>
                                </div>
                            </div>
                            <div class="absolute top-4 right-2 text-black font-bold text-l mr-4 font-serif">
                                Groups Status
                            </div>
                            <button class="bg-black hover:bg-blue-950 text-white px-2 py-2 text-sm rounded font-serif">
                                <a href="">View</a>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Parent div with flex layout -->
                <div class="flex p-6 mt-10 space-x-6">
                    <!-- Sales Chart -->
                    <!-- <div class="w-2/3 bg-white rounded-lg shadow-lg p-2">
                        <div class="w-full h-72 relative">
                            <canvas id="salesPurchaseChart" class="w-full h-full"></canvas>
                        </div>
                    </div> -->

                    <!-- <div class="w-1/3 bg-white p-4 rounded-lg shadow-md border border-gray-200 h-75">
                        <div class="flex justify-between items-center mb-4">
                            <h4 class="text-xs font-semibold text-gray-800">Recent Transactions</h4>
                            <button class="bg-gray-900 text-white px-4 py-2 text-xxs font-medium rounded-lg hover:bg-indigo-500 transition-all duration-300">
                                View All
                            </button>
                        </div>

                        <ul class="text-gray-600 text-sm">

                        </ul>
                    </div> -->
                </div>
            </div>


        </main>
    </NuxtLayout>
</div>
</template>

<script setup>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { ref } from "vue";
import { apiService } from '~/routes/api/API';
//   import DashboardCard from './DashboardCard.vue';
import {
Dialog,
DialogPanel,
Disclosure,
DisclosureButton,
DisclosurePanel,
Menu,
MenuButton,
MenuItem,
MenuItems,
TransitionChild,
TransitionRoot,
} from "@headlessui/vue";
import {
Bars3Icon,
BellIcon,
ChartBarSquareIcon,
ChartPieIcon,
Cog6ToothIcon,
CurrencyDollarIcon,
DocumentDuplicateIcon,
FolderIcon,
HomeModernIcon,
TruckIcon,
UsersIcon,
XMarkIcon,
LockClosedIcon,
AdjustmentsHorizontalIcon,
CreditCardIcon,
DocumentTextIcon,
ArrowLongLeftIcon,
FlagIcon,

} from "@heroicons/vue/24/outline";
import { ChevronRightIcon, ShareIcon } from "@heroicons/vue/20/solid";
import {
ChevronDownIcon,
ShoppingBagIcon,
} from "@heroicons/vue/24/outline";
import { UserIcon, UserCircleIcon } from "@heroicons/vue/24/outline";
import { InboxIcon } from "@heroicons/vue/24/outline";
import { ScaleIcon } from "@heroicons/vue/24/solid";
import { KeyIcon } from "@heroicons/vue/20/solid";
import { FireIcon } from "@heroicons/vue/24/solid";
import { BellAlertIcon } from "@heroicons/vue/20/solid";

const sidebarOpen = ref(false);
const openPeopleDropdown = ref(false);


const navigation = [
{ name: "Dashboard", href: "/dashboard", icon: ChartPieIcon, current: false },

{ name: "Admin Panel", icon: UsersIcon, current: false,
    children: [
        { name: "Staff", href: "/#", icon: UserIcon, current: false },
        { name: "Staff Roles", href: "/#", icon: UserIcon, current: false },
        { name: "Permission", href: "/#", icon: InboxIcon, current: false },
        //  { name: "Staff Email Notification", href: "/#", icon: InboxIcon, current: false },

    ],
},


{ name: "Borrowers", icon: UsersIcon, current: false,
    children: [
        { name: "View Borrowers", href: "/#", icon: ScaleIcon, current: false },
        { name: "View Group Table", href: "/view_group_table", icon: ScaleIcon, current: false },
        { name: "View Group Member", href: "/view_group_member", icon: ScaleIcon, current: false },
        { name: "Add Borrower", href: "/#", icon: UserIcon, current: false },
        { name: "View Borrowers Group", href: "/#", icon: UserIcon, current: false },
    ],
},

{ name: "Loan", icon: ShareIcon, current: false,
    children: [
        { name: "Loan Application", href: "/loan_application", icon: CurrencyDollarIcon, current: false },
        { name: "Loan Release", href: "/#", icon:  CreditCardIcon, current: false },
        { name: "Payment Schedule", href: "/#", icon: CreditCardIcon, current: false },
    ],
},

{ name: "Release Schedules", icon: KeyIcon, current: false,
    children: [
        { name: "Loan Application", href: "/#", icon: CurrencyDollarIcon, current: false },
        { name: "Loan Release", href: "/#", icon:  CreditCardIcon, current: false },
        { name: "Payment Schedule", href: "/#", icon: CreditCardIcon, current: false },
    ],
},
{ name: "Payment", icon: FlagIcon, current: false,
    children: [
        { name: "Loan Application", href: "/#", icon: CurrencyDollarIcon, current: false },
        { name: "Loan Release", href: "/#", icon:  CreditCardIcon, current: false },
        { name: "Payment Schedule", href: "/#", icon: CreditCardIcon, current: false },
    ],
},
{ name: "Report", icon: FireIcon, current: false,
    children: [
        { name: "Loan Application", href: "/#", icon: CurrencyDollarIcon, current: false },
        { name: "Loan Release", href: "/#", icon:  CreditCardIcon, current: false },
        { name: "Payment Schedule", href: "/#", icon: CreditCardIcon, current: false },
    ],
},
{ name: "Help", href: "/#", icon: BellAlertIcon , current: false },

];

const userNavigation = [
{ name: "Your profile", href: "/profile" },
{ name: "Sign out", href: "/" },
];

function togglePeopleDropdown() {
openPeopleDropdown.value = !openPeopleDropdown.value;
}

function closePeopleDropdown() {
openPeopleDropdown.value = false;
}

function navigateTo(href) {
window.location.href = href;
closePeopleDropdown();
}

async function authorizedCheck() {
    try {
        const response = await apiService.getCustomersNoAuth({});
    } catch (error) {
        toast.error(`${error}`, {
            autoClose: 3000,
        })
    }
    finally {
        response = null;
    }
}

onMounted (() => {
    authorizedCheck();
})
</script>
