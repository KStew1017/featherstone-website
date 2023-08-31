import { Text } from "@nextui-org/react"
import tailwindCustomColors from "@/utils/tailwindConfigColors";


export const BrandContent1 = () => {
    let now: Date = new Date();
    let year: number = now.getFullYear();

    return (
        <div className="justify-self-start text-left text-[12px]">
            <Text color={tailwindCustomColors.tan100}>
                © {year} Featherstone Business Park.
            </Text>
            <Text color={tailwindCustomColors.tan100}>
                All Rights Reserved.
            </Text>
        </div>
    )
};

export const ContactUsHeader = () => {
    return (
        <div>
            <Text color={tailwindCustomColors.tan100}>
                Contact Us
            </Text>
        </div>
    )
};

export const ContactUsContent1 = () => {
    return (
        <div>
            <Text color={tailwindCustomColors.tan100}>
                2649 Blue Mound Rd W,
            </Text>
            <Text color={tailwindCustomColors.tan100}>
                Haslet, TX 76052
            </Text>
        </div>
    )
};

export const ContactUsContent2 = () => {
    return (
        <div>
            <a href='tel:817-879-6001' color={tailwindCustomColors.tan100}>
                817 - 903 - 6579
            </a>
        </div>
    )
};

export const HoursHeader = () => {
    return (
        <div>
            <Text color={tailwindCustomColors.tan100}>
                Hours
            </Text>
        </div>
    )
};

export const HoursContent1 = () => {
    return (
        <div>
            <Text color={tailwindCustomColors.tan100}>
                Monday - Friday: 7am to 6pm
            </Text>
            <Text color={tailwindCustomColors.tan100}>
                Saturday - Sunday: Closed
            </Text>
        </div>
    )
};

export const HoursContent2 = () => {
    return (
        <div>
            <Text color={tailwindCustomColors.tan100}>
                24/7 Gate Code Access
            </Text>
        </div>
    )
};