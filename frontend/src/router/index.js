import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import { useAuth } from '../composables/useAuth.js'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/home',name: 'HomeAlias', component: HomePage },
  { path: '/v2', name: 'HomeV2', component: () => import('../pages/HomePageV2.vue') },

  // App Routes (Authenticated)
  {
    path: '/portal',
    component: () => import('../layouts/AppLayout.vue'),
    redirect: '/portal/student-dashboard',
    meta: { requiresAuth: true },
    children: [
      { path: 'student-dashboard', name: 'Dashboard', component: () => import('../pages/app/Dashboard.vue') },
      { path: 'library', name: 'Library', component: () => import('../pages/app/Library.vue') },
      { path: 'course/:id', name: 'PortalCourseDetail', component: () => import('../pages/app/CourseDetail.vue') },
      { path: 'my-courses', name: 'MyCourses', component: () => import('../pages/app/MyCourses.vue') },
      { path: 'profile', name: 'Profile', component: () => import('../pages/app/Profile.vue') },
      { path: 'certificates', name: 'Certificates', component: () => import('../pages/app/Certificates.vue') },
      { path: 'exams', name: 'ExamsListGlobal', component: () => import('../pages/app/ExamsList.vue') },
      { path: 'exams/:id', name: 'ExamsList', component: () => import('../pages/app/ExamsList.vue') },
      { path: 'exams/:quizId/take', name: 'ExamsPlayer', component: () => import('../pages/app/ExamsPlayer.vue') },
    ]
  },

  // Learning Interface (Separate Layout)
  {
    path: '/portal/learn/:id',
    name: 'Learning',
    component: () => import('../pages/app/LearningPage.vue'),
    meta: { requiresAuth: true }
  },

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
  { path: '/signup', name: 'SignUp', component: () => import('../pages/SignUpPage.vue') },
  { path: '/forgot-password', name: 'ForgotPassword', component: () => import('../pages/ForgotPasswordPage.vue') },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

let authChecked = false;

router.beforeEach(async (to, from, next) => {
  const { user, fetchUser } = useAuth()

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authChecked) {
      await fetchUser()
      authChecked = true
    }
    if (!user.value) {
      next({ name: 'Login', query: { redirect: to.fullPath } })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
