<template>
  <section class="py-20 bg-brown-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionBadge label="Pathways" />
      <SectionHeading prefix="Explore Training " highlight="Pathways" />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <PathwayCard
          v-for="pathway in pathways"
          :key="pathway.title"
          :title="pathway.title"
          :category="pathway.category"
          :image="pathway.image"
          :description="pathway.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionBadge from '../ui/SectionBadge.vue'
import SectionHeading from '../ui/SectionHeading.vue'
import PathwayCard from '../ui/PathwayCard.vue'
import { pathways } from '../../data/pathways.js'
</script>
