import { React, useRef } from 'react'

import { animate, motion, useCycle, useInView } from 'framer-motion'

import { FaChevronRight } from 'react-icons/fa'

import HeroImage from '../assets/main icons/3d blocks.png'

function Section ({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? 'none' : 'translateX(-100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 5 cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}
      >
        {children}
      </span>
    </section>
  )
}

export default function Home () {
  const float_anime = {
    initial: {},
    animate: {
      y: ['-2vmin', '1vmin'],
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 2,
        ease: 'easeInOut',
        when: "afterChildren",
        staggerChildren: 0.5,
        delay: 1.5
      }
    }
  }

  const slide_in_from_right = {
    initial: {
      x: '-100vw'
    },
    animate: {
      x: '0',

      transition: {
        type: 'spring',
        delay: 1,
        duration: 1.5,
        ease: 'easeIn'
      }
    }
  }

  const fadein_anime = {
    initial: {
      opacity: 0,
      y: '1vmin'
    },
    animate: {
      opacity: 1,
      y: '0%',

      transition: {
        type: 'spring',
        delay: 0.5,
        duration: 1.5,
        ease: 'easeIn'
      }
    }
  }

  return (
    <div
      name='home'
      className=' w-full h-fit flex flex-col items-center bg-white text-black'
    >
      <motion.div
        variants={fadein_anime}
        initial='initial'
        animate='animate'
        className=' max-w-screen-lg  flex flex-col  justify-center items-center px-8 pt-32 pb-8  md:flex-row-reverse md:pb-24 md:pt-40'
      >
        <motion.div
          variants={float_anime}
          initial='initial'
          animate='animate'
          className=' mx-auto rounded-2xl overflow-clip w-[60%] md:w-[40%] '
        >
          <img src={HeroImage} alt='my zoho3d'></img>
        </motion.div>

        <div className=' flex flex-col  gap-2 justify-center h-full md:w-[60%] '>
          <h2 className=' overflow-clip  text-gray-900 font-Mont capitalize mt-6 text-2xl tracking-[-1px] font-bold md:text-4xl lg:text-4xl'>
            Your life's work, powered by our life's work
          </h2>
          <p className=' overflow-clip  text-gray-700  w-full py-4 text-xl md:text-2xl lg:text-2xl lg: max-w-[600px]'>
            Powerful software suite to transform the way you work. Designed for
            businesses of all sizes, built by a company that
            <span className=' font-medium'> values your privacy.</span>
          </p>

          <div className='flex flex-col items-center gap-4 sm:flex-row sm:self-start sm:justify-center '>
            <button className='group primary-btn '>
              get started for free
              <span className='group-hover:translate-x-1 transition-transform duration-300 '>
                <FaChevronRight className=' ml-1' size={16} />
              </span>
            </button>

            <button className='group secondary-btn'>
              explore all products
              <span className='group-hover:translate-x-1 transition-transform duration-300 '>
                <FaChevronRight className=' ml-1' size={16} />
              </span>
            </button>

          </div>
        </div>
      </motion.div>
    </div>
  )
}
