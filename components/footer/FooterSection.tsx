'use client';

import FooterCard from "./FooterCard";
import * as FooterCardContent from "./FooterContent";
import { BrandTan } from "@/components/icons";
import { Card } from "@nextui-org/react";



const Footer = ({ units, styling }: { units?: any, styling?: string}) => {
    const unitsAvailable = (units && units.length === 0) ? "absolute bottom-0 w-full" : "";

    return (
        <section className={`flex items-center bg-grey h-fit py-[25px] ${unitsAvailable} ${styling}`}>
            <div className="grid max-w-[90%] mx-auto">
                <div className="grid grid-cols-11 h-full ">
                    <FooterCard
                        header={<BrandTan />}
                        content1={<FooterCardContent.BrandContent1 />}
                        styling={"col-span-3 justify-self-start overflow-hidden h-auto w-auto"}
                    />
                    <Card.Divider className="rotate-90 self-center" />
                    <FooterCard
                        header={<FooterCardContent.ContactUsHeader />}
                        content1={<FooterCardContent.ContactUsContent1 />}
                        content2={<FooterCardContent.ContactUsContent2 />}
                        styling={"col-start-5 col-span-3 overflow-hidden"}
                    />
                    <Card.Divider className="rotate-90 self-center" />
                    <FooterCard
                        header={<FooterCardContent.HoursHeader />}
                        content1={<FooterCardContent.HoursContent1 />}
                        content2={<FooterCardContent.HoursContent2 />}
                        styling={"col-start-9 col-span-3 overflow-hidden"}
                    />
                </div>
            </div>
        </section>
    )
};

export default Footer;