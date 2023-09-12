'use client';

import MissionStatement from "./MissionStatement";
import { FC, ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";


interface Props {
    title: string;
}

const Hero: FC<Props> = ({ title }) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 450]);
    const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);
    const currentPath = usePathname();

    const isHomePage: ReactNode = (currentPath === "/") ? <MissionStatement /> : null;
    const isLocationPageMargin: string = (currentPath === "/location") ? "translate-y-[40px]" : "";
    const isLocationPageWidth: string = (currentPath === "/location") ? "max-w-[75%]" : "max-w-2xl";

    return (
        <section className={`flex flex-col h-screen relative overflow-hidden`}>
            <motion.div className="absolute inset-0 bg-[url(../public/temp-hero.jpg)] bg-center bg-cover bg-blend-overlay bg-black/20" style={{ y, scale }} />
            <div className="flex-1 flex items-center p-0">
                <div className={`${isLocationPageWidth} text-center mx-auto`}>
                    <Reveal hiddenVariant="hiddenY" visibleVariant="visibleY">
                        <h1 className={`font-serif text-[36px] sm:text-[75px] md:text-[100px] text-tan-100 drop-shadow-xl font-bold text-light ${isLocationPageMargin}`}>{title}</h1>
                    </Reveal>
                </div>
            </div>
            <>{isHomePage}</>
        </section>
    );
}

export default Hero;