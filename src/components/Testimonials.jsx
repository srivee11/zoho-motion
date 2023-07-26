import React, { useState } from 'react'

import { FaChevronRight } from 'react-icons/fa'

import { motion, scroll } from 'framer-motion'

import CountUp from 'react-countup'

import ScrollTrigger from 'react-scroll-trigger'

export default function Testimonials () {
  const [counter, setCounter] = useState(false)

  const testimonial_anime = {
    initial: {
      scale: 1
    }
  }

  return (
    <div
      name='customers'
      className=' relative bg-gradient-to-b from-white/0 to bg-white/0 via-white/10 w-screen mx-auto h-fit flex flex-col items-center justify-center '
    >
      <div className='  max-w-screen-lg w-full h-full flex flex-col items-center text-center  py-24 lg:py-32'>
        <ScrollTrigger
          onEnter={() => setCounter(!counter)}
          onExit={() => setCounter(false)}
        >
          <h3 className=' capitalize text-xl font-Mont font-medium tracking-wide text-gray-900 w-full px-3  sm:text-3xl'>
            More than
            <span className=' px-1 font-Mont font-semibold text-main/90 '>
              {counter && (
                <CountUp start={0} end={80} duration={2} delay={0.5} />
              )}
              + million
            </span>
            people
          </h3>

          <h3 className='capitalize text-xl font-Mont font-medium tracking-wide text-gray-900 w-full px-3 py-2 sm:text-3xl'>
            across
            <span className=' px-1 font-Mont font-semibold text-main/90 '>
              {counter && (
                <CountUp start={0} end={150} duration={2} delay={0.5} />
              )}
              +
            </span>
            countries choose zoho
          </h3>
        </ScrollTrigger>

        <div className=' relative main-clipper mt-16 flex flex-col space-y-8  '>
          <div className='scroll-parent-one '>
            <div className='scroll-element-one  primary-for-one'></div>
            <div className='scroll-element-one secondary-for-one'></div>

            <div className=' absolute top-[-50%] left-[0%] aspect-square w-screen max-w-[25vmin] bg-gradient-to-r from-white to-white/75 via-white rounded-full  opacity-100 filter blur-xl '></div>
            <div className=' absolute top-[-50%] right-[0%] aspect-square w-screen max-w-[25vmin] bg-gradient-to-l from-white to-white/75 via-white rounded-full  opacity-100 filter blur-xl '></div>
                
          </div>

          {/* <div class='scroll-parent-two'>
            <div class='scroll-element-two primary-for-two '></div>
            <div class='scroll-element-two secondary-for-two'></div>

            <div className=' absolute top-[-50%] left-[0%] aspect-square w-screen max-w-[25vmin] bg-gradient-to-r from-white to-white/75 via-white rounded-full  opacity-100 filter blur-xl '></div>
            <div className=' absolute top-[-50%] right-[0%] aspect-square w-screen max-w-[25vmin] bg-gradient-to-l from-white to-white/75 via-white rounded-full  opacity-100 filter blur-xl '></div>

          </div> */}
        </div>

        <div className=' mx-auto mt-32 flex flex-col items-center w-full gap-4 sm:flex-row sm:self-start sm:justify-center '>
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
      </div>
    </div>
  )
}
