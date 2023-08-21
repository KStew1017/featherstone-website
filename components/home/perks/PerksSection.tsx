'use client';


import React from "react";
import PerkAccordion from "./PerkAccordion";
import PerkCards from "./PerkCards";


const PerksSection = () => {
    return (
        <section className="flex items-center bg-green-100 mx-auto w-[90%] lg:w-full h-fit lg:h-[500px] lg:p-0 p-[20px] rounded-[25px] lg:rounded-none lg:mb-0 mb-[50px]">
            <PerkCards />
            <PerkAccordion />
        </section>
    );
}

export default PerksSection;