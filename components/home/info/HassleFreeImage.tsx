import Image from 'next/image'
import { FC } from 'react'


type HassleFreeCardProps = {
    imageSrc: string;
    imageAlt: string;
};

const HassleFreeImage: FC<HassleFreeCardProps> = ({ imageSrc, imageAlt }) => {
    return (
        <div className="col-end-11 col-span-4 relative w-full h-[90%]">
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

export default HassleFreeImage;