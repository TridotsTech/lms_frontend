<template>
  <div class="bg-white">
    <!-- Hero / Header -->
    <section v-if="post" class="relative pt-32 pb-20 overflow-hidden">
        <!-- Background Decor -->
        <div class="absolute inset-0 z-0">
             <div class="absolute top-0 left-0 w-full h-2/3 bg-brown-50 transform -skew-y-2"></div>
        </div>

        <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
             <router-link to="/blog" class="inline-flex items-center text-brown-600 hover:text-brown-800 mb-8 font-medium text-sm transition-colors bg-white/80 backdrop-blur px-3 py-1.5 rounded-full shadow-sm">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                Back to Blog
            </router-link>

            <div class="flex flex-wrap items-center gap-3 text-sm font-medium text-gray-500 mb-6">
                <span class="bg-brown-100/50 text-brown-800 px-3 py-1 rounded-full border border-brown-100">
                    {{ post.category }}
                </span>
                <span class="flex items-center gap-1.5 ml-2">
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    {{ post.date }}
                </span>
                <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                <span class="flex items-center gap-1.5">
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {{ post.readTime }}
                </span>
            </div>

            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight tracking-tight">
                {{ post.title }}
            </h1>

            <div class="flex items-center gap-4 py-8 border-t border-gray-200/60">
                <div class="w-14 h-14 rounded-full bg-gradient-to-br from-brown-100 to-brown-200 flex items-center justify-center text-brown-700 font-bold text-xl shadow-inner border border-white">
                    {{ post.author ? post.author.charAt(0) : 'A' }}
                </div>
                <div>
                    <p class="font-bold text-gray-900 text-lg">{{ post.author }}</p>
                    <p class="text-sm text-gray-500">Aviation Expert & Contributor</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Content Section -->
    <article v-if="post" class="pb-24">
        <!-- Featured Image -->
        <div v-if="post.image" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div class="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                 <img :src="post.image" :alt="post.title" class="w-full h-full object-cover">
            </div>
        </div>

        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="prose prose-lg prose-brown mx-auto prose-img:rounded-xl prose-headings:font-bold prose-a:text-brown-600 hover:prose-a:text-brown-800" v-html="post.content">
            </div>
            
            <!-- Tags/Share (Optional) -->
            <div class="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                <div class="text-sm text-gray-500">
                    Tagged in <span class="font-medium text-gray-900">{{ post.category }}</span>
                </div>
                <div class="flex gap-4">
                     <!-- Social Placeholders -->
                </div>
            </div>
        </div>
    </article>

    <!-- Loading State -->
    <div v-else-if="loading" class="min-h-screen flex items-center justify-center bg-white">
        <div class="text-center">
            <div class="w-16 h-16 border-4 border-brown-200 border-t-brown-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p class="text-gray-500">Loading article...</p>
        </div>
    </div>

    <!-- Error State -->
    <div v-else class="min-h-screen flex flex-col items-center justify-center bg-white">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Article not found</h2>
        <p class="text-gray-500 mb-6">The article you are looking for does not exist or has been removed.</p>
        <router-link to="/blog" class="px-6 py-2 bg-brown-600 text-white rounded-lg hover:bg-brown-700 transition-colors">
            Return to Blog
        </router-link>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const loading = ref(true)
const post = ref(null)

async function fetchPost(slug) {
    loading.value = true
    post.value = null
    try {
        const params = new URLSearchParams({
            doctype: 'Blog Post',
            name: slug
        })
        const res = await fetch(`/api/method/frappe.client.get?${params}`)
        const json = await res.json()
        const data = json.message

        if (data) {
            post.value = {
                id: data.name,
                name: data.name,
                route: data.route,
                title: data.title,
                category: data.blog_category,
                content: data.content,
                date: data.published_on,
                author: data.blogger,
                image: data.meta_image,
                readTime: '5 min read'
            }
        }
    } catch (e) {
        console.error('Error fetching blog post:', e)
        post.value = null
    } finally {
        loading.value = false
    }
}

watch(() => route.params.id, (newId) => {
    if (newId) fetchPost(newId)
})

onMounted(() => {
    fetchPost(route.params.id)
})
</script>

<style>
/* Custom prose adjustments if needed */
.prose h2 {
    color: #1f2937;
    margin-top: 2em;
    margin-bottom: 1em;
}
.prose p {
    margin-bottom: 1.5em;
    line-height: 1.8;
    color: #4b5563;
}
</style>
