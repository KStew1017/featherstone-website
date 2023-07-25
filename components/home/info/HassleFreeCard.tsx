import { FC } from "react";
import { Text } from '@nextui-org/react';
import Image from "next/image";
import InfoCard from "./InfoCard";


const HassleFreeContent: FC = () => {
    return (
        <Text color="#455353" className="font-sans text-justify text-[20px]">
            Featherstone Business Park has been and will be <span className="font-bold">locally owned and operated</span>. This means no dealing with larger companies who make it difficult to get a problem fixed or even simply pay rent. The warehouse owner has his own unit at the front of the property and is there on most days, <span className="font-bold">making communication as easy as just stopping by</span>. As a result of this, issues can be resolved extremely quickly, giving you more time to focus on your business. Additionally, there are <span className="font-bold">no contractual gimmicks or fine-prints</span>. Simply make an <span className="font-bold">initial deposit</span> (based on the monthly lease amount for your unit) and pay every month via <span className="font-bold">PayPal, Zelle, Check, Money Order, or Direct Deposit</span>.
        </Text>
    );
};

type HassleFreeCardProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
};

const HassleFreeCard: FC<HassleFreeCardProps> = ({ imageSrc, imageAlt, title }) => {
    return(
        <div className="grid grid-cols-10 items-center">
            <div className="col-span-5">
                <InfoCard
                    title={title}
                    content={<HassleFreeContent />}
                />
            </div>
            <div className="col-end-11 col-span-4 relative w-full h-[90%]">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
};

export default HassleFreeCard;