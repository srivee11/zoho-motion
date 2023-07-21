import React from 'react'

import { motion, scroll } from 'framer-motion'

import { FaChevronRight } from 'react-icons/fa'

import zoho_one_icon from '../assets/main icons/one.svg'

export default function () {
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
      name='zoho_one_id'
      className=' w-100% h-fit flex flex-col items-center bg-white text-black'
    >
      <div className=' max-w-screen-lg  flex flex-col gap-4 justify-center items-center px-8 pt-32 pb-8  md:flex-row-reverse md:pb-16 '>
        <div className=' mx-auto w-[60%] md:w-[40%] '>
          <img src={zoho_one_icon} className=' w-full' alt='my_zoho_1' />
        </div>
        <h3 className=' capitalize text-2xl font-Mont font-bold tracking-wide  text-gray-900  p-2 sm:text-3xl '>
          zoho one
        </h3>
      </div>
    </div>
  )
}
