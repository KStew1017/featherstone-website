import { Warehouse } from "../../icons"


export default function MissionStatement() {
    return (
        <section className="flex flex-col min-h-[20%] bg-tan-100">
            <div className="flex gap-[90px] justify-center pt-[35px] pb-[35px]">
                <Warehouse />
                <div className="max-w-2xl text-center">
                    <p className="font-sans text-[24px] text-grey p-5 sm:rounded-full bg-tan-200">
                        Versatile <span className="font-bold">commercial spaces</span> tailored to fit your needs in <span className="font-bold">secure</span> and <span className="font-bold">accessible</span> warehouses.
                    </p>
                </div>
                <Warehouse />
            </div>
        </section>
    )
}