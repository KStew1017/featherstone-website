'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faCameraAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import tailwindCustomColors from "@/utils/tailwindConfigColors";
import React from "react";
import PerkItem from "./PerkAccordionItem";
import {
    GateTitle,
    GateContent,
    SurveillanceTitle,
    SurveillanceContent,
    LocalTitle,
    LocalContent,
    titleStyling,
    contentStyling
} from "./PerkContent";
import {
    Accordion
} from '@chakra-ui/react'


const PerkAccordion = () => {
    const lockIcon = <FontAwesomeIcon icon={faLock} className="h-[25px] self-center" color={tailwindCustomColors.gold} />;
    const cameraIcon = <FontAwesomeIcon icon={faCameraAlt} className="h-[25px] self-center" color={tailwindCustomColors.gold} />;
    const mapIcon = <FontAwesomeIcon icon={faMapLocationDot} className="h-[25px] self-center" color={tailwindCustomColors.gold} />;

    return (
        <div className="lg:hidden grid grid-cols-1 w-screen lg:max-w-[1250px] mx-auto">
            <Accordion allowToggle className="grid grid-rows-auto items-center">
                <PerkItem
                    icon={lockIcon}
                    title={<GateTitle styling={titleStyling} />}
                    content={<GateContent styling={contentStyling} />}
                    id="gate"
                />
                <PerkItem
                    icon={cameraIcon}
                    title={<SurveillanceTitle styling={titleStyling} />}
                    content={<SurveillanceContent styling={contentStyling} />}
                    id="surveillance"
                />
                <PerkItem
                    icon={mapIcon}
                    title={<LocalTitle styling={titleStyling} />}
                    content={<LocalContent styling={contentStyling} />}
                    id="local"
                />
            </Accordion>
        </div>
    );
}

export default PerkAccordion;