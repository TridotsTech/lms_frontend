<template>
  <section class="relative bg-black overflow-hidden h-[600px] lg:h-[700px]">
    <!-- Slider Backgrounds -->
    <div class="absolute inset-0 z-0 h-full w-full">
      <div
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-[1500ms] ease-out"
        :style="{ backgroundImage: `url(${slide.image})` }"
        :class="{ 
          'opacity-100 scale-105 z-10': currentSlide === index, 
          'opacity-0 scale-100 z-0': currentSlide !== index 
        }"
      >
        <!-- Dark Overlay gradient -->
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10 h-full flex items-center">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="max-w-3xl">
          <transition name="slide-up" mode="out-in">
            <div :key="slides[currentSlide].id" class="space-y-6">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brown-500/20 border border-brown-500/30 backdrop-blur-sm">
                <span class="w-2 h-2 rounded-full bg-brown-400 animate-pulse"></span>
                <span class="text-xs font-medium text-brown-100 tracking-wide uppercase">{{ slides[currentSlide].tag }}</span>
              </div>
              
              <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                {{ slides[currentSlide].title }}
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-brown-200 to-white italic font-display mt-2">
                  {{ slides[currentSlide].subtitle }}
                </span>
              </h1>
              
              <p class="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
                {{ slides[currentSlide].description }}
              </p>
              
              <div class="flex flex-wrap gap-4 pt-4">
                <BaseButton to="/courses" variant="solid-white" size="lg">
                  Explore Programs
                </BaseButton>
                <BaseButton to="/contact" variant="outline-white" size="lg">
                  Enquire Now
                </BaseButton>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- Slider Navigation & Indicators -->
    <div class="absolute bottom-8 left-0 right-0 z-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <!-- Dots -->
        <div class="flex items-center gap-3">
          <button
            v-for="(slide, index) in slides"
            :key="index"
            @click="setSlide(index)"
            class="h-1.5 rounded-full transition-all duration-300"
            :class="currentSlide === index ? 'w-12 bg-brown-400' : 'w-2 bg-white/40 hover:bg-white/60'"
            :aria-label="`Go to slide ${index + 1}`"
          ></button>
        </div>

        <!-- Arrows -->
        <div class="hidden sm:flex items-center gap-4">
          <button 
            @click="prevSlide"
            class="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-colors backdrop-blur-sm group"
            aria-label="Previous slide"
          >
            <svg class="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            @click="nextSlide"
            class="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-colors backdrop-blur-sm group"
            aria-label="Next slide"
          >
            <svg class="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BaseButton from '../ui/BaseButton.vue'

const currentSlide = ref(0)
const autoplayInterval = ref(null)

// Default fallback slides
const defaultSlides = [
  {
    id: 1,
    tag: 'Global Standard',
    title: 'Professional Aviation',
    subtitle: 'Training & Excellence',
    description: 'Join the next generation of aviation professionals with our world-class training programs designed for global airline standards.',
    image: '/images/hero-flight.png'
  },
  {
    id: 2,
    tag: 'Cabin Crew',
    title: 'World-Class',
    subtitle: 'Service & Safety',
    description: 'Master the art of in-flight service and safety protocols with our comprehensive cabin crew training curriculum.',
    image: '/images/program-cabin.png'
  },
  {
    id: 3,
    tag: 'Operations',
    title: 'Airline Operations',
    subtitle: 'Command Center',
    description: 'Learn the critical systems and procedures that keep airlines running efficiently and safely around the clock.',
    image: '/images/program-operations.png'
  }
]

const slides = ref(defaultSlides)

async function fetchSlides() {
  try {
    const res = await fetch('/api/method/lms.api.public.get_website_slideshow_items')
    const json = await res.json()
    const data = json.message

    if (data && data.length > 0) {
      slides.value = data.map((item, index) => {
        const heading = item.heading || `Slide ${index + 1}`
        return {
          id: item.name,
          tag: index === 0 ? 'Featured' : 'Highlight',
          title: heading,
          subtitle: '',
          description: item.description || '',
          image: item.image
        }
      })
    }
  } catch (e) {
    console.warn('Could not load slideshow from database, using defaults.', e)
  }
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
  resetAutoplay()
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
  resetAutoplay()
}

const setSlide = (index) => {
  currentSlide.value = index
  resetAutoplay()
}

const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length
  }, 5000)
}

const resetAutoplay = () => {
  clearInterval(autoplayInterval.value)
  startAutoplay()
}

onMounted(() => {
  fetchSlides()
  startAutoplay()
})

onUnmounted(() => {
  clearInterval(autoplayInterval.value)
})
</script>

<style scoped>
/* Slide Up Transition for Content */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
