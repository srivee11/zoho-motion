import React from 'react'

import workplace from "../assets/main icons/workplace.svg";
import crm from "../assets/main icons/crm.svg";
import books from "../assets/main icons/books.svg";
import helpdesk from "../assets/main icons/helpdesk.svg";
import creator from "../assets/main icons/creator.svg";
import people from "../assets/main icons/people.svg";


import {FaChevronRight} from 'react-icons/fa'


export default function FeaturedApps() {
    
    const techs = [
        {
          id: 1,
          src: workplace,
          title: "workplace",
          description: "Business email, chat, files, and meetings—in one place."
        
        },
        {
          id: 2,
          src: crm,
          title: "CRM",
          description: "Start converting leads and close deals faster."
      
        },
        {
          id: 3,
          src: books,
          title: "books",
          description: "Powerful financial platform for growing businesses."
        
        },
        {
          id: 4,
          src: people,
          title: "people",
          description: "Organize, automate, and simplify your HR processes."
  
        },
        {
          id: 5,
          src: helpdesk,
          title: "helpdesk",
          description: "Helpdesk software to deliver great customer support."
         
        },
        {
          id: 6,
          src: creator,
          title: "creator",
          description: "Build custom apps for your business needs"
     
        }
      ];
    
      return (
        <div
          name="products"
          className="  w-full h-fit flex flex-col justify-start items-center bg-gradient-to-b from-blue-50 via-blue-50  to-white"
        >
          <div className="max-w-screen-lg w-full h-full flex flex-col items-center text-center py-12 text-white lg:py-32">
            <div>
              <h3 className=" capitalize text-2xl font-Mont font-bold tracking-wide text-gray-900  p-2 sm:text-3xl ">
              our featured apps

              </h3>
            </div>
    
            <div className="  w-full flex flex-wrap gap-6 text-center p-8 justify-center items-center">
              {techs.map(({ id, src, title, description }) => (
                <div
                  key={id}
                  className={"product-card relative group  min-h-[300px] w-full max-w-[300px] bg-white border-2 border-gray-200 px-4 py-2 rounded-xl flex flex-col items-center overflow-hidden"}
                >
                  <img src={src} alt="" className="w-[96px] mx-auto" />
                  <p className=" capitalize text-2xl font-Mont font-bold mt-4 tracking-wide inline-block text-gray-900">{title}</p>
                  <hr className=' mt-1 w-[30%] h-[1px] border border-gray-200 rounded-full  '></hr>
                  <p className=" text-base font-normal mt-4 text-gray-700 ">{description}</p>
                  <a className=" trynow-btn  "> Try Now <FaChevronRight className='translate-x-1 group-hover:translate-x-2 transition-transform duration-300 ease-in-out ' size={16}/>   </a>
                  <span className=' absolute bottom-[0%] left-[0%] w-full h-2 translate-y-[100%] bg-main/90 group-hover:translate-y-[0%] transition-transform duration-300 ease-in-out ' ></span>
                </div>
              ))}
            </div>

            
            <button className='group secondary-btn'>
              explore all products
              <span className='group-hover:translate-x-1 transition-transform duration-300 '>
                <FaChevronRight className=' ml-1' size={16} />
              </span>
            </button>



          </div>
        </div>
      );

}

