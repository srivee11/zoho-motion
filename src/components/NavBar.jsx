import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FiSearch } from 'react-icons/fi'
import { FiGlobe } from 'react-icons/fi'
import { Link } from 'react-scroll'

import Zoho_Logo from '../assets/main icons/zoho logo pt@4x.png'

import { motion, scroll } from 'framer-motion'

export default function NavBar () {
  const navbar_slide_anime = {
    initial: { y: '-25vmin' },
    animate: {
      y: '0%',
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delay: 1.5
      }
    }
  }

  const path_anime = {
    initial: { pathLength: 0 },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut'
      }
    }
  }

  const [nav, setNav] = useState(false)

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'products' },
    { id: 3, link: 'customers', offset: -100 }
  ]

  return (
    <motion.div
      variants={navbar_slide_anime}
      initial='initial'
      animate='animate'
      className=' mt-3 fixed top-0 left-0 right-0 mx-auto z-50 flex justify-between items-center  bg-white backdrop-blur-md border-2 rounded-xl shadow-lg border-gray-200 px-2 py-1 w-[90%] md:px-2 lg:w-[70%] '
    >
      <img src={Zoho_Logo} className=' max-h-12 sm:max-h-14 ' />

      <div className=' hidden  lg:flex lg:gap-2'>
        {links.map(({ id, link, offset }) => (
          <Link
            key={id}
            className=' capitalize px-4 py-2 font-medium rounded-md cursor-pointer text-gray-500 hover:bg-gray-200 transition-all  '
            to={link}
            smooth
            offset={offset}
            duration={500}
          >
            {link}
          </Link>
        ))}
      </div>

      <ul className='hidden  lg:flex lg:items-center lg:gap-2 text-gray-700'>
        <li>
          <a className=' secondary-btn '> sign in </a>
        </li>
        <li>
          <a className=' primary-btn '> sign up </a>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className='pr-4 cursor-pointer z-10 lg:hidden text-gray-700'
      >
        {nav ? (
          <FiX size={24} strokeWidth={2.5} />
        ) : (
          <FiMenu size={24} strokeWidth={2.5} />
        )}
      </div>

      {nav && (
        <div className='  flex flex-col justify-start items-center absolute top-0 left-0 right-0 mt-20 py-8 mx-auto w-full max-w-sm h-fit rounded-xl border-2 border-gray-200 bg-white text-gray-500'>
          {links.map(({ id, link }) => (
            <Link
              key={id}
              className='capitalize px-4 py-2 font-medium w-full mx-auto text-center cursor-pointer text-gray-500 hover:bg-gray-200 transition-all '
              onClick={() => setNav(!nav)}
              to={link}
              smooth
              duration={500}
            >
              {link}
            </Link>
          ))}

          <ul className='flex gap-4 items-center justify-center mt-4 '>
            <li>
              <a className=' secondary-btn '> sign in </a>
            </li>
            <li>
              <a className=' primary-btn '> sign up </a>
            </li>
          </ul>
        </div>
      )}
    </motion.div>
  )
}
