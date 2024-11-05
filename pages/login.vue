<template>
    <main class="w-full h-screen flex">
        <!-- Left Section with Image -->
        <div class="w-1/2 hidden lg:flex bg-gradient-to-br from-indigo-600 to-purple-600 items-center justify-center">
            <img src="../img/2019-04-14.jpg" alt="Building Image" class="w-3/4 h-3/4 object-cover rounded-lg shadow-lg opacity-90 transition duration-300 hover:opacity-100 hover:scale-105" />
        </div>

        <!-- Right Section with Form -->
        <div class="w-full lg:w-1/2 flex flex-col items-center justify-center px-8">
            <div class="max-w-sm w-full text-gray-600 space-y-8 bg-white p-8 rounded-lg shadow-xl">
                <!-- Welcome and Login Form Section -->
                <div v-if="!isAuthenticated" class="text-center pb-6">
                    <img src="../img/LendCash_Logo-removebg-preview.png" width="120" class="mx-auto" />
                    <div class="mt-4">
                        <h3 class="text-gray-800 text-2xl font-semibold sm:text-3xl tracking-tight">Welcome Back!</h3>
                        <p class="text-gray-500">Please log in to your account</p>
                    </div>

                    <form @submit.prevent="login" class="space-y-6">
                        <input v-model="state.email" placeholder="Email" type="email" class="input-field" />
                        <FormError :error="state.error?.email" />

                        <input v-model="state.password" placeholder="Password" type="password" class="input-field" />
                        <FormError :error="state.error?.password" />

                        <button type="submit" class="submit-button">Sign in</button>
                    </form>
                </div>

                <!-- 2FA Method Selection -->
                <div v-if="isAuthenticated && !isCodeSent" class="text-center space-y-4">
                    <h3 class="text-xl font-semibold">Select Verification Method</h3>
                    <div class="flex justify-around">
                        <div @click="setMethod('email')" :class="selectedMethod === 'email' ? 'selected' : ''" class="method-option">
                            <img src="https://www.clipartmax.com/png/middle/262-2626325_find-and-follow-us-dark-blue-email-icon.png" alt="Email Icon" class="icon" />
                            <span>Email</span>
                        </div>
                        <div @click="setMethod('phone')" :class="selectedMethod === 'phone' ? 'selected' : ''" class="method-option">
                            <img src="https://cdn-icons-png.flaticon.com/512/6523/6523368.png" alt="Phone Icon" class="icon" />
                            <span>Phone</span>
                        </div>
                    </div>
                    <button @click="sendVerificationCode" class="send-code-button" :disabled="!selectedMethod">Send Code</button>
                </div>

                <!-- 2FA Code Input -->
                <div v-if="isCodeSent" class="text-center space-y-4">
                    <h3 class="text-xl font-semibold">Enter Your 2FA Code</h3>
                    <input v-model="state.code" placeholder="Enter 6-digit code" type="text" class="input-field" />
                    <button @click="verifyCode" class="submit-button">Verify</button>
                    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
                    <p v-if="successMessage" class="success">{{ successMessage }}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { authService } from '@/components/api/AuthService';
import { useRouter } from 'vue-router';

const state = reactive({
    email: '',
    phone: '',
    password: '',
    code: '',
    error: null,
});

const isAuthenticated = ref(false);
const isCodeSent = ref(false);
const selectedMethod = ref('');
const errorMessage = ref('');
const successMessage = ref('');
const router = useRouter();

const login = async () => {
    try {
        const response = await authService.login({ email: state.email, password: state.password });
        if (response.data) {
            debugger
            state.phone = response.data.user.phone_number
            state.email = response.data.user.email

            //set the phone number and
            isAuthenticated.value = true;
            state.error = null;
        } else {
            state.error = 'Invalid credentials';
        }
    } catch (error) {
        state.error = 'Login failed. Please try again.';
    }
};

const setMethod = (method: string) => {
    selectedMethod.value = method;
};

const sendVerificationCode = async () => {
    try {
        debugger
        const params = {
            email: state.email,
            phone_number: state.phone,
            method: selectedMethod.value,
        }
        const response = await authService.sendVerification(params);
        isCodeSent.value = true;
        errorMessage.value = '';
    } catch (error) {
        errorMessage.value = 'Failed to send verification code.';
    }
};

const verifyCode = async () => {
    try {
        debugger
        const params = {
            code: state.code,
            email: state.email,
            phone_number: state.phone,
            method: selectedMethod.value,
        }
        const response = await authService.verifyVerificationCode(params, state.code);
        if (response.success) {
            localStorage.setItem("_token", response.data?.token)
            successMessage.value = 'Code verified!';
            router.push('/dashboard');
        } else {
            errorMessage.value = 'Invalid code.';
        }
    } catch (error) {
        errorMessage.value = 'Verification failed.';
    }
};
</script>

<style scoped>
.input-field {
    padding: 8px;
    width: 100%;
    margin-top: 4px;
}

.submit-button, .send-code-button {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    width: 100%;
    cursor: pointer;
}

.method-option {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    border-radius: 8px;
    transition: background-color 0.3s ease;
}
.method-option:hover {
    background-color: #f0f0f0;
}
.selected {
    background-color: #e0e0ff;
}

.icon {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
}

.error {
    color: red;
}
.success {
    color: green;
}
</style>
