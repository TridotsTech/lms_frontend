<template>
  <div class="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-brown-50">
    <div class="w-full max-w-md space-y-8">
      <div class="flex flex-col items-center">
        <h2 class="text-3xl font-bold text-gray-900">
          Reset your <span class="font-display italic text-brown-700">Password</span>
        </h2>
        <p class="mt-2 text-sm text-gray-500">Enter your email address and we'll send you a link to reset your password.</p>
      </div>

      <form @submit.prevent="handleForgotPassword" class="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
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

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
          <input
            v-model="email"
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
          {{ loading ? 'Sending...' : success ? 'Email Sent' : 'Send Reset Link' }}
        </button>
      </form>

      <!-- Back to login link -->
      <p class="text-center text-sm text-gray-500">
        Remember your password?
        <router-link to="/login" class="font-semibold text-brown-700 hover:text-brown-800 transition-colors">Back to Sign In</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const loading = ref(false)
const error = ref('')
const success = ref(false)
const successMessage = ref('')

async function handleForgotPassword() {
  error.value = ''
  success.value = false
  loading.value = true

  try {
    const params = new URLSearchParams()
    params.append('user', email.value)

    const response = await fetch('/api/method/frappe.core.doctype.user.user.reset_password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'X-Frappe-CSRF-Token': window.csrf_token || 'None'
      },
      body: params.toString(),
    })

    const data = await response.json()

    if (response.ok) {
      success.value = true
      successMessage.value = data.message || 'Password reset link has been sent to your email address. Please check your inbox.'
    } else {
      error.value = data.message || data._server_messages
        ? JSON.parse(data._server_messages || '[]').map(m => JSON.parse(m).message).join('. ') || data.message || 'Unable to send reset link. Please check your email and try again.'
        : 'Unable to send reset link. Please check your email and try again.'
    }
  } catch (err) {
    error.value = 'An error occurred. Please check your connection and try again.'
    console.error('Forgot password error:', err)
  } finally {
    loading.value = false
  }
}
</script>
