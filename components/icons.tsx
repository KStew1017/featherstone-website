import * as React from "react";
import Image from "next/image";
import { SVGProps } from "react";


export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export const Brand: React.FC<IconSvgProps> = ({
    width,
    height,
    ...props
}) => (
    <>
        <Image src="/brand-light.svg" alt="Featherstone Brand" width={225} height={76} priority={true} />
    </>
);

export const BrandTan: React.FC<IconSvgProps> = ({
    width,
    height,
    ...props
}) => (
    <>
        <Image src="/tan-brand.svg" alt="Featherstone Brand" width={300} height={50} />
    </>
);

export const BrandDark: React.FC<IconSvgProps> = ({
    width,
    height,
    ...props
}) => (
    <>
        <Image src="/brand-dark.svg" alt="Featherstone Brand" width={300} height={100} priority={true} />
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
        <Image src="/warehouse.svg" alt="Warehouse Icon" width={90} height={90}  />
    </>
);
