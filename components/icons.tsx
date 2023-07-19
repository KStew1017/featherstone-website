import * as React from "react";
import { IconSvgProps } from "@/types";
import Image from "next/image";

export const Brand: React.FC<IconSvgProps> = ({
    width,
    height,
    ...props
}) => (
    <>
        <Image src="/brand-light.svg" alt="Featherstone Brand" width={225} height={76} />
    </>
);