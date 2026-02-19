<template>
  <section class="h-[800px] relative overflow-hidden bg-slate-900">
    <!-- Video Background (Simulated with Image for now) -->
    <div class="absolute inset-0 z-0">
      <img src="/images/hero-flight.png" class="w-full h-full object-cover opacity-60 scale-105 animate-pan-slow" />
      <div class="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 h-full flex items-center">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="space-y-8 animate-fade-in-up">
           <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm text-orange-400 text-xs font-bold uppercase tracking-widest">
             <span class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
             New Intake: Fall 2026
           </div>
           
           <h1 class="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
             Precision <br />
             <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">Personified.</span>
           </h1>
           
           <p class="text-xl text-slate-300 max-w-lg leading-relaxed font-light">
             For those who refuse to stay on the ground. Professional flight training for the next generation of airline pilots.
           </p>
           
           <div class="flex flex-col sm:flex-row gap-4 pt-4">
             <a href="/courses" class="group relative px-8 py-4 bg-orange-500 text-white font-bold rounded-lg overflow-hidden transition-all hover:bg-orange-600 hover:shadow-orange-500/25 hover:shadow-2xl">
               <span class="relative z-10 flex items-center gap-2">Start Your Journey <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
             </a>
             <button class="px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 backdrop-blur-sm transition-colors flex items-center gap-3">
               <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                 <svg class="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path></svg>
               </div>
               Watch Showreel
             </button>
           </div>
           
           <div class="pt-8 border-t border-white/10 flex gap-8">
             <div>
               <p class="text-3xl font-bold text-white">4.9/5</p>
               <p class="text-xs text-slate-400 uppercase tracking-wider mt-1">Student Rating</p>
             </div>
             <div>
               <p class="text-3xl font-bold text-white">100%</p>
               <p class="text-xs text-slate-400 uppercase tracking-wider mt-1">Placement Support</p>
             </div>
           </div>
        </div>

        <!-- Floating UI Element -->
        <div class="hidden lg:block relative animate-float">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px]"></div>
          <img src="/images/program-cabin.png" class="relative z-10 rounded-2xl shadow-2xl border border-white/10 opacity-90 transform rotate-3 hover:rotate-0 transition-transform duration-500" />
           
          <!-- Glass Card -->
          <div class="absolute -bottom-12 -left-12 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-xl z-20 max-w-xs">
            <div class="flex items-center gap-4 mb-3">
              <div class="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <p class="text-white font-bold">FAA Certified</p>
                <p class="text-xs text-slate-300">Global Standards</p>
              </div>
            </div>
            <p class="text-sm text-slate-200 leading-relaxed">
              "The most comprehensive training I've ever experienced. Truly world-class."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes pan-slow {
  0% { transform: scale(1.05) translate(0, 0); }
  50% { transform: scale(1.1) translate(-1%, -1%); }
  100% { transform: scale(1.05) translate(0, 0); }
}
.animate-pan-slow {
  animation: pan-slow 20s ease-in-out infinite;
}
.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
</style>
