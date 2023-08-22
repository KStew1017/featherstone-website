'use client';

import { Divider } from "@chakra-ui/react";

interface Unit {
    number: number[];
    square_feet: number;
    occupied: boolean;
    office: boolean;
    bathroom: boolean;
}

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
            <h1 className="text-grey font-sans text-[20px] lg:text-[30px] col-span-full mx-auto">All Units Occupied</h1>
        );
    } else {
        return (
            <>
                {units.map((unit) => (
                    <div className="mx-[25px] col-span-1 bg-light-grey h-[400px] rounded-[50px] justify-center" key={unit.number.toString()}>
                        <div className="flex flex-col items-center py-[25px]">
                            <h1 className="text-grey font-serif font-bold text-[20px] lg:text-[54px] mx-auto">{getUnitNumber(unit)}</h1>
                            <p className="text-grey font-sans text-[14px] lg:text-[20px]"><span className="font-bold">{unit.square_feet}</span> sq. ft.</p>
                            <Divider borderColor={'gray'} className="w-[80%] my-[25px]" />
                            <div className="grid grid-cols-2 w-[70%] gap-x-[50px] items-center">
                                <p className="col-span-1 text-grey font-sans text-[14px] lg:text-[20px]">
                                    {unit.office ? '- Office Included' : ''}
                                </p>
                            </div>
                            <button type="button" className="bg-green-75 hover:bg-green-100 text-tan-100 font-sans text-[14px] lg:text-[20px] rounded-[50px] px-[25px] py-[10px] mt-[25px] hover:drop-shadow-light transition ease-s-curve">View Unit</button>
                        </div>
                    </div>
                ))}
            </>
        );
    }

};

export default Units;