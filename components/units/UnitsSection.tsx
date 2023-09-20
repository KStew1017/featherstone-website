import Units from "./Units";
import { Reveal } from "@/components/reveal";
import { Unit } from "@/types";


const UnitsSection = ({ units }: any) => {
    return (
        <section className={`grid gap-y-[50px] lg:gap-y-[100px] grid-rows-[${units.length}] w-[90%] lg:max-w-[1250px] items-center mx-auto mb-[100px] mt-[175px] lg:mb-[100px] lg:mt-[175px]`}>
            <Reveal hiddenVariant="hiddenXNeg" visibleVariant="visibleXNeg" styling="mx-auto" delay={0.2 + Math.random() * 0.4}>
                <h1 className="inline-block align-middle text-grey font-serif font-bold text-[50px] lg:text-[60px]">Available Units</h1>
            </Reveal>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-y-[50px] items-center">
                <Units units={units} />
            </div>
        </section>
    )
};

export default UnitsSection;