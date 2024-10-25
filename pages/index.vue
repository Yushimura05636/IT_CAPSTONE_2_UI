<template>
    <div class="bg-white">
    <header class="py-8 px-4 md:px-16">
      <div class="container mx-auto flex justify-between items-center animate__animated animate__fadeInDown">
        <img src="../img/LendCash_Logo-removebg-preview.png" class="w-20" alt="logo">
        <nav class="hidden md:flex gap-10">
          <a href="features" class="text-gray-600 hover:text-gray-800 font-bold">Features</a>
          <a href="pricing" class="text-gray-600 hover:text-gray-800 font-bold">Pricing</a>
          <a href="about" class="text-gray-600 hover:text-gray-800 font-bold">About</a>
          <a href="blog" class="text-gray-600 hover:text-gray-800 font-bold">Blog</a>
          <a href="contact" class="text-gray-600 hover:text-gray-800 font-bold">Contact</a>
        </nav>
        <div class="flex items-center  gap-4">
          <a href="login" class="text-black hover:text-gray-800 font-bold flex items-center">Log in</a>
          <a href="register-form" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 animate__animated animate__pulse animate__infinite flex items-center">Sign Up</a>
        </div>
      </div>
    </header>
    <main class="py-16 px-4 md:px-16">
      <div class="container mx-auto flex flex-col md:flex-row gap-16 animate__animated animate__fadeIn">
        <div class="md:w-1/2">
          <h2 class="text-5xl font-bold text-gray-800 mb-4">LendCash Microfinance System for ERD Financial Solution</h2>
          <p class="text-lg text-gray-600 mb-8">An Online Microfinance Lending System designed to empower individuals and small businesses by providing quick and easy access to financial services.</p>
          <div class="flex gap-4">
            <a href="register-form" class="bg-black text-white px-6 py-3 rounded-md hover:bg-green-900 animate__animated animate__pulse animate__infinite">Apply Now</a>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center items-center animate__animated animate__zoomIn">
          <img src="../img/handsakebg_1sect.jpg" alt="LendCash" class="w-full h-auto rounded-lg shadow-lg">
        </div>
      </div>
      <div class="container mx-auto mt-20 animate__animated animate__fadeInUp">
        <h3 class="text-4xl font-bold text-gray-800 mb-4">LendCash Offers</h3>
        <p class="text-lg text-gray-600 mb-8">Creating Opportunities, One Microloan at a Time.</p>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          <div class="bg-white rounded-md p-6 shadow-lg animate__animated animate__fadeInUp animate__delay-1s">
            <img src="../img/grouping.png" alt="Group Lending" class="w-16 h-16 mb-4">
            <h4 class="text-xl font-bold text-gray-800 mb-2">Group Lending</h4>
            <p class="text-gray-600">Offers small groups of individuals the opportunity to come together to access financial services, guaranteeing each other's loans and fostering a sense of shared responsibility and mutual support.</p>
          </div>
          <div class="bg-white rounded-md p-6 shadow-lg animate__animated animate__fadeInUp animate__delay-2s">
            <img src="../img/no-hidden-fees.png" alt="No Surcharges" class="w-16 h-16 mb-4">
            <h4 class="text-xl font-bold text-gray-800 mb-2">No Surcharges</h4>
            <p class="text-gray-600">Providing loans and financial services without hidden fees ensures transparency, making financial products more accessible and affordable.</p>
          </div>
          <div class="bg-white rounded-md p-6 shadow-lg animate__animated animate__fadeInUp animate__delay-3s">
            <img src="../img/no-collaretal.png" alt="No Collateral" class="w-16 h-16 mb-4">
            <h4 class="text-xl font-bold text-gray-800 mb-2">No Collateral</h4>
            <p class="text-gray-600">Access credit and financial services without the need for collateral, enabling individuals, especially those with limited assets, to secure loans.</p>
          </div>
          <div class="bg-white rounded-md p-6 shadow-lg animate__animated animate__fadeInUp animate__delay-4s">
            <img src="../img/easy-loan-process.png" alt="Easy Loan Process" class="w-16 h-16 mb-4">
            <h4 class="text-xl font-bold text-gray-800 mb-2">Easy Loan Process</h4>
            <p class="text-gray-600">Our streamlined loan process makes borrowing simple, reducing the complexity and time typically involved so you can focus on what matters most.</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div class="bg-white rounded-md p-6 shadow-lg animate__animated animate__fadeInUp animate__delay-5s">
            <img src="../img/loan-disbursement.png" alt="Quick Cash Disbursement" class="w-16 h-16 mb-4">
            <h4 class="text-xl font-bold text-gray-800 mb-2">Quick Cash Disbursement</h4>
            <p class="text-gray-600">Get access to funds when you need them the most. Our streamlined process ensures that you receive your cash swiftly and efficiently.</p>
          </div>
          <div class="bg-white rounded-md p-6 shadow-lg animate__animated animate__fadeInUp animate__delay-6s">
            <img src="../img/hassle-free.png" alt="Hassle-Free Requirements" class="w-16 h-16 mb-4">
            <h4 class="text-xl font-bold text-gray-800 mb-2">Hassle-Free Requirements</h4>
            <p class="text-gray-600">Simplified borrowing requirements make the process accessible and efficient for everyone, ensuring a smoother experience for both borrowers and lenders.</p>
          </div>
        </div>
      </div>

      <!-- Additional Content: How It Works Section -->
      <section class="py-16 animate__animated animate__fadeInUp">
        <div class="container mx-auto text-center">
          <h3 class="text-4xl font-bold text-gray-800 mb-6">How It Works</h3>
          <p class="text-lg text-gray-600 mb-10">We make it easy for you to get access to funds when you need them the most. Here’s how you can get started:</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div class="bg-white rounded-md p-6 shadow-lg animate__animated animate__fadeInUp animate__delay-1s">
              <img src="../img/transaction.png" alt="Register" class="w-16 h-16 mb-4 mx-auto">
              <h4 class="text-xl font-bold text-gray-800 mb-2">Step 1: Register</h4>
              <p class="text-gray-600">Sign up for a LendCash account by providing some basic information about yourself and your needs.</p>
            </div>
            <div class="bg-white rounded-md p-6 shadow-lg animate__animated animate__fadeInUp animate__delay-2s">
              <img src="../img/no-hidden-fees.png" alt="Apply for Loan" class="w-16 h-16 mb-4 mx-auto">
              <h4 class="text-xl font-bold text-gray-800 mb-2">Step 2: Apply for Loan</h4>
              <p class="text-gray-600">Fill out a simple loan application form, and we’ll guide you through the process step-by-step.</p>
            </div>
            <div class="bg-white rounded-md p-6 shadow-lg animate__animated animate__fadeInUp animate__delay-3s">
              <img src="../img/hassle-free.png" alt="Receive Funds" class="w-16 h-16 mb-4 mx-auto">
              <h4 class="text-xl font-bold text-gray-800 mb-2">Step 3: Receive Funds</h4>
              <p class="text-gray-600">Once approved, your funds will be disbursed quickly so you can start using them immediately.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Additional Content: Testimonials Section -->
      <section class="py-16 bg-gray-100 animate__animated animate__fadeIn">
        <div class="container mx-auto text-center">
          <h3 class="text-4xl font-bold text-gray-800 mb-6">Real People, Real Stories</h3>
          <p class="text-lg text-gray-600 mb-10">Thousands of individuals and businesses trust LendCash to empower their financial needs. Here are some stories:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(item, idx) in testimonials" :key="idx" class="bg-white p-6 rounded-xl shadow-lg animate__animated animate__fadeInUp animate__delay-1s">
              <figure>
                <div class="flex items-center gap-x-4">
                  <img :src="item.avatar" class="w-16 h-16 rounded-full" />
                  <div>
                    <span class="block text-gray-800 font-semibold">{{ item.name }}</span>
                    <span class="block text-gray-600 text-sm mt-0.5">{{ item.title }}</span>
                  </div>
                </div>
                <blockquote>
                  <p class="mt-6 text-gray-700">"{{ item.quote }}"</p>
                </blockquote>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <!-- Additional Content: Frequently Asked Questions Section -->
      <section class="py-16 animate__animated animate__fadeInUp">
        <div class="container mx-auto text-center">
          <h3 class="text-4xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h3>
          <p class="text-lg text-gray-600 mb-10">Got questions? We have the answers. Here are some of the most frequently asked questions:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="bg-white rounded-md p-6 shadow-lg animate__animated animate__fadeInUp animate__delay-1s">
              <h4 class="text-xl font-bold text-gray-800 mb-4">What is LendCash?</h4>
              <p class="text-gray-600">LendCash is an online microfinance platform that provides loans to individuals and small businesses without the need for collateral.</p>
            </div>
            <div class="bg-white rounded-md p-6 shadow-lg animate__animated animate__fadeInUp animate__delay-2s">
              <h4 class="text-xl font-bold text-gray-800 mb-4">How do I apply for a loan?</h4>
              <p class="text-gray-600">You can apply for a loan by signing up, filling out a simple application form, and submitting your details for review.</p>
            </div>
            <div class="bg-white rounded-md p-6 shadow-lg animate__animated animate__fadeInUp animate__delay-3s">
              <h4 class="text-xl font-bold text-gray-800 mb-4">Do I need to provide collateral?</h4>
              <p class="text-gray-600">No, we do not require any collateral for the loans. We believe in empowering everyone, regardless of their assets.</p>
            </div>
            <div class="bg-white rounded-md p-6 shadow-lg animate__animated animate__fadeInUp animate__delay-4s">
              <h4 class="text-xl font-bold text-gray-800 mb-4">How soon can I receive the funds?</h4>
              <p class="text-gray-600">Once your loan is approved, funds are disbursed quickly—usually within 24-48 hours, depending on your bank.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
    <footer class="pt-10 bg-gray-800 animate__animated animate__fadeInUp">
      <div class="max-w-screen-xl mx-auto px-4 md:px-8">
        <div class="justify-between items-center gap-12 md:flex">
          <div class="flex-1 max-w-lg">
            <h3 class="text-white text-2xl font-bold">
              Get Our Beautiful Newsletter Straight to Your Inbox
            </h3>
          </div>
          <div class="flex-1 mt-6 md:mt-0">
            <form @submit.prevent="onSubmit" class="flex items-center gap-x-3 md:justify-end">
              <div class="relative">
                <svg
                  class="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  class="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <button class="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div class="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
          <div class="flex flex-col gap-6 text-gray-300">
            <h4 class="text-gray-200 font-semibold">Company</h4>
            <ul class="space-y-4">
              <li><a href="#about" class="duration-150 hover:text-gray-400">About Us</a></li>
              <li><a href="#team" class="duration-150 hover:text-gray-400">Our Team</a></li>
              <li><a href="#careers" class="duration-150 hover:text-gray-400">Careers</a></li>
              <li><a href="#press" class="duration-150 hover:text-gray-400">Press</a></li>
            </ul>
          </div>
          <div class="flex flex-col gap-6 text-gray-300">
            <h4 class="text-gray-200 font-semibold">Support</h4>
            <ul class="space-y-4">
              <li><a href="#faq" class="duration-150 hover:text-gray-400">FAQs</a></li>
              <li><a href="#contact" class="duration-150 hover:text-gray-400">Contact Support</a></li>
              <li><a href="#help" class="duration-150 hover:text-gray-400">Help Center</a></li>
            </ul>
          </div>
          <div class="flex flex-col gap-6 text-gray-300">
            <h4 class="text-gray-200 font-semibold">Legal</h4>
            <ul class="space-y-4">
              <li><a href="#privacy" class="duration-150 hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#terms" class="duration-150 hover:text-gray-400">Terms of Service</a></li>
              <li><a href="#security" class="duration-150 hover:text-gray-400">Security</a></li>
            </ul>
          </div>
        </div>
        <div class="mt-10 py-10 border-t border-gray-700 items-center justify-between sm:flex">
          <p class="text-gray-300">© 2024 LendCash. All rights reserved.</p>
          <div class="flex items-center gap-x-6 text-gray-400 mt-6">
            <a href="javascript:void()">
              <svg
                class="w-6 h-6 hover:text-gray-500 duration-150"
                fill="none"
                viewBox="0 0 48 48"
              >
                <g clip-path="url(#a)">
                  <path
                    fill="currentColor"
                    d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h48v48H0z" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="javascript:void()">
              <svg
                class="w-6 h-6 hover:text-gray-500 duration-150"
                fill="none"
                viewBox="0 0 48 48"
              >
                <g clip-path="url(#clip0_17_80)">
                  <path
                    fill="currentColor"
                    d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_80">
                    <path fill="#fff" d="M0 0h48v48H0z" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="javascript:void()">
              <svg
                class="w-6 h-6 hover:text-gray-500 duration-150"
                fill="currentColor"
                viewBox="0 0 48 48"
              >
                <g fill="currentColor" clip-path="url(#clip0_910_44)">
                  <path
                    fill-rule="evenodd"
                    d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z"
                    clip-rule="evenodd"
                  />
                  <path
                    d="M9.089 35.264c-.052.119-.243.154-.398.071-.155-.083-.27-.237-.214-.36.056-.122.242-.154.397-.07.155.082.274.24.215.359zM10.063 36.343a.4.4 0 01-.493-.11c-.155-.167-.187-.396-.068-.499.12-.102.334-.055.489.11.155.167.19.396.072.499zM11.008 37.714c-.147.103-.397 0-.536-.206a.395.395 0 010-.569c.147-.098.397 0 .537.202.139.202.143.47 0 .573zM12.292 39.042c-.131.146-.397.106-.616-.091-.219-.198-.27-.467-.139-.609.131-.142.397-.102.624.091.226.194.27.466.131.609zM14.092 39.816c-.06.186-.33.269-.6.19-.27-.08-.449-.3-.397-.49.051-.19.326-.277.6-.19.274.087.449.297.397.49zM16.056 39.95c0 .194-.223.36-.509.364-.286.004-.52-.154-.52-.348 0-.193.222-.36.508-.363.286-.004.52.15.52.347zM17.884 39.646c.036.194-.163.395-.45.443-.285.047-.536-.067-.572-.257-.035-.19.171-.395.45-.447.278-.05.536.068.572.261z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_910_44">
                    <path fill="#fff" d="M0 0h48v48H0z" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="javascript:void()">
              <svg
                class="w-6 h-6 hover:text-gray-500 duration-150"
                fill="currentColor"
                viewBox="0 0 48 48"
              >
                  <g clip-path="url(#clip0_17_63)">
                    <path
                      d="M24 4.322c6.413 0 7.172.028 9.694.14 2.343.104 3.61.497 4.453.825 1.116.432 1.922.957 2.756 1.791.844.844 1.36 1.64 1.79 2.756.329.844.723 2.12.826 4.454.112 2.53.14 3.29.14 9.693 0 6.413-.028 7.172-.14 9.694-.103 2.344-.497 3.61-.825 4.453-.431 1.116-.957 1.922-1.79 2.756-.845.844-1.642 1.36-2.757 1.791-.844.328-2.119.722-4.453.825-2.532.112-3.29.14-9.694.14-6.413 0-7.172-.028-9.694-.14-2.343-.103-3.61-.497-4.453-.825-1.115-.431-1.922-.956-2.756-1.79-.844-.844-1.36-1.641-1.79-2.757-.329-.844-.723-2.119-.826-4.453-.112-2.531-.14-3.29-.14-9.694 0-6.412.028-7.172.14-9.694.103-2.343.497-3.609.825-4.453.431-1.115.957-1.921 1.79-2.756.845-.844 1.642-1.36 2.757-1.79.844-.329 2.119-.722 4.453-.825 2.522-.113 3.281-.141 9.694-.141zM24 0c-6.516 0-7.331.028-9.89.14-2.55.113-4.304.526-5.822 1.116-1.585.619-2.926 1.435-4.257 2.775-1.34 1.332-2.156 2.672-2.775 4.247C.666 9.806.253 11.55.141 14.1.028 16.669 0 17.484 0 24s.028 7.331.14 9.89c.113 2.55.526 4.304 1.116 5.822.619 1.585 1.435 2.925 2.775 4.257a11.732 11.732 0 004.247 2.765c1.528.591 3.272 1.003 5.822 1.116 2.56.112 3.375.14 9.89.14 6.516 0 7.332-.028 9.891-.14 2.55-.113 4.303-.525 5.822-1.116a11.732 11.732 0 004.247-2.765 11.732 11.732 0 002.766-4.247c.59-1.528 1.003-3.272 1.115-5.822.113-2.56.14-3.375.14-9.89 0-6.516-.027-7.332-.14-9.891-.112-2.55-.525-4.303-1.115-5.822-.591-1.594-1.407-2.935-2.747-4.266a11.732 11.732 0 00-4.247-2.765C38.194.675 36.45.262 33.9.15 31.331.028 30.516 0 24 0z"
                    />
                    <path
                      d="M24 11.672c-6.806 0-12.328 5.522-12.328 12.328 0 6.806 5.522 12.328 12.328 12.328 6.806 0 12.328-5.522 12.328-12.328 0-6.806-5.522-12.328-12.328-12.328zm0 20.325a7.998 7.998 0 010-15.994 7.998 7.998 0 010 15.994zM39.694 11.184a2.879 2.879 0 11-2.878-2.878 2.885 2.885 0 012.878 2.878z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_63">
                      <path d="M0 0h48v48H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>

  <script setup lang="ts">
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';
import { ref } from 'vue';
import { authService } from '~/components/api/AuthService';

interface Testimonial {
  avatar: string;
  name: string;
  title: string;
  quote: string;
}

const testimonials = ref<Testimonial[]>([
  {
    avatar: "https://mydramalist.com/people/17605-daniel-padilla",
    name: "Heinz Kyle Hora",
    title: "Founder of MGG",
    quote: "LendCash has been an amazing support for our group. The process is so simple and transparent!"
  },
  {
    avatar: "https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/448656158_1629887417845685_6398441375725225275_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGeOFE4asStHUlOZco6oK80qfpuDRI2IeOp-m4NEjYh40Yfk9OO0p0f7HpySF7PqhcbrJBkcX2sr3R9Pn5858cV&_nc_ohc=Kc-Vzrd_MaMQ7kNvgHPtz4b&_nc_ht=scontent.fcgy1-1.fna&oh=00_AYB2rdBHgfFwsYFCQsUO500kJHlACjQT79cJNjy48G8RSg&oe=66DD354A",
    name: "Stephen Duray",
    title: "Founder of MGG",
    quote: "The no-collateral feature made all the difference for us. LendCash truly empowers the community."
  },
  {
    avatar: "https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.15752-9/457869417_880139523982024_8057426980193137924_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHLQdw0XWAnaNothpVh5ogysuphZSIDa5my6mFlIgNrmSjUcm8ZpKHlFiLj_4_bzV7MJ7G-xEP9lN4RnQwoh_Ip&_nc_ohc=TTESbs8EOu0Q7kNvgHy49e8&_nc_ht=scontent.fcgy1-1.fna&oh=03_Q7cD1QEhuLSmpNsAiFORrI0fSu6jnTsBxH83driAhl4viXPJZg&oe=66FEF935",
    name: "Venn Lopez",
    title: "Founder of MGG",
    quote: "Fast disbursement and hassle-free requirements! It couldn't be better."
  }
]);

async function removeToken() {
    try {
        const token = localStorage.getItem('_token');

        debugger;
        if(token){

            //remove laravel authentication toke
            const response = await authService.logout();

            // Remove the token from local storage
            localStorage.removeItem('_token'); // Adjust the key based on your implementation
        }
    } catch (error) {
        toast.error(`${error}`, {
            autoClose: 3000,
        })
    }
    finally{
        setTimeout(() => {
            navigateTo('/')
        }, 3000)
    }
}

onMounted(() => {
    removeToken();
})
</script>


  <style>
  body {
    font-family: 'Inter', sans-serif;
  }

  .container {
    max-width: 1200px;
  }
  </style>
