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
            setNumUnits(Math.floor(window.innerWidth * 0.005));
        }, 100);

        if (typeof window !== 'undefined') {
            setNumUnits(Math.floor(window.innerWidth * 0.01));
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    const availableUnits = Array(numUnits).fill('Available Units');

    return (
        <section className='relative bg-tan-100 h-[400px] flex items-center overflow-hidden'>
            <div className='h-[200px] flex items-center border-t-4 border-b-4 border-gold'>
                <motion.p
                    className='flex text-green-200 text-[48px] font-serif font-bold whitespace-nowrap'
                    style={{ translateX: x }}
                >
                    {availableUnits.map((unit, index) => (
                        <React.Fragment key={index}>
                            {unit}{' '}
                            <button type='button' className='bg-gold mx-[20px] rounded-full text-[20px] px-[20px]'>
                                click here
                            </button>{' '}
                        </React.Fragment>
                    ))}
                </motion.p>
            </div>
        </section>
    );
};

export default UnitsBanner;
