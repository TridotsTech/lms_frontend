<template>
  <div class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
       <!-- Header -->
       <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-[#1E1B4B]">What Our <span class="text-[#800000]">Students Say</span></h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div v-for="i in 3" :key="i" class="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all">
            <div class="text-[#800000] mb-4 opacity-50">
                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
            </div>
            <p class="text-gray-600 mb-6 italic">
                "The training was exceptional. The instructors have real-world experience that made all the difference during my airline interviews. I got hired within a month!"
            </p>
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                    <img :src="`https://i.pravatar.cc/150?img=${i+10}`" alt="User" class="w-full h-full object-cover">
                </div>
                <div>
                    <h5 class="text-[#1E1B4B] font-bold">Sarah Jenkins</h5>
                    <div class="text-xs text-gray-500">Cabin Crew, Emirates</div>
                    <div class="flex text-yellow-400 text-xs mt-1">★★★★★</div>
                </div>
            </div>
        </div>

      </div>

    </div>
  </div>
</template>
