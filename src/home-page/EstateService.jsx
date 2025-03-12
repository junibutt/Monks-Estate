import React from 'react'
import agent from "../assets/real-estate-agent.png"
import star from "../assets/start-vector.png"

const EstateService = () => {
  return (
    <section className='bg-[#fdf3ee] my-5 py-24' id="about">
      <div className='max-w-screen-2xl mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-between py-12 px-4 lg:py-24 gap-10 lg:gap-20'>

          <div className='lg:w-1/2 text-center lg:text-left'>
            <h2 className='lg:text-4xl font-bold text-gray-800'>Discover the range of real <br/> estate <span className='text-orange-500'>services</span> we offer.</h2>
            <div className='mt-4 lg:mt-10 flex justify-center lg:justify-start'>
              <img src={agent} className='rounded-lg shadow-lg'/>
            </div>
          </div>

          <div className='lg:w-1/2'>
          <div className='relative flex justify-center mb-3 lg:mb-10'>
            <img src={star}/>
          </div>

          <div className='flex items-start space-x-4 lg:mb-6 mb-4'>
            <h3 className='lg:text-3xl font-bold text-gray-800'>01</h3>
            <div>
              <h4 className='lg:text-lg font-bold text-[#0f0e0e]'>  Buy a home</h4>
              <p className='text-sm text-[#2d2d2d] lg:my-2 md:w-3/5'>Buying a home offers long-term investment, stability, and the freedom to personalize your living space for life.</p>
              <div className='border-t-2 lg:my-3 text-gray-400'></div>
            </div>
          </div>

          <div className='flex items-start space-x-4 lg:mb-6 mb-4' >
            <h3 className='lg:text-3xl font-bold text-gray-800'>02</h3>
            <div>
              <h4 className='lg:text-lg font-bold text-[#0f0e0e]'> Rent a home</h4>
              <p className='text-sm text-[#2d2d2d] lg:my-2 md:w-3/5'>Renting a home provides flexibility, lower upfront costs, and maintenance-free living while enjoying various housing options.</p>
              <div className='border-t-2 lg:my-3 text-gray-400'></div>
            </div>
          </div>

          <div className='flex items-start space-x-4 lg:mb-6 mb-4'>
            <h3 className='lg:text-3xl font-bold text-gray-800'>03</h3>
            <div>
              <h4 className='lg:text-lg font-bold text-[#0f0e0e]'> property management</h4>
              <p className='text-sm text-[#2d2d2d] lg:my-2 md:w-3/5'>Property management ensures smooth operations, efficient maintenance, and tenant satisfaction for a hassle-free rental or investment experience.</p>
              <div className='border-t-2 lg:my-3 text-gray-400'></div>
            </div>
          </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default EstateService