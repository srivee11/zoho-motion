import React from 'react'

import workplace from "../src/assets/main icons/workplace.svg";
import crm from "../src/assets/main icons/crm.svg";
import books from "../src/assets/main icons/books.svg";
import one from "../src/assets/main icons/one.svg";
import helpdesk from "../src/assets/main icons/helpdesk.svg";
import creator from "../src/assets/main icons/creator.svg";
import people from "../src/assets/main icons/people.svg";


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
          name="experience"
          className="  w-full h-min flex flex-col justify-start items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 "
        >
          <div className="max-w-screen-lg w-full h-full flex flex-col items-center text-center py-12 text-white">
            <div>
              <h3 className=" capitalize text-3xl font-bold tracking-wide  text-gray-0  p-2 ">
              our featured apps

              </h3>
            </div>
    
            <div className="w-full flex flex-wrap gap-6 text-center p-8 justify-center items-center">
              {techs.map(({ id, src, title, description }) => (
                <div
                  key={id}
                  className={" group  min-h-[300px] w-full max-w-[300px] bg-gray-0 shadow-md  px-4 py-2 rounded-md flex flex-col items-center"}
                >
                  <img src={src} alt="" className="w-[96px] mx-auto" />
                  <p className=" capitalize text-2xl font-Mont font-bold mt-4 tracking-wide inline-block">{title}</p>
                  <p className=" text-base font-normal mt-4 text-gray-700 ">{description}</p>
                  <a className="trynow-btn  "> Try Now <FaChevronRight className=' ml-2 group-hover:translate-x-1 transition-transform duration-300 ' size={16}/>   </a>
                </div>
              ))}
            </div>

            

          </div>
        </div>
      );

}

