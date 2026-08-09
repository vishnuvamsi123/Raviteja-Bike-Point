/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0D0204',
          card: '#180508',
          cardHover: '#24080D',
          red: '#8B0000',
          redBright: '#B31217',
          gold: '#D4AF37',
          goldLight: '#F3C649',
          goldGlow: 'rgba(212, 175, 55, 0.25)',
          text: '#FFFFFF',
          muted: '#A39294',
          border: 'rgba(212, 175, 55, 0.15)'
        }
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        serif: ['"Cinzel"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
        'glow': 'glow 3s ease-in-out infinite alternate'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(212, 175, 55, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(212, 175, 55, 0.6), 0 0 15px rgba(139, 0, 0, 0.4)' }
        }
      }
    },
  },
  plugins: [],
}
