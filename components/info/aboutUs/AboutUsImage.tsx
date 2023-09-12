import Image from 'next/image'
import { FC } from 'react'
import image from '@/public/temp-hero.jpg'


interface AboutUsCardProps {
    imageAlt: string;
};

const AboutUsImage: FC<AboutUsCardProps> = ({ imageAlt }) => {
    return (
        <div className="col-span-full lg:col-span-4 relative w-full h-[200px] lg:h-[90%]">
            <Image
                src={image}
                alt={imageAlt}
                fill
                sizes='(max-width: 1023px) 100vw, 50vw'
                className="lg:rounded-[50px] rounded-t-[25px] object-cover"
            />
        </div>
    )
}

export default AboutUsImage;