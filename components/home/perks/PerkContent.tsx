import { Text } from "@nextui-org/react"
import tailwindCustomColors from "@/app/utils/tailwindConfigColors";


export const GateTitle = () => {
    return (
        <Text color={tailwindCustomColors.tan100} className="font-serif text-center font-[16px]">
            24/7 Gate-code Access
        </Text>
    )
};

export const GateContent = () => {
    return (
        <Text color={tailwindCustomColors.tan100} className="font-sans text-center font-[16px]">
            The gate is open on weekdays from 7am to 6pm, but can be opened at any time with a <span className="text-gold">personal gate code</span>. This affords you the <span className="text-gold">convenience</span> and <span className="text-gold">flexibility</span> of accessing the property whenever you need, while still ensuring your goods and belongings remain <span className="text-gold">safe and secure</span>.
        </Text>
    )
};

export const SurveillanceTitle = () => {
    return (
        <Text color={tailwindCustomColors.tan100} className="font-serif text-center font-[16px]">
            24/7 Surveillance
        </Text>
    )
};

export const SurveillanceContent = () => {
    return (
        <Text color={tailwindCustomColors.tan100} className="font-sans text-center font-[16px]">
            Security cameras provide extensive coverage and comprehensive views of the entire property, giving you <span className="text-gold">peace of mind and confidence</span> in the safety of your valuable assets.
        </Text>
    )
};

export const LocalTitle = () => {
    return (
        <Text color={tailwindCustomColors.tan100} className="font-serif text-center font-[16px]">
            Locally Owned & Operated
        </Text>
    )
};

export const LocalContent = () => {
    return (
        <Text color={tailwindCustomColors.tan100} className="font-sans text-center font-[16px]">
            For almost 20 years these warehouses have been <span className="text-gold">family owned and operated</span>, eliminating any worries about corporate hassle and making every step of the process <span className="text-gold">quick and painless</span>.
        </Text>
    )
};
