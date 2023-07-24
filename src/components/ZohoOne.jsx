import React from 'react'

import { animate, motion, scroll } from 'framer-motion'

import { FaChevronRight } from 'react-icons/fa'

import zoho_one_icon from '../assets/main icons/one.svg'
import young_ceo from '../assets/young_ceo.jpg'

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

  const quote_hover_anime = {
    initial: {},
    animate: {
      scale: 1.05,color:'white',backgroundColor: "black",
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <div
      name='zoho_one_id'
      className=' relative overflow-hidden w-full h-fit flex flex-col items-center justify-center bg-white text-black'
    >
      
      <div className=' relative bg-gradient-to-bl from-white to-white/80 via-white border-2 border-gray-200  backdrop-blur-md my-6 w-[90%] md:max-w-xl lg:max-w-2xl flex flex-col gap-3 justify-center items-center px-8 py-8 rounded-2xl shadow-lg md:my-16 lg:items-start lg:my-24 lg:px-24'>

      <div className=' z-[-1] absolute top-[-50vmin] right-[-20vmin] aspect-square w-full max-w-[65vmin] bg-yellow-300 rounded-full mix-blend-multiply opacity-70 filter blur-xl'></div>


      <div className=' z-[-1] absolute top-[-50vmin] right-[-20vmin] aspect-square w-full max-w-[55vmin] bg-yellow-400 rounded-full mix-blend-multiply opacity-70 filter blur-xl'></div>

      <div className=' z-[-1] absolute top-[-55vmin] right-[-15vmin] aspect-square w-full max-w-[50vmin] bg-orange-400 rounded-full mix-blend-multiply opacity-50 filter blur-xl'></div>

      <div className=' z-[-1] absolute bottom-[-50vmin] left-[-25vmin] aspect-square w-full max-w-[60vmin] bg-cyan-200 rounded-full mix-blend-multiply opacity-70 filter blur-xl'></div>

      <div className=' z-[-1] absolute bottom-[-50vmin] left-[-20vmin] aspect-square w-full max-w-[50vmin] bg-blue-500 rounded-full mix-blend-multiply opacity-50 filter blur-xl'></div>
      
      <div className=' z-[-1] absolute bottom-[-52vmin] left-[-20vmin] aspect-square w-full max-w-[45vmin] bg-blue-600 rounded-full mix-blend-multiply opacity-50 filter blur-xl'></div>
       
        <div className=' mx-auto w-[30%] sm:w-[20%] lg:w-[25%]'>
          <img
            src={zoho_one_icon}
            className=' w-full h-full '
            alt='my_zoho_1'
          />
        </div>
        <h3 className='w-full  text-center capitalize text-2xl font-Mont font-bold tracking-wide  text-gray-900  p-2 sm:text-3xl '>
          zoho one 
        </h3>
        <p className=' w-full text-lg '>
          The all-in-one business suite to run your entire business with our unified cloud software,
          designed to help you increase organizational efficiency.
        </p>

        <blockquote className=' relative w-full h-fit py-8 px-8 mx-auto font-bold tracking-wide text-left text-lg  lg:text-xl lg:text-center'>
          You can be a startup, a SMB or an enterprise—Zoho One is
          a boon for all.
        </blockquote>

        <div className=' flex flex-row gap-3 md:self-center'>
          <div  className=' w-[30%] max-w-[128px] rounded-xl border-2 border-gray-100 overflow-clip '>
            <img src={young_ceo} className=' w-full h-full ' alt='my_zoho_1' />
          </div>
          <div className='  w-[70%] flex flex-col justify-start '>
            <p className=' text-xl font-medium'> Prakarsh Gagdani</p>
            <p className=' text-base'> CEO, 5paisa.com</p>
            <p className=' text-base'> IIFL subsidiary</p>
          </div>
        </div>

        <button className='group primary-btn mt-6 md:self-center'>
          explore all products
          <span className='group-hover:translate-x-1 transition-transform duration-300 '>
            <FaChevronRight className=' ml-1' size={16} />
          </span>
        </button>



      </div>



    </div>
  )
}
