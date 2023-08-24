'use client';

import HassleFreeRow from "./hassleFree/HassleFreeRow";
import AboutUsRow from "./aboutUs/AboutUsRow";


const InfoSection = () => {
    return (
        <section className="bg-tan-100 z-20 relative">
            <div className="grid gap-y-[50px] lg:gap-y-[100px] grid-rows-2 w-[90%] lg:max-w-[1250px] items-center mx-auto mb-[50px] mt-[50px] lg:mb-[0px] lg:mt-[0px]">
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
            </div>
        </section>
    )
}

export default InfoSection;