'use client';

import HassleFreeRow from "./HassleFreeRow";
import AboutUsRow from "./AboutUsRow";


const InfoSection = () => {
    return (
        <section className="grid gap-y-[50px] lg:gap-y-[100px] grid-rows-2 w-[90%] lg:max-w-[1250px] items-center mx-auto mb-[50px] mt-[50px] lg:mb-[100px] lg:mt-[65px]">
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