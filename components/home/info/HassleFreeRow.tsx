import { FC } from "react";
import { Text } from '@nextui-org/react';
import HassleFreeImage from "./HassleFreeImage";
import InfoCard from "./InfoCardContent";
import tailwindCustomColors from "@/app/utils/tailwindConfigColors";
import { Reveal } from "@/components/reveal";


const HassleFreeContent: FC = () => {
    return (
        <Text color={tailwindCustomColors.grey} className="font-sans text-justify text-[11px] lg:text-[20px]">
            Featherstone Business Park has been and will be <span className="font-bold">locally owned and operated</span>. This means no dealing with larger companies who make it difficult to get a problem fixed or simply pay rent. The warehouse owner has his own unit at the front of the property and is there on most days, <span className="font-bold">making communication as easy as just stopping by</span>. As a result of this, issues can be resolved extremely quickly, giving you more time to focus on your business. Additionally, there are <span className="font-bold">no contractual gimmicks or fine-prints</span>. Simply make an <span className="font-bold">initial deposit</span> and pay every month via <span className="font-bold">PayPal, Zelle, Check, Money Order, or Direct Deposit</span>.
        </Text>
    );
};

type HassleFreeCardProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
};

const HassleFreeRow: FC<HassleFreeCardProps> = ({ imageSrc, imageAlt, title }) => {
    return(
        <Reveal hiddenVariant="hiddenY" visibleVariant="visibleY" delay={0.25}>
            <div className="hidden lg:grid grid-cols-10 items-center">
                <div className="col-span-5">
                    <Reveal hiddenVariant="hiddenY" visibleVariant="visibleY" delay={0.5}>
                        <InfoCard 
                            title={title}
                            content={<HassleFreeContent />}
                            bRadius='50px'
                        />
                    </Reveal>
                </div>
                <HassleFreeImage
                    imageSrc={imageSrc}
                    imageAlt={imageAlt}
                />
            </div>

            <div className="lg:hidden grid grid-rows-auto grid-cols-10 items-center">
                <HassleFreeImage
                    imageSrc={imageSrc}
                    imageAlt={imageAlt}
                />
                <div className="col-span-full">
                    <Reveal hiddenVariant="hiddenY" visibleVariant="visibleY" delay={0.5}>
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