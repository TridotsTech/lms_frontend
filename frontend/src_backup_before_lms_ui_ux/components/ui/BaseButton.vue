<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    :class="[
      'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
      sizeClasses,
      variantClasses,
    ]"
  >
    <svg v-if="loading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'solid' },
  size: { type: String, default: 'md' },
  to: { type: [String, Object], default: null },
  loading: { type: Boolean, default: false },
})

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }
  return sizes[props.size]
})

const variantClasses = computed(() => {
  const variants = {
    solid: 'bg-brown-700 text-white hover:bg-brown-800 shadow-sm',
    outline: 'border-2 border-brown-700 text-brown-700 hover:bg-brown-50',
    'solid-white': 'bg-white text-brown-700 hover:bg-gray-100 shadow-sm',
  }
  return variants[props.variant]
})
</script>
