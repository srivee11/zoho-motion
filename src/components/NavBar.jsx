import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsSearch} from 'react-icons/bs'
import { FiGlobe} from 'react-icons/fi'
import { Link } from 'react-scroll'

// import Zoho_Logo from '../assets/main icons/Zoho_Logo_Motion.svg'

import { motion, scroll } from 'framer-motion'

export default function NavBar () {
  const svg_anime = {
    initial: { scale: 0.2 },
    animate: {
      scale: 0.6,
      transition: {
        type: 'spring',
        duration: 1
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
    { id: 2, link: 'Products' },
    { id: 3, link: 'customers', offset: -100 },
  ]

  return (
    <div className=' fixed top-[0%] z-10 flex justify-between items-center w-[100%] h-16 px-4 py-2 bg-gray-0/90 text-gray-900 backdrop-blur-md shadow-sm'>
      <motion.span variants={svg_anime} initial='initial' animate='animate'>
        <svg 
          width='250'
          height='74'
          viewBox='0 0 250 74'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='Group layer'>
            <g id='blocks'>
              <path
                id='Vector'
                d='M181.726 17.6027C183.444 17.6027 185.091 18.2849 186.305 19.4994C187.52 20.7139 188.202 22.3611 188.202 24.0786V64.1115C188.202 65.8291 187.52 67.4762 186.305 68.6907C185.091 69.9052 183.444 70.5875 181.726 70.5875H141.693C139.976 70.5875 138.328 69.9052 137.114 68.6907C135.899 67.4762 135.217 65.8291 135.217 64.1115V24.0786C135.217 22.3611 135.899 20.7139 137.114 19.4994C138.328 18.2849 139.976 17.6027 141.693 17.6027H181.726ZM181.726 14.6591H141.693C139.195 14.6591 136.799 15.6515 135.032 17.418C133.266 19.1845 132.274 21.5804 132.274 24.0786V64.1115C132.274 66.6098 133.266 69.0056 135.032 70.7722C136.799 72.5387 139.195 73.5311 141.693 73.5311H181.726C184.224 73.5311 186.62 72.5387 188.387 70.7722C190.153 69.0056 191.146 66.6098 191.146 64.1115V24.0786C191.146 21.5804 190.153 19.1845 188.387 17.418C186.62 15.6515 184.224 14.6591 181.726 14.6591Z'
                fill='#EA4335'
              />
              <path
                id='Vector_2'
                d='M49.4525 17.6027C51.17 17.6027 52.8172 18.2849 54.0317 19.4994C55.2461 20.7139 55.9284 22.3611 55.9284 24.0786V64.1115C55.9284 65.8291 55.2461 67.4762 54.0317 68.6907C52.8172 69.9052 51.17 70.5875 49.4525 70.5875H9.41952C7.702 70.5875 6.05483 69.9052 4.84035 68.6907C3.62588 67.4762 2.9436 65.8291 2.9436 64.1115V24.0786C2.9436 22.3611 3.62588 20.7139 4.84035 19.4994C6.05483 18.2849 7.702 17.6027 9.41952 17.6027H49.4525ZM49.4525 14.6591H9.41952C6.92131 14.6591 4.52542 15.6515 2.75891 17.418C0.992411 19.1845 0 21.5804 0 24.0786L0 64.1115C0 66.6098 0.992411 69.0056 2.75891 70.7722C4.52542 72.5387 6.92131 73.5311 9.41952 73.5311H49.4525C51.9507 73.5311 54.3466 72.5387 56.1131 70.7722C57.8796 69.0056 58.872 66.6098 58.872 64.1115V24.0786C58.872 21.5804 57.8796 19.1845 56.1131 17.418C54.3466 15.6515 51.9507 14.6591 49.4525 14.6591Z'
                fill='#4285F4'
              />
              <path
                id='Vector_3'
                d='M240.581 17.9148C242.298 17.9148 243.945 18.5971 245.16 19.8115C246.374 21.026 247.056 22.6732 247.056 24.3907V64.4237C247.056 66.1412 246.374 67.7884 245.16 69.0028C243.945 70.2173 242.298 70.8996 240.581 70.8996H200.548C198.83 70.8996 197.183 70.2173 195.968 69.0028C194.754 67.7884 194.072 66.1412 194.072 64.4237V24.3907C194.072 22.6732 194.754 21.026 195.968 19.8115C197.183 18.5971 198.83 17.9148 200.548 17.9148H240.581ZM240.581 14.9712H200.548C198.049 14.9712 195.653 15.9636 193.887 17.7301C192.12 19.4966 191.128 21.8925 191.128 24.3907V64.4237C191.128 66.9219 192.12 69.3178 193.887 71.0843C195.653 72.8508 198.049 73.8432 200.548 73.8432H240.581C243.079 73.8432 245.475 72.8508 247.241 71.0843C249.008 69.3178 250 66.9219 250 64.4237V24.3907C250 21.8925 249.008 19.4966 247.241 17.7301C245.475 15.9636 243.079 14.9712 240.581 14.9712Z'
                fill='#FBBC04'
              />
              <path
                id='Vector_4'
                d='M102.955 2.94361C104.093 2.94576 105.21 3.24582 106.195 3.81391C107.181 4.38201 108 5.19832 108.572 6.18157L128.588 40.8513C129.443 42.3354 129.676 44.0979 129.234 45.753C128.793 47.408 127.714 48.8208 126.233 49.6821L91.5637 69.6986C90.0795 70.5537 88.317 70.7861 86.662 70.3447C85.0069 69.9034 83.5941 68.8243 82.7329 67.3437L62.7164 32.674C61.8612 31.1898 61.6289 29.4273 62.0702 27.7723C62.5116 26.1172 63.5907 24.7045 65.0713 23.8432L99.741 3.82669C100.717 3.25688 101.825 2.95243 102.955 2.94361ZM102.955 8.30213e-06C101.301 -0.00219599 99.6759 0.434582 98.2456 1.26576L63.5818 21.2822C61.4199 22.532 59.8428 24.589 59.197 27.0011C58.5512 29.4132 58.8896 31.9831 60.1378 34.1458L80.1543 68.8155C81.403 70.9784 83.4596 72.5568 85.8718 73.2037C88.284 73.8506 90.8544 73.5131 93.0178 72.2654L127.688 52.2489C128.759 51.6306 129.699 50.8072 130.452 49.8257C131.205 48.8443 131.758 47.724 132.079 46.5289C132.399 45.3338 132.481 44.0873 132.319 42.8606C132.158 41.6339 131.756 40.451 131.137 39.3795L111.121 4.70977C110.294 3.27665 109.103 2.08679 107.67 1.25998C106.236 0.433177 104.61 -0.00139729 102.955 8.30213e-06Z'
                fill='#34A853'
              />
            </g>
            <g id='All Letters'>
              <path
                id='Vector_5'
                d='M17.691 32.0028H41.5342L17.3378 56.2051H41.5342'
                stroke='#4285F4'
                stroke-width='6'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                id='Vector_6'
                d='M95.6376 48.2869C102.001 48.2869 107.159 43.1286 107.159 36.7656C107.159 30.4026 102.001 25.2444 95.6376 25.2444C89.2746 25.2444 84.1163 30.4026 84.1163 36.7656C84.1163 43.1286 89.2746 48.2869 95.6376 48.2869Z'
                stroke='#34A853'
                stroke-width='6'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                id='Vector_7'
                d='M220.564 55.9285C226.927 55.9285 232.085 50.7703 232.085 44.4072C232.085 38.0442 226.927 32.886 220.564 32.886C214.201 32.886 209.043 38.0442 209.043 44.4072C209.043 50.7703 214.201 55.9285 220.564 55.9285Z'
                stroke='#FBBC04'
                stroke-width='6'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <g id='H letter'>
                <path
                  id='Vector_8'
                  d='M152.614 31.9144V56.2698'
                  stroke='#EA4335'
                  stroke-width='6'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  id='Vector_9'
                  d='M152.614 43.7361H170.805'
                  stroke='#EA4335'
                  stroke-width='6'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  id='Vector_10'
                  d='M170.805 31.9144V56.2698'
                  stroke='#EA4335'
                  stroke-width='6'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </g>
            </g>
          </g>
        </svg>
      </motion.span>

      <div className=' hidden bg-opacity-0 md:flex'>
        {links.map(({ id, link, offset }) => (
          <span
            key={id}
            className=' mx-2 px-4 py-2 font-medium rounded-md cursor-pointer text-gray-900 bg-opacity-0 backdrop-blur-md  hover:bg-gray-300 transition-all duration-200 capitalize '
          >
            <Link to={link} smooth offset={offset} duration={500}>
          
              {link}
            </Link>
          </span>
        ))}

      </div>

        <ul className='flex'>
          <li> <BsSearch size={28} /> </li>
          <li> <FiGlobe size={28} /> </li>
          <li> <a className=' capitalize mx-2 px-4 py-2 font-medium rounded-md cursor-pointer text-blue-main  border-blue-main border-2 border-collapse' > sign in </a>  </li>
          <li> <a className=' capitalize mx-2 px-4 py-2 font-medium rounded-md cursor-pointer bg-blue-main text-gray-0 border-blue-main border-2' > sign up </a>  </li>

        </ul>

      <div
        onClick={() => setNav(!nav)}
        className='pr-4 cursor-pointer z-10 md:hidden text-gray-900'
      >
        {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>
    </div>
  )
}
