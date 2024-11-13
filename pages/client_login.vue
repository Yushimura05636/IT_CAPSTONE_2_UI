<template>
    <main class="relative flex items-center justify-center min-h-screen animated-background">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-800 to-purple-600 opacity-70"></div>

        <!-- Login Card -->
        <div class="relative z-10 bg-white p-10 rounded-xl shadow-lg w-full max-w-md border-t-4 border-indigo-500">
            <!-- Welcome and Login Form Section -->
            <div v-if="!isAuthenticated" class="text-center space-y-6">
                <img src="../img/LendCash_Logo-removebg-preview.png" width="100" class="mx-auto animate-bounce mb-4" />
                <h2 class="text-2xl font-semibold text-gray-800">Welcome Back!</h2>
                <p class="text-gray-500">Please log in to access your account</p>

                <form @submit.prevent="login" class="space-y-5">
                    <input v-model="state.email" placeholder="Email" type="email" class="input-field" />
                    <FormError :error="state.error?.email" />

                    <input v-model="state.password" placeholder="Password" type="password" class="input-field" />
                    <FormError :error="state.error?.password" />

                    <button type="submit" class="submit-button">Sign In</button>
                </form>

                <!-- Forgot Password Link -->
                <div class="mt-4">
                    <a href="/forgot_password" class="text-indigo-500 hover:underline">Forgot your password?</a>
                </div>
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
                <p v-if="errorMessage" class="error text-red-600 mt-2">{{ errorMessage }}</p>
                <p v-if="successMessage" class="success text-green-600 mt-2">{{ successMessage }}</p>
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
        const response = await authService.loginClient({ email: state.email, password: state.password });
        console.log('Response:', response); 
        debugger
        debugger
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
        console.error('Login failed:', error);  // Log the error
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
            // phone_number: state.phone,
            method: selectedMethod.value,
        }
        console.log("Sending params:", params);
        console.log("Pass email "+state.email)

        const response = await authService.sendVerificationClient(params);
        isCodeSent.value = true;
        errorMessage.value = '';
    } catch (error) {
        console.log(error)
        errorMessage.value = 'Failed to send verification code.';
    }
};

const verifyCode = async () => {
    try {
        debugger
        const params = {
            code: state.code,
            email: state.email,
            // phone_number: state.phone,
            method: selectedMethod.value,
        }
        const response = await authService.verifyVerificationClient(params, state.code);
        if (response.success) {
            localStorage.setItem("_token", response.data?.token)
            successMessage.value = 'Code verified!';
            router.push('/dashboard/Client');
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
/* Background Animation */
.animated-background {
    background: linear-gradient(45deg, #4f46e5, #8b5cf6, #f59e0b, #10b981);
    background-size: 300% 300%;
    animation: gradientAnimation 15s ease infinite;
    transition: background 0.3s ease;
}

/* Keyframes for gradient animation */
@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.input-field {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
    transition: border-color 0.3s ease;
    outline: none;
    font-size: 0.875rem;
}
.input-field:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
}

.submit-button {
    width: 100%;
    padding: 0.75rem 1rem;
    background-color: #6366f1;
    color: white;
    border-radius: 0.375rem;
    font-weight: 600;
    text-align: center;
    transition: background-color 0.3s ease;
    font-size: 0.875rem;
}
.submit-button:hover {
    background-color: #4f46e5;
}
</style>
