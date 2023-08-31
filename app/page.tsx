import { siteConfig } from "@/config/site";
import Hero from "@/components/hero/Hero";
import InfoSection from "@/components/info/InfoSection";
import PerksSection from "@/components/perks/PerksSection";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/footer/FooterSection";
import UnitsBanner from "@/components/units/UnitsBanner";
import LocationSection from "@/components/location/LocationSection";


const Home = () => {
    return (
        <>
            <Hero title={siteConfig.name} />
            <UnitsBanner />
            <InfoSection />
            <PerksSection />
            <LocationSection />
            <ContactForm />
            <Footer />
        </>
    );
};

export default Home;
