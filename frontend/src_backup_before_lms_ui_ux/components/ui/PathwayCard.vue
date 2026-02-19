<template>
  <div class="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
    <div class="aspect-[4/3] bg-brown-100 overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        @error="onImgError"
      />
    </div>
    <div class="absolute top-4 left-4">
      <span class="inline-block px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm rounded-full text-brown-700">
        {{ category }}
      </span>
    </div>
    <div class="p-5">
      <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ title }}</h3>
      <p class="text-sm text-gray-500 leading-relaxed">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
})

function onImgError(e) {
  e.target.src = 'https://placehold.co/600x400/F5E6D8/5B2C0E?text=Aviation+Training'
}
</script>
