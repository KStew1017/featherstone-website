'use client';

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";


interface Props {
    children: JSX.Element | React.ReactNode;
    hiddenVariant: "hiddenY" | "hiddenYShort" | "hiddenFade" | "hiddenXPos" | "hiddenXNeg" | "hiddenScale" | "none";
    visibleVariant: "visibleY" | "visibleYShort" | "visibleFade" | "visibleXPos" | "visibleXNeg" | "visibleScale" | "none";
    delay?: number;
    styling?: string;
    isMobile?: boolean;
}

export const Reveal = ({ children, hiddenVariant, visibleVariant="none", styling, delay, isMobile}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const controls = useAnimation();

    useEffect(() => {
        if (isInView) controls.start(visibleVariant);
    }, [isInView]);

    return (
        <div 
            ref={ref}
            style={{
                position: "relative"
            }}
            className={styling}
        >
            <motion.div
                variants={{
                    hiddenY: {
                        opacity: 0,
                        y: 100
                    },
                    hiddenYShort: {
                        opacity: 0,
                        y: 0
                    },
                    hiddenXPos: {
                        opacity: 0,
                        x: 100,
                    },
                    hiddenXNeg: {
                        opacity: 0,
                        x: -100,
                    },
                    hiddenFade: {
                        opacity: 0,
                    },
                    visibleY: {
                        opacity: 1,
                        y: 0
                    },
                    visibleXPos: {
                        opacity: 1,
                        x: 0,
                    },
                    visibleXNeg: {
                        opacity: 1,
                        x: 0,
                    },
                    hiddenScale: {
                        opacity: 0,
                        scale: 0.5
                    },
                    visibleScale: {
                        opacity: 1,
                        scale: 1
                    },
                    visibleFade: {
                        opacity: 1,
                    },
                    none: {
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0
                    }
                }}
                initial={hiddenVariant}
                animate={controls}
                transition={{
                    delay: delay,
                    duration: 1.5,
                    ease: [0.075, 0.82, 0.165, 1],
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

