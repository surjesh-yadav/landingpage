import React from 'react'

const Header = () => {
  return (
    <div className='container text-white mx-auto p-5 py-16 flex justify-between'>
         <div className='left-image w-20'>
            <img src='./navimage.png'/>
         </div>
         <div className='right-button bg-[#191919FA] h-10 p-2 rounded-md'>
           <a href='#' className=''>
             Connect to Dapp
           </a>
         </div>
    </div>
  )
}

export default Header
