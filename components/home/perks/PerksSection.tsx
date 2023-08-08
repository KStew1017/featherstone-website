'use client';


import PerkCard from "./PerkCard";
import * as PerkContent from "./PerkContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faCameraAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import tailwindCustomColors from "@/app/utils/tailwindConfigColors";
import { Reveal } from "@/components/reveal";


const PerksSection = () => {
    const lockIcon = <FontAwesomeIcon icon={faLock} size="3x" color={tailwindCustomColors.gold} />;
    const cameraIcon = <FontAwesomeIcon icon={faCameraAlt} size="3x" color={tailwindCustomColors.gold} />;
    const mapIcon = <FontAwesomeIcon icon={faMapLocationDot} size="3x" color={tailwindCustomColors.gold} />;

    return (
        <section className="flex items-center bg-green-100 h-[500px]">
            <div className="grid max-w-[1250px] mx-auto">
                <div className="grid grid-cols-11 items-center">
                    <Reveal hiddenVariant="hiddenXNeg" visibleVariant="visibleXNeg" delay={0.5} styling={"col-span-3"}>
                        <PerkCard
                            icon={lockIcon}
                            title={<PerkContent.GateTitle />}
                            content={<PerkContent.GateContent />}
                            styling={""}
                        />
                    </Reveal>
                    <Reveal hiddenVariant="hiddenScale" visibleVariant="visibleScale" delay={0.25} styling={"col-start-5 col-span-3"}>
                        <PerkCard
                            icon={cameraIcon}
                            title={<PerkContent.SurveillanceTitle />}
                            content={<PerkContent.SurveillanceContent />}
                            styling={""}
                        />
                    </Reveal>
                    <Reveal hiddenVariant="hiddenXPos" visibleVariant="visibleXPos" delay={0.5} styling={"col-start-9 col-span-3"}>
                        <PerkCard
                            icon={mapIcon}
                            title={<PerkContent.LocalTitle />}
                            content={<PerkContent.LocalContent />}
                            styling={""}
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

export default PerksSection;