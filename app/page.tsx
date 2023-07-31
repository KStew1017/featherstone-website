import Hero from "@/components/home/hero/Hero";
import InfoSection from "@/components/home/info/InfoSection";
import PerksSection from "@/components/home/perks/PerksSection";
import { siteConfig } from "@/config/site";


const Home = async () => {
    return (
        <>
            <Hero siteName={siteConfig.name} />
            <InfoSection />
            <PerksSection />
        </>
    );
};

export default Home;
