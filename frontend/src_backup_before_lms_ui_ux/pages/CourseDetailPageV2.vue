
<template>
  <!-- Loading -->
  <div v-if="loading" class="min-h-[60vh] flex items-center justify-center">
     <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-brown-700"></div>
  </div>

  <!-- Not Found -->
  <div v-else-if="!course" class="min-h-[60vh] flex items-center justify-center">
    <div class="text-center px-4">
      <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-brown-50 flex items-center justify-center">
        <svg class="w-10 h-10 text-brown-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
      </div>
      <h1 class="text-2xl font-bold text-gray-900 mb-2">Course Not Found</h1>
      <p class="text-gray-500 mb-8">The course you're looking for doesn't exist or has been removed.</p>
      <router-link to="/courses-v2">
        <BaseButton variant="solid">Browse All Courses</BaseButton>
      </router-link>
    </div>
  </div>

  <div v-else>
    <!-- Hero Banner -->
    <section class="bg-brown-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm text-white/50 mb-8">
          <router-link to="/" class="hover:text-white/80 transition-colors">Home</router-link>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
          <router-link to="/courses" class="hover:text-white/80 transition-colors">Courses</router-link>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
          <span class="text-white/70 truncate max-w-[200px]">{{ course.title }}</span>
        </nav>

        <div class="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <!-- Left: Info -->
          <div class="flex-1 space-y-6">
            <div class="flex flex-wrap items-center gap-3">
              <span class="px-3 py-1 text-xs font-semibold rounded-full" :class="levelClass">{{ course.custom_level }}</span>
              <span class="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/80">{{ course.category_label }}</span>
            </div>

            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{{ course.title }}</h1>
            <p class="text-lg text-white/70 leading-relaxed max-w-2xl">{{ course.short_introduction }}</p>

            <!-- Stats row -->
            <div class="flex flex-wrap items-center gap-6 pt-2">
              <div class="flex items-center gap-2">
                <StarRating :rating="Math.round(course.custom_rating)" />
                <span class="text-sm font-semibold">{{ course.custom_rating }}</span>
                <span class="text-sm text-white/50">({{ (course.custom_students_count || 0).toLocaleString() }} students)</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-6 text-sm text-white/60 pt-2">
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                {{ course.custom_duration_text }}
              </span>
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
                {{ course.custom_lessons_count }} lessons
              </span>
              <span class="flex items-center gap-2" v-if="course.custom_certification_text">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>
                {{ course.custom_certification_text }}
              </span>
            </div>

            <div class="pt-4">
              <BaseButton variant="solid-white" size="lg">Enroll Now</BaseButton>
            </div>
          </div>

          <!-- Right: Image -->
          <div class="lg:w-[420px] flex-shrink-0">
            <div class="rounded-2xl overflow-hidden bg-brown-800 aspect-[4/3]">
              <img :src="handleImagePath(course.image)" :alt="course.title" class="w-full h-full object-cover" @error="onImgError" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content body -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <!-- Main content -->
          <div class="flex-1 min-w-0">
            <!-- About -->
            <div class="mb-14">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">About This Course</h2>
              <div class="text-gray-500 leading-relaxed max-w-none prose prose-brown" v-html="course.description"></div>
            </div>

            <!-- Learning Outcomes -->
            <div class="mb-14" v-if="outcomes.length">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  v-for="(outcome, i) in outcomes"
                  :key="i"
                  class="flex gap-3"
                >
                  <div class="w-6 h-6 rounded-full bg-brown-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3.5 h-3.5 text-brown-700" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <p class="text-sm text-gray-600 leading-relaxed">{{ outcome }}</p>
                </div>
              </div>
            </div>

            <!-- Curriculum -->
            <div class="mb-14" v-if="course.curriculum && course.curriculum.length">
              <h2 class="text-2xl font-bold text-gray-900 mb-2">Course Curriculum</h2>
              <p class="text-sm text-gray-400 mb-6">{{ course.curriculum.length }} modules &middot; {{ course.custom_lessons_count }} lessons &middot; {{ course.custom_duration_text }}</p>
              <div class="border border-gray-200 rounded-2xl overflow-hidden divide-y divide-gray-200">
                <div
                  v-for="(mod, i) in course.curriculum"
                  :key="i"
                  class="flex items-center justify-between px-5 py-4 hover:bg-brown-50/50 transition-colors"
                >
                  <div class="flex items-center gap-4 min-w-0">
                    <span class="w-8 h-8 rounded-lg bg-brown-50 text-brown-700 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {{ String(i + 1).padStart(2, '0') }}
                    </span>
                    <span class="text-sm font-medium text-gray-900 truncate">{{ mod.module }}</span>
                  </div>
                  <div class="flex items-center gap-4 text-xs text-gray-400 flex-shrink-0 ml-4">
                    <span class="hidden sm:inline" v-if="mod.lessons">{{ mod.lessons }} lessons</span>
                    <span v-if="mod.duration">{{ mod.duration }}</span>
                  </div>
                </div>
              </div>
            </div>

             <!-- Instructor -->
             <div v-if="course.custom_instructor_name">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Your Instructor</h2>
              <div class="flex items-center gap-4 p-5 bg-brown-50 rounded-2xl">
                <div class="w-16 h-16 rounded-full bg-brown-200 overflow-hidden flex-shrink-0">
                  <img :src="handleImagePath(course.custom_instructor_image)" :alt="course.custom_instructor_name" class="w-full h-full object-cover" @error="onAvatarError" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">{{ course.custom_instructor_name }}</h3>
                  <p class="text-sm text-gray-500">{{ course.custom_instructor_role }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="lg:w-[340px] flex-shrink-0">
            <div class="sticky top-24 space-y-6">
              <!-- Enroll card -->
              <div class="border border-gray-200 rounded-2xl p-6 space-y-5">
                <h3 class="text-lg font-bold text-gray-900">Ready to Start?</h3>
                <ul class="space-y-3">
                  <!-- Dynamic Features from Backend -->
                  <li
                    v-for="(feat, i) in features"
                    :key="'feat-'+i"
                    class="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <svg class="w-4 h-4 text-brown-700 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                    {{ feat }}
                  </li>
                  
                  <!-- Dynamic Meta info -->
                  <li class="flex items-center gap-3 text-sm text-gray-600">
                    <svg class="w-4 h-4 text-brown-700 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                    {{ course.custom_lessons_count }} lessons over {{ course.custom_duration_text }}
                  </li>
                  <li class="flex items-center gap-3 text-sm text-gray-600" v-if="course.custom_certification_text">
                    <svg class="w-4 h-4 text-brown-700 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                    Certificate on completion
                  </li>
                </ul>
                <BaseButton class="w-full" size="lg">Enroll Now</BaseButton>
              </div>

               <!-- Prerequisites -->
               <div class="border border-gray-200 rounded-2xl p-6" v-if="prereqs.length">
                <h3 class="text-sm font-bold text-gray-900 mb-3">Prerequisites</h3>
                <ul class="space-y-2">
                  <li
                    v-for="(prereq, i) in prereqs"
                    :key="i"
                    class="flex items-start gap-2 text-sm text-gray-500"
                  >
                    <span class="text-brown-400 mt-1.5 flex-shrink-0">&bull;</span>
                    {{ prereq }}
                  </li>
                </ul>
              </div>

               <!-- Related courses -->
               <div v-if="course.related_courses && course.related_courses.length" class="border border-gray-200 rounded-2xl p-6">
                <h3 class="text-sm font-bold text-gray-900 mb-4">Related Courses</h3>
                <div class="space-y-4">
                  <router-link
                    v-for="related in course.related_courses"
                    :key="related.id"
                    :to="{ name: 'CourseDetail', params: { id: related.id } }"
                    class="flex gap-3 group"
                  >
                    <div class="w-16 h-12 rounded-lg bg-brown-100 overflow-hidden flex-shrink-0">
                      <img :src="handleImagePath(related.image)" :alt="related.title" class="w-full h-full object-cover" @error="onImgError" />
                    </div>
                    <div class="min-w-0">
                      <p class="text-sm font-medium text-gray-900 group-hover:text-brown-700 transition-colors truncate">{{ related.title }}</p>
                      <p class="text-xs text-gray-400">{{ related.custom_duration_text }} &middot; {{ related.custom_level }}</p>
                    </div>
                  </router-link>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import BaseButton from '../components/ui/BaseButton.vue'
import StarRating from '../components/ui/StarRating.vue'

const route = useRoute()
const course = ref(null)
const loading = ref(true)

function parseListHtml(html) {
  if (!html) return []
  
  try {
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    const listItems = doc.querySelectorAll('li')
    
    if (listItems.length > 0) {
      return Array.from(listItems)
        .map(li => li.textContent.trim())
        .filter(text => text.length > 0)
    }
    
    // Fallback: If no <li> found, return text content (split by new lines if needed)
    // or just return the simple text. 
    return [doc.body.textContent.trim()]
    
  } catch (e) {
    console.error('HTML Parsing error', e)
    // Regex fallback for non-browser envs (rare here)
    const matches = html.match(/<li[^>]*>([\s\S]*?)<\/li>/gi)
    if (matches) {
      return matches.map(m => m.replace(/<[^>]+>/g, '').trim())
    }
    return [html.replace(/<[^>]+>/g, '')]
  }
}

const outcomes = computed(() => parseListHtml(course.value?.custom_learning_outcomes))
const prereqs = computed(() => parseListHtml(course.value?.custom_prerequisites))
const features = computed(() => parseListHtml(course.value?.custom_features))

async function fetchCourseDetails() {
  try {
    const id = route.params.id
    const response = await fetch(`/api/method/lms.lms.v2_api.get_course_details_v2?course_id=${id}`)
    const data = await response.json()
    course.value = data.message || null
  } catch (error) {
    console.error('Error fetching course details:', error)
  }
}

const levelClass = computed(() => {
  if (!course.value) return ''
  const map = {
    Beginner: 'bg-white/15 text-white/80',
    Intermediate: 'bg-white/20 text-white/90',
    Advanced: 'bg-gold-500/20 text-gold-400',
  }
  return map[course.value.custom_level] || 'bg-white/10 text-white/70'
})

function handleImagePath(path) {
  if (!path) return 'https://placehold.co/600x400/F5E6D8/5B2C0E?text=Aviation'
  if (path.startsWith('http')) return path
  if (path.startsWith('/images/')) return `/assets/lms_frontend/frontend${path}`
  return path
}

function onImgError(e) {
  e.target.src = 'https://placehold.co/600x400/F5E6D8/5B2C0E?text=Aviation+Course'
}

function onAvatarError(e) {
  e.target.src = 'https://placehold.co/100x100/F5E6D8/5B2C0E?text=Instructor'
}

watch(() => route.params.id, (newId) => {
  if (newId) {
    fetchCourseDetails()
  }
})

onMounted(async () => {
    loading.value = true
    await fetchCourseDetails()
    loading.value = false
})
</script>
