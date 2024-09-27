<template>
  <form class="flex flex-col gap-4">
    <div class="flex flex-col">
      <label for="family_name" class="font-bold">Family Name:</label>
      <input
        type="text"
        id="family_name"
        v-model="form.family_name"
        class="border rounded-md px-2 py-1"
      />
    </div>
    <div class="flex flex-col">
      <label for="middle_name" class="font-bold">Middle Name:</label>
      <input
        type="text"
        id="middle_name"
        v-model="form.middle_name"
        class="border rounded-md px-2 py-1"
      />
    </div>
    <div class="flex flex-col">
      <label for="first_name" class="font-bold">First Name:</label>
      <input
        type="text"
        id="first_name"
        v-model="form.first_name"
        class="border rounded-md px-2 py-1"
      />
    </div>
    <div class="flex flex-col">
      <label for="birthday" class="font-bold">Birthday:</label>
      <input
        type="date"
        id="birthday"
        v-model="form.birthday"
        class="border rounded-md px-2 py-1"
      />
    </div>
    <div class="flex flex-col">
      <label for="civil_status" class="font-bold">Civil Status:</label>
      <select
        id="civil_status"
        v-model="form.civil_status"
        class="border rounded-md px-2 py-1"
      >
        <option value="Single">Single</option>
        <option value="Married">Married</option>
        <option value="Widowed">Widowed</option>
        <option value="Divorced">Divorced</option>
      </select>
    </div>
    <div class="flex flex-col">
      <label for="gender_code" class="font-bold">Gender:</label>
      <select
        id="gender_code"
        v-model="form.gender_code"
        class="border rounded-md px-2 py-1"
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
    <div class="flex flex-col">
      <label for="house_street" class="font-bold">House Street:</label>
      <input
        type="text"
        id="house_street"
        v-model="form.house_street"
        class="border rounded-md px-2 py-1"
      />
    </div>
    <div class="flex flex-col">
      <label for="purok_zone" class="font-bold">Purok Zone:</label>
      <input
        type="text"
        id="purok_zone"
        v-model="form.purok_zone"
        class="border rounded-md px-2 py-1"
      />
    </div>
    <div class="flex flex-col">
      <label for="postal_code" class="font-bold">Postal Code:</label>
      <input
        type="text"
        id="postal_code"
        v-model="form.postal_code"
        class="border rounded-md px-2 py-1"
      />
    </div>
    <div class="flex flex-col">
      <label for="telephone_no" class="font-bold">Telephone No:</label>
      <input
        type="tel"
        id="telephone_no"
        v-model="form.telephone_no"
        class="border rounded-md px-2 py-1"
      />
    </div>
    <div class="flex flex-col">
      <label for="email_address" class="font-bold">Email Address:</label>
      <input
        type="email"
        id="email_address"
        v-model="form.email_address"
        class="border rounded-md px-2 py-1"
      />
    </div>
    <div class="flex flex-col">
      <label for="cellphone_no" class="font-bold">Cellphone No:</label>
      <input
        type="tel"
        id="cellphone_no"
        v-model="form.cellphone_no"
        class="border rounded-md px-2 py-1"
      />
    </div>
    <div class="flex flex-col">
      <label for="name_type_code" class="font-bold">Name Type:</label>
      <select
        id="name_type_code"
        v-model="form.name_type_code"
        class="border rounded-md px-2 py-1"
      >
        <option value="1">Type 1</option>
        <option value="2">Type 2</option>
        <option value="3">Type 3</option>
      </select>
    </div>
    <div class="flex flex-col">
      <label for="personality_status_code" class="font-bold">Personality Status:</label>
      <select
        id="personality_status_code"
        v-model="form.personality_status_code"
        class="border rounded-md px-2 py-1"
      >
        <option value="1">Status 1</option>
        <option value="2">Status 2</option>
        <option value="3">Status 3</option>
      </select>
    </div>
    <div class="flex flex-col">
      <label for="barangay_id" class="font-bold">Barangay ID:</label>
      <input
        type="text"
        id="barangay_id"
        v-model="form.barangay_id"
        class="border rounded-md px-2 py-1"
      />
    </div>
    <div class="flex flex-col">
      <label for="city_id" class="font-bold">City ID:</label>
      <input
        type="text"
        id="city_id"
        v-model="form.city_id"
        class="border rounded-md px-2 py-1"
      />
    </div>
    <div class="flex flex-col">
      <label for="country_id" class="font-bold">Country ID:</label>
      <input
        type="text"
        id="country_id"
        v-model="form.country_id"
        class="border rounded-md px-2 py-1"
      />
    </div>
    <div class="flex flex-col">
      <label for="province_id" class="font-bold">Province ID:</label>
      <input
        type="text"
        id="province_id"
        v-model="form.province_id"
        class="border rounded-md px-2 py-1"
      />
    </div>
    <div class="flex flex-col">
      <label for="credit_status_id" class="font-bold">Credit Status ID:</label>
      <input
        type="text"
        id="credit_status_id"
        v-model="form.credit_status_id"
        class="border rounded-md px-2 py-1"
      />
    </div>
    <div class="flex flex-col">
      <label for="notes" class="font-bold">Notes:</label>
      <textarea
        id="notes"
        v-model="form.notes"
        class="border rounded-md px-2 py-1"
      />
    </div>
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Submit
    </button>
  </form>
</template>

<script setup lang="ts">
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const form = ref({
  family_name: '',
  middle_name: '',
  first_name: '',
  birthday: '',
  civil_status: '',
  gender_code: '',
  house_street: '',
  purok_zone: '',
  postal_code: '',
  telephone_no: '',
  email_address: '',
  cellphone_no: '',
  name_type_code: '',
  personality_status_code: '',
  barangay_id: '',
  city_id: '',
  country_id: '',
  province_id: '',
  credit_status_id: '',
  notes: '',
});

</script>