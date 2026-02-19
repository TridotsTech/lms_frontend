<template>
  <div class="py-20 bg-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      
       <!-- Header -->
       <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-[#1E1B4B]">Frequently Asked <span class="text-[#800000]">Questions</span></h2>
      </div>

      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="border-b border-gray-100 last:border-0 pb-4">
            <button @click="toggle(index)" class="flex items-center justify-between w-full text-left py-2 focus:outline-none group">
                <span class="text-lg font-medium text-[#1E1B4B] group-hover:text-[#800000] transition-colors">{{ faq.question }}</span>
                <span class="ml-4 flex-shrink-0 text-[#800000] transform transition-transform duration-300" :class="{'rotate-180': isOpen === index}">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
            <div v-show="isOpen === index" class="mt-2 text-gray-500 leading-relaxed text-sm animate-fadeIn">
                {{ faq.answer }}
            </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(0)
const toggle = (i) => isOpen.value = isOpen.value === i ? -1 : i

const faqs = [
    { question: 'What is the duration of the CPL course?', answer: 'Our Commercial Pilot License course typically takes 12-18 months to complete, depending on weather conditions and student availability.' },
    { question: 'Do you offer job placement assistance?', answer: 'Yes! We have a dedicated placement cell that works with 50+ airline partners to help our graduates secure positions.' },
    { question: 'Is the training DGCA approved?', answer: 'Absolutely. All our courses strictly adhere to DGCA regulations and international aviation standards.' },
    { question: 'Can I pay the fees in installments?', answer: 'Yes, we offer flexible EMI options and partnership with banks for student loans.' },
]
</script>

<style scoped>
.animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
}
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>
