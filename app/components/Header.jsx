import React from 'react'
import { TiArrowRight} from "react-icons/ti";
const Header = () => {
  return (
    <div id='scrollToTopBtn' className='container text-white mx-auto md:p-5 py-5 md:py-16 flex justify-between'>
         <div className='left-image'>
            <img src='./logo-dark.svg'/>
         </div>
         <div className='right-button bg-[#234BC1] h-10  px-3 md:px-3 rounded-md'>
           <a href='#' className='flex space-x-1 text-[20px] py-1 md:text-[20px] '>
             <span className=''>Connect</span><img src='/header-button-arrow.svg' className="mt-0.5 ml-3" />
           </a>
         </div>
    </div>
  )
}

export default Header
