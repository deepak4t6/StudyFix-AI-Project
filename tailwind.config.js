/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          light: '#EFF6FF',
          hover: '#1D4ED8',
          dark: '#1E40AF',
        },
        correct: {
          DEFAULT: '#16A34A',
          light: '#F0FDF4',
          dark: '#15803D',
        },
        wrong: {
          DEFAULT: '#DC2626',
          light: '#FEF2F2',
          dark: '#B91C1C',
        },
        weak: {
          DEFAULT: '#F59E0B',
          light: '#FFFBEB',
          dark: '#D97706',
        },
        dark: '#111827',
        subtle: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(37, 99, 235, 0.06)',
        'soft-lg': '0 12px 30px -4px rgba(37, 99, 235, 0.1)',
      },
    },
  },
  plugins: [],
}
