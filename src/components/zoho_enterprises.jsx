import React from 'react'

import { motion, scroll } from 'framer-motion'

import { FaChevronRight } from 'react-icons/fa'

import zoho_one_icon from '../assets/main icons/one.svg'
import old_ceo from '../assets/old_ceo.jpg'

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
      className=' mx-auto relative  w-full max-w-screen-lg h-fit flex flex-col gap-4 p-4 items-center justify-center bg-white text-gray-900 md:flex-row'
    >
      <div className=' absolute top-0 mx-auto my-auto w-[30vmin] h-[30vmin] bg-purple-500 rounded-full mix-blend-multiply opacity-70 filter blur-xl'></div>
      <div className=' absolute top-64 -left-32 mx-auto my-auto w-[50vmin] h-[50vmin] bg-cyan-500 rounded-full mix-blend-multiply opacity-70 filter blur-xl'></div>

      <div className=' w-[50%] relative bg-white/80 border-2 border-gray-200  backdrop-blur-md  flex flex-col gap-4 justify-center items-center px-8 py-10 rounded-2xl overflow-clip shadow-lg md:my-16'>
        <blockquote className=' relative w-full h-fit py-8 px-8 flex items-center justify-center font-bold tracking-wide text-left text-lg  lg:text-xl lg:text-center'>
          With our complete business under control, our productivity is up by
          80% in the last year that we have been using Zoho.
        </blockquote>

        <div className=' flex flex-row gap-3 md:self-center'>
          <div className=' w-[30%] max-h-[160px] rounded-xl border-2 border-gray-100 overflow-clip '>
            <img src={old_ceo} className=' w-full' alt='old_ceo_2' />
          </div>
          <div className='  w-[70%] flex flex-col justify-center gap-2 '>
            <p className=' text-2xl font-bold'> Thomas John</p>
            <p className=' text-base'> Managing Director,</p>
            <p className=' text-base'> Agappe Diagnostics</p>
          </div>
        </div>

        <button className='group primary-btn mt-6 md:self-center'>
          read more
          <span className='group-hover:translate-x-1 transition-transform duration-300 '>
            <FaChevronRight className=' ml-1' size={16} />
          </span>
        </button>
      </div>

      <div className=' relative w-[50%]'>
        <h3 className='w-full  text-center capitalize text-2xl font-Mont font-bold tracking-wide  text-gray-900  p-2 sm:text-3xl '>
          zoho for enterprises
        </h3>
        <p className=' w-full text-lg '>
          Experience the breadth and depth of the Zoho ecosystem, with the
          professional services, infrastructure, support, and security that a
          large business needs. Streamline complex business processes, build
          strong relationships with your customers, and drive growth at scale.
        </p>
      </div>
    </div>
  )
}
