<template>
  <section class="bg-brown-900 py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
        {{ data.title }}
      </h2>
      <p class="text-white/70 mb-8 max-w-2xl mx-auto">
        {{ data.subtitle }}
      </p>
      <BaseButton variant="solid-white" :to="button.btn_redirect_url" size="lg">{{ button.btn_text }}</BaseButton>
    </div>
  </section>
</template>

<script setup>
import { Type } from 'lucide-vue-next';
import BaseButton from '../ui/BaseButton.vue'
import { computed } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})
const button = computed(() => {
  return JSON.parse(props.data.btn)
})
</script>
