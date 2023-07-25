import React from 'react'

import { motion, scroll } from 'framer-motion'

import { FaChevronRight } from 'react-icons/fa'

import zoho_one_icon from '../assets/main icons/one.svg'
import old_ceo from '../assets/old_ceo.jpg'

export default function () {
  const pulse_anime = {
    animate: {
      scale: [1, 1.05],
      opacity: [0.7, 0.9],
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 2,
        ease: 'easeInOut',
        delay: 0.05
      }
    }
  }

  return (
    <div name='zoho_one_id'  className=' relative  mx-auto w-full max-w-screen-lg h-fit flex flex-col-reverse gap-8  items-center justify-center text-gray-700 px-12 py-16 lg:flex-row lg:gap-16 lg:py-24'
    >
      <motion.div
        variants={pulse_anime}
        animate='animate'
        className=' mx-auto absolute bottom-[-50%]  left-0 right-0 aspect-square w-[70vmin] bg-teal-500 rounded-full mix-blend-soft-light opacity-90 filter blur-md'
      ></motion.div>
      <motion.div
        variants={pulse_anime}
        animate='animate'
        className=' mx-auto  absolute bottom-[-50%]  left-0 right-0 aspect-square w-[80vmin] bg-emerald-400 rounded-full mix-blend-soft-light opacity-80 filter blur-md'
      ></motion.div>
      <motion.div
        variants={pulse_anime}
        animate='animate'
        className=' mx-auto  absolute bottom-[-50%]  left-0 right-0 aspect-square w-[90vmin] bg-green-300 rounded-full mix-blend-soft-light opacity-70 filter blur-md'
      ></motion.div>
      <motion.div
        variants={pulse_anime}
        animate='animate'
        className=' mx-auto  absolute bottom-[-50%]  left-0 right-0  aspect-square w-[100vmin] bg-lime-200 rounded-full mix-blend-soft-light opacity-60 filter blur-md'
      ></motion.div>

      <div className=' relative bg-white border-2 border-gray-200  backdrop-blur-md rounded-2xl shadow-xl h-fit max-w-sm flex flex-col gap-4 justify-center items-center px-4 py-6'>
        

        <blockquote className=' text-gray-700 relative w-full h-fit py-8 px-8 mx-auto font-medium tracking-wide text-lg  lg:text-xl text-center'>
          With our complete business under control, our productivity is up by
          80% in the last year that we have been using Zoho.
        </blockquote>

        <div className=' flex flex-row gap-3 md:self-center'>
          <div className=' w-[30%] max-w-[128px] rounded-xl border-2 border-gray-100 overflow-clip '>
            <img src={old_ceo} className=' w-full h-full ' alt='old_ceo_img' />
          </div>
          <div className=' text-gray-700  w-[70%] flex flex-col justify-start '>
            <p className=' text-lg font-medium'> Thomas John</p>
            <p className=' text-base'> Managing Director,</p>
            <p className=' text-base'> Agappe Diagnosis</p>
          </div>
        </div>

        <button className='group secondary-btn mt-6 md:self-center'>
          read story
          <span className='group-hover:translate-x-1 transition-transform duration-300 '>
            <FaChevronRight className=' ml-1' size={16} />
          </span>
        </button>
      </div>

      <div className=' relative w-full  my-6 max-w-md'>
        <h3 className='w-full mb-4 mx-auto text-center capitalize text-2xl font-Mont font-medium tracking-wide text-gray-900 lg:text-3xl lg:text-left'>
          zoho for enterprises
        </h3>
        <p className=' w-full text-base px-4 lg:text-lg lg:text-left lg:px-0 lg:drop-shadow-lg'>
          Experience the breadth and depth of the Zoho ecosystem, with the
          professional services, infrastructure, support, and security that a
          large business needs. Streamline complex business processes, build
          strong relationships with your customers, and drive growth at scale.
        </p>
      </div>
    </div>
  )
}
