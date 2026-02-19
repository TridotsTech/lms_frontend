<template>
  <section class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-20 animate-fade-in">
        <h2 class="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">Our Expertise</h2>
        <h3 class="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">
          Precision Training Modules
        </h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Cabin Crew Card -->
        <a href="/courses/cabin-crew" class="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-[450px]">
          <div class="absolute inset-0 z-0">
             <img src="/images/program-cabin.png" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Cabin Crew">
             <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
          </div>
          <div class="relative z-10 h-full flex flex-col justify-end p-8">
             <div class="w-12 h-1 bg-orange-500 mb-6 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
             <h4 class="text-3xl font-bold text-white mb-2">Cabin Crew</h4>
             <p class="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
               Master the art of service and safety at 30,000 feet. Comprehensive modules on emergency procedures, first aid, and hospitality.
             </p>
             <span class="text-orange-400 font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
               Explore Program <svg class="w-4 h-4 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
             </span>
          </div>
        </a>

        <!-- Flight Operations Card -->
        <a href="/courses/operations" class="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-[450px]">
          <div class="absolute inset-0 z-0">
             <img src="/images/program-operations.png" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Operations">
             <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
          </div>
          <div class="relative z-10 h-full flex flex-col justify-end p-8">
             <div class="w-12 h-1 bg-orange-500 mb-6 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
             <h4 class="text-3xl font-bold text-white mb-2">Flight Operations</h4>
             <p class="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
               Strategic management of airline logistics. Learn flight dispatch, crew scheduling, and OCC management.
             </p>
             <span class="text-orange-400 font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
               Explore Program <svg class="w-4 h-4 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
             </span>
          </div>
        </a>

        <!-- Ground Handling Card -->
        <a href="/courses/ground" class="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-[450px]">
          <div class="absolute inset-0 z-0">
             <img src="/images/program-ground.png" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Ground Handling">
             <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
          </div>
          <div class="relative z-10 h-full flex flex-col justify-end p-8">
             <div class="w-12 h-1 bg-orange-500 mb-6 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
             <h4 class="text-3xl font-bold text-white mb-2">Ground Handling</h4>
             <p class="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
               Essential airport operations training. From check-in systems to ramp safety and cargo management.
             </p>
             <span class="text-orange-400 font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
               Explore Program <svg class="w-4 h-4 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
             </span>
          </div>
        </a>

      </div>
    
      <div class="mt-16 text-center">
        <a href="/courses" class="inline-block border-2 border-gray-900 text-gray-900 px-10 py-3 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all uppercase tracking-widest text-sm">
          View All Departments
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
