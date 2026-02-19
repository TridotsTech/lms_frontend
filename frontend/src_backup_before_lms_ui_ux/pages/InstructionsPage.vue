<template>
  <div>
    <section class="bg-brown-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge label="Instructions" />
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          How to Use <span class="font-display italic text-brown-700">Course Flick</span>
        </h1>
        <p class="text-gray-500 max-w-2xl mx-auto text-lg">
          Everything you need to know to get started, navigate the platform, and make the most of your learning experience.
        </p>
      </div>
    </section>

    <section class="py-16 lg:py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Getting Started -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">Getting Started</h2>
          <div class="space-y-6">
            <div v-for="(step, i) in gettingStarted" :key="i" class="flex gap-5">
              <div class="w-10 h-10 rounded-full bg-brown-700 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                {{ i + 1 }}
              </div>
              <div class="pt-1.5">
                <h3 class="text-base font-semibold text-gray-900 mb-1">{{ step.title }}</h3>
                <p class="text-sm text-gray-500 leading-relaxed">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigating Your Dashboard -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Navigating Your Dashboard</h2>
          <p class="text-sm text-gray-500 leading-relaxed mb-6">Once logged in, your dashboard is your home base. Here's what you'll find:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="item in dashboardItems" :key="item.title" class="bg-brown-50 rounded-xl p-5">
              <div class="flex items-center gap-3 mb-2">
                <svg class="w-5 h-5 text-brown-700" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
                </svg>
                <h3 class="text-sm font-semibold text-gray-900">{{ item.title }}</h3>
              </div>
              <p class="text-sm text-gray-500 leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>

        <!-- Taking a Course -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Taking a Course</h2>
          <p class="text-sm text-gray-500 leading-relaxed mb-6">Here's what a typical learning experience looks like on Course Flick:</p>
          <div class="border border-gray-200 rounded-2xl overflow-hidden divide-y divide-gray-200">
            <div v-for="(item, i) in courseFlow" :key="i" class="flex items-start gap-4 px-5 py-4">
              <span class="w-7 h-7 rounded-lg bg-brown-50 text-brown-700 flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <div>
                <h3 class="text-sm font-semibold text-gray-900 mb-0.5">{{ item.title }}</h3>
                <p class="text-sm text-gray-500 leading-relaxed">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Certificates -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Earning Your Certificate</h2>
          <div class="bg-brown-50 rounded-2xl p-6 sm:p-8">
            <p class="text-sm text-gray-500 leading-relaxed mb-4">
              Upon completing all modules and passing the required assessments in a course, you will automatically receive a digital Certificate of Completion. Here's what you need to know:
            </p>
            <ul class="space-y-3">
              <li v-for="(point, i) in certInfo" :key="i" class="flex items-start gap-3">
                <div class="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                </div>
                <p class="text-sm text-gray-600">{{ point }}</p>
              </li>
            </ul>
          </div>
        </div>

        <!-- Tips -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Tips for Success</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="tip in tips" :key="tip" class="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4">
              <svg class="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p class="text-sm text-gray-600">{{ tip }}</p>
            </div>
          </div>
        </div>

        <!-- Need Help -->
        <div class="bg-brown-900 rounded-2xl p-8 text-center">
          <h2 class="text-2xl font-bold text-white mb-3">Need Help?</h2>
          <p class="text-white/60 mb-6 max-w-md mx-auto text-sm">If you run into any issues or have questions about using the platform, our support team is here to help.</p>
          <BaseButton variant="solid-white" to="/contact">Contact Support</BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import SectionBadge from '../components/ui/SectionBadge.vue'
import BaseButton from '../components/ui/BaseButton.vue'

const gettingStarted = [
  { title: 'Create Your Account', description: 'Sign up with your email address and set a secure password. Fill in your basic profile information so we can personalize your experience.' },
  { title: 'Browse Available Courses', description: 'Visit the Courses page to explore our catalog. Use the category filters to narrow down courses by training pathway — Aviation Security, Cabin Crew, Airline Operations, Flight Dispatch, or Ground Operations.' },
  { title: 'Enroll in a Course', description: 'Click on any course to view its full details, including curriculum, learning outcomes, instructor, and prerequisites. When you\'re ready, click "Enroll Now" to get started.' },
  { title: 'Start Learning', description: 'Access your enrolled courses from your dashboard. Work through the modules at your own pace — each lesson builds on the previous one, so we recommend following the curriculum in order.' },
  { title: 'Complete & Get Certified', description: 'Finish all modules and pass any required assessments. Your certificate will be generated automatically and available for download from your dashboard.' },
]

const dashboardItems = [
  { title: 'My Courses', description: 'View all courses you\'re currently enrolled in with progress indicators for each.', icon: 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25' },
  { title: 'Progress Tracking', description: 'See how far along you are in each course with visual progress bars and lesson completion status.', icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z' },
  { title: 'Certificates', description: 'Access and download your earned certificates anytime. Share them directly or add to your professional profiles.', icon: 'M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z' },
  { title: 'Profile Settings', description: 'Update your personal information, change your password, and manage notification preferences.', icon: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z' },
]

const courseFlow = [
  { title: 'Access your course', description: 'Go to "My Courses" on your dashboard and click the course you want to continue. You\'ll land on the course overview page.' },
  { title: 'Work through modules in order', description: 'Each course is organized into modules. Within each module, you\'ll find individual lessons covering specific topics. Complete them sequentially for the best learning experience.' },
  { title: 'Watch video content', description: 'Many lessons include video explanations from industry instructors. You can pause, rewind, and rewatch videos as many times as you need.' },
  { title: 'Read supplementary material', description: 'Each lesson may include written content, diagrams, documents, or external reference links to deepen your understanding.' },
  { title: 'Complete quizzes and assessments', description: 'Some modules include quizzes to test your understanding. You\'ll typically need to achieve a passing score to progress. You may retake quizzes if needed.' },
  { title: 'Track your progress', description: 'Your progress is saved automatically. A progress bar on each course shows your overall completion percentage.' },
  { title: 'Earn your certificate', description: 'Once all modules and assessments are completed, your certificate is generated automatically and added to your Certificates section.' },
]

const certInfo = [
  'Certificates are generated automatically upon completing all course requirements',
  'Each certificate includes your name, the course title, completion date, and a unique credential ID',
  'You can download certificates as PDF files from your dashboard at any time',
  'Certificates can be shared on LinkedIn, attached to job applications, or presented to employers',
  'Certificates remain accessible in your account indefinitely — they never expire',
]

const tips = [
  'Set a consistent learning schedule — even 30 minutes a day adds up quickly',
  'Take notes as you go through lessons to reinforce key concepts',
  'Complete quizzes soon after finishing the related module while the material is fresh',
  'Use the course discussion areas to ask questions and connect with fellow learners',
  'Review modules you found challenging before moving to the next section',
  'Download your certificate promptly and add it to your LinkedIn profile',
]
</script>
