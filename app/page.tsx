import { siteConfig } from "@/config/site";
import Hero from "@/components/home/hero/Hero";
import InfoSection from "@/components/home/info/InfoSection";
import PerksSection from "@/components/home/perks/PerksSection";
import UnitsSection from "@/components/home/units/UnitsSection";
import ContactForm from "@/components/home/contact/ContactForm";



const Home = async () => {
    return (
        <>
            <Hero siteName={siteConfig.name} />
            <InfoSection />
            <PerksSection />
            <UnitsSection />
            <ContactForm />
        </>
    );
};

export default Home;
