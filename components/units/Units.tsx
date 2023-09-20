'use client';


import { Reveal } from "@/components/reveal";
import { Divider } from "@chakra-ui/react";
import Link from "next/link";
import { Unit } from "@/types";


const Units = ({ units }: { units: Unit[] }) => {
    const getUnitNumber = (unit: Unit) => {
        if (unit.number.length === 1) {
            return `${unit.number}`;
        } else {
            return `${unit.number[0]} - ${unit.number[unit.number.length - 1]}`;
        }
    };

    if (units.length === 0) {
        return (
            <Reveal hiddenVariant="hiddenXPos" visibleVariant="visibleXPos" styling="col-span-full" delay={0.2 + Math.random() * 0.4}>
                <p className="text-grey font-sans text-[16px] lg:text-[24px] text-center">
                    All units are currently occupied. If you are still interested, please call or contact us via <a href="/#contact" className="text-gold hover:drop-shadow-lg transition ease-s-curve">this form</a>.
                </p>
            </Reveal>
        );
    } else {
        return (
            <>
                {units.map((unit) => (
                    <Reveal key={unit.number.toString()} hiddenVariant="hiddenY" visibleVariant="visibleY" delay={0.2 + Math.random() * 0.4}>
                        <div className="md:mx-[25px] col-span-1 bg-tan-200 h-fit rounded-[50px] justify-center lg:hover:translate-y-[-15px] lg:hover:scale-105 lg:hover:drop-shadow-2xl transition-all ease-s-curve" key={unit.number.toString()}>
                            <div className="flex flex-col items-center py-[25px]">
                                <h1 className="text-grey font-serif font-bold text-[50px] lg:text-[54px] mx-auto">{getUnitNumber(unit)}</h1>
                                <p className="text-grey font-sans text-[14px] lg:text-[20px]">{unit.square_feet} sq. ft.</p>
                                <Divider borderColor={'gray'} className="w-[80%] my-[25px]" />
                                <h2 className="text-grey font-bold font-sans text-[20px] lg:text-[20px]">Amentities</h2>
                                <div className="grid grid-cols-2 grid-flow-row grid-rows-[auto,auto] w-[70%] gap-x-[50px] my-[25px]">
                                    {unit.office && (
                                        <p className="text-grey font-sans text-[16px] lg:text-[20px]">- Office Included</p>
                                        )}
                                    {unit.bathroom && (
                                        <p className="col-span-1 text-grey font-sans text-[16px] lg:text-[20px]">- Bathroom Included</p>
                                        )}
                                    <p className="col-span-1 text-grey font-sans text-[16px] lg:text-[20px]">- Internet Access</p>
                                    <p className="col-span-1 text-grey font-sans text-[16px] lg:text-[20px]">- 24/7 Gate Access</p>
                                </div>
                                <Divider borderColor={'gray'} className="w-[80%] mb-[25px]" />
                                <p className="text-grey font-sans text-[14px] lg:text-[20px]">Contact us for pricing details</p>
                                <div className="flex">
                                    <button type="button" className="bg-gold/75 hover:bg-gold text-tan-100 font-sans text-[14px] lg:text-[20px] rounded-[50px] px-[25px] py-[10px] mt-[25px] mx-[25px] hover:drop-shadow-light transition ease-s-curve"><Link href='/#contact'>Contact</Link></button>
                                    <button type="button" className="bg-green-75 hover:bg-green-100 text-tan-100 font-sans text-[14px] lg:text-[20px] rounded-[50px] px-[25px] py-[10px] mt-[25px] mx-[25px] hover:drop-shadow-light transition ease-s-curve">View Unit</button>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </>
        );
    }

};

export default Units;
