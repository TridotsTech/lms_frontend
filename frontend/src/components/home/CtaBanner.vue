<template>
  <section class="bg-brown-900 py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
        Start Your Aviation Learning Journey Today
      </h2>
      <p class="text-white/70 mb-8 max-w-2xl mx-auto">
        Start learning today. No prior aviation experience required for beginner courses.
      </p>
      <BaseButton variant="solid-white" to="/courses" size="lg">Explore Courses</BaseButton>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue'
</script>
