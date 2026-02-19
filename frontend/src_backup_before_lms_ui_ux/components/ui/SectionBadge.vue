<template>
  <div class="flex items-center justify-center gap-2 mb-4">
    <span class="text-brown-700">&#10022;</span>
    <span class="inline-block px-4 py-1.5 text-sm font-medium text-brown-700 border border-brown-200 rounded-full bg-white">
      {{ label }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
})
</script>
