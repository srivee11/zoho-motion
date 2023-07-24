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
      className= ' overflow-clip mx-auto w-full max-w-screen-lg h-fit flex flex-col-reverse gap-4  items-center justify-center bg-white text-gray-700 px-12 py-16 md:flex-row lg:py-24'
    >
      <div className=' mx-6 my-6 basis-1 md:basis-1/2 relative bg-white border-2 border-gray-200  backdrop-blur-md  flex flex-col gap-4 justify-center items-center px-8 py-8 rounded-2xl shadow-lg '>
        <div className=' z-[-1] absolute top-[-50vmin] right-[-20vmin] aspect-square w-full max-w-[70vmin] bg-yellow-300 rounded-full mix-blend-multiply opacity-70 filter blur-xl'></div>

        <div className=' z-[-1] absolute top-[-50vmin] right-[-10vmin] aspect-square w-full max-w-[50vmin] bg-orange-400 rounded-full mix-blend-multiply opacity-60 filter blur-xl'></div>

        <div className=' z-[-1] absolute bottom-[-50vmin] left-[-30vmin] aspect-square w-full max-w-[70vmin] bg-cyan-200 rounded-full mix-blend-multiply opacity-70 filter blur-xl'></div>

        <div className=' z-[-1] absolute bottom-[-50vmin] left-[-20vmin] aspect-square w-full max-w-[50vmin] bg-blue-500 rounded-full mix-blend-multiply opacity-50 filter blur-xl'></div>

        <blockquote className=' relative w-full h-fit py-8 px-8 flex items-center justify-center font-bold tracking-wide text-left text-lg  lg:text-xl lg:text-center'>
          With our complete business under control, our productivity is up by
          80% in the last year that we have been using Zoho.
        </blockquote>

        <div className=' flex flex-row gap-3 md:self-center'>
          <div className='w-[30%] max-w-[128px] rounded-xl border-2 border-gray-100 overflow-clip'>
            <img src={old_ceo} className=' w-full aspect-square ' alt='old_ceo_2' />
          </div>
          <div className='  w-[70%] flex flex-col justify-start '>
            <p className=' text-xl font-medium'> Thomas John</p>
            <p className=' text-base'> Managing Director,</p>
            <p className=' text-base'> Agappe Diagnosis</p>
          </div>
        </div>

        <button className='group primary-btn mt-6 md:self-center'>
          read more
          <span className='group-hover:translate-x-1 transition-transform duration-300 '>
            <FaChevronRight className=' ml-1' size={16} />
          </span>
        </button>
      </div>

      <div className=' relative mx-6 my-6 basis-1 md:basis-1/2'>
        <h3 className='w-full mb-4 mx-auto text-center capitalize text-2xl font-Mont font-medium tracking-wide text-gray-900 lg:text-3xl'>
          zoho for enterprises
        </h3>
        <p className=' w-full text-base lg:text-lg '>
          Experience the breadth and depth of the Zoho ecosystem, with the
          professional services, infrastructure, support, and security that a
          large business needs. Streamline complex business processes, build
          strong relationships with your customers, and drive growth at scale.
        </p>
      </div>
    </div>
  )
}
