<template>
  <div class="bg-gray-50 min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
    <HeroSectionV2 />
    <BentoGridSection />
    <MinimalStatsSection />
    <ModernTestimonials />
    <BigCtaSection />
  </div>
</template>

<script setup>
import HeroSectionV2 from '../components/home/v2/HeroSectionV2.vue'
import BentoGridSection from '../components/home/v2/BentoGridSection.vue'
import MinimalStatsSection from '../components/home/v2/MinimalStatsSection.vue'
import ModernTestimonials from '../components/home/v2/ModernTestimonials.vue'
import BigCtaSection from '../components/home/v2/BigCtaSection.vue'
</script>
