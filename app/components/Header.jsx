import React from 'react'
import { TiArrowRight} from "react-icons/ti";
const Header = () => {
  return (
    <div id='scrollToTopBtn' className='container text-white mx-auto md:p-5 py-5 md:py-16 flex justify-between'>
         <div className='left-image w-10 md:w-16'>
            <img src='./navimage.png'/>
         </div>
         <div className='right-button bg-[#234BC1] h-10 py-2 px-3 md:px-3 rounded-md'>
           <a href='#' className='flex space-x-1 text-[13px] md:text-[16px] '>
             <span className='pt-1 md:pt-0'>Connect to Dapp</span><TiArrowRight className="mt-0.5 w-6 md:w-8 h-6 " />
           </a>
         </div>
    </div>
  )
}

export default Header
