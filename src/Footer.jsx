import React from 'react'

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

export default function Footer () {
  return (
    <div className=' relative w-screen h-fit mx-auto flex flex-col justify-center items-center bg-slate-200 text-gray-700'>
      <div className=' footer-grid-mobile w-full max-w-screen-lg bg-pink-200 '>
        <div className=' signup_block flex flex-col gap-3 justify-center items-center py-6 px-6'>
          <h3>Ready to do your best work?</h3>
          <p>Let's get you started.</p>
          <button className='group secondary-btn'>
            watch video
            <span className='group-hover:translate-x-1 transition-transform duration-300 '>
              <FiPlayCircle className=' ml-1' size={24} strokeWidth={2} />
            </span>
          </button>
        </div>

        <div className=' list_block flex flex-row gap-3 justify-center items-center py-6 px-6 '>
          <h2>Apps</h2>
          <a>My dasd </a>
          <a>My dasdas </a>

          <h2> Company</h2>
          <a>My dasd </a>
          <a>My dasdas </a>

          <h2> Company</h2>
          <a>My dasd </a>
          <a>My dasdas </a>
        </div>

        <div className='twitter_block  flex flex-col gap-3 justify-center items-center py-6 px-6 '>
          <span className=' privacy-icon '>
            <FiAnchor size={56} strokeWidth={1} />
          </span>
        </div>

        <div className='instagram_block  flex flex-col gap-3 justify-center items-center py-6 px-6 '>
          <span className=' privacy-icon '>
            <FiCpu size={56} strokeWidth={1} />
          </span>
        </div>

        <div className='linkedIn_block  flex flex-col gap-3 justify-center items-center py-6 px-6 '>
          <span className=' privacy-icon '>
            <FiLock size={56} strokeWidth={1} />
          </span>
        </div>


      </div>
    </div>
  )
}
