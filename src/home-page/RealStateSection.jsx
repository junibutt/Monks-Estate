import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


const items=[
  {count:"200+", label:'Modern \n Properties'},
  {count:"98%", label:'Client \n Satisfaction'},
  {count:"12+", label:' Years Of \n Experience'},
  {count:"20+", label:'Award \n Winning'},
]
const RealStateSection = () => {
  return (
    
      <section className='max-w-screen-2xl mx-auto lg:my-12 my-7 p-5'>
        <div className='bg-white'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div className='space-y-6'>
              <div className='max-w-md'><h1 className='text-3xl lg:text-4xl font-bold leading-tight'>Building dreams into stunning real estate</h1></div>
              <div className='max-w-md'>
                <p className='text-gray-800'>We take pride in our track record of excellence and innovation in the real estate industry. Here's a glipmse of our notable achievements.</p>
                </div>
                <div className='mt-7 lg:mt-12'>
                  <button className='px-6 py-3 border text-gray-800 border-orange-600 flex items-center gap-2 text-sm lg:text-base font-medium rounded-md transition-transform transform hover:scale-105'>
                    More About Us <span className='flex items-center w-4 h-4'><IoIosArrowForward /></span>
                  </button>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-6'>
              {
                items.map((item,id)=>{
                  return (
                  <div key={id} className='bg-orange-200 p-6 text-start shadow-md'>
                    <h2 className='text-lg font-bold text-gray-800 lg:text-3xl'>{item.count}</h2>
                    <p className="text-gray-700 mt-2 whitespace-pre-line" >{item.label}</p>
                  </div>
                  );
                })
              }
            </div>
          </div>
        </div>

      </section>
  )
}

export default RealStateSection