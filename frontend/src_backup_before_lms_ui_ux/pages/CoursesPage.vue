<template>
  <div>
    <!-- Page Header -->
    <section class="bg-brown-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge label="Courses" />
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Explore Our <span class="font-display italic text-brown-700">Courses</span>
        </h1>
        <p class="text-gray-500 max-w-2xl mx-auto text-lg">
          Browse our comprehensive aviation training programs designed for aspiring and current aviation professionals across the globe.
        </p>
      </div>
    </section>

    <!-- Filters + Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Filter Bar -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
          <!-- Category Tabs -->
          <div class="flex flex-wrap gap-2">
            <button
              v-for="cat in categories"
              :key="cat.slug"
              @click="activeCategory = cat.slug"
              :class="[
                'px-4 py-2 text-sm font-medium rounded-full transition-all duration-200',
                activeCategory === cat.slug
                  ? 'bg-brown-700 text-white shadow-sm'
                  : 'bg-brown-50 text-gray-600 hover:bg-brown-100 hover:text-brown-700',
              ]"
            >
              {{ cat.label }}
            </button>
          </div>

          <!-- Search -->
          <div class="relative w-full sm:w-72">
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search courses..."
              class="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brown-200 focus:border-brown-400 transition-colors"
            />
          </div>
        </div>

        <!-- Results Count -->
        <p class="text-sm text-gray-400 mb-6">
          Showing <span class="font-semibold text-gray-600">{{ filteredCourses.length }}</span> course{{ filteredCourses.length !== 1 ? 's' : '' }}
          <span v-if="activeCategory !== 'all'">
            in <span class="font-semibold text-brown-700">{{ activeCategoryLabel }}</span>
          </span>
          <span v-if="searchQuery">
            matching "<span class="font-semibold text-gray-600">{{ searchQuery }}</span>"
          </span>
        </p>

        <!-- Course Grid -->
        <transition-group
          tag="div"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <CourseCard
            v-for="course in filteredCourses"
            :key="course.id"
            :id="course.id"
            :title="course.title"
            :description="course.description"
            :image="course.image"
            :duration="course.duration"
            :lessons="course.lessons"
            :level="course.level"
            :rating="course.rating"
            :students="course.students"
          />
        </transition-group>

        <!-- Empty State -->
        <div v-if="filteredCourses.length === 0" class="text-center py-20">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-brown-50 flex items-center justify-center">
            <svg class="w-8 h-8 text-brown-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">No courses found</h3>
          <p class="text-gray-500 mb-6">Try adjusting your search or filter to find what you're looking for.</p>
          <button
            @click="activeCategory = 'all'; searchQuery = ''"
            class="text-sm font-semibold text-brown-700 hover:text-brown-800 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SectionBadge from '../components/ui/SectionBadge.vue'
import CourseCard from '../components/ui/CourseCard.vue'
import { courses, categories } from '../data/courses.js'

const activeCategory = ref('all')
const searchQuery = ref('')

const activeCategoryLabel = computed(() => {
  const cat = categories.find((c) => c.slug === activeCategory.value)
  return cat ? cat.label : ''
})

const filteredCourses = computed(() => {
  let result = courses

  if (activeCategory.value !== 'all') {
    result = result.filter((c) => c.category === activeCategory.value)
  }

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim()
    result = result.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
    )
  }

  return result
})
</script>
