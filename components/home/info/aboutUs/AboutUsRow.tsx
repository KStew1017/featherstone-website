import { FC } from "react";
import { Reveal} from "@/components/reveal";
import InfoCard from "../InfoCardContent";
import React from "react";
import AboutUsImage from "./AboutUsImage";
import { AboutUsContent } from "./AboutUsCard";
import { AboutUsCard } from "./AboutUsCard";


interface AboutUsCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
};

const AboutUsRow: FC<AboutUsCardProps> = ({ imageSrc, imageAlt, title }) => {
    return (
        <Reveal hiddenVariant="hiddenY" visibleVariant="visibleY" delay={0.2 + Math.random() * 0.4}>
            <div className="hidden lg:grid grid-cols-10 items-center lg:mt-[65px]">
                <AboutUsImage
                    imageSrc={imageSrc}
                    imageAlt={imageAlt}
                />
                <AboutUsCard title={title} />
            </div>

            <div className="lg:hidden grid grid-rows-auto grid-cols-10 items-center">
                <AboutUsImage
                    imageSrc={imageSrc}
                    imageAlt={imageAlt}
                />
                <div className="col-span-full">
                    <Reveal hiddenVariant="hiddenYShort" visibleVariant="visibleY" delay={0.2 + Math.random() * 0.4}>
                        <InfoCard 
                            title={title}
                            content={<AboutUsContent />}
                        />
                    </Reveal>
                </div>
            </div>
        </Reveal>
    );
};

export default AboutUsRow;