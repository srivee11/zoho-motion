import React from 'react'

import { animate, motion, useCycle, useInView } from 'framer-motion'

import { FaChevronRight, FaArrowCircleRight } from 'react-icons/fa'

import {HiMiniSparkles} from 'react-icons/hi2'

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

export default function Footer () {
  return (
    <div className=' relative w-screen h-fit mx-auto flex flex-col justify-center items-center bg-gradient-to-t from-cyan-50 to-white text-gray-700 p-6'>
      <div className=' w-full max-w-screen-lg grid grid-cols-4 grid-rows-4 gap-2 '>
        <div className='footer-container-styles col-span-4 row-span-2 flex flex-col gap-3 justify-center items-center py-8 px-6'>
          <p className=' text-main font-Mont capitalize mt-6 text-2xl tracking-[-1px] font-semibold md:text-4xl lg:text-3xl'>Ready to do your best work?</p>
          <p className=' text-xl capitalize tracking-wider  text-gray-500' >Let's get you started</p>
          <button className='group primary-btn-black mt-6'>
            access your apps
            <span className=' group-hover:scale-105 transition-transform duration-300 '>
              <HiMiniSparkles className=' ml-2' size={28} />
            </span>
          </button>
        </div>

        <div className='footer-container-styles  col-span-2 row-span-2 flex flex-row gap-6 justify-start items-start py-6 px-6 '>
          <span>
            <span className=' flex flex-col'>
              <p className=' footer-list-title '>Apps</p>
              <a className=' footer-links '>mobile apps </a>
              <a className=' footer-links '>market place</a>
              <a className=' footer-links '>extensions</a>
              <a className=' footer-links '>microsoft 365</a>
            </span>
          </span>

          <span>
            <span className=' flex flex-col'>
              <p className=' footer-list-title '>academy</p>
              <a className=' footer-links '>blogs</a>
              <a className=' footer-links '>traing</a>
              <a className=' footer-links '>perspective</a>
              <a className=' footer-links '>knowledge base</a>
            </span>
          </span>

          <span>
            <span className=' flex flex-col'>
              <p className=' footer-list-title '>Company</p>
              <a className=' footer-links '>about us</a>
              <a className=' footer-links '>Press </a>
              <a className=' footer-links '>events </a>
          
            </span>
          </span>
        </div>

        <div className='footer-container-styles  flex justify-center items-center py-2 px-2 '>
          <span className=' privacy-icon '>
            <FiAnchor size={56} strokeWidth={1} />
          </span>
        </div>

        <div className='footer-container-styles  flex  justify-center items-center py-2 px-2 '>
          <span className=' privacy-icon '>
            <FiCpu size={56} strokeWidth={1} />
          </span>
        </div>

        <div className='footer-container-styles   flex  justify-center items-center py-2 px-2 '>
          <span className=' privacy-icon '>
            <FiLock size={56} strokeWidth={1} />
          </span>
        </div>
      </div>
    </div>
  )
}
