import { FC } from "react";
import { Text } from '@nextui-org/react';
import { Reveal} from "@/components/reveal";
import InfoCard from "./InfoCardContent";
import React from "react";
import AboutUsImage from "./AboutUsImage";
import tailwindCustomColors from "@/app/utils/tailwindConfigColors";


const AboutUsContent: FC = () => {
    return (
        <Text color={tailwindCustomColors.grey} className="font-sans text-justify text-[14px] lg:text-[20px]">
            After years of moving from warehouse to warehouse, we grew tired of never finding a place that <span className="font-bold">accommodated the needs of its renters</span>. So in 2005, Featherstone Business Park was established with the <span className="font-bold">goal of addressing this concern</span>. Since then, we have been serving businesses like yours with commercial warehouse spaces for nearly 20 years, and we take pride in knowing that we've <span className="font-bold">successfully achieved our initial goal</span>. Featherstone Business Park embraces a <span className="font-bold">helpful and friendly culture where businesses can thrive</span>, and we would love to have you apart of our community. 
        </Text>
    );
};

type AboutUsCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
};

const AboutUsRow: FC<AboutUsCardProps> = ({ imageSrc, imageAlt, title }) => {
    return(
        <Reveal hiddenVariant="hiddenY" visibleVariant="visibleY" delay={0.25}>
            <div className="hidden lg:grid grid-cols-10 items-center">
                <AboutUsImage
                    imageSrc={imageSrc}
                    imageAlt={imageAlt}
                />
                <div className="col-start-6 col-span-5">
                    <Reveal hiddenVariant="hiddenY" visibleVariant="visibleY" delay={0.5}>
                        <InfoCard 
                            title={title}
                            content={<AboutUsContent />}
                            bRadius='50px'
                        />
                    </Reveal>
                </div>
            </div>

            <div className="lg:hidden grid grid-rows-auto grid-cols-10 items-center">
                <AboutUsImage
                    imageSrc={imageSrc}
                    imageAlt={imageAlt}
                />
                <div className="col-span-full">
                    <Reveal hiddenVariant="hiddenYShort" visibleVariant="visibleY" delay={0.5}>
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