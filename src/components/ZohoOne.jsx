import React from 'react'

import {
  useTransform,
  animate,
  motion,
  useScroll,
  useAnimate,
  stagger
} from 'framer-motion'

import { FaChevronRight } from 'react-icons/fa'

import zoho_one_icon from '../assets/main icons/one.svg'
import young_ceo from '../assets/young_ceo.jpg'

export default function () {
 

  const fadein_anime = {
    initial: {
      opacity: 0,
      y: '10vmin'
    },
    animate: {
      opacity: 1,
      y: '0%',

      transition: {
        type: 'spring',
        delay: 0.5,
        duration: 2,
        bounce: 0.5
      }
    }
  }


  const pulse_anime = {
    animate: {
      scale: [1, 1.05],
      opacity: [0.5, 0.7],
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
    <div
      name='zoho_one_id'
      className=' relative w-full h-fit flex flex-col items-center justify-center  py-12 px-4  lg:py-32 '
    >
      <motion.div
        variants={pulse_anime}
        animate='animate'
        className=' mx-auto my-auto absolute  left-0 right-0 aspect-square w-[70vmin] bg-rose-500 rounded-full mix-blend-soft-light opacity-90 filter blur-md'
      ></motion.div>
      <motion.div
        variants={pulse_anime}
        animate='animate'
        className=' mx-auto my-auto absolute  left-0 right-0 aspect-square w-[80vmin] bg-orange-500 rounded-full mix-blend-soft-light opacity-80 filter blur-md'
      ></motion.div>
      <motion.div
        variants={pulse_anime}
        animate='animate'
        className=' mx-auto my-auto absolute  left-0 right-0 aspect-square w-[90vmin] bg-amber-500 rounded-full mix-blend-soft-light opacity-70 filter blur-md'
      ></motion.div>
      <motion.div
        variants={pulse_anime}
        animate='animate'
        className=' mx-auto my-auto absolute  left-0 right-0  aspect-square w-[100vmin] bg-yellow-300 rounded-full mix-blend-soft-light opacity-60 filter blur-md'
      ></motion.div>
      {/* <div className=' mx-auto my-auto absolute  left-0 right-0 h-full w-full bg-gradient-to-t from-yellow-100 to bg-white/0 via-yellow-100 mix-blend-soft-light opacity-80 filter blur-sm'></div> */}

      <motion.div
        variants={fadein_anime}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
        className=' relative bg-white border-2 border-gray-200  backdrop-blur-md rounded-2xl shadow-xl sm:max-w-lg md:max-w-xl flex flex-col gap-3 justify-center items-center px-4 py-6  md:items-start md:px-12 md:py-16'
      >
        <div className=' mx-auto w-[30%] sm:w-[20%] lg:w-[25%]'>
          <img
            src={zoho_one_icon}
            className=' w-full h-full '
            alt='my_zoho_1'
          />
        </div>
        <h3 className=' w-full capitalize text-center text-2xl font-Mont font-medium tracking-wide text-gray-900 sm:text-3xl  '>
          zoho one
        </h3>
        <p className=' w-full mx-auto text-base p-2 text-gray-700 lg:text-xl '>
          The all-in-one business suite to run your entire business with our
          unified cloud software, designed to help you increase organizational
          efficiency.
        </p>

        <blockquote className=' text-gray-700 relative w-full h-fit py-8 px-8 mx-auto font-medium tracking-wide text-lg  lg:text-xl text-center'>
          You can be a startup, a SMB or an enterprise—Zoho One is a boon for
          all
        </blockquote>

        <div className=' flex flex-row gap-3 md:self-center'>
          <div className=' w-[30%] max-w-[128px] rounded-xl border-2 border-gray-100 overflow-clip '>
            <img src={young_ceo} className=' w-full h-full ' alt='my_zoho_1' />
          </div>
          <div className=' text-gray-700  w-[70%] flex flex-col justify-start '>
            <p className=' text-lg font-medium'> Prakarsh Gagdani</p>
            <p className=' text-base'> CEO, 5paisa.com</p>
            <p className=' text-base'> IIFL subsidiary</p>
          </div>
        </div>

        <button className='group primary-btn mt-6 md:self-center'>
          try zoho one
          <span className='group-hover:translate-x-1 transition-transform duration-300 '>
            <FaChevronRight className=' ml-1' size={16} />
          </span>
        </button>
      </motion.div>
    </div>
  )
}
