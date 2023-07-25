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

export const LogoStrokeIn: React.FC<IconSvgProps> = ({
    width,
    height,
    ...props
}) => (
    <>
        <Image src="/stroke-in.svg" alt="Featherstone Logo" width={500} height={500} />
    </>
);

export const Warehouse: React.FC<IconSvgProps> = ({
    width,
    height,
    ...props
}) => (
    <>
        <Image src="/warehouse.svg" alt="Warehouse Icon" width={90} height={90} />
    </>
);