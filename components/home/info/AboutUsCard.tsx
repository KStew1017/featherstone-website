import { FC } from "react";
import { Text } from '@nextui-org/react';
import Image from "next/image";
import InfoCard from "./InfoCard";


const AboutUsContent: FC = () => {
    return (
        <Text color="#455353" className="font-sans text-justify text-[20px]">
            After years of moving from warehouse to warehouse, we grew tired of never finding a place that <span className="font-bold">accommodated the needs of its renters</span>. So in 2005, Featherstone Business Park was established with the <span className="font-bold">goal of addressing this concern</span>. Since then, we have been serving businesses like yours with commercial warehouse spaces for nearly 20 years, and we take pride in knowing that we've <span className="font-bold">successfully achieved our initial goal</span>. Featherstone Business Park embraces a <span className="font-bold">helpful and friendly culture where businesses can thrive</span>, and we would love to have you apart of our community.
        </Text>
    );
};

const AboutUsCard: FC = () => {
    return(
        <div className="grid grid-cols-10 items-center">
            <div className="col-span-4 relative w-full h-[90%]">
                <Image
                    src="/temp-hero.jpg"
                    alt="Warehouse Icon"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="col-start-6 col-span-5">
                <InfoCard 
                    title="About Us"
                    content={<AboutUsContent />}
                />
            </div>
        </div>
    );
};

export default AboutUsCard;