import Hero from "@/components/home/hero/Hero";
import InfoSection from "@/components/home/info/InfoSection";
import PerksSection from "@/components/home/perks/PerksSection";
import { siteConfig } from "@/config/site";
import { prisma } from "@/prisma/client";
import ContactForm from "@/components/home/contact/ContactForm";



const Home = async () => {
    const units = await prisma.units.findMany()

    return (
        <>
            <Hero siteName={siteConfig.name} />
            <InfoSection />
            <PerksSection />
            <ContactForm />
            {units.map((unit) => (
                <div key={unit.id} className="flex mx-auto bg-slate-500">
                    <h1>{unit.id}</h1>
                    <p>{unit.building}</p>
                    <p>{unit.square_feet}</p>
                    <p>{unit.bathroom ? "bathroom included" : "no bathroom"}</p>
                    <p>{unit.office ? "office included" : "no office"}</p>
                    <p>{unit.tenant_id === null ? "Vacant" : unit.tenant_id}</p>
                </div>
            ))}
        </>
    );
};

export default Home;
