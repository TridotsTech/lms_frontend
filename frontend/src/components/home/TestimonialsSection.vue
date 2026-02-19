<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionBadge label="Testimonials" />
      <SectionHeading prefix="Trusted by Aspiring " highlight="Aviators" />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <TestimonialCard
          v-for="testimonial in testimonials"
          :key="testimonial.name + testimonial.title"
          :name="testimonial.name"
          :title="testimonial.title"
          :avatar="testimonial.avatar"
          :rating="testimonial.rating"
          :text="testimonial.text"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionBadge from '../ui/SectionBadge.vue'
import SectionHeading from '../ui/SectionHeading.vue'
import TestimonialCard from '../ui/TestimonialCard.vue'
import { testimonials } from '../../data/testimonials.js'
</script>
