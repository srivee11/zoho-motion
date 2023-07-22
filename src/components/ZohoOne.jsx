import React from 'react'

import { motion, scroll } from 'framer-motion'

import { FaChevronRight } from 'react-icons/fa'

import zoho_one_icon from '../assets/main icons/one.svg'
import young_ceo from '../assets/young_ceo.jpg'

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
      className='  w-full min-h-screen flex flex-col items-center justify-center bg-white text-black'
    >
      <div className=' relative w-full max-w-lg  h-fit '>
        <div className=' absolute top-0 mx-auto w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply opacity-70 filter blur-xl'></div>
        <div className=' absolute top-64 -left-32 mx-auto w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply opacity-70 filter blur-xl'></div>
      </div>
      <div className=' relative bg-white max-w-screen-sm  flex flex-col gap-4 justify-center items-center px-8 py-10 md:rounded-md md:shadow-lg md:my-16 lg:items-start lg:my-24 lg:px-24'>
        <div className=' mx-auto w-[40%] md:w-[40%] '>
          <img
            src={zoho_one_icon}
            className=' w-full max-h-[160px] '
            alt='my_zoho_1'
          />
        </div>
        <h3 className='w-full  capitalize text-2xl font-Mont font-bold tracking-wide  text-gray-900  p-2 sm:text-3xl '>
          zoho one: the all-in-one business suite
        </h3>
        <p className=' w-full'>
          Run your entire business on Zoho One with our unified cloud software,
          designed to help you break down silos between departments and increase
          organizational efficiency.
        </p>

        <p className='w-full'>
          You can be a startup, mid-sized company, or an enterprise—Zoho One is
          a boon for all.
        </p>

        <div className=' flex flex-row gap-3 md:self-center'>
          <div className=' w-[30%] max-h-[160px] rounded-md overflow-clip '>
            <img src={young_ceo} className=' w-full' alt='my_zoho_1' />
          </div>
          <div className='  w-[70%] flex flex-col justify-center gap-2 '>
            <p className=' text-2xl font-bold'> Prakarsh Gagdani</p>
            <p className=' text-base'> CEO, 5paisa.com</p>
            <p className=' text-base'> (an IIFL subsidiary)</p>
          </div>
        </div>

        <button className='group primary-btn mt-6 md:self-center'>
          explore all products
          <span className='group-hover:translate-x-1 transition-transform duration-300 '>
            <FaChevronRight className=' ml-1' size={16} />
          </span>
        </button>
      </div>
    </div>
  )
}
