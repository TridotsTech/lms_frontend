<template>
  <div class="max-w-6xl mx-auto py-10">
    <div class="flex items-center justify-between mb-10">
      <div>
        <h1 class="text-3xl font-display font-bold text-slate-900 mb-2">My Certificates</h1>
        <p class="text-slate-500">Official recognized certifications for your aviation mastery.</p>
      </div>
    </div>

    <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="i in 2" :key="i" class="h-64 bg-white border border-slate-100 rounded-[32px] animate-pulse"></div>
    </div>

    <div v-else-if="certificates.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div 
        v-for="cert in certificates" 
        :key="cert.name" 
        class="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden"
      >
         <!-- Decorative Background -->
         <div class="absolute -right-10 -top-10 w-40 h-40 bg-brown-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

         <div class="relative z-10">
            <div class="flex items-start justify-between mb-8">
              <div class="w-16 h-16 bg-brown-900 text-gold-400 rounded-2xl flex items-center justify-center shadow-lg shadow-brown-200">
                 <MedalIcon class="w-8 h-8" />
              </div>
              <div class="text-right">
                 <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Issue Date</p>
                 <p class="text-sm font-bold text-slate-700">{{ formatDate(cert.issue_date) }}</p>
              </div>
            </div>
            
            <h3 class="text-2xl font-bold text-slate-900 mb-2 group-hover:text-brown-700 transition-colors leading-tight">{{ cert.course_title }}</h3>
            <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Authorized Aviation Certification</p>
            
            <div class="flex items-center justify-between pt-6 border-t border-slate-50">
               <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                     <FileTextIcon class="w-4 h-4 text-slate-400" />
                  </div>
                  <span class="text-[10px] font-bold text-slate-400">REF: {{ cert.name }}</span>
               </div>
               
               <button @click="viewCertificate(cert)" class="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2">
                  <DownloadIcon class="w-4 h-4" />
                  Certificate
               </button>
            </div>
         </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-20 bg-white rounded-[40px] border-2 border-dashed border-slate-200">
      <div class="w-24 h-24 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-slate-300">
        <AwardIcon class="w-12 h-12" />
      </div>
      <h3 class="text-xl font-bold text-slate-900 mb-2">No Certificates Yet</h3>
      <p class="text-slate-500 max-w-sm mx-auto">Complete your training modules to earn official aviation certifications and badges.</p>
      <router-link to="/portal/library" class="mt-8 inline-block px-8 py-4 bg-brown-700 text-white font-bold rounded-2xl shadow-lg shadow-brown-100 hover:bg-brown-800 transition-all">Browse Library</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { 
  MedalIcon, 
  DownloadIcon, 
  AwardIcon, 
  FileTextIcon 
} from 'lucide-vue-next'
import { useAuth } from '../../composables/useAuth'

const { user, loading: authLoading } = useAuth()
const certificates = ref([])
const loading = ref(true)

async function fetchCertificates() {
  loading.value = true
  try {
    const res = await fetch('/api/method/lms.lms.v2_api.get_my_certificates')
    const data = await res.json()
    certificates.value = data.message || []
  } catch (e) {
    console.error('Failed to fetch certificates:', e)
  } finally {
    loading.value = false
  }
}

function formatDate(date) {
  if (!date) return 'N/A'
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
    day: 'numeric'
  })
}

function viewCertificate(cert) {
  // Frappe default print format for certificate
  window.open(`/api/method/frappe.utils.print_format.download_pdf?doctype=LMS%20Certificate&name=${cert.name}&format=${cert.template || 'Standard'}`, '_blank')
}

watch([user, authLoading], ([newUser, newLoading]) => {
  if (newUser && !newLoading) {
    fetchCertificates()
  }
}, { immediate: true })

onMounted(() => {
  if (user.value && !authLoading.value) {
    fetchCertificates()
  }
})
</script>
