<template>
  <section class="relative bg-white overflow-hidden pt-24 pb-24 lg:pt-32 lg:pb-32">
    <!-- Background Elements -->
    <div class="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
    <div class="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-slate-50 rounded-full blur-3xl opacity-60"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Content Side -->
        <div class="space-y-8 order-2 lg:order-1">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200">
            <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span class="text-xs font-semibold text-slate-600 tracking-wide uppercase">Next Gen Aviation Training</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Elevate Your <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Career Altitude.</span>
          </h1>
          
          <p class="text-lg text-slate-600 max-w-lg leading-relaxed">
            Master the skies with our industry-leading curriculum. from ground operations to the flight deck, we prepare you for the future of aviation.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="/courses" class="inline-flex justify-center items-center px-8 py-4 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
              Start Learning Now
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
            <a href="/about" class="inline-flex justify-center items-center px-8 py-4 bg-white text-slate-700 border border-slate-200 font-medium rounded-xl hover:bg-slate-50 transition-colors">
              View Syllabus
            </a>
          </div>

          <div class="flex items-center gap-4 pt-8 border-t border-slate-100">
            <div class="flex -space-x-3">
              <img class="w-10 h-10 rounded-full border-2 border-white object-cover" src="/images/avatar-1.png" alt="Student" />
              <img class="w-10 h-10 rounded-full border-2 border-white object-cover" src="/images/avatar-2.png" alt="Student" />
              <img class="w-10 h-10 rounded-full border-2 border-white object-cover" src="/images/avatar-3.png" alt="Student" />
              <div class="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">+2k</div>
            </div>
            <div class="text-sm">
              <span class="block font-bold text-slate-900">2,000+ Students</span>
              <span class="text-slate-500">Certified this year</span>
            </div>
          </div>
        </div>

        <!-- Visual Side -->
        <div class="relative order-1 lg:order-2">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] transform rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
            <img 
              src="/images/hero-flight.png" 
              alt="Pilot in training" 
              class="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />
            <!-- Overlay Info Card -->
            <div class="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h3 class="font-bold text-slate-900">Industry Certified</h3>
                  <p class="text-xs text-slate-500">Global Airline Standards</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Decorative shapes -->
          <div class="absolute -z-10 top-10 -right-10 w-24 h-24 bg-stripes-blue opacity-20"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.bg-stripes-blue {
  background-image: repeating-linear-gradient(45deg, #3b82f6 0, #3b82f6 1px, transparent 0, transparent 50%);
  background-size: 10px 10px;
}
</style>
