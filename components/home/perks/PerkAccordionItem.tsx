'use client';

import React from "react";
import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'
import { FC } from "react";


interface Props {
    title: React.ReactNode;
    content: React.ReactNode;
    id: string;
    icon: React.ReactNode;
}

const PerkItem: FC<Props> = ({ title, content, icon, id }) => {
    return (
        <AccordionItem id={id} className="col-span-full border-none mt-[10px] mb-[10px]">
            <h2>
                <AccordionButton className="rounded-full hover:bg-green-200">
                    <Box as="span" className="flex-1 flex ">
                        {icon}
                        {title}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={0}>
                {content}
            </AccordionPanel>
        </AccordionItem>
    );
}

export default PerkItem;