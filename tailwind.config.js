/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EEFAF9',
          100: '#D5F3F0',
          200: '#A9E6E1',
          300: '#6FD3CB',
          500: '#12AA9E',
          DEFAULT: '#12AA9E',
          700: '#0E8A80',
          900: '#0A6B63',
        },
        primary: {
          DEFAULT: '#12AA9E',
          dark: '#0E8A80',
        },
        secondary: '#03045e',
        dark: '#0f172a',
        light: '#f8fafc',
        canvas: '#EFEFEF',
        card: {
          DEFAULT: '#FFFFFF',
          soft: '#FAFAFA',
        },
        ink: {
          DEFAULT: '#0A0A0A',
          secondary: '#6B6B6B',
          muted: '#A3A3A3',
        },
        positive: '#1E9E5A',
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'Nunito', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      borderRadius: {
        section: '28px',
        inner: '22px',
      },
      boxShadow: {
        floating: '0 20px 60px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)',
        glossy: '0 10px 24px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
