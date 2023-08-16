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


export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const router = useRouter();
    const currentPath = usePathname();

    return (
        <NextUINavbar
            maxWidth="xl"
            className="bg-grey/75 z-50 backdrop-blur-md backdrop-filter fixed h-[15%] max-h-[100px] lg:h-[100px] overflow-hidden"
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
                <ul className="hidden lg:flex gap-[65px] ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem
                            key={item.href}
                            isActive={item.href === currentPath}
                        >
                            <Link
                                className="text-tan-100 text-[20px] hover:drop-shadow-light transition ease-s-curve font-serif font-bold"
                                href={item.href === '#contact' ? '/#contact' : item.href}
                            >
                                {item.label}
                            </Link>
                        </NavbarItem>
                    ))}
                </ul>
            </NavbarContent>

            <NavbarContent className="lg:hidden absolute right-[5%]">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarMenu className="bg-grey/75 top-[7.8%]">
                <div className="mx-auto flex flex-col gap-10 justify-center items-center mt-[50px] overflow-hidden">
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
    );
};
