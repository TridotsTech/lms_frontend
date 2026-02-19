<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 class="text-3xl font-display font-bold text-slate-900 mb-1">Course Library</h1>
        <p class="text-slate-500">Explore our professional aviation training programs.</p>
      </div>

      <!-- Categories / Filter -->
      <div class="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
        <button 
          v-for="cat in categories" 
          :key="cat.slug"
          @click="activeCategory = cat.slug"
          class="px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all"
          :class="activeCategory === cat.slug 
            ? 'bg-brown-700 text-white shadow-lg shadow-brown-200' 
            : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'"
        >
          {{ cat.label }}
        </button>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="i in 6" :key="i" class="bg-white rounded-2xl border border-slate-100 h-80 animate-pulse"></div>
    </div>

    <!-- Course Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="course in filteredCourses" 
        :key="course.id"
        class="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-brown-200 hover:shadow-xl transition-all group flex flex-col h-full"
      >
        <!-- Image Area -->
        <div class="h-44 relative overflow-hidden bg-slate-100">
          <img 
            :src="handleImagePath(course.image)" 
            @error="(e) => (e.target.src = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop')"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            alt="Course thumbnail"
          />
          <div class="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0"></div>
          <div class="absolute top-4 left-4">
             <span class="px-2 py-1 bg-white/90 backdrop-blur-sm text-brown-700 text-[9px] font-black rounded uppercase tracking-widest shadow-sm">
                {{ course.custom_level || 'Pro' }}
             </span>
          </div>
        </div>

        <!-- Content Area -->
        <div class="p-6 flex-1 flex flex-col">
          <div class="flex items-center gap-2 mb-2">
             <span class="text-[9px] font-bold text-brown-600 uppercase tracking-widest">{{ course.category_label || 'Aviation' }}</span>
             <span class="w-1 h-1 rounded-full bg-slate-300"></span>
             <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{{ course.custom_duration_text }}</span>
          </div>
          
          <h3 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-brown-700 transition-colors line-clamp-2 leading-snug">{{ course.title }}</h3>
          
          <div class="flex items-center gap-1 mb-4">
             <div class="flex text-gold-500">
                <svg v-for="i in 5" :key="i" class="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
             </div>
             <span class="text-[10px] font-bold text-slate-400">{{ course.custom_rating }}</span>
          </div>

          <div class="pt-4 border-t border-slate-50 mt-auto flex items-center gap-2">
             <button 
               v-if="!course.is_enrolled"
               @click="enroll(course)"
               :disabled="enrolling"
               class="flex-1 py-2.5 bg-brown-700 hover:bg-brown-800 disabled:opacity-50 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2"
             >
                <span v-if="enrolling" class="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                {{ enrolling ? 'Enrolling...' : 'Enroll Now' }}
             </button>
             <router-link 
               v-else
               :to="`/portal/learn/${course.id}`"
               class="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl text-center transition-all"
             >
                Continue Learning
             </router-link>
             
             <router-link 
               :to="`/portal/course/${course.id}`" 
               class="px-3 py-2.5 border border-slate-200 text-slate-600 hover:border-brown-200 hover:text-brown-700 rounded-xl transition-all"
               title="View Details"
             >
                <InfoIcon class="w-4 h-4" />
             </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="!loading && filteredCourses.length === 0" class="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200">
       <div class="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-300">
         <SearchIcon class="w-8 h-8" />
       </div>
       <h3 class="text-lg font-bold text-slate-900 mb-1">No courses found</h3>
       <p class="text-slate-500 text-sm">Try adjusting your filters or category selection.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { SearchIcon, InfoIcon } from 'lucide-vue-next'
import { useAuth } from '../../composables/useAuth'

const router = useRouter()
const { user, loading: authLoading } = useAuth()
const courses = ref([])
const categories = ref([{ slug: 'all', label: 'All Courses' }])
const activeCategory = ref('all')
const loading = ref(true)
const enrolling = ref(false)

function handleImagePath(path) {
  if (!path) return 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop'
  if (path.startsWith('http')) return path
  if (path.startsWith('/images/')) return `/assets/lms_frontend/frontend${path}`
  return path
}

async function fetchData() {
  loading.value = true
  try {
     const [coursesRes, catsRes] = await Promise.all([
       fetch('/api/method/lms.lms.v2_api.get_courses_v2'),
       fetch('/api/method/lms.lms.v2_api.get_categories_v2')
     ])
     
     const coursesData = await coursesRes.json()
     const catsData = await catsRes.json()
     
     courses.value = coursesData.message || []
     categories.value = catsData.message || [{ slug: 'all', label: 'All Courses' }]
  } catch (e) {
     console.error('Failed to fetch library data:', e)
  } finally {
    loading.value = false
  }
}

async function enroll(course) {
  if (user.value === 'Guest' || !user.value) {
    window.location.href = '/login'
    return
  }
  
  enrolling.value = true
  try {
    const res = await fetch(`/api/method/lms.lms.v2_api.enroll_in_course?course_id=${course.id}`, {
      method: 'POST'
    })
    const data = await res.json()
    if (data.message?.status === 'success') {
      router.push(`/portal/learn/${course.id}`)
    } else if (data.message?.status === 'payment_required') {
       router.push(`/portal/course/${course.id}`)
    }
  } catch (e) {
    console.error('Enrollment failed:', e)
  } finally {
    enrolling.value = false
  }
}

const filteredCourses = computed(() => {
  if (activeCategory.value === 'all') return courses.value
  return courses.value.filter(c => c.category === activeCategory.value)
})

onMounted(() => {
  fetchData()
})
</script>
