<template>
  <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
    <slot name="default">
      {{ prefix }}
    </slot>
    <span class="font-display italic text-brown-700 pl-[10px]">{{ highlight }}</span>
  </h2>
</template>

<script setup>
defineProps({
  prefix: { type: String, default: '' },
  highlight: { type: String, default: '' },
})
</script>
