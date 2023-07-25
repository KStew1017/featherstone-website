'use client';

import HassleFreeCard from "./HassleFreeCard";
import AboutUsCard from "./AboutUsCard";


const InfoSection = () => {
    return (
        <div className="grid gap-y-[100px] grid-rows-2 max-w-[1250px] items-center mx-auto m-[100px]">
            <AboutUsCard />
            <HassleFreeCard />
        </div>
    )
}

export default InfoSection;