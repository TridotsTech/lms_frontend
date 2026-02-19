<template>
  <div class="max-w-4xl mx-auto py-10">
    <div class="mb-8 flex items-center justify-between">
      <button @click="router.back()" class="flex items-center gap-2 text-slate-500 hover:text-brown-700 font-bold transition-colors">
        <ArrowLeftIcon class="w-5 h-5" />
        Back to Exams
      </button>
      <div v-if="courseTitle" class="text-right">
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Enrolled Course</p>
        <p class="text-sm font-bold text-slate-900">{{ courseTitle }}</p>
      </div>
    </div>

    <QuizComponent 
      :quiz-id="quizId" 
      @completed="onCompleted"
      @close="router.back()"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeftIcon } from 'lucide-vue-next'
import QuizComponent from '../../components/app/QuizComponent.vue'

const route = useRoute()
const router = useRouter()
const quizId = route.params.quizId
const courseTitle = ref('')

async function fetchMeta() {
  try {
    // This is optional metadata to show which course this exam belongs to
    const res = await fetch(`/api/method/lms.lms.v2_api.get_quiz_details?quiz_id=${quizId}`)
    const data = await res.json()
    if (data.message) {
      // Logic to get course title if needed
    }
  } catch (e) {}
}

function onCompleted(score) {
  console.log('Exam completed with score:', score)
  // You could save result to backend here if specialized exam doctype exists
}

onMounted(() => {
  fetchMeta()
})
</script>
