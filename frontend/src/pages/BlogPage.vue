<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="bg-brown-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2">
        <SectionBadge label="Blog" class="mb-6" />
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Aviation <span class="font-display italic text-brown-700">Insights</span> & News
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Stay updated with the latest trends, tips, and expert advice from the world of aviation training and operations.
        </p>
      </div>
    </section>

    <!-- Blog Grid -->
    <section class="py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Loading State -->
        <div v-if="loading" class="flex justify-center py-20">
            <div class="w-12 h-12 border-4 border-brown-200 border-t-brown-600 rounded-full animate-spin"></div>
        </div>

        <!-- Content -->
        <div v-else>
            <div v-if="paginatedPosts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <router-link 
                v-for="post in paginatedPosts" 
                :key="post.id" 
                :to="'/blog/' + post.name"
                class="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group cursor-pointer h-full"
              >
                <!-- Image -->
                <div class="relative aspect-video overflow-hidden bg-gray-100">
                  <img 
                    v-if="post.image"
                    :src="post.image" 
                    :alt="post.title" 
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div v-else class="w-full h-full flex items-center justify-center text-gray-300">
                      <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                  <div class="absolute top-4 left-4">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-brown-800 shadow-sm backdrop-blur-sm">
                      {{ post.category }}
                    </span>
                  </div>
                </div>

                <!-- Content -->
                <div class="flex-1 p-6 flex flex-col">
                  <div class="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span class="flex items-center gap-1">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      {{ post.date }}
                    </span>
                    <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span class="flex items-center gap-1">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      {{ post.readTime }}
                    </span>
                  </div>

                  <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-brown-700 transition-colors line-clamp-2">
                      {{ post.title }}
                  </h3>
                  
                  <p class="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {{ post.excerpt }}
                  </p>

                  <div class="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                     <div class="flex items-center gap-2">
                        <div class="w-8 h-8 rounded-full bg-brown-50 flex items-center justify-center text-xs font-bold text-brown-700 overflow-hidden border border-brown-100">
                            {{ post.author ? post.author.charAt(0) : 'A' }}
                        </div>
                        <span class="text-xs font-medium text-gray-600">{{ post.author }}</span>
                     </div>
                     <span class="text-sm font-semibold text-brown-600 group-hover:text-brown-800 flex items-center gap-1 transition-colors">
                        Read Article
                        <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                     </span>
                  </div>
                </div>
              </router-link>
            </div>
            
            <div v-else class="text-center py-20 text-gray-500">
                <p>No blog posts found. Please check back later.</p>
            </div>

            <!-- Client-side Pagination -->
            <div v-if="totalPages > 1" class="mt-16 flex justify-center">
                <nav class="flex items-center gap-2">
                    <button 
                        @click="changePage(currentPage - 1)" 
                        :disabled="currentPage === 1"
                        :class="['w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 transition-colors', currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-50 hover:text-brown-600']"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    
                    <button 
                        v-for="page in visiblePages" 
                        :key="page"
                        @click="changePage(page)"
                        :class="[
                            'w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-all duration-200',
                            currentPage === page 
                                ? 'bg-brown-600 text-white shadow-md transform scale-105' 
                                : 'border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-brown-600'
                        ]"
                    >
                        {{ page }}
                    </button>

                    <button 
                        @click="changePage(currentPage + 1)" 
                        :disabled="currentPage === totalPages"
                        :class="['w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 transition-colors', currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-50 hover:text-brown-600']"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </nav>
            </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import SectionBadge from '../components/ui/SectionBadge.vue'

const loading = ref(true)
const currentPage = ref(1)
const itemsPerPage = 6
const allPosts = ref([])

async function fetchBlogs() {
    try {
        const res = await fetch('/api/method/lms.api.public.get_published_blogs')
        const json = await res.json()
        allPosts.value = json.message || []
    } catch (e) {
        console.error('Error fetching blog posts:', e)
        allPosts.value = []
    } finally {
        loading.value = false
    }
}

const totalPages = computed(() => {
    if (!allPosts.value.length) return 1
    return Math.ceil(allPosts.value.length / itemsPerPage)
})

const paginatedPosts = computed(() => {
    if (!allPosts.value.length) return []
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return allPosts.value.slice(start, end).map(p => ({
        id: p.name,
        name: p.name,
        route: p.route,
        title: p.title,
        category: p.blog_category,
        excerpt: p.blog_intro,
        date: p.published_on,
        author: p.blogger,
        image: p.meta_image,
        readTime: '5 min read'
    }))
})

const visiblePages = computed(() => {
    const delta = 2;
    const range = [];
    for (let i = Math.max(2, currentPage.value - delta); i <= Math.min(totalPages.value - 1, currentPage.value + delta); i++) {
        range.push(i);
    }

    if (currentPage.value - delta > 2) {
        range.unshift("...");
    }
    if (currentPage.value + delta < totalPages.value - 1) {
        range.push("...");
    }

    range.unshift(1);
    if (totalPages.value !== 1) {
        range.push(totalPages.value);
    }
    
    if (totalPages.value <= 5) {
        return Array.from({length: totalPages.value}, (_, i) => i + 1);
    }

    return range;
})

onMounted(() => {
    fetchBlogs()
})

const changePage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
}
</script>

