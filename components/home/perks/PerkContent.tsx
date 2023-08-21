import { Text } from "@nextui-org/react"
import tailwindCustomColors from "@/app/utils/tailwindConfigColors";
import { FC } from "react";


export const titleStyling = "font-serif text-center text-[24px] ml-[20px]";
export const contentStyling = "font-sans text-center text-[16px] mt-[20px] mb-[20px]";

interface Props {
    styling: string;
}

export const GateTitle: FC<Props> = ({ styling }) => {
    return (
        <Text color={tailwindCustomColors.tan100} className={styling}>
            24/7 Gate-code Access
        </Text>
    )
};

export const GateContent: FC<Props> = ({ styling }) => {
    return (
        <Text color={tailwindCustomColors.tan100} className={styling}>
            The gate is open on weekdays from 7am to 6pm, but can be opened at any time with a <span className="text-gold">personal gate code</span>. This affords you the <span className="text-gold">convenience</span> and <span className="text-gold">flexibility</span> of accessing the property whenever you need, while still ensuring your goods and belongings remain <span className="text-gold">safe and secure</span>.
        </Text>
    )
};

export const SurveillanceTitle: FC<Props> = ({ styling }) => {
    return (
        <Text color={tailwindCustomColors.tan100} className={styling}>
            24/7 Surveillance
        </Text>
    )
};

export const SurveillanceContent: FC<Props> = ({ styling }) => {
    return (
        <Text color={tailwindCustomColors.tan100} className={styling}>
            Security cameras provide extensive coverage and comprehensive views of the entire property, giving you <span className="text-gold">peace of mind and confidence</span> in the safety of your valuable assets.
        </Text>
    )
};

export const LocalTitle: FC<Props> = ({ styling }) => {
    return (
        <Text color={tailwindCustomColors.tan100} className={styling}>
            Locally Owned & Operated
        </Text>
    )
};

export const LocalContent: FC<Props> = ({ styling }) => {
    return (
        <Text color={tailwindCustomColors.tan100} className={styling}>
            For almost 20 years these warehouses have been <span className="text-gold">family owned and operated</span>, eliminating any worries about corporate hassle and making every step of the process <span className="text-gold">quick and painless</span>.
        </Text>
    )
};
