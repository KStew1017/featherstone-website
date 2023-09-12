import { FC } from "react";
import HassleFreeImage from "./HassleFreeImage";
import InfoCard from "../InfoCardContent";
import { Reveal } from "@/components/reveal";
import { HassleFreeContent } from "./HassleFreeCard";
import { HassleFreeCard } from "./HassleFreeCard";


interface HassleFreeCardProps {
    imageAlt: string;
    title: string;
};

const HassleFreeRow: FC<HassleFreeCardProps> = ({ imageAlt, title }) => {
    return(
        <Reveal hiddenVariant="hiddenY" visibleVariant="visibleY" delay={0.2 + Math.random() * 0.4}>
            <div className="hidden lg:grid grid-cols-10 items-center lg:mb-[125px]">
                <HassleFreeCard title={title} />
                <HassleFreeImage
                    imageAlt={imageAlt}
                />
            </div>

            <div className="lg:hidden grid grid-rows-auto grid-cols-10 items-center">
                <HassleFreeImage
                    imageAlt={imageAlt}
                />
                <div className="col-span-full">
                    <Reveal hiddenVariant="hiddenYShort" visibleVariant="visibleY" delay={0.2 + Math.random() * 0.4}>
                        <InfoCard 
                            title={title}
                            content={<HassleFreeContent />}
                        />
                    </Reveal>
                </div>
            </div>
        </Reveal>
    );
};

export default HassleFreeRow;