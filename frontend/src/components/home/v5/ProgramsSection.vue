<template>
  <div class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
      <!-- Program 1: Airline Pilot -->
      <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="lg:w-1/2 relative">
             <div class="absolute -top-4 -left-4 w-24 h-24 bg-red-50 rounded-full -z-10"></div>
             <div class="rounded-[2.5rem] overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1559627748-c44e6f645317?q=80&w=800&auto=format&fit=crop" alt="Pilot" class="w-full h-auto transform hover:scale-105 transition-all duration-700"/>
             </div>
          </div>
          <div class="lg:w-1/2 space-y-6">
             <div class="w-16 h-16 rounded-2xl bg-[#800000] flex items-center justify-center text-white text-2xl shadow-lg shadow-red-900/20">
                <!-- Feather Icon: Navigation/Compass look -->
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
             </div>
             <h3 class="text-4xl font-bold text-[#1E1B4B]">Commercial Pilot License</h3>
             <p class="text-lg text-gray-500 leading-relaxed">
                 Start your journey to the cockpit with our comprehensive ground school and flight training coordination. We partner with top flight schools globally to ensure your success.
             </p>
             <ul class="space-y-3 pt-4">
                 <li class="flex items-center gap-3 text-[#1E1B4B] font-medium">
                     <!-- Feather Icon: Check Circle -->
                     <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                     DGCA & FAA Compliant Curriculum
                 </li>
                 <li class="flex items-center gap-3 text-[#1E1B4B] font-medium">
                     <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                     Type Rating Preparation
                 </li>
                 <li class="flex items-center gap-3 text-[#1E1B4B] font-medium">
                     <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                     Airline Interview Coaching
                 </li>
             </ul>
             <button class="mt-4 text-[#800000] font-bold flex items-center gap-2 hover:gap-4 transition-all">
                 Learn More <span class="bg-red-50 p-1 rounded-full"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span>
             </button>
          </div>
      </div>

      <!-- Program 2: Cabin Crew (Alternating) -->
      <div class="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div class="lg:w-1/2 relative">
             <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-50 rounded-full -z-10"></div>
             <div class="rounded-[2.5rem] overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Cabin Crew" class="w-full h-auto transform hover:scale-105 transition-all duration-700"/>
             </div>
          </div>
          <div class="lg:w-1/2 space-y-6">
             <div class="w-16 h-16 rounded-2xl bg-[#1E1B4B] flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-900/20">
                <!-- Feather Icon: Users/Smile -->
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             </div>
             <h3 class="text-4xl font-bold text-[#1E1B4B]">Cabin Crew Training</h3>
             <p class="text-lg text-gray-500 leading-relaxed">
                 Master the art of hospitality and safety at 35,000 feet. Our program covers everything from emergency procedures to premium service delivery.
             </p>
             <ul class="space-y-3 pt-4">
                 <li class="flex items-center gap-3 text-[#1E1B4B] font-medium">
                     <!-- Feather Icon: Check Circle -->
                     <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                     Grooming & Etiquette
                 </li>
                 <li class="flex items-center gap-3 text-[#1E1B4B] font-medium">
                     <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                     First Aid & Emergency Drills
                 </li>
                 <li class="flex items-center gap-3 text-[#1E1B4B] font-medium">
                     <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                     Swimming & Ditching
                 </li>
             </ul>
             <button class="mt-4 text-[#800000] font-bold flex items-center gap-2 hover:gap-4 transition-all">
                 Learn More <span class="bg-red-50 p-1 rounded-full"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span>
             </button>
          </div>
      </div>

    </div>
  </div>
</template>
