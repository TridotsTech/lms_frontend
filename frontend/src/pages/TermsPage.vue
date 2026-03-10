<template>
  <div>
    <section class="bg-brown-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Use</h1>
        <p class="text-gray-400 text-sm">Last updated: February 1, 2026</p>
      </div>
    </section>

    <section class="py-16">
      <div  class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-for="section in sections" :key="section.title" class="mb-10">
          <h2 class="text-xl font-bold text-gray-900 mb-3">{{ section.title }}</h2>
          <div v-for="(para, i) in section.paragraphs" :key="i" class="text-sm text-gray-500 leading-relaxed mb-3">
            <p v-if="typeof para === 'string'">{{ para }}</p>
            <ul v-else class="list-disc pl-5 space-y-1.5">
              <li v-for="(item, j) in para" :key="j">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { domain } from '../data/helper'

const sections = [
  {
    title: '1. Acceptance of Terms',
    paragraphs: [
      'Welcome to Course Flick. These Terms of Use ("Terms") govern your access to and use of the Course Flick website, platform, courses, and related services (collectively, the "Services"). By creating an account, enrolling in a course, or otherwise using our Services, you agree to be bound by these Terms.',
      'If you do not agree with any part of these Terms, you may not access or use our Services.',
    ],
  },
  {
    title: '2. Account Registration',
    paragraphs: [
      'To access certain features of our platform, you must create an account. When registering, you agree to:',
      [
        'Provide accurate, current, and complete registration information',
        'Maintain the security and confidentiality of your login credentials',
        'Promptly update your information if it changes',
        'Accept responsibility for all activity that occurs under your account',
        'Notify us immediately of any unauthorized use of your account',
      ],
      'We reserve the right to suspend or terminate accounts that violate these Terms or that we reasonably believe are being used fraudulently.',
    ],
  },
  {
    title: '3. Course Enrollment & Access',
    paragraphs: [
      'Upon enrolling in a course on Course Flick, you are granted a limited, non-exclusive, non-transferable license to access and view the course content for your personal, non-commercial educational use.',
      'Course access is granted to the individual account holder only. Sharing your account credentials or course access with others is prohibited. We reserve the right to revoke access if sharing is detected.',
      'Course content, structure, and availability may be updated or modified at any time. We will make reasonable efforts to notify enrolled learners of significant changes.',
    ],
  },
  {
    title: '4. Intellectual Property',
    paragraphs: [
      'All content on Course Flick — including but not limited to course materials, videos, text, graphics, logos, icons, images, audio, software, and design — is the property of Course Flick or its content creators and is protected by copyright, trademark, and other intellectual property laws.',
      'You may not:',
      [
        'Copy, reproduce, distribute, or publicly display any course content',
        'Download, record, or capture course videos or materials for redistribution',
        'Modify, create derivative works from, or reverse-engineer any part of the platform',
        'Use our trademarks, logos, or branding without prior written permission',
        'Remove any copyright or proprietary notices from materials accessed through the platform',
      ],
    ],
  },
  {
    title: '5. User Conduct',
    paragraphs: [
      'When using our Services, you agree not to:',
      [
        'Use the platform for any unlawful purpose or in violation of any applicable laws',
        'Submit false, misleading, or fraudulent information',
        'Harass, abuse, or harm other users, instructors, or staff',
        'Post or transmit offensive, defamatory, or inappropriate content',
        'Attempt to gain unauthorized access to other accounts or platform systems',
        'Use automated tools (bots, scrapers) to access or interact with the platform',
        'Interfere with the security or proper functioning of the platform',
        'Submit assignments, quizzes, or assessments on behalf of another person',
      ],
    ],
  },
  {
    title: '6. Certifications',
    paragraphs: [
      'Certificates issued by Course Flick upon course completion represent that the learner has completed the course requirements as defined at the time of enrollment. Certificates are issued to the individual learner and are non-transferable.',
      'Course Flick certificates are professional development credentials. They do not replace regulatory licenses, type ratings, or mandatory certifications required by aviation authorities. Learners are responsible for verifying the specific credential requirements of their target employers or regulatory bodies.',
    ],
  },
  {
    title: '7. Payments & Refunds',
    paragraphs: [
      'Course fees are displayed at the time of enrollment and are charged in the currency indicated. All payments are processed through secure third-party payment providers.',
      'Refund requests must be submitted within 14 days of enrollment. Refunds will not be granted if you have completed more than 30% of the course content. Processing times for refunds may vary depending on your payment method.',
    ],
  },
  {
    title: '8. Disclaimers',
    paragraphs: [
      'Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the platform will be uninterrupted, error-free, or free from harmful components.',
      'Course Flick does not guarantee employment, career outcomes, or specific results from completing our courses. Career success depends on many factors beyond our training, including individual effort, market conditions, and employer requirements.',
    ],
  },
  {
    title: '9. Limitation of Liability',
    paragraphs: [
      'To the maximum extent permitted by law, Course Flick and its directors, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use our Services.',
      'Our total liability for any claim arising from these Terms or your use of the Services shall not exceed the amount you paid to Course Flick in the 12 months preceding the claim.',
    ],
  },
  {
    title: '10. Modifications to Terms',
    paragraphs: [
      'We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on our platform and updating the "Last updated" date. Continued use of the Services after changes are posted constitutes acceptance of the modified Terms.',
    ],
  },
  {
    title: '11. Governing Law',
    paragraphs: [
      'These Terms are governed by and construed in accordance with the laws of Ghana, without regard to conflict of law principles. Any disputes arising from these Terms shall be resolved in the courts of Ghana.',
    ],
  },
  {
    title: '12. Contact',
    paragraphs: [
      'For questions about these Terms, please contact us at legal@courseflick.com or visit our Contact page.',
    ],
  },
]


const pageContent = ref([])
// console.log(pageContent,"pppppp")



async function fetchPageContent() {
  try {
    let payload = {
      "route": "p/terms"
    }
    let resp = await fetch(`${domain}/api/method/go1_cms.go1_cms.api.get_page_content`, { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
    let res = await resp.json()
    if (res && res.message && res.message.page_content) {
      pageContent.value = res.message.page_content
    } else {
      pageContent.value = []
    }
  } catch (err) {
    console.error(err.message)
  }
}

onMounted(() => {
  // fetchPageContent()
})
</script>
