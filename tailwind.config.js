/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Tailwind's JIT compiler tree-shakes all unused utilities automatically.
  // Explicitly disabling `corePlugins` we know we don't use reduces the
  // number of utility classes the JIT engine has to consider.
  theme: {
    extend: {
      colors: {
        'brand-primary': '#06599B',
        'brand-primary-hover': '#0A6AB8',
        'brand-dark': '#044A80',
        'brand-secondary': '#2D7FC0',
        'brand-cyan': '#2D7FC0',
        'brand-light-accent': '#4A8FD0',
        'brand-light-bg': '#F5F7FA',
        'brand-light': '#E8F4FD',
        'white': '#FFFFFF',
        'text-dark': '#1A1A1A',
      },
      // Smooth font size scale — avoids arbitrary values in JSX
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      // Named animation durations
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  // No plugins needed — all custom animations are in globals.css
  plugins: [],
}
