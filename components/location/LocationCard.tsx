import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import tailwindCustomColors from '@/utils/tailwindConfigColors';
import Link from 'next/link';


const LocationCard = () => {
    const mapIcon = <FontAwesomeIcon icon={faMapLocationDot} color={tailwindCustomColors.grey} />;
    const phoneIcon = <FontAwesomeIcon icon={faPhone} color={tailwindCustomColors.grey} />;

    return (
        <div className="bg-tan-200 col-span-2 lg:col-span-1 h-full items-center justify-center rounded-tl-[25px] rounded-tr-[25px] lg:rounded-tl-[50px] lg:rounded-bl-[50px] lg:rounded-tr-[0px] lg:rounded-br-[0px] p-[25px] lg:p-[50px] bg-no-repeat bg-center bg-cover border-none" style={{ backgroundImage: "url(/feather-logo-green.svg)", backgroundSize: '75% 75%' }}>
            <h1 className=" text-grey font-sans font-bold text-center lg:text-left text-[32px] md:text-[46px] lg:text-[52px] mb-[25px]">Location</h1>
            <p className="text-grey font-sans text-[16px] md:text-[18px] lg:text-[20px] text-justify">
                We are located right off of N Saginaw Blvd (Business 287) and just 2 miles from U.S. Highway 287, making our location perfect for <span className="font-bold">ease of access and convenience</span>. Additionally, with the rapid growth of the Alliance Corridor and surrounding areas, we are in the perfect location to <span className="font-bold">help you grow your business</span> in the North Fort Worth area.
            </p>
            <p className="text-grey font-sanstext-[14px] md:text-[17px] lg:text-[20px] mt-[25px] items-center flex">
                <Link href="https://www.google.com/maps/place/Featherstone+Business+Park/@32.9495606,-97.4158866,142m/data=!3m1!1e3!4m6!3m5!1s0x864ddd5274925bbb:0x296df6472eeaeef2!8m2!3d32.9496103!4d-97.415916!16s%2Fg%2F11v0ymt6lm?entry=ttu" target='_blank' className='items-center flex hover:underline mx-auto lg:mx-0'>{mapIcon} <span className='ml-[10px] lg:ml-[20px]'>2649 Blue Mound Rd W, Haslet, TX 76052</span></Link>
            </p>
            <p className="text-grey font-sans text-[16px] md:text-[18px] lg:text-[20px] mt-[25px] items-center flex">
                <Link href="tel:817-503-6579" target='_blank' className='items-center flex hover:underline mx-auto lg:mx-0'>{phoneIcon} <span className='ml-[10px] lg:ml-[20px]'>817 - 903 - 6579</span></Link>
            </p>
        </div>
    );
};

export default LocationCard;