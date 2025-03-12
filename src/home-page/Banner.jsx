import React from 'react'
import bannerimg from "../assets/banner.png"

const Banner = () => {
  return (
    <div className='bg-[#fef8f5] md:py-36 py-12 w-full mx-auto' id='home'>
      <img src={bannerimg}></img>
    </div>
  )
}

export default Banner