'use client';


import PerkCard from "./PerkCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faCameraAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import tailwindCustomColors from "@/app/utils/tailwindConfigColors";
import { Reveal } from "@/components/reveal";
import React from "react";
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


const PerkTiles = () => {
    const lockIcon = <FontAwesomeIcon icon={faLock} size="3x" color={tailwindCustomColors.gold} />;
    const cameraIcon = <FontAwesomeIcon icon={faCameraAlt} size="3x" color={tailwindCustomColors.gold} />;
    const mapIcon = <FontAwesomeIcon icon={faMapLocationDot} size="3x" color={tailwindCustomColors.gold} />;

    return (
            <div className="hidden lg:grid lg:max-w-[1250px] w-[90%] mx-auto">
                <div className="grid grid-cols-11 items-center">
                    <Reveal hiddenVariant="hiddenXNeg" visibleVariant="visibleXNeg" delay={0.5} styling={"col-span-3"}>
                        <PerkCard
                            icon={lockIcon}
                            title={<GateTitle styling={titleStyling} />}
                            content={<GateContent styling={contentStyling} />}
                        />
                    </Reveal>
                    <Reveal hiddenVariant="hiddenScale" visibleVariant="visibleScale" delay={0.25} styling={"col-start-5 col-span-3"}>
                        <PerkCard
                            icon={cameraIcon}
                            title={<SurveillanceTitle styling={titleStyling} />}
                            content={<SurveillanceContent styling={contentStyling} />}
                        />
                    </Reveal>
                    <Reveal hiddenVariant="hiddenXPos" visibleVariant="visibleXPos" delay={0.5} styling={"col-start-9 col-span-3"}>
                        <PerkCard
                            icon={mapIcon}
                            title={<LocalTitle styling={titleStyling} />}
                            content={<LocalContent styling={contentStyling} />}
                        />
                    </Reveal>
                </div>
            </div>
    );
}

export default PerkTiles;