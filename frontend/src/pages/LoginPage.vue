<template>
  <div class="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-brown-50">
    <div class="w-full max-w-md space-y-8">
      <div class="flex flex-col items-center">
        <h2 class="text-3xl font-bold text-gray-900">
          Welcome <span class="font-display italic text-brown-700">Back</span>
        </h2>
        <p class="mt-2 text-sm text-gray-500">Sign in to continue your learning journey</p>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin"
        class="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
        <!-- Error message -->
        <div v-if="error" class="flex items-center gap-3 p-4 bg-red-50 text-red-700 rounded-xl text-sm">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
          {{ error }}
        </div>

        <!-- Username/Email -->
        <div>
          <label for="uid" class="block text-sm font-medium text-gray-700 mb-1.5">Username or Email</label>
          <input v-model="form.uid" id="uid" type="text" required autocomplete="username"
            class="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brown-200 focus:border-brown-400 transition-colors"
            placeholder="Username or Email" />
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
          <div class="relative">
            <input v-model="form.password" id="password" :type="showPassword ? 'text' : 'password'" required
              autocomplete="current-password"
              class="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brown-200 focus:border-brown-400 transition-colors pr-10"
              placeholder="Enter your password" />
            <button type="button"
              class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
              @click="showPassword = !showPassword">
              <!-- Eye icon -->
              <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <!-- Eye-slash icon -->
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Remember me & Forgot password -->
        <div class="flex items-center justify-between">
          <label class="flex items-center gap-2 cursor-pointer">
            <input v-model="form.remember" type="checkbox"
              class="w-4 h-4 rounded border-gray-300 text-brown-700 focus:ring-brown-200" />
            <span class="text-sm text-gray-600">Remember me</span>
          </label>
          <router-link to="/forgot-password"
            class="text-sm font-medium text-brown-700 hover:text-brown-800 transition-colors">Forgot
            password?</router-link>
        </div>

        <!-- Submit -->
        <button type="submit" :disabled="loading"
          class="w-full flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold rounded-lg bg-brown-700 text-white hover:bg-brown-800 shadow-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed">
          <svg v-if="loading" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          {{ loading ? 'Signing in...' : 'Sign In' }}
        </button>


      </form>

      <!-- Sign up link -->
      <p class="text-center text-sm text-gray-500">
        Don't have an account?
        <router-link to="/signup" class="font-semibold text-brown-700 hover:text-brown-800 transition-colors">Create an
          account</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { domain } from '../data/helper.js'

const showPassword = ref(false)
const loading = ref(false)
const error = ref('')

const form = reactive({
  uid: '',
  password: '',
  remember: false,
})

async function handleLogin() {
  console.log('Attempting login for:', form.uid)
  error.value = ''
  loading.value = true

  try {
    const response = await fetch(`${domain}/api/method/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        usr: form.uid,
        pwd: form.password,
      }),
    })

    console.log('Login response status:', response.status)

    if (response.ok) {
      console.log('Login successful, redirecting to /lms')
      // Redirect to LMS dashboard on success
      window.location.href = '/lms'
    } else {
      const data = await response.json()
      console.log('Login failed data:', data)
      error.value = data.message || 'Invalid email or password'
    }
  } catch (err) {
    error.value = 'An error occurred. Please check your connection and try again.'
    console.error('Login error:', err)
  } finally {
    loading.value = false
  }
}
</script>
