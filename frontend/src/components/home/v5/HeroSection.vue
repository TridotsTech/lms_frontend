<template>
  <div class="relative bg-white overflow-hidden">


    <!-- 2. Hero Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
      <!-- Left Content -->
      <div class="text-center lg:text-left lg:w-3/5 space-y-8">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full border border-red-100 w-fit mx-auto lg:mx-0">
             <span class="w-2 h-2 rounded-full bg-[#800000]"></span>
             <span class="text-sm font-semibold text-[#800000] tracking-wide uppercase">New Intake Open</span>
          </div>

          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#1E1B4B] leading-[1.1] tracking-tight">
            Professional <span class="text-[#800000] relative inline-block">
                Aviation
                <svg class="absolute w-full h-3 -bottom-1 left-0 text-yellow-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="8" fill="none" />
                </svg>
            </span>
            & Airline Training for a Global Industry
          </h1>
          
          <p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            Launch your career with world-class certification programs designed by industry experts. Join thousands of successful graduates flying high.
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
            <button class="px-8 py-4 rounded-full bg-[#800000] text-white font-bold text-lg hover:bg-red-900 transition-all shadow-xl shadow-red-900/30 flex items-center gap-2 group">
              Explore Courses
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
            <button class="px-8 py-4 rounded-full bg-white border border-gray-200 text-[#1E1B4B] font-bold text-lg hover:bg-gray-50 transition-all flex items-center gap-2">
                <span class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#1E1B4B]">
                    <svg class="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </span>
                Watch Video
            </button>
          </div>
          
          <div class="pt-8 flex items-center justify-center lg:justify-start gap-8 text-gray-400">
               <div class="flex -space-x-3">
                   <div v-for="i in 4" :key="i" class="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden flex items-center justify-center text-xs font-bold text-gray-500">U{{i}}</div>
               </div>
               <div class="flex flex-col">
                   <div class="flex text-yellow-500 text-sm">★★★★★</div>
                   <span class="text-sm font-medium text-gray-500">Trusted by 5000+ Students</span>
               </div>
          </div>
      </div>

      <!-- Right Visual (Pill Container) -->
      <div class="lg:w-2/5 relative">
          <!-- Wrapper for positioning -->
          <div class="relative w-full max-w-[400px] mx-auto z-10">
              <!-- Main Pill Image Container with overflow hidden -->
              <div class="w-full aspect-[3/4] rounded-full overflow-hidden border-[8px] border-white shadow-2xl relative z-0">
                  <img 
                    :src="'/assets/lms_frontend/frontend/images/pathway-cabin.jpg'" 
                    alt="Flight Attendant" 
                    class="w-full h-full object-cover"
                  />
              </div>
              
              <!-- Floating Badge 1: Placement -->
              <div class="absolute top-12 -left-12 bg-white/90 backdrop-blur rounded-xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow z-20">
                 <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                 </div>
                 <div>
                    <div class="text-xs text-gray-500 font-semibold uppercase">Placement</div>
                    <div class="text-lg font-bold text-[#1E1B4B]">98% Success</div>
                 </div>
              </div>

               <!-- Floating Badge 2: Courses -->
              <div class="absolute bottom-16 -right-12 bg-[#1E1B4B] text-white rounded-xl p-4 shadow-xl border border-[#800000] flex items-center gap-3 z-20">
                 <div class="w-10 h-10 rounded-full bg-[#800000] flex items-center justify-center text-white">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                 </div>
                 <div>
                    <div class="text-xs text-gray-300 font-semibold uppercase">Courses</div>
                    <div class="text-lg font-bold">Industry Ready</div>
                 </div>
              </div>
          </div>
          
          <!-- Decorative Background Elements -->
          <div class="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-red-100/50 to-blue-50/50 rounded-full blur-3xl"></div>
      </div>

    </div>
  </div>
</template>

<script setup>
// Hero Section Logic
</script>

<style scoped>
.animate-bounce-slow {
    animation: bounce 3s infinite;
}
@keyframes bounce {
    0%, 100% { transform: translateY(-5%); }
    50% { transform: translateY(5%); }
}
</style>
