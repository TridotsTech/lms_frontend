<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <span class="text-college-red uppercase font-bold tracking-widest text-sm">Our Programs</span>
          <h2 class="mt-2 text-4xl lg:text-5xl font-bold text-gray-900">Career Driven Courses</h2>
        </div>
        <a href="/courses" class="mt-4 md:mt-0 px-6 py-3 border-2 border-college-red text-college-red font-bold rounded-full hover:bg-college-red hover:text-white transition-all text-sm uppercase tracking-wide">
          View All Courses
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Course Cards with Image Top -->
        <div v-for="(course, index) in courses" :key="index" class="bg-white rounded-[2rem] overflow-hidden shadow-lg group hover:-translate-y-2 transition-transform duration-300">
           <div class="h-64 overflow-hidden relative">
             <img :src="course.image" :alt="course.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
             <div class="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-bold uppercase text-college-red shadow-sm">
               {{ course.type }}
             </div>
           </div>
           <div class="p-8">
             <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-college-red transition-colors">{{ course.title }}</h3>
             <p class="text-gray-500 mb-6 text-sm leading-relaxed line-clamp-2">
               {{ course.description }}
             </p>
             <div class="flex items-center justify-between pt-6 border-t border-gray-100">
               <div class="flex items-center gap-2 text-sm font-semibold text-gray-600">
                 <svg class="w-5 h-5 text-college-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 {{ course.duration }}
               </div>
               <a :href="`/courses/${course.id}`" class="text-college-red font-bold hover:underline flex items-center">
                 Details <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
               </a>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const courses = [
  {
    id: 1,
    title: "BBA in Aviation Management",
    type: "Degree",
    duration: "3 Years",
    image: "/images/program-operations.png",
    description: "A comprehensive degree program covering airport management, airline operations, and logistics."
  },
  {
    id: 2,
    title: "Diploma in Cabin Crew",
    type: "Diploma",
    duration: "1 Year",
    image: "/images/program-cabin.png",
    description: "Specialized training for aspiring flight attendants with grooming, safety, and service modules."
  },
  {
    id: 3,
    title: "Ground Handling Services",
    type: "Certificate",
    duration: "6 Months",
    image: "/images/program-ground.png",
    description: "Practical training for ground staff roles including check-in, ramp handling, and passenger service."
  }
]
</script>
