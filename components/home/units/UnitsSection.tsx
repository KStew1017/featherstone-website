import prisma from "@/prisma/client"
import Units from "./Units";
import { Reveal } from "@/components/reveal";


const UnitsSection = async () => {
    const units = await prisma.units.findMany({
        where: {
            occupied: true
        }
    });

    return (
        <section className={`grid gap-y-[50px] lg:gap-y-[100px] grid-rows-[${units.length}] w-[90%] lg:max-w-[1250px] items-center mx-auto mb-[50px] mt-[50px] lg:mb-[100px] lg:mt-[100px]`}>
            <Reveal hiddenVariant="hiddenXNeg" visibleVariant="visibleXNeg" styling="mx-auto" delay={0.2 + Math.random() * 0.4}>
                <h1 className="inline-block align-middle text-grey font-serif font-bold text-[36px] lg:text-[60px]">Available Units</h1>
            </Reveal>
            <div className="grid grid-cols-2 gap-y-[50px] items-center">
                <Units units={units} />
            </div>
        </section>
    )
};

export default UnitsSection;