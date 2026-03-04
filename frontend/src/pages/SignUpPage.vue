<template>
  <div class="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-brown-50">
    <div class="w-full max-w-md space-y-8">
      <div class="flex flex-col items-center">
        <h2 class="text-3xl font-bold text-gray-900">
          Create an <span class="font-display italic text-brown-700">Account</span>
        </h2>
        <p class="mt-2 text-sm text-gray-500">Join us to start your learning journey</p>
      </div>

      <!-- Sign Up Form -->
      <form @submit.prevent="handleSignUp" class="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
        <!-- Success message -->
        <div v-if="success" class="flex items-center gap-3 p-4 bg-emerald-50 text-emerald-700 rounded-xl text-sm">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
          {{ successMessage }}
        </div>

        <!-- Error message -->
        <div v-if="error" class="flex items-center gap-3 p-4 bg-red-50 text-red-700 rounded-xl text-sm">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
          {{ error }}
        </div>

        <!-- Full Name -->
        <div>
          <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
          <input
            v-model="form.fullName"
            id="fullName"
            type="text"
            required
            :disabled="success"
            autocomplete="name"
            class="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brown-200 focus:border-brown-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            placeholder="Enter your full name"
          />
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
          <input
            v-model="form.email"
            id="email"
            type="email"
            required
            :disabled="success"
            autocomplete="email"
            class="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brown-200 focus:border-brown-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            placeholder="Enter your email address"
          />
        </div>

        <!-- Submit -->
        <button
          type="submit"
          :disabled="loading || success"
          class="w-full flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold rounded-lg bg-brown-700 text-white hover:bg-brown-800 shadow-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <svg v-if="loading" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          {{ loading ? 'Creating Account...' : success ? 'Account Created' : 'Sign Up' }}
        </button>
      </form>

      <!-- Sign in link -->
      <p class="text-center text-sm text-gray-500">
        Already have an account?
        <router-link to="/login" class="font-semibold text-brown-700 hover:text-brown-800 transition-colors">Sign In</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const loading = ref(false)
const error = ref('')
const success = ref(false)
const successMessage = ref('')

const form = reactive({
  fullName: '',
  email: '',
})

async function handleSignUp() {
  error.value = ''
  success.value = false
  loading.value = true

  try {
    const params = new URLSearchParams()
    params.append('email', form.email)
    params.append('full_name', form.fullName)
    params.append('verify_terms', 1)
    params.append('user_category', 'Student')
    params.append('redirect_to', '/login')

    const response = await fetch('/api/method/frappe.core.doctype.user.user.sign_up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'X-Frappe-CSRF-Token': window.csrf_token || 'None'
      },
      body: params.toString(),
    })

    const data = await response.json()

    if (response.ok && data.message) {
      // Frappe sign_up returns [status, message]
      // status 1 = success, status 0 = already registered, status 2 = disabled signup
      const result = data.message
      if (Array.isArray(result)) {
        if (result[0] === 1) {
          success.value = true
          successMessage.value = result[1] || 'Registration successful! Please check your email to verify your account and set your password.'
        } else if (result[0] === 0) {
          error.value = result[1] || 'This email is already registered. Please try signing in instead.'
        } else if (result[0] === 2) {
          error.value = result[1] || 'Sign up is currently disabled. Please contact support.'
        } else {
          error.value = result[1] || 'Something went wrong. Please try again.'
        }
      } else if (typeof result === 'string') {
        success.value = true
        successMessage.value = result
      } else {
        success.value = true
        successMessage.value = 'Registration successful! Please check your email to verify your account and set your password.'
      }
    } else {
      // Try to extract error from Frappe's response format
      let errorMsg = 'Unable to create account. Please try again.'
      if (data._server_messages) {
        try {
          const msgs = JSON.parse(data._server_messages)
          errorMsg = msgs.map(m => {
            try { return JSON.parse(m).message } catch { return m }
          }).join('. ')
        } catch {
          errorMsg = data._server_messages
        }
      } else if (data.message) {
        errorMsg = typeof data.message === 'string' ? data.message : 'Unable to create account. Please try again.'
      } else if (data.exc_type) {
        errorMsg = data.exc_type === 'ValidationError' ? 'Please check your details and try again.' : 'Unable to create account. Please try again.'
      }
      error.value = errorMsg
    }
  } catch (err) {
    error.value = 'An error occurred. Please check your connection and try again.'
    console.error('Sign up error:', err)
  } finally {
    loading.value = false
  }
}
</script>
