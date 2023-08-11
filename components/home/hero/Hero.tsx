import MissionStatement from "./MissionStatement";
import { FC } from "react";
import { Reveal } from "@/components/reveal";


interface Props {
    siteName: string;
}

const Hero: FC<Props> = ({ siteName }) => {
    return (
        <section className="flex flex-col min-h-screen bg-[url(../public/temp-hero.jpg)] bg-center bg-cover bg-blend-overlay bg-black/20 bg-fixed">
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