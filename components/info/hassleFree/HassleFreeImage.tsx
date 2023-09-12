import Image from 'next/image'
import { FC } from 'react'


type HassleFreeCardProps = {
    imageSrc: string | any;
    imageAlt: string;
};

const HassleFreeImage: FC<HassleFreeCardProps> = ({ imageSrc, imageAlt }) => {
    return (
        <div className="col-span-full lg:col-end-11 lg:col-span-4 relative w-full h-[200px] lg:h-[90%]">
            <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes='(max-width: 1023px) 100vw, 50vw'
                className="lg:rounded-[50px] rounded-t-[25px] object-cover"
            />
        </div>
    )
}

export default HassleFreeImage;