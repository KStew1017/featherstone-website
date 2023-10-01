import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { jost, ptserif, northwell, northwellSwash } from "@/utils/fonts";


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
        icon: "/feather-logo.png",
        shortcut: "/feather-logo.png",
        apple: "/feather-logo.png",
    },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
            <html lang="en" className={`${jost.variable} ${ptserif.variable} ${northwell.variable} ${northwellSwash.variable} font-sans bg-tan-100 selection:text-tan-100 selection:bg-gold/75 scroll-smooth`}>
                <head />
                <body>
                    <Providers>
                        <div className="relative flex flex-col h-screen bg-tan-100">
                            <main>
                                <Navbar />
                                {children}
                            </main>
                        </div>
                    </Providers>
                </body>
            </html>
        </ClerkProvider>
    );
};
