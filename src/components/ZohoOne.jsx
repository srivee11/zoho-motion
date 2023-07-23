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
      className=' w-full h-fit flex flex-col items-center justify-center bg-white text-black'
    >
      <div className=' relative w-full max-w-lg  h-fit '>
        <div className=' absolute top-0 mx-auto w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply opacity-70 filter blur-xl'></div>
        <div className=' absolute top-64 -left-32 mx-auto w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply opacity-70 filter blur-xl'></div>
      </div>
      <div className=' relative bg-white/80 border-2 border-gray-200  backdrop-blur-md my-6 w-[90%] md:max-w-xl lg:max-w-2xl flex flex-col gap-3 justify-center items-center px-8 py-8 rounded-2xl overflow-clip shadow-lg md:my-16 lg:items-start lg:my-24 lg:px-24'>
        <div className=' mx-auto w-[30%] sm:w-[20%] lg:w-[25%]'>
          <img
            src={zoho_one_icon}
            className=' w-full h-full '
            alt='my_zoho_1'
          />
        </div>
        <h3 className='w-full  text-center capitalize text-2xl font-Mont font-bold tracking-wide  text-gray-900  p-2 sm:text-3xl '>
          zoho one 
        </h3>
        <p className=' w-full text-lg '>
          The all-in-one business suite to run your entire business with our unified cloud software,
          designed to help you break down silos between all departments and increase
          organizational efficiency.
        </p>

        <blockquote className=' relative w-full h-fit py-8 px-8 mx-auto font-bold tracking-wide text-left text-lg  lg:text-xl lg:text-center'>
          You can be a startup, mid-sized company, or an enterprise—Zoho One is
          a boon for all.
        </blockquote>

        <div className=' flex flex-row gap-3 md:self-center'>
          <div className=' w-[30%] max-w-[128px] rounded-xl border-2 border-gray-100 overflow-clip '>
            <img src={young_ceo} className=' w-full h-full ' alt='my_zoho_1' />
          </div>
          <div className='  w-[70%] flex flex-col justify-start '>
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

        <hr className=' absolute bottom-0 mt-1 w-[50%] h-[1px] border border-gray-200 rounded-full  '></hr>


      </div>



    </div>
  )
}
