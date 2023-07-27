import React from 'react'

import { animate, motion, useCycle, useInView } from 'framer-motion'

import { FaChevronRight, FaArrowCircleRight } from 'react-icons/fa'

import { HiMiniSparkles } from 'react-icons/hi2'

import { BsTwitter, BsLinkedin, BsYoutube, BsFacebook } from 'react-icons/bs'

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
    <div className=' relative w-screen h-fit mx-auto flex flex-col justify-center items-center bg-gradient-to-t from-cyan-100 to-white via-cyan-50 text-gray-700 p-6'>
      <div className=' w-full max-w-screen-lg grid grid-cols-4 grid-rows-3 gap-4 sm:grid-rows-4 sm:gap-6 '>
        <div className='footer-container-styles col-span-4 lg:col-span-4 lg:row-span-2 flex flex-col gap-3 justify-center items-center px-4 py-3 lg:py-8 lg:px-6'>
          <p className=' text-main/90 font-Mont capitalize mt-6 text-xl tracking-[-1px] font-semibold md:text-4xl lg:text-3xl'>
            Ready to do your best work?
          </p>
          <p className=' text-lg lg:text-xl capitalize tracking-wider  text-gray-500'>
            Let's get you started
          </p>
          <button className='group primary-btn-black mt-3 mb-6'>
            access your apps
            <span className=' group-hover:scale-105 transition-transform duration-300 '>
              <HiMiniSparkles className=' ml-2' size={28} />
            </span>
          </button>
        </div>

        <div className='footer-container-styles col-span-4  lg:col-span-2 lg:row-span-2 flex flex-row gap-4 lg:gap-8 justify-center items-start px-4 py-4  lg:py-6 lg:px-6 '>
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

        <div className='footer-container-styles group col-span-2 lg:col-span-1 lg:row-span-2 flex justify-center items-start  px-4 py-4 lg:py-6 lg:px-6 '>

        
            <span className=' flex flex-col'>
              <p className=' footer-list-title '>contact sales</p>
              <a className=' footer-links '>phone</a>
              <a className=' footer-links underline mb-2'>1800 103 1123 </a>
              <a className=' footer-links '>email </a>
              <a className=' footer-links '>sales@zohocorp.com </a>
            </span>


        </div>

        <div className='footer-container-styles col-span-2 lg:col-span-1 lg:row-span-2  flex flex-col gap-2  justify-start items-center  px-4 py-4 lg:py-6 lg:px-6 '>
          <p className=' footer-list-title '>follow us</p>

          <span className=' footer-icon '>
            <BsLinkedin size={32} />
          </span>
          <span className=' footer-icon '>
            <BsTwitter size={32} />
          </span>
          <span className=' footer-icon '>
            <BsYoutube size={32} />
          </span>
        </div>

      </div>
    </div>
  )
}
