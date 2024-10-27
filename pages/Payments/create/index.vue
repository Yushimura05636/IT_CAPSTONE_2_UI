<template>
    <div class="p-8">
      <!-- Customer Name Combobox -->
      <div class="mb-4">
        <label class="block text-gray-700">Customer Name</label>
        <select v-model="selectedCustomer" @change="fetchLoanApplications" class="w-full border rounded-lg px-4 py-2">
          <option disabled value="">Select Customer</option>
          <option v-for="customer in customers" :key="customer.id" :value="customer.id">
            {{ customer.name }}
          </option>
        </select>
      </div>

      <!-- Loan Application Combobox -->
      <div v-if="loanApplications.length > 0" class="mb-4">
        <label class="block text-gray-700">Loan Application</label>
        <select v-model="selectedLoan" @change="fetchPayments" class="w-full border rounded-lg px-4 py-2">
          <option disabled value="">Select Loan Application</option>
          <option v-for="loan in loanApplications" :key="loan.id" :value="loan.id">
            {{ loan.description }}
          </option>
        </select>
      </div>

      <!-- Payments Table -->
      <div v-if="payments.length > 0" class="overflow-x-auto">
        <div class="max-h-60 overflow-y-auto">
          <table class="min-w-full bg-white border border-gray-300 mb-4">
            <thead>
              <tr>
                <th class="px-4 py-2 border text-left">Select</th>
                <th class="px-4 py-2 border text-left">Payment ID</th>
                <th class="px-4 py-2 border text-left">Payment Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="payment in payments" :key="payment.id" @click="selectPayment(payment)">
                <td class="px-4 py-2 border text-left">
                  <input
                    type="checkbox"
                    v-model="payment.isSelected"
                    @change.stop="onCheckboxChange(payment.id, $event.target.checked)"
                  />
                </td>
                <td class="px-4 py-2 border">{{ payment.id }}</td>
                <td class="px-4 py-2 border">{{ payment.amount }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Payment Details Form -->
      <div v-if="selectedPayment" class="mt-6">
        <h2 class="text-xl font-bold mb-4">Payment Details</h2>
        <div class="grid grid-cols-2 gap-4">
          <!-- Display Balance, Amount Due, Interest, Amount Paid -->
          <div>
            <label class="block text-gray-700">Balance</label>
            <input
              type="number"
              v-model="selectedPayment.balance"
              readonly
              class="w-full border rounded-lg px-4 py-2 bg-gray-100"
            />
          </div>
          <div>
            <label class="block text-gray-700">Amount Due</label>
            <input
              type="number"
              v-model="selectedPayment.amountDue"
              readonly
              class="w-full border rounded-lg px-4 py-2 bg-gray-100"
            />
          </div>
          <div>
            <label class="block text-gray-700">Amount Interest</label>
            <input
              type="number"
              v-model="selectedPayment.amountInterest"
              readonly
              class="w-full border rounded-lg px-4 py-2 bg-gray-100"
            />
          </div>
          <div>
            <label class="block text-gray-700">Amount Paid</label>
            <input
              type="number"
              v-model="selectedPayment.amountPaid"
              class="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <!-- Fields for Status and Notes outside the table -->
          <div>
            <label class="block text-gray-700">Status</label>
            <input
              type="text"
              v-model="selectedPayment.status"
              readonly
              class="w-full border rounded-lg px-4 py-2 bg-gray-100"
            />
          </div>
          <div>
            <label class="block text-gray-700">Notes</label>
            <textarea
              v-model="selectedPayment.notes"
              class="w-full border rounded-lg px-4 py-2"
              rows="3"
              placeholder="Enter notes here"
            ></textarea>
          </div>
        </div>

        <!-- Submit and Cancel Buttons -->
        <div class="mt-4 flex gap-4">
          <button @click="submitForm" class="px-4 py-2 bg-blue-500 text-white rounded-lg">Submit</button>
          <button @click="cancelForm" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg">Cancel</button>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref } from 'vue';

  // Define types for each data property
  interface Customer {
    id: number;
    name: string;
  }

  interface LoanApplication {
    id: number;
    description: string;
  }

  interface Payment {
    id: number;
    isSelected: boolean;
    amount: number;
    balance: number;
    amountDue: number;
    amountInterest: number;
    amountPaid: number;
    status: string;  // Status
    notes: string;   // Notes
  }

  // Reactive state
  const selectedCustomer = ref<string | null>(null);
  const selectedLoan = ref<string | null>(null);
  const selectedPayment = ref<Payment | null>(null);

  // Mock data for customers
  const customers = ref<Customer[]>([
    { id: 1, name: "Customer A" },
    { id: 2, name: "Customer B" },
  ]);

  const loanApplications = ref<LoanApplication[]>([]);
  const payments = ref<Payment[]>([]);

  // Methods
  function fetchLoanApplications() {
    if (selectedCustomer.value) {
      loanApplications.value = [
        { id: 1, description: "Loan 1" },
        { id: 2, description: "Loan 2" },
      ];
    }
  }

  function fetchPayments() {
    if (selectedLoan.value) {
      payments.value = [
        { id: 101, isSelected: false, amount: 200, balance: 500, amountDue: 300, amountInterest: 50, amountPaid: 0, status: "Pending", notes: "" },
        { id: 102, isSelected: false, amount: 150, balance: 400, amountDue: 200, amountInterest: 30, amountPaid: 0, status: "Pending", notes: "" },
        { id: 103, isSelected: false, amount: 250, balance: 600, amountDue: 350, amountInterest: 40, amountPaid: 0, status: "Pending", notes: "" },
      ];
    }
  }

  function selectPayment(payment: Payment) {
    selectedPayment.value = payment;
  }

  function onCheckboxChange(paymentId: number, isChecked: boolean) {
    const payment = payments.value.find((p) => p.id === paymentId);
    if (payment) {
      payment.isSelected = isChecked;
    }
  }

  // Submit and Cancel actions
  function submitForm() {
    const selectedPayments = payments.value
      .filter(payment => payment.isSelected)
      .map(payment => ({
        ...payment,
        status: payment.status,  // Use the current status
        notes: payment.notes     // Use the current notes
      }));

    console.log("Form submitted", {
      selectedPayments: selectedPayments,
    });
    alert(`Form submitted! Selected Payments: ${JSON.stringify(selectedPayments)}`);
  }

  function cancelForm() {
    selectedPayment.value = null;
    alert("Form canceled.");
  }
  </script>

  <style>
  /* Optional: Add custom styling here if needed */
  </style>
