<template>
  <div class="py-24 bg-gray-50 border-t border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-widest mb-4">
          <svg class="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path></svg>
          Pathways
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-[#1E1B4B]">Structured <span class="text-[#800000]">Learning Paths</span></h2>
      </div>

      <!-- 3-Column Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Card 1 -->
        <div class="group relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] cursor-pointer">
            <img 
               :src="'/assets/lms_frontend/frontend/images/pathway-cabin.jpg'" 
               alt="Cabin Crew" 
               class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div class="absolute bottom-0 left-0 p-8 w-full">
                <div class="mb-3 inline-block px-3 py-1 rounded-full bg-[#800000] text-white text-xs font-bold uppercase tracking-wide">
                    7 Modules
                </div>
                <h3 class="text-2xl font-bold text-white mb-2 ml-1">Cabin Crew Training</h3>
                <p class="text-gray-300 text-sm line-clamp-2 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    Comprehensive service and safety training for aspiring flight attendants.
                </p>
            </div>
        </div>

        <!-- Card 2 -->
        <div class="group relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] cursor-pointer">
            <img 
               :src="'/assets/lms_frontend/frontend/images/pathway-operations.jpg'" 
               alt="Ground Operations" 
               class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div class="absolute bottom-0 left-0 p-8 w-full">
                <div class="mb-3 inline-block px-3 py-1 rounded-full bg-[#800000] text-white text-xs font-bold uppercase tracking-wide">
                    5 Modules
                </div>
                <h3 class="text-2xl font-bold text-white mb-2 ml-1">Ground Operations</h3>
                <p class="text-gray-300 text-sm line-clamp-2 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    Master the logistics and management of airport ground handling.
                </p>
            </div>
        </div>

        <!-- Card 3 -->
        <div class="group relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] cursor-pointer">
            <img 
               :src="'/assets/lms_frontend/frontend/images/pathway-security.jpg'" 
               alt="Airport Management" 
               class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div class="absolute bottom-0 left-0 p-8 w-full">
                <div class="mb-3 inline-block px-3 py-1 rounded-full bg-[#800000] text-white text-xs font-bold uppercase tracking-wide">
                    8 Modules
                </div>
                <h3 class="text-2xl font-bold text-white mb-2 ml-1">Airport Commercial</h3>
                <p class="text-gray-300 text-sm line-clamp-2 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    Retail, customer service, and business operations within the terminal.
                </p>
            </div>
        </div>

      </div>
    </div>
  </div>
</template>
