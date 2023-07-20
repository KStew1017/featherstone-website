import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
        colors: {
            'dark-grey': '#455353',
            'light': '#E4E3DD'
        },
        transitionTimingFunction: {
            's-curve': 'cubic-bezier(0.075, 0.82, 0.165, 1)'
        },
        dropShadow: {
            'light': '0px 0px 10px rgba(255, 255, 255, 0.25)'
        }
    },
    fontFamily: {
        sans: ['var(--font-jost)'],
        serif: ['var(--font-ptserif)'],
    }
  },
  darkMode: "class",
  plugins: [nextui()],
}
