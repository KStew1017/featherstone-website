'use client';

import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import { Brand } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import '../styles/style.css'
import { useState } from "react";
import { useMotionValueEvent } from "framer-motion";
import { UserButton } from "@clerk/nextjs";


export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const router = useRouter();
    const currentPath = usePathname();

    const [isScrolled, setIsScrolled] = useState("bg-grey/100");
    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setIsScrolled(latest > 0 ? "bg-grey/75 backdrop-blur-md" : "bg-grey/100");
    });

    return (
        <>
            <NextUINavbar
                maxWidth="xl"
                className={`z-50 ${isScrolled} fixed h-[100px] lg:h-[100px] overflow-hidden transition`}
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={() => setIsMenuOpen(!isMenuOpen)}
                classNames={{
                    item: [
                        "flex",
                        "relative",
                        "h-full",
                        "items-center",
                        "hover:drop-shadow-light",
                        "data-[active=true]:after:content-['']",
                        "data-[active=true]:after:absolute",
                        "data-[active=true]:after:top-[57px]",
                        "data-[active=true]:after:left-0",
                        "data-[active=true]:after:right-0",
                        "data-[active=true]:after:h-[5px]",
                        "data-[active=true]:after:rounded-t-[5px]",
                        "data-[active=true]:after:bg-tan-100",
                        "data-[active=true]:after:drop-shadow-light",
                    ]
                }}
            >
                <NavbarContent className="basis-full min-[0px]:max-lg:hidden" justify="start">
                    <NavbarBrand as="li" className="max-w-fit">
                        <Link className="flex justify-start items-center hover:drop-shadow-light transition ease-s-curve " href="/">
                            <Brand />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="flex basis-full lg:hidden" justify="center">
                    <NavbarBrand as="li" className="max-w-[70%] h-[80%] justify-center">
                        <Link href="/">
                            <Brand />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent
                    className="hidden sm:flex basis-1/5 sm:basis-full"
                    justify="end"
                >
                    <div className="hidden lg:flex gap-[65px] ml-2 items-center">
                        {siteConfig.navItems.map((item) => (
                            <NavbarItem
                                key={item.href}
                                isActive={item.href === currentPath}
                            >
                                <Link
                                    className="text-tan-100 text-[20px] hover:drop-shadow-light transition ease-s-curve font-serif font-bold"
                                    href={item.href === '#contact' ? '/#contact' : item.href === '#location' ? '/#location' : item.href}
                                >
                                    {item.label}
                                </Link>
                            </NavbarItem>
                        ))}
                        <NavbarItem
                            key={"user"}
                            isActive={false}
                            className="hover:drop-shadow-none"
                        >
                            <div className="transition ease-s-curve hover:drop-shadow-light">
                                <UserButton
                                    afterSignOutUrl="/"
                                    appearance={{
                                        elements: {
                                            userButtonTrigger:
                                                "focus:shadow-none",
                                            userButtonAvatarBox:
                                                "w-[50px] h-[50px] rounded-full border-2 border-gold transition ease-s-curve ",
                                        }
                                    }}
                                />
                            </div>
                        </NavbarItem>
                    </div>
                </NavbarContent>

                <NavbarContent className="lg:hidden absolute left-[5%]">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>

                <NavbarContent className="lg:hidden absolute right-[5%]">
                    <UserButton afterSignOutUrl="/" />
                </NavbarContent>

                <NavbarMenu className="bg-grey">
                    <div className="mx-auto flex flex-col gap-10 justify-center items-center pt-[75px] overflow-hidden">
                        {siteConfig.navMenuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link
                                    className="text-tan-100 font-sans text-[30px]"
                                    href={item.href}
                                >
                                    {item.label}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                    </div>
                </NavbarMenu>
            </NextUINavbar>
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="progress-bar"
            />
        </>
    );
};

