<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionBadge label="Testimonials" />
      <SectionHeading :prefix="data.title" :highlight="data.span_title" />

      <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"> -->
      <Carousel v-bind="carouselConfig" class="mt-12">
        <Slide v-for="testimonial in data.data" :key="testimonial.name + testimonial.title" class="carousel__item">
          <TestimonialCard :name="testimonial.name1" :title="testimonial.title" :avatar="testimonial.image"
            :rating="testimonial.rating" :text="testimonial.content" />
        </Slide>

        <template #addons>
          <Navigation />

        </template>
      </Carousel>
      <!-- </div> -->
    </div>
  </section>
</template>

<script setup>
import SectionBadge from '../ui/SectionBadge.vue'
import SectionHeading from '../ui/SectionHeading.vue'
import TestimonialCard from '../ui/TestimonialCard.vue'
import { testimonials } from '../../data/testimonials.js'
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const carouselConfig = {
  itemsToShow: 3,
  gap: 20,
  breakpoints: {
    1024: {
      itemsToShow: 3,
      gap: 15
    },
    640: {
      itemsToShow: 2,
      gap: 10
    },
    300: {
      itemsToShow: 1,
      gap: 10

    }
  }
}


const props = defineProps({
  data: {
    type: Object,
  }
})
</script>


<style scoped>
:deep(.carousel__viewport) {
  padding: 10px;
}
</style>
