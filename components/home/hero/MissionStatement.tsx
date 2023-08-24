import { Warehouse } from "../../icons"
import { Reveal } from "@/components/reveal"


export default function MissionStatement() {
    return (
        <section className="flex flex-col min-h-[20%] bg-tan-100 z-10 ">
            <div className="flex gap-[90px] justify-center sm:max-w-[90%] lg:max-w-[90%] mx-auto items-center sm:pt-[35px] lg:pb-[35px]">
                <div className="hidden lg:flex">
                    <Reveal hiddenVariant="hiddenXNeg" visibleVariant="visibleXNeg" delay={0.5}>
                        <Warehouse />
                    </Reveal>
                </div>
                <Reveal hiddenVariant="hiddenY" visibleVariant="visibleY" delay={0.25}>
                    <div className="max-w-3xl text-center">
                        <p className="font-sans text-[20px] lg:text-[24px] text-grey p-5 mx-auto sm:rounded-full bg-tan-200">
                            Versatile <span className="font-bold">commercial spaces</span> tailored to fit your needs in <span className="font-bold">secure</span> and <span className="font-bold">accessible</span> warehouses.
                        </p>
                    </div>
                </Reveal>
                <div className="hidden lg:flex">
                    <Reveal hiddenVariant="hiddenXPos" visibleVariant="visibleXPos" delay={0.5}>
                        <Warehouse />
                    </Reveal>
                </div>
            </div>
        </section>
    )
}