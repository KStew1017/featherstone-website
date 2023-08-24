import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google"
import Northwell from "next/font/northwell"

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const fontMono = FontMono({
    subsets: ["latin"],
    variable: "--font-mono",
})

export const fontNorthwell = Northwell({
    subsets: ["latin"],
    variable: "--font-northwell",
})