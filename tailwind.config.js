import { nextui } from '@nextui-org/theme'

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
                'grey': '#455353',
                'light-grey': '#D9D9D9',
                'tan-100': '#E4E3DD',
                'tan-200': "#DBDBD5",
                'tan-300': '#D3D4CD',
                'gold': '#C3AC3C',
                'green-200': '#2C3D32',
                'green-100': '#34473B',
                'green-75': '#617A6B',
                'green-50': '#869F90',
                'green-25': '#A8BCB0',
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
            northwell: ['var(--font-northwell)'],
            northwellSwash: ['var(--font-northwell-swash)'],
        }
    },
    darkMode: "class",
    plugins: [nextui()],
}
