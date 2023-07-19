import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import Image from "next/image";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-2xl text-center justify-center">
                <h1 className="font-ptserif text-[100px] font-bold text-dark-grey">{siteConfig.name}</h1>
            </div>
            <Image src="/../public/temp-hero.jpg" alt="hero" width={1440} height={1080} className="absolute" />
        </section>
    );
}
