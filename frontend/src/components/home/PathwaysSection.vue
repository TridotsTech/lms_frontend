<template>
  <section class="py-20 bg-brown-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionBadge label="Pathways" />
      <SectionHeading :prefix="data.title" :highlight="data.span_title" />

      <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"> -->
      <Carousel v-bind="carouselConfig" class="mt-12">
        <Slide v-for="pathway in data.data" :key="pathway.title" class="carousel__item">
          <PathwayCard :title="pathway.title" :category="pathway.category" :image="pathway.image"
            :description="pathway.short_introduction" />
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
import SectionBadge from "../ui/SectionBadge.vue";
import SectionHeading from "../ui/SectionHeading.vue";
import PathwayCard from "../ui/PathwayCard.vue";
import { pathways } from "../../data/pathways.js";
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

defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style scoped>
:deep(.carousel__viewport) {
  padding: 10px;
}
</style>
