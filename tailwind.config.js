module.exports = {
  darkMode: 'class',
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './assets/js/**/*.js',
    './themes/careercanvas/layouts/**/*.html',
    './themes/careercanvas/assets/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' },
        },
        'typewriter': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'typewriter': 'typewriter 3s steps(40, end)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  safelist: [
    // === Gradient backgrounds ===
    // Blue
    'from-blue-100', 'to-blue-200',
    'dark:from-blue-900', 'dark:to-blue-800',
    // Green
    'from-green-100', 'to-green-200',
    'dark:from-green-900', 'dark:to-green-800',
    // Purple
    'from-purple-100', 'to-purple-200',
    'dark:from-purple-900', 'dark:to-purple-800',
    // Orange
    'from-orange-100', 'to-orange-200',
    'dark:from-orange-900', 'dark:to-orange-800',
    // Red
    'from-red-100', 'to-red-200',
    'dark:from-red-900', 'dark:to-red-800',
    // Yellow
    'from-yellow-100', 'to-yellow-200',
    'dark:from-yellow-900', 'dark:to-yellow-800',
    // Pink
    'from-pink-100', 'to-pink-200',
    'dark:from-pink-900', 'dark:to-pink-800',
    // Indigo
    'from-indigo-100', 'to-indigo-200',
    'dark:from-indigo-900', 'dark:to-indigo-800',
    // Teal
    'from-teal-100', 'to-teal-200',
    'dark:from-teal-900', 'dark:to-teal-800',

    // === Icon text colors ===
    'text-blue-600', 'dark:text-blue-300',
    'text-green-600', 'dark:text-green-300',
    'text-purple-600', 'dark:text-purple-300',
    'text-orange-600', 'dark:text-orange-300',
    'text-red-600', 'dark:text-red-300',
    'text-yellow-600', 'dark:text-yellow-300',
    'text-pink-600', 'dark:text-pink-300',
    'text-indigo-600', 'dark:text-indigo-300',
    'text-teal-600', 'dark:text-teal-300',
    'text-red-800', 'dark:text-red-200',
    'text-indigo-800', 'dark:text-indigo-200',
    'text-teal-800', 'dark:text-teal-200',
    'text-pink-800', 'dark:text-pink-200',
    'text-yellow-800', 'dark:text-yellow-200',
    'text-orange-800', 'dark:text-orange-200',
  ],
}
