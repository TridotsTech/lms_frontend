<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionBadge label="Global Standard" />
      <SectionHeading prefix="Aviation Programs " highlight="We Offer" />

      <div class="mt-12 divide-y divide-gray-100">
        <ProgramCard
          v-for="(program, index) in programs"
          :key="program.title"
          :title="program.title"
          :description="program.description"
          :image="program.image"
          :icon="program.icon"
          :reverse="index % 2 !== 0"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionBadge from '../ui/SectionBadge.vue'
import SectionHeading from '../ui/SectionHeading.vue'
import ProgramCard from '../ui/ProgramCard.vue'
import { programs } from '../../data/programs.js'
</script>
