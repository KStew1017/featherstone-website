'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

const UnitsBanner = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, -1250]);
    const [numUnits, setNumUnits] = useState(5);

    useEffect(() => {
        const handleResize = debounce(() => {
            setNumUnits(Math.floor(window.innerWidth * 0.01));
        }, 100);

        if (typeof window !== 'undefined') {
            setNumUnits(Math.floor(window.innerWidth * 0.01));
            window.addEventListener('resize', handleResize, { passive: true });
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    const availableUnits = Array(numUnits).fill('See Available Units');

    return (
        <section className='relative bg-tan-100 h-[200px] lg:h-[300px] flex items-center overflow-hidden lg:pt-[0px] pt-[50px]'>
            <div className='h-[100px] lg:h-[200px] flex items-center border-t-5 border-b-5 border-gold bg-tan-200'>
                <motion.p
                    className='flex text-grey lg:text-[48px] text-[20px] font-serif font-bold whitespace-nowrap'
                    style={{ translateX: x }}
                >
                    {availableUnits.map((unit, index) => (
                        <React.Fragment key={index}>
                            {unit}{' '}
                            <a href='/units' className='flex'><button type='button' className='bg-gold text-grey mx-[20px] rounded-full lg:text-[20px] text-[14px] px-[20px]'>
                                click me!
                            </button></a>{' '}
                        </React.Fragment>
                    ))}
                </motion.p>
            </div>
        </section>
    );
};

export default UnitsBanner;
