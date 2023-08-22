import prisma from "@/prisma/client"
import Units from "./Units";


const UnitsSection = async () => {
    const units = await prisma.units.findMany({
        where: {
            occupied: true
        }
    });

    return (
        <section className={`grid gap-y-[50px] lg:gap-y-[100px] grid-rows-[${units.length}] w-[90%] lg:max-w-[1250px] items-center mx-auto mb-[50px] mt-[50px] lg:mb-[100px] lg:mt-[100px]`}>
            <h1 className="text-grey font-serif font-bold text-[36px] lg:text-[60px] mx-auto">Available Units</h1>
            <div className="grid grid-cols-2 gap-y-[50px] items-center">
                <Units units={units} />
            </div>
        </section>
    )
};

export default UnitsSection;