import React from 'react'

import { animate, motion, useCycle, useInView } from 'framer-motion'

import { FaChevronRight, FaArrowCircleRight } from 'react-icons/fa'

import zoho_ceo from '../assets/ceo_image.jpg'

const bg_filter_anime = {
  animate: {
    scale: [1, 1.05],
    opacity: [0.5, 0.6],
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 2,
      ease: 'easeInOut',
      delay: 0.05
    }
  }
}

export default function visions () {
  return (
    <div
      name='visions'
      className=' w-full h-fit flex flex-col items-center bg-white'
    >
      <motion.div className=' max-w-screen-lg  flex flex-col  justify-center items-center px-8 py-16  md:flex-row-reverse md:pb-24 md:pt-40'>
        <motion.div
       
          className=' mx-auto rounded-2xl overflow-clip w-[60%] md:w-[40%] grayscale hover:grayscale-0 hover:rotate-2 scale-[0.8] transition-all duration-700'
        >
          <img src={zoho_ceo} alt='zoho_ceo_img'/>
        </motion.div>

        <div className=' flex flex-col  gap-2 justify-center items-center w-full h-full md:w-[60%] '>
          <h3 className=' capitalize text-center text-2xl font-Mont font-medium tracking-wide text-gray-900 w-full max-w-[500px]  p-2 sm:text-3xl'>
            Vision from a village
          </h3>
          <p className=' text-gray-700  w-full mb-6 text-base  max-w-[500px] md:text-lg'>
            "Why Zoho's CEO moved from California to a hamlet in Tamil Nadu: The
            lessons this holds for an economy that wants to be self-reliant; for
            corporations headquartered in big cities; and a country with a high
            density of urban and migrant workers coming to grips with a
            pandemic."
          </p>

          <button className='group secondary-btn'>
            more on forbes
            <span className='group-hover:translate-x-1 transition-transform duration-300 '>
              <FaChevronRight className=' ml-1' size={16} />
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  )
}
