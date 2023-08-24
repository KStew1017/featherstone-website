'use client';


import { Reveal } from "../reveal";
import FooterCard from "./FooterCard";
import * as FooterCardContent from "./FooterContent";
import { BrandTan } from "@/components/icons";
import { Card } from "@nextui-org/react";


const Footer = () => {
    return (
        <section className="flex items-center bg-green-100 h-[250px]">
            <div className="grid max-w-[1250px] mx-auto">
                <div className="grid grid-cols-11 h-full items-center">
                    <FooterCard
                        header={<BrandTan />}
                        content1={<FooterCardContent.BrandContent1 />}
                        styling={"col-span-3 justify-self-start overflow-hidden"}
                    />
                    <Card.Divider className="rotate-90" />
                    <FooterCard
                        header={<FooterCardContent.ContactUsHeader />}
                        content1={<FooterCardContent.ContactUsContent1 />}
                        content2={<FooterCardContent.ContactUsContent2 />}
                        styling={"col-start-5 col-span-3 overflow-hidden"}
                    />
                    <Card.Divider className="rotate-90" />
                    <FooterCard
                        header={<FooterCardContent.HoursHeader />}
                        content1={<FooterCardContent.HoursContent1 />}
                        content2={<FooterCardContent.HoursContent2 />}
                        styling={"col-start-9 col-span-3 overflow"}
                    />
                </div>
            </div>
        </section>
    )
};

export default Footer;