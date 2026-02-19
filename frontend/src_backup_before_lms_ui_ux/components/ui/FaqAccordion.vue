<template>
  <div class="border-b border-gray-200">
    <button
      class="w-full flex items-center justify-between py-5 text-left transition-colors"
      @click="isOpen = !isOpen"
    >
      <span class="text-base font-medium text-gray-900 pr-4">{{ question }}</span>
      <svg
        class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </button>
    <div
      class="overflow-hidden transition-all duration-300"
      :class="isOpen ? 'max-h-96 pb-5' : 'max-h-0'"
    >
      <p class="text-sm text-gray-500 leading-relaxed">{{ answer }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  question: { type: String, required: true },
  answer: { type: String, required: true },
})

const isOpen = ref(false)
</script>
