<template>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <div>
        <h1 class="text-4xl font-display font-bold text-slate-900 mb-3 tracking-tight">Examinations Hub</h1>
        <p class="text-slate-500 text-lg">Manage your certifications, practice modules, and performance history.</p>
      </div>
      
      <!-- Tabs -->
      <div class="flex bg-slate-100 p-1.5 rounded-2xl self-start md:self-auto">
        <button 
          v-for="tab in ['available', 'history']" 
          :key="tab"
          @click="activeTab = tab"
          class="px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all"
          :class="activeTab === tab ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'"
        >
          {{ tab }}
        </button>
      </div>
    </div>

    <!-- Filters Bar -->
    <div class="bg-white border border-slate-100 rounded-[32px] p-6 mb-10 shadow-sm flex flex-wrap items-center gap-6">
       <div class="flex-1 min-w-[240px]">
          <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Filter by Course</p>
          <select v-model="filters.course" class="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-brown-100 transition-all cursor-pointer">
             <option value="">All Technical Modules</option>
             <option v-for="course in myCourses" :key="course.id" :value="course.id">{{ course.title }}</option>
          </select>
       </div>
       <div class="w-full md:w-64">
          <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Assessment Type</p>
          <select v-model="filters.type" class="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-brown-100 transition-all cursor-pointer">
             <option value="">All Types</option>
             <option value="Exam">Certification Exams</option>
             <option value="Mark Test">Practice Modules</option>
          </select>
       </div>
       <button @click="resetFilters" class="mt-6 text-[10px] font-black text-slate-400 hover:text-brown-700 uppercase tracking-widest transition-colors flex items-center gap-2">
          <RefreshCcwIcon class="w-3 h-3" />
          Clear
       </button>
    </div>

    <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="i in 6" :key="i" class="h-64 bg-white border border-slate-100 rounded-[32px] animate-pulse"></div>
    </div>

    <div v-else>
      <!-- AVAILABLE ASSESSMENTS TAB -->
      <div v-if="activeTab === 'available'">
        <div v-if="filteredAssessments.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div 
            v-for="exam in filteredAssessments" 
            :key="exam.name" 
            class="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-100 transition-all group flex flex-col h-full relative overflow-hidden"
          >
             <!-- Type Badge -->
             <div class="absolute top-0 right-0">
                <div 
                  class="px-6 py-2 rounded-bl-[20px] text-[8px] font-black uppercase tracking-widest text-white"
                  :class="exam.quiz_type === 'Exam' ? 'bg-red-500' : 'bg-blue-500'"
                >
                  {{ exam.quiz_type }}
                </div>
             </div>

             <div class="w-14 h-14 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brown-50 group-hover:text-brown-600 transition-colors">
                <ShieldCheckIcon v-if="exam.quiz_type === 'Exam'" class="w-8 h-8" />
                <ZapIcon v-else class="w-8 h-8" />
             </div>
             
             <div class="flex-1 mb-8">
                <h3 class="text-xl font-bold text-slate-900 mb-2 leading-tight">{{ exam.title }}</h3>
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">{{ exam.course_title }}</p>
             </div>

             <div class="grid grid-cols-2 gap-3 mb-8">
                <div class="bg-slate-50/50 p-3 rounded-2xl border border-slate-50">
                   <p class="text-[8px] text-slate-400 font-black uppercase tracking-widest mb-1">Pass Mark</p>
                   <p class="text-xs font-bold text-slate-700">{{ exam.passing_percentage }}%</p>
                </div>
                <div class="bg-slate-50/50 p-3 rounded-2xl border border-slate-50">
                   <p class="text-[8px] text-slate-400 font-black uppercase tracking-widest mb-1">Time</p>
                   <p class="text-xs font-bold text-slate-700">{{ exam.exam_time_limit || '30m' }}</p>
                </div>
             </div>
             
             <button @click="startExam(exam)" class="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-brown-700 transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-slate-100 flex items-center justify-center gap-3">
               Start Assessment
               <ArrowRightIcon class="w-4 h-4" />
             </button>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-20 bg-white rounded-[40px] border-2 border-dashed border-slate-200">
          <div class="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-slate-300">
            <ClipboardListIcon class="w-10 h-10" />
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">No Assessments Found</h3>
          <p class="text-slate-500 max-w-sm mx-auto">Try adjusting your filters or browse the catalog for new technical training.</p>
        </div>
      </div>

      <!-- RESULTS HISTORY TAB -->
      <div v-else-if="activeTab === 'history'">
        <div v-if="filteredSubmissions.length > 0" class="bg-white border border-slate-100 rounded-[40px] overflow-hidden shadow-sm">
           <table class="w-full text-left">
              <thead>
                 <tr class="bg-slate-50/50 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <th class="px-8 py-6">Course & Assessment</th>
                    <th class="px-8 py-6">Completion Date</th>
                    <th class="px-8 py-6">Score</th>
                    <th class="px-8 py-6 text-center">Status</th>
                    <th class="px-8 py-6"></th>
                 </tr>
              </thead>
              <tbody class="divide-y divide-slate-50">
                 <tr v-for="sub in filteredSubmissions" :key="sub.name" class="hover:bg-slate-50/50 transition-colors">
                    <td class="px-8 py-7">
                       <p class="font-bold text-slate-900 text-sm mb-1">{{ sub.quiz_title }}</p>
                       <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">{{ sub.course_title }}</p>
                    </td>
                    <td class="px-8 py-7 text-sm text-slate-500">
                       {{ formatDate(sub.creation) }}
                    </td>
                    <td class="px-8 py-7">
                       <div class="flex items-center gap-3">
                          <span class="font-display font-bold text-base text-slate-900">{{ sub.percentage }}%</span>
                          <span class="text-[10px] font-bold text-slate-300">({{ sub.score }}/{{ sub.score_out_of }})</span>
                       </div>
                    </td>
                    <td class="px-8 py-7">
                       <div class="flex justify-center">
                          <span 
                            class="px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest"
                            :class="sub.status === 'Pass' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-red-50 text-red-600 border border-red-100'"
                          >
                            {{ sub.status }}
                          </span>
                       </div>
                    </td>
                    <td class="px-8 py-7 text-right">
                       <button class="text-slate-400 hover:text-brown-700 transition-colors">
                          <EyeIcon class="w-5 h-5" />
                       </button>
                    </td>
                 </tr>
              </tbody>
           </table>
        </div>

        <!-- Empty State Results -->
        <div v-else class="text-center py-20 bg-white rounded-[40px] border-2 border-dashed border-slate-200">
          <div class="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-slate-300">
            <HistoryIcon class="w-10 h-10" />
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">No History Recorded</h3>
          <p class="text-slate-500 max-w-sm mx-auto">You haven't completed any assessments for these filters yet. Start your training today!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { 
  ArrowRightIcon, 
  ShieldCheckIcon,
  ZapIcon,
  ClipboardListIcon,
  RefreshCcwIcon,
  HistoryIcon,
  EyeIcon
} from 'lucide-vue-next'
import { useAuth } from '../../composables/useAuth'

const router = useRouter()
const route = useRoute()
const { user, loading: authLoading } = useAuth()

const assessments = ref([])
const submissions = ref([])
const myCourses = ref([])
const loading = ref(true)
const activeTab = ref('available')

const filters = ref({
  course: route.params.id || '',
  type: ''
})

const filteredAssessments = computed(() => {
  return assessments.value.filter(a => {
    const courseMatch = !filters.value.course || a.course_id === filters.value.course
    const typeMatch = !filters.value.type || a.quiz_type === filters.value.type
    return courseMatch && typeMatch
  })
})

const filteredSubmissions = computed(() => {
  return submissions.value.filter(s => {
    const courseMatch = !filters.value.course || s.course === filters.value.course
    const typeMatch = !filters.value.type || s.custom_quiz_type === filters.value.type
    return courseMatch && typeMatch
  })
})

function resetFilters() {
  filters.value.course = ''
  filters.value.type = ''
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  })
}

async function fetchData() {
  loading.value = true
  try {
    // 1. Get my courses
    const resCourses = await fetch('/api/method/lms.lms.v2_api.get_my_courses')
    const dataCourses = await resCourses.json()
    myCourses.value = dataCourses.message || []
    
    // 2. Fetch assessments for each course (parallel)
    const promises = myCourses.value.map(async course => {
       const res = await fetch(`/api/method/lms.lms.v2_api.get_course_exams?course_id=${course.id}`)
       const data = await res.json()
       return (data.message || []).map(a => ({ 
          ...a, 
          course_id: course.id,
          course_title: course.title 
       }))
    })
    
    const results = await Promise.all(promises)
    assessments.value = results.flat()

    // 3. Fetch Submissions / Results
    const resSub = await fetch('/api/method/lms.lms.v2_api.get_quiz_submissions')
    const dataSub = await resSub.json()
    submissions.value = dataSub.message || []

  } catch (e) {
    console.error('Failed to fetch exams hub data:', e)
  } finally {
    loading.value = false
  }
}

function startExam(exam) {
  router.push(`/portal/exams/${exam.name}/take`)
}

watch([user, authLoading], ([newUser, newLoading]) => {
  if (newUser && !newLoading) {
     fetchData()
  }
}, { immediate: true })

onMounted(() => {
  if (user.value && !authLoading.value) {
     fetchData()
  }
})
</script>

