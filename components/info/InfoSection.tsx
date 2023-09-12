'use client';

import HassleFreeRow from "./hassleFree/HassleFreeRow";
import AboutUsRow from "./aboutUs/AboutUsRow";


const InfoSection = () => {
    return (
        <section className="bg-tan-100 z-20 relative">
            <div className="grid gap-y-[50px] grid-rows-2 w-[90%] lg:max-w-[1250px] items-center mx-auto pb-[50px] pt-[50px] lg:pb-[0px] lg:pt-[0px]">
                <AboutUsRow
                    imageAlt="temp"
                    title="About Us"
                />
                <HassleFreeRow 
                    imageSrc="/temp-hero.jpg"
                    imageAlt="temp"
                    title="Hassle-Free Renting"
                />
            </div>
        </section>
    )
}

export default InfoSection;