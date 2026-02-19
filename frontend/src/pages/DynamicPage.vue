<template>
  <div class="min-h-screen bg-white">
    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center items-center min-h-[50vh]">
      <div class="animate-spin rounded-full h-12 w-12 border-4 border-brown-100 border-l-brown-600"></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <div class="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
        <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h1 class="text-2xl font-bold text-gray-900 mb-2">Content Not Found</h1>
      <p class="text-gray-500 max-w-md">{{ error }}</p>
      <router-link to="/" class="mt-6 text-brown-600 hover:text-brown-800 font-medium">
        Return Home
      </router-link>
    </div>

    <!-- Content -->
    <div v-else>
      <!-- Hero Section -->
      <section class="bg-brown-50 py-16 border-b border-brown-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{{ page.title }}</h1>
          <p v-if="page.description" class="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            {{ page.description }}
          </p>
        </div>
      </section>

      <!-- Main Content -->
      <section class="py-16 lg:py-20">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            class="prose prose-lg prose-brown max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-brown-600 hover:prose-a:text-brown-800 prose-img:rounded-xl prose-img:shadow-sm"
            v-html="page.main_section || page.content || '<p>No content available.</p>'"
          >
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  slug: {
    type: String,
    default: ''
  }
})

const route = useRoute()
const page = ref(null)
const loading = ref(true)
const error = ref(null)

const fetchPage = async () => {
  loading.value = true
  error.value = null
  
  // Use prop slug if available (for explicit routes like /about), otherwise use route param
  const pageSlug = props.slug || route.params.slug
  
  if (!pageSlug) {
    error.value = "No page identifier provided."
    loading.value = false
    return
  }

  try {
    // Attempt to fetch from Frappe Web Page standard API
    // Note: You must ensure 'Guest' users have read permissions on Web Page
    const response = await fetch(`/api/resource/Web Page/${pageSlug}`)
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`The page "${pageSlug}" does not exist. Please create a "Web Page" with this name in the backend.`)
      } else if (response.status === 403) {
        throw new Error('You do not have permission to view this page.')
      } else {
        throw new Error('Failed to load page content.')
      }
    }

    const data = await response.json()
    if (data.data) {
      page.value = data.data
      
      // Update document title
      document.title = `${data.data.title} - Course Flick`
    } else {
      throw new Error('Page data is empty.')
    }
  } catch (e) {
    console.error(e)
    error.value = e.message
  } finally {
    loading.value = false
  }
}

// Watch for route changes to refetch if we are in a dynamic route mode
watch(() => route.params.slug, fetchPage)

onMounted(() => {
  fetchPage()
})
</script>
