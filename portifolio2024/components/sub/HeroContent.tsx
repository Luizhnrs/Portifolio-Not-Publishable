"use client"

import React from 'react'
import{motion} from "framer-motion";
import { slideInFromLeft, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex felx-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[8px] px-[4px] border border-[#7024f88b] opacity-[0.9]'
            >
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
                <h1 className='Welcome-text text-[13px]'>Software Developer</h1>
            </motion.div>
            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gp-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto'
            >
                Providing
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> The Best </span>
            Experience
            </motion.div>
            <motion.p 
            variants={slideInFromLeft(0.8)}
            className='text-lg text-gray-400 my-5 max-w-[600px] '
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam dicta quas excepturi 
                itaque tempora adipisci veritatis aspernatur beatae ab exercitationem 
                praesentium molestiae, delectus, possimus unde consequatur et illo voluptatem.
            </motion.p>
            <motion.a
            variants={slideInFromLeft(1)}
            className='py-2'
            >

            </motion.a>
        </div>
    </motion.div>
  )
}

export default HeroContent