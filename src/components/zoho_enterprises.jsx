import React from 'react'

import { motion, scroll } from 'framer-motion'

import { FaChevronRight } from 'react-icons/fa'

import zoho_one_icon from '../assets/main icons/one.svg'
import old_ceo from '../assets/old_ceo.jpg'

export default function () {
  const pulse_anime = {
    animate: {
      scale: [1, 1.1],
      opacity: [0.6, 0.9],
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 2,
        ease: 'easeInOut',
        delay: 0.05
      }
    }
  }

  const fadein_anime = {
    initial: {
      opacity: 0,
      x: '-100%'
    },
    animate: {
      opacity: 1,
      x: '0%',

      transition: {
        type: 'spring',
        duration: 1.5,
        bounce: 0.3,
        delay: 0.8
      }
    }
  }

  return (
    <div
      className=' overflow-hidden relative mx-auto w-screen h-fit flex flex-col justify-center items-center'
      name='zoho_enterprises'
    >
      <hr className=' absolute top-[0%] w-full max-w-4xl h-[1px] border border-gray-200 rounded-full  ' />

      <motion.div
        variants={pulse_anime}
        animate='animate'
        className=' mx-auto absolute bottom-[-60%]  left-0 right-0 aspect-square w-[60vmin] bg-teal-500 rounded-full mix-blend-soft-light opacity-90 filter blur-md'
      ></motion.div>
      <motion.div
        variants={pulse_anime}
        animate='animate'
        className=' mx-auto  absolute bottom-[-70%]  left-0 right-0 aspect-square w-[80vmin] bg-emerald-400 rounded-full mix-blend-soft-light opacity-80 filter blur-md'
      ></motion.div>
      <motion.div
        variants={pulse_anime}
        animate='animate'
        className=' mx-auto  absolute bottom-[-70%]  left-0 right-0 aspect-square w-[90vmin] bg-green-300 rounded-full mix-blend-soft-light opacity-70 filter blur-md'
      ></motion.div>
      <motion.div
        variants={pulse_anime}
        animate='animate'
        className=' mx-auto  absolute bottom-[-70%]  left-0 right-0  aspect-square w-[100vmin] bg-lime-200 rounded-full mix-blend-soft-light opacity-60 filter blur-md'
      ></motion.div>

      <div className=' mx-auto absolute bottom-0 left-0 h-full w-screen bg-gradient-to-t from-lime-100 to-white mix-blend-soft-light opacity-70 filter blur-sm'></div>

      <div className=' relative mx-auto w-full max-w-screen-lg flex flex-col-reverse gap-8  items-center justify-center text-gray-700 px-12 py-16 lg:flex-row lg:gap-16 lg:px-24 lg:py-24'>
        <motion.div
          variants={fadein_anime}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className=' relative bg-white border-2 border-gray-200  backdrop-blur-md rounded-2xl shadow-xl h-fit max-w-sm flex flex-col gap-4 justify-center items-center px-6 py-6'
        >
          <blockquote className=' text-gray-700 relative w-full h-fit py-8 px-8 mx-auto font-medium tracking-wide text-lg  lg:text-xl text-center hover:scale-105 duration-500 '>
            Our productivity is up by
            80% in the last year that we have been using Zoho.
          </blockquote>
    

        

          <div className=' flex flex-row gap-3 md:self-center'>
            <div className=' w-[30%] max-w-[128px] rounded-xl border-2 border-gray-100 overflow-clip '>
              <img
                src={old_ceo}
                className=' w-full h-full '
                alt='old_ceo_img'
              />
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
        </motion.div>

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
    </div>
  )
}
