export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'About Us', to: '/about' },
      { label: 'Instructions', to: '/instructions' },
      { label: 'Terms of Use', to: '/terms' },
    ],
  },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
]

export const footerLinks = {
  main: [
    { label: 'Home', to: '/' },
    { label: 'Courses', to: '/courses' },
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Use', to: '/terms' },
    { label: 'Instructions', to: '/instructions' },
  ],
}
