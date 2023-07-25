import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import localFont from "next/font/local";


export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
};

const jost = localFont({
    src: [
        {
            path: "../public/fonts/Jost-Regular.ttf",
            weight: "normal",
        },
        {
            path: "../public/fonts/Jost-Bold.ttf",
            weight: "bold",
        }
    ],
    variable:  '--font-jost'
});

const ptserif = localFont({
    src: [
        {
            path: "../public/fonts/PTSerif-Regular.ttf",
            weight: "normal",
        },
        {
            path: "../public/fonts/PTSerif-Bold.ttf",
            weight: "bold",
        }
    ],
    variable:  '--font-ptserif'
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${jost.variable} ${ptserif.variable} font-sans bg-tan-100`}>
            <head />
            <body>
                <Providers>
                    <div className="relative flex flex-col h-screen">
                        <main>
                            <Navbar />
                            {children}
                        </main>
                    </div>
                </Providers>
            </body>
        </html>
    );
};
