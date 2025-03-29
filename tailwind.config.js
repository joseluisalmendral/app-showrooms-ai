/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colores primarios basados en el logo
        'brandTeal': {
          50: '#e6f0ee',
          100: '#b0d2ca',
          200: '#8abfb1',
          300: '#5aa28f',
          400: '#3a8e7a',
          500: '#2D5C50', // Color principal del marco
          600: '#244a40',
          700: '#1b3730',
          800: '#122520',
          900: '#091210',
        },
        // Color secundario basado en la percha
        'brandCoral': {
          50: '#feefed',
          100: '#fccdca',
          200: '#fabaae',
          300: '#f6988d',
          400: '#f4857a',
          500: '#E27863', // Color de la percha
          600: '#c66051',
          700: '#984a3f',
          800: '#6b342d',
          900: '#3d1e19',
        },
        // Beige para fondos y neutrales
        'brandBeige': {
          50: '#fdfdfb',
          100: '#f9f8f0',
          200: '#F2EFDF', // Color del fondo
          300: '#e6e1c2',
          400: '#d8d1a6',
          500: '#c9c08a',
          600: '#b3a96f',
          700: '#938a57',
          800: '#6e6841',
          900: '#494529',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        // Fuentes con estilo manuscrito para títulos, para que coincidan con el logo
        handwritten: ['Caveat', 'Indie Flower', 'cursive'],
      },
    },
  },
  plugins: [],
}