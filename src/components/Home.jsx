import React from 'react'

import { motion, scroll } from 'framer-motion'

import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

import HeroImage from '../assets/main icons/3d blocks.png'

export default function Home () {
  const float_anime = {
    initial: {},
    animate: {
      y: ['-2vmin', '1vmin'],
      transition: {

        repeat: Infinity,
        repeatType: 'reverse',
        duration: 2,
        ease: 'easeInOut'
  
  
      }
    }
  }

  return (
    <div
      name='home'
      className=' w-100% h-fit flex flex-col items-center bg-white text-black'
    >
      <div className=' max-w-screen-lg  flex flex-col gap-2 justify-center items-center px-8 pt-32 pb-8  md:flex-row-reverse md:pb-16 '>
        <motion.div variants={float_anime} initial='initial' animate='animate' className=' mx-auto w-[60%] md:w-[40%] '>
          <img src={HeroImage} alt='my zoho3d'></img>
        </motion.div>

        <div className=' flex flex-col justify-center h-full md:w-[60%] '>
          <h2 className=' text-gray-1000 font-Mont capitalize text-3xl tracking-[-1px] font-bold md:text-4xl lg:text-5xl'>
            Your life's work, powered by our life's work
          </h2>
          <p className=' text-gray-900 font-medium text-2xl max-w-md py-4'>
            A unique and powerful software suite to transform the way you work.
            Designed for businesses of all sizes, built by a company that{' '}
            <span className=' font-semibold'> values your privacy.</span>
          </p>

          <div className='flex flex-col items-center gap-4 sm:flex-row'>
            <button className='group flex items-center w-fit px-3 py-2 font-medium rounded-md cursor-pointer capitalize text-gray-0 border-2 border-collapse bg-blue-main border-blue-main hover:bg-blue-accent'>
              get started for free
              <span className='group-hover:translate-x-1 transition-transform duration-300 '>
                <MdOutlineKeyboardArrowRight className=' ml-1' size={24} />
              </span>
            </button>

            <button className='group flex items-center w-fit px-3 py-2 font-medium rounded-md cursor-pointer capitalize border-2 border-collapse text-blue-main border-blue-main bg-gray-0 hover:bg-gray-100'>
              explore all products
              <span className='group-hover:translate-x-1 transition-transform duration-300 '>
                <MdOutlineKeyboardArrowRight className=' ml-1' size={24} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
