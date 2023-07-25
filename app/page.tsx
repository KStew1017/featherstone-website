import Hero from "@/components/home/hero/Hero";
import InfoSection from "@/components/home/info/InfoSection";
import { siteConfig } from "@/config/site";


const Home = async () => {
    return (
        <>
            <Hero siteName={siteConfig.name} />
            <InfoSection />
        </>
    );
};

export default Home;
