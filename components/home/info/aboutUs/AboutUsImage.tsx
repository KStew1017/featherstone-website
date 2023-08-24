import Image from 'next/image'
import { FC } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';


type AboutUsCardProps = {
    imageSrc: string;
    imageAlt: string;
};

const AboutUsImage: FC<AboutUsCardProps> = ({ imageSrc, imageAlt }) => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], ["0%", "50%"]);

    return (
        <div className="col-span-full lg:col-span-4 relative w-full h-[200px] lg:h-[90%]" style={{ y1 }}>
            <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                objectFit="cover"
                className="lg:rounded-[50px] rounded-t-[25px]"
            />
        </div>
    )
}

export default AboutUsImage;