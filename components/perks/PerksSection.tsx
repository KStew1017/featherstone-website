'use client';

import React from "react";
import PerkAccordion from "./PerkAccordion";
import PerkCards from "./PerkCards";
import { Reveal } from "../reveal";


const PerksSection = () => {
    return (
        <section className="flex items-center bg-green-100 mx-auto w-[90%] lg:w-full h-fit lg:h-[500px] lg:p-0 p-[20px] rounded-[25px] lg:rounded-none lg:mb-0 mb-[50px] relative overflow-hidden">
            <PerkCards />
            <Reveal hiddenVariant="hiddenXNeg" visibleVariant="visibleXNeg" styling="top-0 left-0 w-[90%] h-full lg:hidden">
                <PerkAccordion />
            </Reveal>
        </section>
    );
}

export default PerksSection;