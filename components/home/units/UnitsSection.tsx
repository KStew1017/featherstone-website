import prisma from "@/prisma/client"


const Units = async () => {
    const units = await prisma.units.findMany();

    const getUnitNumber = (unit: any) => {
        if (unit.number.length === 1) {
            return `${unit.number}`;
        } else {
            return `${unit.number[0]} - ${unit.number[unit.number.length - 1]}`
        }
    }

    return (
        <section className={`grid gap-y-[50px] lg:gap-y-[100px] grid-rows-[${units.length}] w-[90%] lg:max-w-[1250px] items-center mx-auto mb-[50px] mt-[50px] lg:mb-[100px] lg:mt-[100px]`}>
            <div className="grid grid-cols-10 items-center">
                {units.map(unit => (
                    <div className="col-span-full bg-light-grey my-[25px] rounded-[50px]">
                        <div className="flex flex-col items-center">
                            <h1 className="text-grey font-serif font-bold text-[36px] lg:text-[60px]">{getUnitNumber(unit)}</h1>
                            <p className="text-grey font-sans text-[14px] lg:text-[20px]">{unit.square_feet} sq. ft.</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Units;