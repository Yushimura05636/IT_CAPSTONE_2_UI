<template>
    <div id="print-section" class="max-w-lg mx-auto bg-gray-100 shadow-lg rounded-lg p-8 border border-gray-200">
      <div class="flex justify-between items-center mb-4 border-b pb-2 border-gray-300">
        <h1 class="text-2xl font-bold text-gray-800">Receipt</h1>
        <span class="text-gray-500 text-sm">#{{ payment.id }}</span>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div class="text-gray-800 font-medium text-lg">Customer Information</div>
        <div class="border-l-4 border-blue-500 pl-4">
          <p class="text-gray-700"><span class="font-semibold">Customer ID:</span> {{ payment.customer_id }}</p>
          <p class="text-gray-700"><span class="font-semibold">Prepared By:</span> {{ payment.prepared_by_id }}</p>
        </div>

        <div class="text-gray-800 font-medium text-lg mt-4">Payment Details</div>
        <div class="border-l-4 border-blue-500 pl-4">
          <p class="text-gray-700"><span class="font-semibold">Amount Paid:</span> ${{ payment.amount_paid }}</p>
          <p class="text-gray-700"><span class="font-semibold">Status:</span> {{ payment.document_status_code }}</p>
          <p class="text-gray-700"><span class="font-semibold">Date:</span> {{ formatDate(payment.prepared_at) }}</p>
        </div>
      </div>
      <div class="flex justify-center gap-4 mt-6">
        <button @click="printReceipt" class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-colors">
          Print Receipt
        </button>
        <button @click="okayAction" class="px-6 py-3 bg-gray-300 text-gray-800 font-medium rounded-lg shadow hover:bg-gray-400 transition-colors">
          Okay
        </button>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  // Sample payment data
  const payment = {
    id: 101,
    customer_id: 23,
    amount_paid: "250.00",
    prepared_by_id: 3,
    document_status_code: "APPROVED",
    prepared_at: "2024-10-29T14:30:00Z"
  };

  // Format date function
  function formatDate(date: string): string {
    return new Date(date).toLocaleDateString();
  }

  // Print receipt function
  function printReceipt() {
    const printContents = document.getElementById('print-section')?.innerHTML;
    if (printContents) {
      const printWindow = window.open('', '', 'width=600,height=400');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Payment Receipt</title>
              <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            </head>
            <body class="bg-gray-100 p-8">
              <div class="max-w-lg mx-auto">${printContents}</div>
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    }
  }

  // Okay button action
  function okayAction() {
    alert('Okay button clicked');
  }
  </script>

  <style scoped>
  /* Optional custom styling for finer adjustments */
  </style>
