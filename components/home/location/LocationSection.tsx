'use client';

import { Reveal } from "@/components/reveal";
import LocationCard from "./LocationCard";


const LocationSection = () => {
    return (
        <section className="bg-tan-100 z-20 relative">
            <div className="grid grid-cols-2 gap-[50px] w-[90%] lg:max-w-[1250px] items-center mx-auto py-[150px]">
                <Reveal hiddenVariant="hiddenXNeg" visibleVariant="visibleXNeg" styling="col-span-1" delay={0.2 + Math.random() * 0.4}>
                    <LocationCard bRadius="50px" />
                </Reveal>
                <Reveal hiddenVariant="hiddenXPos" visibleVariant="visibleXPos" styling="col-span-1" delay={0.2 + Math.random() * 0.4}>
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1397.3699264774343!2d-97.41629267868987!3d32.94942520946648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ddd5274925bbb%3A0x296df6472eeaeef2!2sFeatherstone%20Business%20Park!5e1!3m2!1sen!2sus!4v1693436240186!5m2!1sen!2sus" className="col-start-2 col-span-1 w-[100%] h-[500px] rounded-[50px]" allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Reveal>
            </div>
        </section>
    )
};

export default LocationSection;