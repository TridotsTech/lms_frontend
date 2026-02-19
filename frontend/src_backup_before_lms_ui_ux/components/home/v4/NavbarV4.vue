<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="{ 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3': scrolled, 'bg-transparent py-6': !scrolled }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <a href="/" class="flex items-center gap-3 group">
        <div class="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
        </div>
        <span class="text-xl font-bold tracking-tight" :class="scrolled ? 'text-gray-900' : 'text-white'">Aero<span class="text-orange-500">Flight</span></span>
      </a>

      <div class="hidden md:flex items-center gap-8">
        <a v-for="link in links" :key="link.name" :href="link.href" 
           class="text-sm font-medium transition-colors hover:text-orange-500 relative group"
           :class="scrolled ? 'text-gray-600' : 'text-white/90'">
           {{ link.name }}
           <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
        </a>
      </div>

      <div class="flex items-center gap-4">
        <a href="/login" class="hidden sm:block text-sm font-medium hover:text-orange-500 transition-colors" :class="scrolled ? 'text-gray-900' : 'text-white'">Log In</a>
        <a href="/admissions" class="px-5 py-2.5 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-0.5">
          Apply Now
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const links = [
  { name: 'Programs', href: '/courses' },
  { name: 'About', href: '/about' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Careers', href: '/careers' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
