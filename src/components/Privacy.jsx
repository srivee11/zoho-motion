import { React, useRef } from 'react'

import { animate, motion, useCycle, useInView } from 'framer-motion'

// import { FaChevronRight } from 'react-icons/fa'
import { FiAnchor, FiTarget, FiSun, FiCpu, FiZap, FiLock } from 'react-icons/fi'

export default function Privacy () {
  return (
    <div
      className=' overflow-hidden relative w-full h-fit flex flex-col justify-start items-center '
      name='products'
    >
      <div className='relative  max-w-screen-lg w-full h-full flex flex-col items-center text-center py-12 lg:py-32'>
        <h3 className=' capitalize text-center text-2xl font-Mont font-medium tracking-wide text-gray-900  p-2 sm:text-3xl '>
          Privacy & Values
        </h3>

        <div className='cursor-pointer product-card relative group  min-h-[300px] w-full max-w-[300px] shadow-lg bg-white border-2 border-gray-200 px-4 py-2 rounded-xl flex flex-col items-center overflow-hidden'>
          <span className=' text-blue-400 bg-blue-100 border-2 border-blue-400 rounded-xl p-2 ' >
            
            <FiLock size={56} strokeWidth={1} />
          </span>
          <p>Privacy</p>
          <p>
            We believe that trust is paramount in a relationship. We do not own
            or sell your data, and we most certainly do not bank on
            advertising-based business models. 
          </p>
        </div>

        <div className='cursor-pointer product-card relative group  min-h-[300px] w-full max-w-[300px] shadow-lg bg-white border-2 border-gray-200 px-4 py-2 rounded-xl flex flex-col items-center overflow-hidden'>
          <span className=' text-blue-400 bg-blue-100 border-2 border-blue-400 rounded-xl p-2 '>
            
            <FiZap size={56} strokeWidth={1} />
          </span>
          <p>Customer-first philosophy</p>
          <p>
          In all these years, it's our customers' trust and goodwill that has helped us establish a strong position in the market. No matter the size of your business, we're here to help you grow.


          </p>
        </div>

        <div className='cursor-pointer product-card relative group  min-h-[300px] w-full max-w-[300px] shadow-lg bg-white border-2 border-gray-200 px-4 py-2 rounded-xl flex flex-col items-center overflow-hidden'>
          <span className=' text-blue-400 bg-blue-100 border-2 border-blue-400 rounded-xl p-2 '>
            
            <FiAnchor size={56} strokeWidth={1} />
          </span>
          <p>Long-term commitment</p>
          <p>
            25 years of running a profitable organization gives us a good sense
            of challenges that a growing business faces. We take pride in
            running a sustainable business that’s powered by you, our customer.
          </p>
        </div>

        <div className='cursor-pointer product-card relative group  min-h-[300px] w-full max-w-[300px] shadow-lg bg-white border-2 border-gray-200 px-4 py-2 rounded-xl flex flex-col items-center overflow-hidden'>
          <span className=' text-blue-400 bg-blue-100 border-2 border-blue-400 rounded-xl p-2 '>
            
            <FiCpu size={56} strokeWidth={1} />
          </span>
          <p>Focus on research</p>
          <p>
          Software is our craft and we back it up with our relentless investments in R&D. So much so that we prefer to own the entire technology stack, including running our data centers globally.
          </p>
        </div>
      </div>
    </div>
  )
}
