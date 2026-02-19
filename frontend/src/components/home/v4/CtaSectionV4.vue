<template>
  <section class="bg-gray-900 py-32 relative overflow-hidden">
    <!-- Overlay image -->
    <div class="absolute inset-0 z-0">
      <img src="/images/hero-flight.png" class="w-full h-full object-cover mix-blend-overlay opacity-20" />
      <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-2xl">
        <h2 class="text-xs font-bold uppercase tracking-widest text-orange-500 mb-6">Enrollment</h2>
        <h3 class="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
          Your Captain's Seat <br />
          Is Waiting.
        </h3>
        <p class="text-xl text-gray-400 mb-12 font-light leading-relaxed">
          The sky is not the limit; it's just the beginning. Secure your spot in our next intake and start your journey to the flight deck.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6">
          <button class="px-10 py-5 bg-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1 uppercase tracking-wider text-sm">
            Apply for Admission
          </button>
          <button class="px-10 py-5 bg-transparent border border-gray-700 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors uppercase tracking-wider text-sm">
            Request Information
          </button>
        </div>
        
        <p class="mt-8 text-sm text-gray-500">
          * Limited seats available for Fall 2026 batch. Early application recommended.
        </p>
      </div>
    </div>
  </section>
</template>
