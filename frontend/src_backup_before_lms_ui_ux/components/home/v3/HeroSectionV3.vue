<template>
  <section class="relative bg-gray-50 pt-8 pb-20 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Top Content Row -->
      <div class="flex flex-col lg:flex-row items-end justify-between gap-8 mb-12">
        <div class="max-w-2xl">
          <div class="flex items-center gap-2 mb-4">
            <span class="w-12 h-1 bg-college-red"></span>
            <span class="text-college-red font-bold uppercase tracking-widest text-sm">Admissions Open 2026</span>
          </div>
          <h1 class="text-5xl lg:text-7xl font-bold text-gray-900 leading-[0.95] tracking-tight">
            Build a Future <br />
            that Flies High with <span class="text-college-red font-display italic">REMO</span>
          </h1>
        </div>
        <div class="max-w-md pb-2">
          <p class="text-gray-600 text-lg leading-relaxed">
            We shape the next generation of aviation professionals with world-class training, global accreditations, and career opportunities across international airlines.
          </p>
          <div class="mt-6 flex gap-4">
             <button class="bg-gradient-to-r from-college-gold to-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all text-sm uppercase tracking-wide">
               Apply Now
             </button>
             <button class="border border-gray-300 bg-white text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-gray-50 transition-all text-sm uppercase tracking-wide">
               Download Brochure
             </button>
          </div>
        </div>
      </div>

      <!-- Main Slider Container -->
      <div class="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] lg:h-[600px] group">
        <!-- Slider Images -->
        <div class="absolute inset-0 transition-transform duration-700 ease-out" 
             :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
           <div class="flex h-full w-full">
             <div v-for="(slide, index) in slides" :key="index" class="min-w-full h-full relative">
                <img :src="slide.image" class="w-full h-full object-cover object-top" :alt="slide.title" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             </div>
           </div>
        </div>

        <!-- Navigation Arrows -->
        <button @click="prevSlide" class="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 hover:bg-white hover:text-college-red transition-all">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button @click="nextSlide" class="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 hover:bg-white hover:text-college-red transition-all">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
        </button>

        <!-- Floating Yellow Card -->
        <div class="absolute bottom-8 right-8 bg-college-gold rounded-full px-8 py-4 flex items-center gap-4 shadow-xl hover:scale-105 transition-transform cursor-pointer">
           <div class="w-10 h-10 bg-black rounded-full flex items-center justify-center text-college-gold">
             <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
           </div>
           <div>
             <span class="block text-xs font-bold uppercase tracking-wider text-black/60">Limited Seats</span>
             <span class="block text-lg font-bold text-black">Admissions Open 2026!</span>
           </div>
        </div>

        <!-- Slide Counter -->
        <div class="absolute bottom-8 left-8 bg-white rounded-full px-6 py-2 flex items-center gap-4">
           <span class="font-bold text-lg text-black">0{{ currentSlide + 1 }}</span>
           <div class="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
             <div class="h-full bg-college-red transition-all duration-300" :style="{ width: `${((currentSlide + 1) / slides.length) * 100}%` }"></div>
           </div>
           <span class="font-bold text-lg text-gray-400">0{{ slides.length }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const slides = [
  { image: '/images/hero-flight.png', title: 'Flight Training' },
  { image: '/images/program-cabin.png', title: 'Cabin Crew' },
  { image: '/images/program-security.png', title: 'Security' },
]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

// Auto-advance
let interval
onMounted(() => {
  interval = setInterval(nextSlide, 5000)
})
onUnmounted(() => clearInterval(interval))
</script>
