<template>
  <div  v-for="value in pageContent" :key="value.name || value.section_name">
    <!-- Hero -->
    <section v-if="value.section_name == 'Welcome to Course Flick'" class="bg-brown-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2">
        <SectionBadge label="About Us" class="mb-6" />
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          {{value.title }} <span class="font-display italic text-brown-700">{{value.span_title}}</span>
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {{value.description}}
        </p>
      </div>
    </section>

    <!-- Our Story -->
    <section v-if="value.section_name == 'Our Story'" class="py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div class="flex-1">
            <div class="rounded-2xl overflow-hidden bg-brown-100 aspect-[4/3]">
              <img :src='check_Image(value.left_image)' alt="Course Flick team" class="w-full h-full object-cover" @error="onImgError" />
            </div>
          </div>
          <div class="flex-1 space-y-5">
            <h2  class="text-3xl font-bold text-gray-900">{{value.title}}<span class="font-display italic text-brown-700 pl-[10px]">{{value.span_title}}</span></h2>
            <p class="text-gray-500 leading-relaxed">
              {{value.description_1 }}
            </p>
            <p class="text-gray-500 leading-relaxed">
              {{value.description_2 }}
            </p>
            <p class="text-gray-500 leading-relaxed">
              {{value.description_3 }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section v-if="value.section_name == 'Mission & Vision'" class="py-16 lg:py-20 bg-brown-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div  class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div v-for="list in value.list" class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div class="w-12 h-12 rounded-xl bg-brown-100 flex items-center justify-center mb-5">
              <img :src="check_Image(list.icon)" :alt="list.title"/>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{list.title}}</h3>
            <p class="text-gray-500 leading-relaxed">
              {{list.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- What Sets Us Apart -->
    <section v-if="value.section_name == 'What Sets Us Apart'" class="py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{value?.title }} <span class="font-display italic text-brown-700">{{value?.span_title}}</span>{{value?.title_2}}</h2>
          <p class="text-gray-500 max-w-2xl mx-auto">{{value?.sub_title}}</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="item in value.list" :key="item.title" class="text-center">
            <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-brown-50 flex items-center justify-center">
              <!-- <svg class="w-7 h-7 text-brown-700" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
              </svg> -->
              <img :src="check_Image(item?.icon)" :alt="item?.title "/>
            </div>
            <h3 class="text-base font-semibold text-gray-900 mb-2">{{ item?.title }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed">{{ item?.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section v-if="value.section_name == 'Stats'" class="py-16 lg:py-20 bg-brown-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">{{value?.title }} <span class="font-display italic text-gold-500">{{value?.span_title}}</span></h2>
          <p class="text-white/60 max-w-xl mx-auto">{{value?.description}}</p>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="stat in value?.list" :key="stat.number" class="text-center">
            <p class="text-4xl lg:text-5xl font-bold text-gold-500 mb-2">{{ stat.number }}</p>
            <p class="text-sm text-white/60">{{ stat.	sub_title }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values   -->
    <section  v-if="value.section_name == 'Our Core Values'" class="py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{value.title}}<span class="font-display italic text-brown-700">{{value.span_title}}</span></h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="item in value.list" :key="item.title" class="border border-gray-100 rounded-2xl p-6">
            <div class="w-10 h-10 rounded-lg bg-brown-50 flex items-center justify-center mb-4 text-brown-700 font-bold text-lg">
              {{ item.number }}
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ item.title }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Who It's For v-if="value.section_name == 'Who It For'" -->
    <section v-if="value.section_name == 'Who It For'"  class="py-16 lg:py-20 bg-brown-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{value?.title }} <span class="font-display italic text-brown-700">{{value?.span_title}}</span> {{value?.title_2}}</h2>
          <p class="text-gray-500 max-w-2xl mx-auto">{{value?.description}}</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="audience in value.list" :key="audience?.title" class="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100">
            <div class="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
            </div>
            <p class="text-sm text-gray-700">{{ audience?.title }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section v-if="value.section_name == 'CTA'" class="py-16 lg:py-20 bg-brown-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">{{value.title}}</h2>
        <p class="text-white/60 mb-8 max-w-xl mx-auto">{{value.sub_title}}</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <BaseButton variant="solid-white" :to="JSON.parse(value.btn)?.btn_redirect_url" size="lg">{{JSON.parse(value.btn)?.btn_text}}</BaseButton>
          <BaseButton variant="outline" to="/contact" size="lg" class="!border-white/30 !text-white hover:!bg-white/10">Contact Us</BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import SectionBadge from '../components/ui/SectionBadge.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import { check_Image, domain } from '../data/helper'
import { onMounted, ref } from 'vue'

let pageContent = ref([])

const differentiators = [
  {
    title: 'Industry-Designed Curriculum',
    description: 'Every course is built with input from working aviation professionals and aligned to international standards.',
    icon: 'M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5',
  },
  {
    title: 'Flexible & Self-Paced',
    description: 'Study anytime, anywhere, on any device. Our platform gives you 24/7 access to all enrolled course material.',
    icon: 'M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',
  },
  {
    title: 'Verifiable Certifications',
    description: 'Earn recognized certificates on completion that you can share with employers and on professional networks.',
    icon: 'M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z',
  },
  {
    title: 'Career-Focused Outcomes',
    description: 'Courses map directly to real job roles in aviation security, cabin crew, flight dispatch, and ground operations.',
    icon: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0',
  },
]

const stats = [
  { value: '12+', label: 'Professional Courses' },
  { value: '5', label: 'Training Pathways' },
  { value: '12,000+', label: 'Enrolled Learners' },
  { value: '25+', label: 'Countries Reached' },
]

const values = [
  { number: '01', title: 'Accessibility', description: 'We believe quality aviation training should be available to everyone regardless of location, background, or financial means. Our platform is designed to lower barriers to entry.' },
  { number: '02', title: 'Industry Relevance', description: 'Every piece of content on our platform is grounded in real-world aviation practice. We work closely with industry professionals to ensure our curriculum reflects what employers actually need.' },
  { number: '03', title: 'Learner Success', description: 'Our ultimate measure of success is whether our learners achieve their career goals. We design every course, feature, and interaction with that outcome in mind.' },
  { number: '04', title: 'Integrity', description: 'We maintain honest and transparent practices in everything we do — from course descriptions and certification claims to how we handle learner data and feedback.' },
  { number: '05', title: 'Continuous Improvement', description: 'Aviation is a constantly evolving industry. We continuously update our content, incorporate learner feedback, and adopt new educational approaches to stay current.' },
  { number: '06', title: 'Global Perspective', description: 'Aviation is inherently international. Our training reflects global standards and prepares learners to work in diverse aviation environments around the world.' },
]

const audiences = [
  'Aspiring cabin crew and flight attendants preparing for airline interviews and training',
  'Aviation security professionals seeking AVSEC certification and career advancement',
  'Ground handling and airport operations staff looking to formalize their skills',
  'Flight dispatch candidates building core competencies for operational roles',
  'Airline operations professionals advancing into management and planning positions',
  'Career changers exploring structured pathways into the aviation industry',
  'Aviation training organizations seeking supplementary online course content',
  'HR and recruitment teams evaluating candidate readiness for aviation roles',
  'Students and graduates interested in aviation as a career field',
]

function onImgError(e) {
  e.target.src = 'https://placehold.co/600x450/F5E6D8/5B2C0E?text=Course+Flick'
}


async function fetchPageContent() {
  try {
    let payload = {
      "route": "p/about-us"
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
