'use client';


import MissionStatement from "./MissionStatement";
import { FC } from "react";
import { Reveal } from "@/components/reveal";
import { motion, useScroll, useTransform } from "framer-motion";


interface Props {
    siteName: string;
}

const Hero: FC<Props> = ({ siteName }) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 450]);

    return (
        <section className="flex flex-col min-h-screen relative ">
            <motion.div className="absolute inset-0 bg-[url(../public/temp-hero.jpg)] bg-center bg-cover bg-blend-overlay bg-black/20" style={{ y }} />
            <div className="flex-1 flex items-center p-0">
                <div className="max-w-2xl text-center mx-auto">
                    <Reveal hiddenVariant="hiddenY" visibleVariant="visibleY">
                        <h1 className="font-serif text-[36px] sm:text-[75px] md:text-[100px] font-bold text-light">{siteName}</h1>
                    </Reveal>
                </div>
            </div>
            <MissionStatement />
        </section>
    );
}

export default Hero;