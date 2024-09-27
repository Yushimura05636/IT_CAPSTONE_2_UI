<template>
  <main
  class="w-full h-screen flex flex-col items-center justify-center px-4"
>
  <div class="max-w-sm w-full text-gray-600 space-y-5">
    <div class="text-center pb-8">
      <img src="../img/LendCash_Logo-removebg-preview.png" width="150" class="mx-auto" />
      <div class="mt-5">
        <h3 class="text-gray-800 text-2xl font-bold sm:text-3xl">
          Log in to your account
        </h3>
      </div>
    </div>
    <form method="POST" @submit.prevent="login" class="space-y-5">
      <div>
        <label class="font-medium"> Email </label>
        <input
         id="email"
         name="email"
          placeholder="Email"
          type="email"
          v-model="state.email"
          
          class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
        <FormError
          :error="v$.email && v$.email.$errors && v$.email.$errors.length > 0 ? v$.email.$errors[0].$message : null" />
        <FormError
          :error="state.error && state.error.errors && state.error.errors.email && state.error.errors.email[0]" />
      </div>
      <div>
        <label class="font-medium"> Password </label>
        <input
          id="password"
          name="password"
          type="password"
          v-model="state.password"
          
          class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
        <FormError
          :error="v$.password && v$.password.$errors && v$.password.$errors.length > 0 ? v$.password.$errors[0].$message : null" />
        <FormError
          :error="state.error && state.error.errors && state.error.errors.password && state.error.errors.password[0]" />
      </div>
      <div class="flex items-center justify-between text-sm">
        <div class="flex items-center gap-x-3">
          <input
            type="checkbox"
            id="remember-me-checkbox"
            class="checkbox-item peer hidden"
          />
          <label
            for="remember-me-checkbox"
            class="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
          ></label>
          <span>Remember me</span>
        </div>
        <a
          href="javascript:void(0)"
          class="text-center text-indigo-600 hover:text-indigo-500"
          >Forgot password?</a
        >
      </div>
      
        <button
        class="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
        Sign in
      </button>
    
    </form>
    <button
      class="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100"
    >
      <!-- SVG for Google Sign In -->
      <img
        src="https://raw.githubusercontent.com/sidiDev/remote-assets/7cd06bf1d8859c578c2efbfda2c68bd6bedc66d8/google-icon.svg"
        alt="Google"
        class="w-5 h-5"
      />
      <!-- Comment: Google Icon SVG here -->
      Continue with Google
    </button>
    <p class="text-center">
      Don't have an account?
      <a
        href="javascript:void(0)"
        class="font-medium text-indigo-600 hover:text-indigo-500"
        >Sign up</a
      >
    </p>
  </div>
</main>
</template>
<script setup lang="ts">
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { authService } from '@/components/api/AuthService'
import { useVuelidate } from "@vuelidate/core"
import { required, helpers } from '@vuelidate/validators'



const state = reactive({
    email: null,
    error: null,
    isPageLoading: false,
    password: null,
})

const rules = computed(() => {
    return {
        email: {
            required: helpers.withMessage('This field is required.', required),
        },
        password: {
            required: helpers.withMessage('This field is required.', required),
        },
    }
})
const v$ = useVuelidate(rules, state)

async function login() {
    
    state.error = null
    v$.value.$validate()
    if (!v$.value.$error) {
        state.isPageLoading = true
        try {
            const params = {
                email: state.email,
                password: state.password,
            }
            const response = await authService.login(params)
            if (response.data) {
                localStorage.setItem("_token", response.data?.token)
                toast.success("Login successfully!", {
                    autoClose: 1000,
                });
                
                // Introduce a delay before navigating
                setTimeout(() => {
                    navigateTo('/dashboard');
                }, 1000);
            }
        } catch (error: any) {
          state.error = error
            toast.error("Something is wrong! please contact your adminstrator!", {
                    autoClose: 3000,
                });
            toast.error("error: " + state.error, {
                autoClose: 4000,
            });
            setTimeout(() => {
                    navigateTo('/login');
                }, 4000);
        }
        state.isPageLoading = false
    }
}
</script>