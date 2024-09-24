<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <form>
    <div class="container mx-auto p-4">
      <!-- <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
            <div class="mt-2">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
                <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith" />
              </div>
            </div>
          </div>

          <div class="col-span-full">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">About</label>
            <div class="mt-2">
              <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
          </div>

          <div class="col-span-full">
            <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Photo</label>
            <div class="mt-2 flex items-center gap-x-3">
              <UserCircleIcon class="h-12 w-12 text-gray-300" aria-hidden="true" />
              <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
            </div>
          </div>

          <div class="col-span-full">
            <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div class="text-center">
                <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                  <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <div class="border-b border-gray-900/10 pb-12">
        <h1 class="text-xl font-bold leading-7 text-gray-900">Update Customer</h1>
        <p class="mt-1 text-sm leading-6 text-gray-600">LendCash.</p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-2">
            <label for="Passbook Number" class="block text-sm font-bold leading-6 text-gray-900">Passbook Number <span class="text-red-600">*</span></label>
            <div class="mt-2">
              <input type="number" name="passbook_no" id="passbook_no" autocomplete="passbook_no" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="Loan Count ID" class="block text-sm font-bold leading-6 text-gray-900">Loan Count ID <span class="text-red-600">*</span></label>
            <div class="mt-2">
              <input type="number" name="loan_count_id" id="loan_count_id" autocomplete="loan_count_id" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="Enable Mortuary" class="block text-sm font-bold leading-6 text-gray-900">Enable Mortuary <span class="text-red-600">*</span></label>
            <div class="mt-2">
              <select id="enable_mortuary" name="enable_mortuary" autocomplete="enable_mortuary" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="Mortuary Coverage Start" class="block text-sm font-bold leading-6 text-gray-900">Mortuary Coverage Start <span class="text-red-600">*</span></label>
            <div class="mt-2">
              <input type="date" name="mortuary_coverage_start" id="mortuary_coverage_start" autocomplete="mortuary_coverage_start" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="Mortuary Coverage End" class="block text-sm font-bold leading-6 text-gray-900">Mortuary Coverage End <span class="text-red-600">*</span></label>
            <div class="mt-2">
              <input type="date" name="mortuary_coverage_end" id="mortuary_coverage_end" autocomplete="mortuary_coverage_end" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="Datetime Created" class="block text-sm font-bold leading-6 text-gray-900">Datetime Created <span class="text-red-600">*</span></label>
            <div class="mt-2">
              <input type="date" name="Datetime_created" id="Datetime_created" autocomplete="Datetime_created" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="Datetime Last Modified" class="block text-sm font-bold leading-6 text-gray-900">Datetime Last Modified <span class="text-red-600">*</span></label>
            <div class="mt-2">
              <input type="date" name="Datetime_last_modified" id="Datetime_last_modified" autocomplete="Datetime_last_modified" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="Datetime Last Modified" class="block text-sm font-bold leading-6 text-gray-900">Datetime Registered <span class="text-red-600">*</span></label>
            <div class="mt-2">
              <input type="date" name="datetime_registered" id="datetime_registered" autocomplete="datetime_registered" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" />
            </div>
          </div>

          <!-- <div class="sm:col-span-3">
            <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
            <div class="mt-2">
              <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                <option>STI DAVAO</option>
                <option>STI DAVAO</option>
                <option>STI DAVAO</option>
              </select>
            </div>
          </div> -->

          <!-- <div class="col-span-full">
            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
            <div class="mt-2">
              <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div> -->

          <div class="sm:col-span-2 sm:col-start-1">
            <label for="Last Name" class="block text-sm font-bold leading-6 text-gray-900">Last Name <span class="text-red-600">*</span> </label>
            <div class="mt-2">
              <input type="text" name="family_name" id="family_name" autocomplete="family_name2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="First Name" class="block text-sm font-bold leading-6 text-gray-900">Middle Name <span class="text-red-600">*</span></label>
            <div class="mt-2">
              <input type="text" name="middle_name" id="middle_name" autocomplete="middle_name1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="First Name" class="block text-sm font-bold leading-6 text-gray-900">First Name <span class="text-red-600">*</span></label>
            <div class="mt-2">
              <input type="text" name="first_name" id="first_name" autocomplete="first_name1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="Birthdate" class="block text-sm font-bold leading-6 text-gray-900">Birthdate <span class="text-red-600">*</span></label>
            <div class="mt-2">
              <input type="date" name="birthday" id="birthday" autocomplete="birthday" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2">
              <label for="Civil Status" class="block text-sm font-bold leading-6 text-gray-900">Civil Status <span class="text-red-600">*</span></label>
            <div class="mt-2">
              <!-- <input type="text" name="gender_code" id="gender_code" autocomplete="gender_code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" /> -->
              <select id="gender_code" name="country" autocomplete="country-name1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                <option>Married</option>
                <option>Single</option>
                <option>Widowed</option>
              </select>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="Gender" class="block text-sm font-bold leading-6 text-gray-900">Gender <span class="text-red-600">*</span></label>
            <div class="mt-2">
              <!-- <input type="text" name="gender_code" id="gender_code" autocomplete="gender_code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" /> -->
              <select id="gender_code" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="street-address" class="block text-sm font-bold leading-6 text-gray-900">House Address <span class="text-red-600">*</span></label>
            <div class="mt-2">
              <input type="text" name="house_street" id="house_street" autocomplete="house_street1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>

        <div class="mt-10 space-y-10">
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
            <div class="mt-6 space-y-6">
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </div>
                <div class="text-sm leading-6">
                  <label for="comments" class="font-medium text-gray-900">Comments</label>
                  <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                </div>
              </div>
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </div>
                <div class="text-sm leading-6">
                  <label for="candidates" class="font-medium text-gray-900">Candidates</label>
                  <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                </div>
              </div>
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </div>
                <div class="text-sm leading-6">
                  <label for="offers" class="font-medium text-gray-900">Offers</label>
                  <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
            <p class="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
            <div class="mt-6 space-y-6">
              <div class="flex items-center gap-x-3">
                <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Everything</label>
              </div>
              <div class="flex items-center gap-x-3">
                <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Same as email</label>
              </div>
              <div class="flex items-center gap-x-3">
                <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">No push notifications</label>
              </div>
            </div>
          </fieldset>
        </div>
      </div> -->
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-bold leading-6 text-gray-900">
          <a href="/">Cancel</a>
          
      </button>
      <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
    </div>
  </form>
</template>

<script setup>
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'

function submitForm(event) {
// Get all the form fields
const formFields = event.target.elements

// Check if all required fields are filled
for (const field of formFields) {
  if (field.required && field.value.trim() === '') {
    alert('Please fill in all required fields')
    return
  }
}

// If all fields are filled, submit the form
// You can add your form submission logic here
console.log('Form submitted')
}
</script>