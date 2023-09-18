import "@/styles/globals.css";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import { jost, ptserif, northwell, northwellSwash } from "@/utils/fonts";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata: Metadata = {
    title: {
        default: "Featherstone - Login",
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/feather-logo.png",
        shortcut: "/feather-logo.png",
        apple: "/feather-logo.png",
    },
};

export default function LoginLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en" className={`${jost.variable} ${ptserif.variable} ${northwell.variable} ${northwellSwash.variable} font-sans bg-tan-100 selection:text-tan-100 selection:bg-gold/75 scroll-smooth`}>
                <head />
                <body>
                    <Providers>
                        <div className="bg-tan-100 flex items-center justify-center h-screen">
                            {children}
                        </div>
                    </Providers>
                </body>
            </html>
        </ClerkProvider>
    )
}