'use client';

import { usePathname } from "next/navigation";


const getPath = () => {
    const pathname = usePathname();

    if (pathname === "/") {
        return "home";
    }

    if (pathname === "/units") {
        return "units";
    }

    if (pathname === "/location") {
        return "location";
    }

    if (pathname === "/contact") {
        return "contact";
    }

    return "home";
};

export default getPath;