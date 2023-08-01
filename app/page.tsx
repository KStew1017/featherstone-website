import Hero from "@/components/home/hero/Hero";
import InfoSection from "@/components/home/info/InfoSection";
import PerksSection from "@/components/home/perks/PerksSection";
import ContactForm from "@/components/home/contact/ContactSection";
import FooterSection from "@/components/home/footer/FooterSection";
import { siteConfig } from "@/config/site";


const Home = async () => {
    return (
        <>
            <Hero siteName={siteConfig.name} />
            <InfoSection />
            <PerksSection />
            <ContactForm />
            <FooterSection />
        </>
    );
};

export default Home;
