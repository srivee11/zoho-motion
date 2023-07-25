import React from 'react'

import { FaChevronRight } from 'react-icons/fa'

import { motion, scroll } from 'framer-motion'

export default function Testimonials () {
 const testimonial_anime = {
    initial: {
      scale: 0.8
    }

  
  }

  return (
    <div name='customers' className=' relative bg-gradient-to-b from-white/0 to bg-white/0 via-white/10 w-full mx-auto h-fit flex flex-col items-center justify-center '>
      <div className='  max-w-screen-lg w-full h-full flex flex-col items-center text-center  py-24 lg:py-32'>
        <h3 className=' capitalize text-xl font-Mont font-medium tracking-wide text-gray-900 w-full px-3  sm:text-3xl'>
          More than
          <span className=' font-Mont font-semibold text-main/90'> 80 Million+ </span>
          people
        </h3>

        <h3 className='capitalize text-xl font-Mont font-medium tracking-wide text-gray-900 w-full px-3 py-2 sm:text-3xl'>
          across <span className=' font-Mont font-semibold text-main/90'> 150+ </span>
          countries choose zoho
        </h3>

        <motion.div
          variants={testimonial_anime}
          initial='initial'
          className=' relative main-clipper mt-16 flex flex-col space-y-8 filter  '
        >

<div className=' mx-auto absolute top-0 left-0 right-0 aspect-square w-full '></div>

          <div className='scroll-parent-one '>
            <div className='scroll-element-one  primary-for-one'></div>
            <div className='scroll-element-one secondary-for-one'></div>
          </div>

          <div class='scroll-parent-two'>
            <div class='scroll-element-two primary-for-two'></div>
            <div class='scroll-element-two secondary-for-two'></div>
          </div>
        </motion.div>

        <div className=' mx-auto mt-8 flex flex-col items-center gap-4 sm:flex-row sm:self-start sm:justify-center '>
          <button className='group primary-btn '>
            customer stories
            <span className='group-hover:translate-x-1 transition-transform duration-300 '>
              <FaChevronRight className=' ml-1' size={16} />
            </span>
          </button>

          <button className='group secondary-btn'>
            more about zoho
            <span className='group-hover:translate-x-1 transition-transform duration-300 '>
              <FaChevronRight className=' ml-1' size={16} />
            </span>
          </button>
        </div>

        <hr className=' absolute bottom-0 mt-1 w-[70%] h-[1px] border border-gray-200 rounded-full  '></hr>


      </div>
    </div>
  )
}
