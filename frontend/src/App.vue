<template>
  <div class="min-h-screen flex flex-col">
    <TheNavbar v-if="!isAppRoute" />
    <main class="flex-1">
      <router-view />
    </main>
    <TheFooter v-if="!isAppRoute" />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import TheNavbar from './components/layout/TheNavbar.vue'
import TheFooter from './components/layout/TheFooter.vue'
import { useAuth } from './composables/useAuth'

const route = useRoute()
const { fetchUser } = useAuth()
const isAppRoute = computed(() => route.path.startsWith('/portal') || route.path.startsWith('/app'))

onMounted(() => {
  fetchUser()
})
</script>
