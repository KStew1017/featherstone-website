import "@/styles/globals.css";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import { jost, ptserif, northwell, northwellSwash } from "@/utils/fonts";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata: Metadata = {
    title: {
        default: "Featherstone - Dashboard",
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/feather-logo.png",
        shortcut: "/feather-logo.png",
        apple: "/feather-logo.png",
    },
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en" className={`${jost.variable} ${ptserif.variable} ${northwell.variable} ${northwellSwash.variable} font-sans bg-tan-100 selection:text-tan-100 selection:bg-gold/75 scroll-smooth`}>
                <head />
                <body className="bg-tan-100">
                    <Providers>
                        <div className="relative flex flex-col h-screen items-center">
                            <div className="w-[90%] lg:max-w-[90%]">
                                {children}
                            </div>
                        </div>
                    </Providers>
                </body>
            </html>
        </ClerkProvider>
    )
}