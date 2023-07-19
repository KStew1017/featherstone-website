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
        }
    },
    fontFamily: {
        'ptserif': 'PT Serif, serif',
        'jost': 'Jost, sans-serif',
        'montserrat': 'Montserrat, sans-serif',
        'inter': 'Inter, sans-serif',
        'poppins': 'Poppins, sans-serif',
    }
  },
  darkMode: "class",
  plugins: [nextui()],
}
