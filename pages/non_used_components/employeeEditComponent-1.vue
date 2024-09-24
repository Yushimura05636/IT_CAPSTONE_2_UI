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
          <h1 class="text-xl font-bold leading-7 text-gray-900">Update Employee</h1>
          <p class="mt-1 text-sm leading-6 text-gray-600">LendCash.</p>
  
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-2">
              <label for="SSS Number" class="block text-sm font-bold leading-6 text-gray-900">SSS Number <span class="text-red-600">*</span></label>
              <div class="mt-2">
                <input type="number" name="sss_no" id="sss_no" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="PHIC Number" class="block text-sm font-bold leading-6 text-gray-900">PHIC Number <span class="text-red-600">*</span></label>
              <div class="mt-2">
                <input type="number" name="phic_no" id="phic_no" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6" />
              </div>
            </div>
  
            <div class="sm:col-span-2">
              <label for="Tin Number" class="block text-sm font-bold leading-6 text-gray-900">TIN Number <span class="text-red-600">*</span></label>
              <div class="mt-2">
                <input type="number" name="tin_no" id="tin_no" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="Date Hired" class="block text-sm font-bold leading-6 text-gray-900">Date Hired <span class="text-red-600">*</span></label>
              <div class="mt-2">
                <input type="date" name="date_hired" id="date_hired" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="Date Resigned" class="block text-sm font-bold leading-6 text-gray-900">Date Resigned <span class="text-red-600">*</span></label>
              <div class="mt-2">
                <input type="date" name="date_resigned" id="date_resigned" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
                <input type="text" name="last_name" id="last_name" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" />
              </div>
            </div>
  
            <div class="sm:col-span-2">
              <label for="First Name" class="block text-sm font-bold leading-6 text-gray-900">First Name <span class="text-red-600">*</span></label>
              <div class="mt-2">
                <input type="text" name="first_name" id="first_name" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" />
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
                <select id="gender_code" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  <option>Married</option>
                  <option>Single</option>
                  <option>Widowed</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-1">
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
              <label for="street-address" class="block text-sm font-bold leading-6 text-gray-900">Street address <span class="text-red-600">*</span></label>
              <div class="mt-2">
                <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="street-address" class="block text-sm font-bold leading-6 text-gray-900">Purok Zone <span class="text-red-600">*</span></label>
              <div class="mt-2">
                <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="Postal Code" class="block text-sm font-bold leading-6 text-gray-900">Postal Code <span class="text-red-600">*</span></label>
              <div class="mt-2">
                <input type="number" name="postal_code" id="postal_code" autocomplete="postal_code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="Telephone" class="block text-sm font-bold leading-6 text-gray-900">Telephone # <span class="text-red-600">*</span></label>
              <div class="mt-2">
                <input type="number" name="telephone_no" id="telephone_no" autocomplete="telephone_no" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="email_address" class="block text-sm font-bold leading-6 text-gray-900">Email Address <span class="text-red-600">*</span></label>
              <div class="mt-2">
                <input type="email" name="email_address" id="email_address" autocomplete="email_address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="Telephone" class="block text-sm font-bold leading-6 text-gray-900">Cellphone # <span class="text-red-600">*</span></label>
              <div class="mt-2">
                <input type="number" name="cellphone_no" id="cellphone_no" autocomplete="cellphone_no" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="name_type_code" class="block text-sm font-bold leading-6 text-gray-900">Name Type Code <span class="text-red-600">*</span></label>
              <div class="mt-2">
                <!-- <input type="text" name="gender_code" id="gender_code" autocomplete="gender_code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" /> -->
                <select id="gender_code" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  <option>Employee</option>
                  <option>User</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="personality_status_code" class="block text-sm font-bold leading-6 text-gray-900">Personality Status Code <span class="text-red-600">*</span></label>
              <div class="mt-2">
                <!-- <input type="text" name="gender_code" id="gender_code" autocomplete="gender_code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" /> -->
                <select id="gender_code" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  <option>Active</option>
                  <option>Not Active</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="barangay_id" class="block text-sm font-bold leading-6 text-gray-900">Barangay ID <span class="text-red-600">*</span></label>
              <div class="mt-2">
                <input type="number" name="barangay_id" id="barangay_id" autocomplete="barangay_id" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="city_id" class="block text-sm font-bold leading-6 text-gray-900">City ID <span class="text-red-600">*</span></label>
              <div class="mt-2">
                <input type="number" name="city_id" id="city_id" autocomplete="city_id" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="country_id" class="block text-sm font-bold leading-6 text-gray-900">Country ID <span class="text-red-600">*</span></label>
              <div class="mt-2">
                <input type="number" name="country_id" id="country_id" autocomplete="country_id" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="province_id" class="block text-sm font-bold leading-6 text-gray-900">Province ID <span class="text-red-600">*</span></label>
              <div class="mt-2">
                <input type="number" name="province_id" id="province_id" autocomplete="province_id" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="personality_status_code" class="block text-sm font-bold leading-6 text-gray-900">Credit Status ID <span class="text-red-600">*</span></label>
              <div class="mt-2">
                <!-- <input type="text" name="gender_code" id="gender_code" autocomplete="gender_code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6" /> -->
                <select id="gender_code" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  <option>Active</option>
                  <option>Suspended</option>
                  <option>Blacklisted</option>
                </select>
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