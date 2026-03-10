<template>
  <div>
    <HeroSection />
    <div v-for="value in pageContent" :key="value.name || value.section_name">
      <FeaturesSection v-if="value.section_name == 'Built for Real Aviation Careers'" :data="value" />
      <PathwaysSection v-if="value.section_name == 'Explore Training Pathways'" :data="value" />
      <ProgramsSection v-if="value.section_name == 'Aviation Programs We Offer'" :data="value" />
      <CertificationSection v-if="value.section_name == 'Learning That Delivers Outcomes'" :data="value" />
      <TestimonialsSection v-if="value.section_name == 'Trusted by Aspiring Aviators'" :data="value" />
      <FaqSection v-if="value.section_name == 'FAQ Style 3'" :data="value" />
      <CtaBanner v-if="value.section_name == 'CTA'" :data="value" />
    </div>
  </div>
</template>

<script setup>
import HeroSection from '../components/home/HeroSection.vue'
import FeaturesSection from '../components/home/FeaturesSection.vue'
import PathwaysSection from '../components/home/PathwaysSection.vue'
import ProgramsSection from '../components/home/ProgramsSection.vue'
import CertificationSection from '../components/home/CertificationSection.vue'
import TestimonialsSection from '../components/home/TestimonialsSection.vue'
import FaqSection from '../components/home/FaqSection.vue'
import CtaBanner from '../components/home/CtaBanner.vue'
import { onMounted, ref } from 'vue'
import { domain } from '../data/helper'


const pageContent = ref([])
// console.log(pageContent,"pppppp")



async function fetchPageContent() {
  try {
    let payload = {
      "route": "p/home"
    }
    let resp = await fetch(`${domain}/api/method/go1_cms.go1_cms.api.get_page_content`, { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
    let res = await resp.json()
    if (res && res.message && res.message.page_content) {
      pageContent.value = res.message.page_content
    } else {
      pageContent.value = []
    }
  } catch (err) {
    console.error(err.message)
  }
}

onMounted(() => {
  fetchPageContent()
})
</script>
