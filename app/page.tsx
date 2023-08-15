import Hero from "@/components/home/hero/Hero";
import InfoSection from "@/components/home/info/InfoSection";
import PerksSection from "@/components/home/perks/PerksSection";
import ContactForm from "@/components/home/contact/ContactSection";
import Footer from "@/components/footer/FooterSection";
import { siteConfig } from "@/config/site";
import { prisma } from "@/prisma/client";




const Home = async () => {
    const postForm = await prisma

    return (
        <>
            <Hero siteName={siteConfig.name} />
            <InfoSection />
            <PerksSection />
            <ContactForm />
            <Footer />
        </>
    );
};

export default Home;
