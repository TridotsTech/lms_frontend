# LMS Application UI/UX Implementation Plan

## Objective
Apply the "Premium Aviation" theme and UI/UX from the `lms_frontend` marketing site (HomepageV5, Blog) to the **LMS Application (Student Dashboard & Learning Interface)**. The goal is to create a seamless, high-end experience where the transition from "browsing" to "learning" feels natural and professional.

## Current State
- **Marketing Site**: High-quality, premium design (`bg-brown-50`, `font-display`, `text-gold-500`).
- **LMS Application**: Currently missing from the frontend or relies on default Frappe views.
- **Gap**: Users experience a disconnect when moving from the beautiful homepage to the functional LMS backend.

## Proposed Architecture
We will build the entire LMS Student Application as part of the Vue frontend Single Page Application (SPA). This ensures 100% design fidelity and a snappy user experience.

### 1. New Route Structure
All authenticated routes will live under `/app`:
- `/app/dashboard`: Main student overview (Stats, Recent Activity).
- `/app/my-courses`: Grid of enrolled courses.
- `/app/learn/:courseId`: The Learning Interface (Video Player + Sidebar).
- `/app/profile`: Student settings and profile management.
- `/app/certificates`: Downloadable achievements.

### 2. Design System Application (The "Premium Aviation" Theme)
Apply the following design tokens strictly:

#### Color Palette
- **Backgrounds**: `bg-brown-50` (Page bg), `bg-white` (Cards/Panels).
- **Primary Text**: `text-gray-900` (Headings), `text-brown-900` (Accents).
- **Secondary Text**: `text-gray-500` (Body text).
- **Brand Accents**: `text-gold-500` (Icons/Highlights), `bg-brown-700` (Primary Buttons).
- **Borders**: `border-brown-100` / `border-gray-100`.

#### Typography
- **Headings (H1, H2)**: `font-display` (Serif, Italic for emphasis) -> e.g., `Welcome Back, <span class="italic text-brown-700">Pilot</span>`.
- **Body**: `font-sans` (Inter/System UI).
- **Labels/Badges**: Uppercase, tracked, `text-xs font-bold`.

### 3. Key Views Breakdown

#### A. Student Dashboard (`/app/dashboard`)
*Concept: A pilot's cockpit view of their progress.*
- **Header**: "Welcome back, {Name}". Large, premium typography.
- **Stats Row**: 3 Cards showing `Courses in Progress`, `Certificates Earned`, `Learning Hours`. Icons in Gold/Brown.
- **"Continue Learning" Section**: A prominent "Hero Card" for the most recently accessed course. Large thumbnail, progress bar, "Resume" button.
- **Recent Activity**: A timeline of completed lessons or achievements.

#### B. My Courses Grid (`/app/my-courses`)
*Concept: Your personal hangar.*
- Re-use the premium `CourseCard` component but with added "Progress" indicators.
- Filter by status: `In Progress`, `Completed`, `Certifications`.

#### C. The Learning Interface (`/app/learn/:id`)
*Concept: Distraction-free flight deck.*
- **Layout**: 
  - **Left Sidebar (25%)**: Module/Lesson tree. collapsible.
  - **Main Content (75%)**: Video Player / Content Area.
- **Video Player**: Custom skin or styled wrapper. No default browser controls if possible.
- **Theme**: Dark mode option for this view specifically to reduce eye strain (simulating "Night Flight").
- **Navigation**: "Next Lesson" button (Floating or fixed bottom bar).

#### D. Certificates (`/app/certificates`)
*Concept: Achievements worth framing.*
- **List View**: elegant list of earned certificates.
- **Preview**: Modal showing the certificate.
- **Action**: "Download PDF" and "Share to LinkedIn" buttons.

## Implementation Steps

### Phase 1: Foundation (Today)
1.  **Router Setup**: Define the `/app` routes and a `MainLayout` component for the authenticated area (with Sidebar/TopNav).
2.  **Auth Guard**: Ensure only logged-in users access these routes.
3.  **Layout Component**: Create `AppLayout.vue` with a premium Sidebar navigation.

### Phase 2: Dashboard & Courses
1.  **Dashboard.vue**: Build the stats row and "Resume Course" hero unit.
2.  **MyCourses.vue**: Implement the grid view with progress bars.

### Phase 3: Learning Information
1.  **LearningLayout.vue**: Specialized layout for the course player (minimized distractions).
2.  **VideoPlayer.vue**: Premium wrapper for video content.
3.  **LessonContent.vue**: Prose-styled text content (using the blog's typography rules).

## Next Action
I recommend we start by creating the **App Layout** and the **Dashboard** to give the user an immediate landing spot after login.
