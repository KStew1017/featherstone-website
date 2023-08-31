'use client';

import { Reveal } from "@/components/reveal";
import LocationCard from "./LocationCard";
import LocationMap from "./LocationMap";


const LocationSection = () => {
    return (
        <section id="location" className="bg-tan-100 z-30 relative">
            <Reveal hiddenVariant="hiddenY" visibleVariant="visibleY" delay={0.5}>
                <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] lg:max-w-[1250px] min-h-[600px] items-center mx-auto lg:mb-[125px] lg:mt-[125px] mb-[50px]">
                    <LocationCard />
                    <LocationMap />
                </div>
            </Reveal>
        </section>
    )
};

export default LocationSection;