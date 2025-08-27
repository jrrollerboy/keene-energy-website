/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Keene Energy Brand Colors
        brand: {
          gray: '#b9b2ad',
          black: '#151515',
          'dark-gray': '#3b3b3b',
          'light-gray': '#d3d3d3',
          white: '#ffffff',
          gold: '#d49f42', // Primary CTA color
          'dark-blue': '#1e3a50', // Trust/authority color
          'medium-blue': '#0d4167',
          'teal-blue': '#2d4a5e',
        },
      },
      fontFamily: {
        'heading': ['Roboto', 'sans-serif'],
        'body': ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        'heading': '700', // Bold for headings
        'body-normal': '400',
        'body-medium': '500',
        'body-semibold': '600',
      }
    },
  },
  plugins: [],
}