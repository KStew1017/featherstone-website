'use client';

import HassleFreeRow from "./HassleFreeRow";
import AboutUsRow from "./AboutUsRow";


const InfoSection = () => {
    return (
        <section className="grid gap-y-[100px] grid-rows-2 max-w-[1250px] items-center mx-auto m-[100px]">
            <AboutUsRow
                imageSrc="/temp-hero.jpg"
                imageAlt="temp"
                title="About Us"
            />
            <HassleFreeRow 
                imageSrc="/temp-hero.jpg"
                imageAlt="temp"
                title="Hassle-Free Renting"
            />
        </section>
    )
}

export default InfoSection;