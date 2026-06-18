/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#06599B',
        'brand-primary-hover': '#0A6AB8',
        'brand-dark': '#044A80',
        'brand-light': '#2D7FC0',
        'brand-light-accent': '#4A8FD0',
        'brand-light-bg': '#F5F7FA',
        'white': '#FFFFFF',
        'text-dark': '#1A1A1A',
      },
    },
  },
  plugins: [],
}
