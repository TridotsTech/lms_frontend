<template>
  <section class="py-24 bg-slate-900 overflow-hidden relative">
    <!-- Background glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div>
          <h2 class="text-3xl font-bold text-white mb-2">Voices from the Cabin</h2>
          <p class="text-slate-400">Hear from graduates now flying with top carriers.</p>
        </div>
        <a href="/testimonials" class="text-blue-400 hover:text-white transition-colors flex items-center font-medium">
          Read all stories <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Reuse existing data or hardcode for V2 demo -->
        <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800 transition-all duration-300 group">
          <div class="flex items-center gap-4 mb-4">
            <img src="/images/avatar-1.png" class="w-12 h-12 rounded-full object-cover border-2 border-slate-600 group-hover:border-blue-500 transition-colors" alt="Pilot" />
            <div>
               <h4 class="text-white font-semibold">Sarah Chen</h4>
               <p class="text-blue-400 text-sm">First Officer</p>
            </div>
          </div>
          <p class="text-slate-300 italic leading-relaxed">"The transition from simulator to cockpit was seamless thanks to the rigorous training standards here."</p>
        </div>

        <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800 transition-all duration-300 group">
          <div class="flex items-center gap-4 mb-4">
            <img src="/images/avatar-2.png" class="w-12 h-12 rounded-full object-cover border-2 border-slate-600 group-hover:border-blue-500 transition-colors" alt="Cabin Crew" />
            <div>
               <h4 class="text-white font-semibold">Michael Ross</h4>
               <p class="text-blue-400 text-sm">Senior Cabin Crew</p>
            </div>
          </div>
          <p class="text-slate-300 italic leading-relaxed">"I learned not just the 'how', but the 'why' behind every safety procedure. Truly world-class education."</p>
        </div>

        <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800 transition-all duration-300 group">
          <div class="flex items-center gap-4 mb-4">
            <img src="/images/avatar-3.png" class="w-12 h-12 rounded-full object-cover border-2 border-slate-600 group-hover:border-blue-500 transition-colors" alt="Instructor" />
            <div>
               <h4 class="text-white font-semibold">Cpt. Elena Rodriguez</h4>
               <p class="text-blue-400 text-sm">Chief Instructor</p>
            </div>
          </div>
          <p class="text-slate-300 italic leading-relaxed">"We don't just teach you to pass exams. We train you to handle the unpredictable nature of aviation."</p>
        </div>
      </div>
    </div>
  </section>
</template>
