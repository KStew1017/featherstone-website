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
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import NextLink from "next/link";


export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const router = useRouter();
    const currentPath = usePathname();

    return (
        <NextUINavbar
            maxWidth="xl"
            height="100px"
            className="bg-grey/75 z-50 backdrop-blur-md backdrop-filter fixed"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={() => setIsMenuOpen(!isMenuOpen)}
            isBlurred
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
                ],
            }}
        >
            <NavbarContent className="basis-full min-[0px]:max-lg:hidden" justify="start">
                <NavbarBrand as="li" className="max-w-fit">
                    <NextLink className="flex justify-start items-center hover:drop-shadow-light transition ease-s-curve" href="/">
                        <Brand />
                    </NextLink>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="basis-full lg:hidden" justify="center">
                <NavbarBrand as="li" className="max-w-fit">
                    <NextLink className="flex justify-start items-center hover:drop-shadow-light transition ease-s-curve" href="/">
                        <Brand />
                    </NextLink>
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
                            <NextLink
                                className="text-tan-100 text-[20px] hover:drop-shadow-light transition ease-s-curve font-serif font-bold"
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </ul>
            </NavbarContent>

            <NavbarContent className="lg:hidden" justify="end">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarMenu>
                <div className="mx-4 mt-2 flex flex-col gap-2 justify-center items-center">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="text-tan-100 font-sans text-[20px]"
                                href="#"
                                size="lg"
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
