<template>
  <section class="py-24 bg-white overflow-hidden relative">
    <div class="absolute -right-64 -top-64 w-[600px] h-[600px] bg-sky-50 rounded-full blur-[120px] opacity-60"></div>
    <div class="absolute -left-64 -bottom-64 w-[600px] h-[600px] bg-orange-50 rounded-full blur-[120px] opacity-60"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <!-- Visual -->
        <div class="relative group">
          <div class="absolute inset-0 bg-slate-900 rounded-2xl transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-500"></div>
          <img src="/images/program-security.png" class="relative z-10 w-full rounded-2xl shadow-2xl transition-transform duration-500 hover:-translate-y-2 grayscale group-hover:grayscale-0" alt="Training Center">
          
          <!-- Stat Card -->
          <div class="absolute -bottom-8 -right-8 bg-white p-8 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20 max-w-xs animate-bounce-slow">
            <p class="text-4xl font-bold text-slate-900 mb-1">98%</p>
            <p class="text-xs font-bold text-gray-500 uppercase tracking-wider">Placement Success Rate</p>
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-8">
          <div>
            <span class="text-orange-500 font-bold tracking-widest text-xs uppercase mb-2 block">Why Choose AeroFlight</span>
            <h2 class="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Where Ambition Meets <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Altitude.</span>
            </h2>
          </div>
          
          <p class="text-lg text-gray-600 leading-relaxed font-light">
            We don't just train pilots; we cultivate aviation leaders. Our curriculum is designed by active captains and industry veterans to bridge the gap between classroom theory and cockpit reality.
          </p>
          
          <div class="space-y-6 pt-4">
            <div class="flex gap-4 group">
              <div class="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                <svg class="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <div>
                <h4 class="text-xl font-bold text-slate-900 mb-1">Advanced Simulation</h4>
                <p class="text-sm text-gray-500 leading-relaxed">Train on state-of-the-art full motion simulators replicating real-world scenarios.</p>
              </div>
            </div>

            <div class="flex gap-4 group">
              <div class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-900 transition-colors duration-300">
                <svg class="w-6 h-6 text-slate-900 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </div>
              <div>
                <h4 class="text-xl font-bold text-slate-900 mb-1">Global Network</h4>
                <p class="text-sm text-gray-500 leading-relaxed">Direct placement pathways with over 50 international airline partners.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-bounce-slow {
  animation: bounce-slow 4s ease-in-out infinite;
}
</style>
