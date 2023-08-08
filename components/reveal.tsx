'use client';

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";


interface Props {
    children: JSX.Element | React.ReactNode;
    hiddenVariant: "hiddenY" | "hiddenXPos" | "hiddenXNeg" | "hiddenScale";
    visibleVariant: "visibleY" | "visibleXPos" | "visibleXNeg" | "visibleScale" | "none";
    delay?: number;
    styling?: string;
}

export const Reveal = ({ children, hiddenVariant, visibleVariant="none", styling, delay}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start(visibleVariant);
        }
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
                    hiddenXPos: {
                        opacity: 0,
                        x: 100,
                    },
                    hiddenXNeg: {
                        opacity: 0,
                        x: -100,
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

