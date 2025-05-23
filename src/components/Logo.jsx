import React from 'react'

function Logo({width ='100px',noPadding = false,}) {
  return (
    <div className={`w-full flex justify-start items-center ${noPadding ? '' : 'px-4 py-2'} ${width}`}>

      <img className=' w-[45px]  rounded-lg md:w-1/4 lg:w-1/5 ml-2 flex-shrink-0' 
      src="/assets/blog.png"
      alt="" />
    </div>
  )
}

export default Logo
