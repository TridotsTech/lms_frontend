import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/v2', name: 'HomeV2', component: () => import('../pages/HomePageV2.vue') },
  { path: '/v3', name: 'HomeV3', component: () => import('../pages/HomePageV3.vue') },
  { path: '/v4', name: 'HomeV4', component: () => import('../pages/HomePageV4.vue') },
  { path: '/v5', name: 'HomeV5', component: () => import('../pages/HomePageV5.vue') },
  { path: '/courses-static', name: 'CoursesStatic', component: () => import('../pages/CoursesPage.vue') },
  { path: '/courses-static/:id', name: 'CourseDetailStatic', component: () => import('../pages/CourseDetailPage.vue') },
  { path: '/courses', name: 'Courses', component: () => import('../pages/CoursesPageV2.vue') },
  { path: '/courses/:id', name: 'CourseDetail', component: () => import('../pages/CourseDetailPageV2.vue') },

  // Static Pages
  { path: '/about', name: 'About', component: () => import('../pages/AboutPage.vue') },
  { path: '/contact', name: 'Contact', component: () => import('../pages/ContactPage.vue') },
  { path: '/privacy', name: 'Privacy', component: () => import('../pages/PrivacyPolicyPage.vue') },
  { path: '/terms', name: 'Terms', component: () => import('../pages/TermsPage.vue') },
  { path: '/instructions', name: 'Instructions', component: () => import('../pages/InstructionsPage.vue') },

  { path: '/blog', name: 'Blog', component: () => import('../pages/BlogPage.vue') },
  { path: '/blog/:id', name: 'BlogDetail', component: () => import('../pages/BlogDetailPage.vue') },
  { path: '/login', name: 'Login', component: () => import('../pages/LoginPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

export default router
