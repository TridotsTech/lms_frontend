<template>
  <section class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 max-w-2xl mx-auto">
        <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">Everything You Need to Take Off</h2>
        <p class="mt-4 text-lg text-slate-600">Explore our comprehensive range of aviation training modules designed for every path.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] grid-flow-row-dense">
        <!-- Large Feature Card (Span 2 Cols, 1 Row) -->
        <div class="md:col-span-2 relative group overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div class="absolute inset-0 z-0">
            <img src="/images/program-cabin.png" class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" alt="Cabin Crew" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
          </div>
          <div class="absolute bottom-0 left-0 p-8 z-10 w-full">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium mb-3">
              Most Popular
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">Cabin Crew Training</h3>
            <p class="text-slate-200 line-clamp-2">Complete safety and service protocols for international airlines.</p>
            <a href="/courses/cabin-crew" class="inline-flex items-center mt-4 text-white font-medium hover:underline">
              View Program <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>

        <!-- Tall Feature Card (Span 1 Col, 2 Rows - effectively) -->
         <!-- Actually let's just do Span 1 for now, or maybe make it 2 rows high -->
        <div class="row-span-2 relative group overflow-hidden rounded-3xl bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-800 p-8 flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Certified Excellence</h3>
            <p class="text-slate-400 mb-6">Our certifications are recognized globally by major airlines and aviation authorities.</p>
            <ul class="space-y-3 text-slate-300">
              <li class="flex items-center gap-2"><svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> IATA Standards</li>
              <li class="flex items-center gap-2"><svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> FAA Compliant</li>
              <li class="flex items-center gap-2"><svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> EASA Aligned</li>
            </ul>
          </div>
          <div class="mt-8">
             <a href="/certification" class="w-full block text-center py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white font-medium transition-colors">See Certifications</a>
          </div>
        </div>

        <!-- Standard Card 1 -->
        <div class="col-span-1 relative group overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-8">
           <div class="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center mb-4 text-indigo-600">
             <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
           </div>
           <h3 class="text-xl font-bold text-slate-900 mb-2">Flight Dispatch</h3>
           <p class="text-slate-500 text-sm">Master flight planning and operational control.</p>
           <div class="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center">
             <span class="text-xs font-medium text-slate-400">8 Weeks</span>
             <a href="/courses/flight-dispatch" class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 hover:bg-indigo-600 hover:text-white transition-colors">
               <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
             </a>
           </div>
        </div>

        <!-- Standard Card 2 -->
        <div class="col-span-1 relative group overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-8">
           <div class="w-10 h-10 bg-sky-50 rounded-full flex items-center justify-center mb-4 text-sky-600">
             <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>
           </div>
           <h3 class="text-xl font-bold text-slate-900 mb-2">Ground Ops</h3>
           <p class="text-slate-500 text-sm">Airport management and turnaround coordination.</p>
           <div class="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center">
             <span class="text-xs font-medium text-slate-400">6 Weeks</span>
             <a href="/courses/ground-ops" class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 hover:bg-sky-600 hover:text-white transition-colors">
               <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
             </a>
           </div>
        </div>

        <!-- Wide Card (Span 2 Cols) -->
        <div class="md:col-span-2 relative group overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg shadow-blue-900/20 p-8 flex items-center justify-between">
           <div class="relative z-10 max-w-md">
             <h3 class="text-2xl font-bold text-white mb-2">Secure Your Future with AVSEC</h3>
             <p class="text-blue-100 mb-6">Advanced aviation security training for modern threats.</p>
             <button class="px-6 py-2 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Start Module</button>
           </div>
           <div class="absolute right-0 bottom-0 top-0 w-1/2 opacity-20">
              <svg class="w-full h-full text-white" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
              </svg>
           </div>
           <img src="/images/program-security.png" class="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20 mix-blend-overlay" alt="" />
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>
