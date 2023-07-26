import { React, useRef } from 'react'

import { animate, motion, useCycle, useInView } from 'framer-motion'

import { FaChevronRight, FaArrowCircleRight } from 'react-icons/fa'
import {
  FiAnchor,
  FiTarget,
  FiSun,
  FiCpu,
  FiZap,
  FiLock,
  FiPlayCircle
} from 'react-icons/fi'

const pulse_anime = {
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

export default function Privacy () {
  return (
    <div
      className=' overflow-hidden relative mx-auto w-screen h-fit flex flex-col justify-center items-center '
      name='privacy'
    >
      <hr className=' absolute bottom-[0%] w-full max-w-md h-[1px] border border-gray-200 rounded-full  '></hr>
      <hr className=' absolute top-[0%] w-full max-w-4xl h-[1px] border border-gray-200 rounded-full  '></hr>

      <motion.div
        variants={pulse_anime}
        animate='animate'
        className=' z-[-1] absolute top-[5vw]  right-[10vw] aspect-square w-full max-w-[20vw] bg-purple-400 rounded-full mix-blend-soft-light opacity-50 filter blur-2xl'
      ></motion.div>
      <motion.div
        variants={pulse_anime}
        animate='animate'
        className=' z-[-1] absolute bottom-[5vw] left-[10vw] aspect-square w-full max-w-[25vw] bg-pink-400 rounded-full mix-blend-soft-light opacity-50 filter blur-2xl'
      ></motion.div>

      <div className=' mx-auto max-w-screen-lg w-full h-fit px-4 py-16 lg:py-32'>
        <h3 className=' capitalize text-center text-2xl font-Mont font-medium tracking-wide text-gray-900  pb-6 sm:text-3xl '>
          Privacy & Values
        </h3>

        <div className=' mx-auto   w-full h-fit flex flex-col gap-4 justify-center items-center text-center  lg:flex-row lg:gap-4 lg:flex-wrap '>
          <div className=' privacy-card '>
            <span className='privacy-icon'>
              <FiLock size={56} strokeWidth={1}  />
            </span>
            <p className='privacy-title'>Privacy</p>
            <hr className=' mt-1 w-[30%] h-[1px] border border-gray-200 rounded-full  '/>

            <p className='privacy-text'>
              We believe that trust is paramount in a relationship. We do not
              own or sell your data, and we most certainly do not bank on
              advertising-based business models.
            </p>
          </div>

          <div className='privacy-card'>
            <span className='privacy-icon '>
              <FiZap size={56} strokeWidth={1} />
            </span>
            
            <p className='privacy-title'>Customer-First Philosophy</p>
            <hr className=' mt-1 w-[30%] h-[1px] border border-gray-200 rounded-full  '/>

            <p className='privacy-text'>
              In all these years, it's our customers' trust and goodwill that
              has helped us establish a strong position in the market. we're
              here to help you grow.
            </p>
          </div>

          <div className='privacy-card'>
            <span className=' privacy-icon '>
              <FiAnchor size={56} strokeWidth={1} />
            </span>
            <p className='privacy-title'>Long-Term Commitment</p>
            <hr className=' mt-1 w-[30%] h-[1px] border border-gray-200 rounded-full  '/>

            <p className='privacy-text'>
              25 years of running a profitable organization gives us a good
              sense of challenges that a growing business faces. We take pride
              in running a sustainable business that’s powered by you, our
              customer.
            </p>
          </div>

          <div className=' privacy-card'>
            <span className='privacy-icon'>
              <FiCpu size={56} strokeWidth={1} />
            </span>
            <p className='privacy-title'>Focus On Research</p>
            <hr className=' mt-1 w-[30%] h-[1px] border border-gray-200 rounded-full  '/>

            <p className='privacy-text'>
              Software is our craft and we back it up with our relentless
              investments in R&D. So much so that we prefer to own the entire
              technology stack, including running our data centers globally.
            </p>
          </div>

          <div className='flex flex-col items-center justify-center gap-4 w-full h-fit pt-8 sm:flex-row sm:self-start  '>
            <button className='group primary-btn '>
              read more
              <span className='group-hover:translate-x-1 transition-transform duration-300 '>
                <FaChevronRight className=' ml-1' size={16} />
              </span>
            </button>

            <button className='group secondary-btn'>
              watch video
              <span className='group-hover:translate-x-1 transition-transform duration-300 '>
                <FiPlayCircle className=' ml-1' size={24} strokeWidth={2} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
