import { siteConfig } from "@/config/site";
import Hero from "@/components/home/hero/Hero";
import InfoSection from "@/components/home/info/InfoSection";
import PerksSection from "@/components/home/perks/PerksSection";
import ContactForm from "@/components/home/contact/ContactForm";
import Footer from "@/components/footer/FooterSection";
import UnitsBanner from "@/components/home/units/UnitsBanner";


const Home = () => {
    return (
        <>
            <Hero title={siteConfig.name} />
            <UnitsBanner />
            <InfoSection />
            <PerksSection />
            <ContactForm />
            <Footer />
        </>
    );
};

export default Home;
