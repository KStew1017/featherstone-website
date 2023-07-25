import Hero from "@/components/home/hero/Hero";
import InfoSection from "@/components/home/info/InfoSection";
import { siteConfig } from "@/config/site";


export default function Home() {
    return (
        <>
            <Hero siteName={siteConfig.name} />
            <InfoSection />
        </>
    );
}
