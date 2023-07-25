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
      <motion.div className=' max-w-screen-lg  flex flex-col  justify-center items-center px-8 pt-32 pb-8  md:flex-row-reverse md:pb-24 md:pt-40'>
        <motion.div
          variants={bg_filter_anime}
          initial='initial'
          animate='animate'
          className=' mx-auto rounded-2xl overflow-clip w-[60%] md:w-[40%] '
        >
          <img src={zoho_ceo} alt='zoho_ceo_img'/>
        </motion.div>

        <div className=' flex flex-col  gap-2 justify-center h-full md:w-[60%] '>
          <h2 className=' overflow-clip  text-gray-800 font-Mont capitalize mt-6 text-2xl tracking-[-1px] font-bold md:text-4xl lg:text-4xl'>
            Vision from a village
          </h2>
          <p className=' overflow-clip  text-gray-600  w-full py-4 text-xl md:text-2xl lg:text-2xl lg: max-w-[600px]'>
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
