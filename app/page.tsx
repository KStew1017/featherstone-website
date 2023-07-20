import Hero from "@/components/hero";


export default function Home() {
    return (
        <section>
            <section className="flex flex-col min-h-screen bg-[url(../public/temp-hero.jpg)] bg-center bg-cover bg-blend-overlay bg-black/20 bg-fixed">
                <Hero />
            </section>
            <section className="flex flex-col min-h-screen ">
                
            </section>
        </section>
    );
}