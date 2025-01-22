/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        serviceCardBg: 'linear-gradient(to bottom right, #1E1E2F, #2C2C3F, #24243E)',
        fontBg: 'linear-gradient(to right, #13FFAA, #1E67C6, #CE84CF)',
      },
      textColor: {
        transparent: 'transparent',
      },
      boxShadow: {
        'gradient': '0px 4px 10px rgba(59, 130, 246, 0.5), 0px 4px 15px rgba(168, 85, 247, 0.5), 0px 4px 20px rgba(236, 72, 153, 0.5)',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'], 
        quicksand: ['Quicksand', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      fontWeight: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
    },
    },
  },
  plugins: [],
}
