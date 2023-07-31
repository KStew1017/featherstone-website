import Image from 'next/image'
import { FC } from 'react'


type AboutUsCardProps = {
    imageSrc: string;
    imageAlt: string;
};

const AboutUsImage: FC<AboutUsCardProps> = ({ imageSrc, imageAlt }) => {
    return (
        <div className="col-span-4 relative w-full h-[90%]">
            <Image
                src={imageSrc}
                alt={imageAlt}
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
            />
        </div>
    )
}

export default AboutUsImage;