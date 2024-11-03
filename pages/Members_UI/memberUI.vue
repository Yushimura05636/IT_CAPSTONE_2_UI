<template>
    <div class="flex h-screen bg-teal-600">
      <!-- User Information -->
      <div class="w-full md:w-1/4 bg-teal-600 text-white border-r border-gray-200 p-4 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold">User Information</h2>
            <i class="fas fa-times"></i>
          </div>
          <div class="mt-4 flex flex-col items-center">
            <a href="/memProfile" class="flex flex-col items-center text-white">
              <img
                src="https://storage.googleapis.com/a1aa/image/ig7XeZWfFfWtuo7ZLBbl3etLp6yveOvtNfVjYMVlmC18O2S7E.jpg"
                alt="Profile picture of user"
                class="w-20 h-20 rounded-full"
              />
              <h3 class="mt-2 text-lg font-semibold">John Doe</h3>
            </a>
            <p>+1 202 555 0156</p>
            <div class="flex items-center space-x-2 mt-2">
              <span class="bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded flex items-center">
                Registered Member
                <i class="fas fa-check-circle text-blue-800 ml-1"></i>
              </span>
            </div>
          </div>
        </div>
        <button class="bg-red-500 text-white px-3 py-1 rounded mb-4 self-center" type="button">
          Logout
        </button>
      </div>

      <!-- Main Content Area -->
      <div class="w-full md:w-3/4 flex flex-col bg-teal-50">
        <div class="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 class="text-xl font-semibold">Customer Dashboard</h2>
        </div>
        <div class="flex-1 p-4 space-y-4 overflow-y-auto">
          <!-- Loan Schedule -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-lg font-semibold mb-4">Loan Schedule</h3>
            <div class="space-y-2">
              <div class="flex justify-between">
                <p>Loan Application ID: #12345</p>
                <p>Due Date: 2023-10-15</p>
              </div>
              <div class="flex justify-between">
                <p>Passbook Number: PB12345</p>
                <p>Prepared By: John Smith</p>
              </div>
              <div class="flex justify-between">
                <p>Amount to Pay: $1000</p>
                <p>Balance: $500</p>
              </div>
              <div class="flex justify-between">
                <p>Co-maker: Jane Doe</p>
              </div>
            </div>
          </div>

          <!-- Loan Application History -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-lg font-semibold mb-4">Loan Application History</h3>
            <div class="space-y-2">
              <div class="flex justify-between">
                <p>Application ID: #12345</p>
                <p>Loan Cycle: 1</p>
              </div>
              <div class="flex justify-between">
                <p>Amount Paid: $500</p>
                <p>Status: Approved</p>
              </div>
              <div class="flex justify-between">
                <p>Application Date: 2023-01-15</p>
              </div>
              <div class="flex justify-between">
                <p>Application ID: #67890</p>
                <p>Loan Cycle: 2</p>
              </div>
              <div class="flex justify-between">
                <p>Amount Paid: $300</p>
                <p>Status: Pending</p>
              </div>
              <div class="flex justify-between">
                <p>Application Date: 2023-02-20</p>
              </div>
            </div>
          </div>

          <!-- History Payments -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-lg font-semibold mb-4">History Payments</h3>
            <div class="space-y-2">
              <div class="flex justify-between">
                <p>Application ID: #12345</p>
                <p>Payment Date: 2023-03-01</p>
              </div>
              <div class="flex justify-between">
                <p>Amount Paid: $500</p>
                <p>Status: Completed</p>
              </div>
              <div class="flex justify-between">
                <p>Prepared By: John Smith</p>
              </div>
              <div class="flex justify-between">
                <p>Application ID: #67890</p>
                <p>Payment Date: 2023-04-01</p>
              </div>
              <div class="flex justify-between">
                <p>Amount Paid: $300</p>
                <p>Status: Completed</p>
              </div>
              <div class="flex justify-between">
                <p>Prepared By: Jane Doe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  // No additional data or logic needed for this template
  </script>

  <style scoped>
  body {
    font-family: 'Roboto', sans-serif;
  }
  </style>

  <!-- External libraries -->
  <head>
    <link href="https://cdn.tailwindcss.com" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
  </head>
