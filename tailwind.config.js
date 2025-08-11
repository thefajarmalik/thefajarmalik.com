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
    'from-blue-100', 'to-blue-200',
    'dark:from-blue-900', 'dark:to-blue-800',
    'from-green-100', 'to-green-200',
    'dark:from-green-900', 'dark:to-green-800',
    'from-purple-100', 'to-purple-200',
    'dark:from-purple-900', 'dark:to-purple-800',
    'from-orange-100', 'to-orange-200',
    'dark:from-orange-900', 'dark:to-orange-800',
    'from-red-100', 'to-red-200',
    'dark:from-red-900', 'dark:to-red-800',
    'text-green-600', 'dark:text-green-300',
    'text-purple-600', 'dark:text-purple-300',
    'text-orange-600', 'dark:text-orange-300',
    'text-red-600', 'dark:text-red-300'
  ]
}
