<template>
  <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
    <h4 class="font-semibold text-gray-900 mb-3">{{ title }}</h4>
    <p class="text-sm text-gray-500 leading-relaxed mb-5">{{ text }}</p>
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-full bg-brown-100 overflow-hidden flex-shrink-0">
        <img :src="check_Image(avatar)" :alt="name" class="w-full h-full object-cover" @error="onImgError" />
      </div>
      <div>
        <p class="text-sm font-semibold text-gray-900">{{ name }}</p>
        <!-- <StarRating :rating="rating" /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { check_Image } from '../../data/helper';
import StarRating from './StarRating.vue'

defineProps({
  name: { type: String, required: true },
  title: { type: String, required: true },
  avatar: { type: String, required: true },
  rating: { type: Number, default: 5 },
  text: { type: String, required: true },
})

function onImgError(e) {
  e.target.src = 'https://placehold.co/100x100/F5E6D8/5B2C0E?text=' + e.target.alt?.charAt(0)
}
</script>
