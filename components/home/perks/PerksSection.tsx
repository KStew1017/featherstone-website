'use client';


import PerkCard from "./PerkCard";
import * as PerkContent from "./PerkContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faCameraAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import tailwindCustomColors from "@/app/utils/tailwindConfigColors";


const InfoCard = () => {
    const lockIcon = <FontAwesomeIcon icon={faLock} size="3x" color={tailwindCustomColors.gold} />;
    const cameraIcon = <FontAwesomeIcon icon={faCameraAlt} size="3x" color={tailwindCustomColors.gold} />;
    const mapIcon = <FontAwesomeIcon icon={faMapLocationDot} size="3x" color={tailwindCustomColors.gold} />;

    return (
        <section className="flex items-center bg-green-100 h-[400px]">
            <div className="grid max-w-[1250px] mx-auto">
                <div className="grid grid-cols-11 h-full">
                    <PerkCard
                        icon={lockIcon}
                        title={PerkContent.GateTitle() as unknown as string}
                        content={PerkContent.GateContent() as unknown as string}
                        class={"col-span-3"}
                    />
                    <PerkCard
                        icon={cameraIcon}
                        title={PerkContent.SurveillanceTitle() as unknown as string}
                        content={PerkContent.SurveillanceContent() as unknown as string}
                        class={"col-start-5 col-span-3"}
                    />
                    <PerkCard
                        icon={mapIcon}
                        title={PerkContent.LocalTitle() as unknown as string}
                        content={PerkContent.LocalContent() as unknown as string}
                        class={"col-start-9 col-span-3"}
                    />
                </div>
            </div>
        </section>
    );
}

export default InfoCard;