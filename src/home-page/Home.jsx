import React from 'react'
import Banner from './Banner'
import RealStateSection from './RealStateSection'
import LogoList from './LogoList'
import EstateService from './EstateService'
import UniqueHome from './UniqueHome'
import Testimonial from './Testimonial'
import Blogs from './Blogs'
import Newsletter from './Newsletter'

const Home = () => {
  return (
    <div >
      <Banner/>
      <RealStateSection/>
      <LogoList/>
      <EstateService/>
      <UniqueHome/>
      <Testimonial/>
      <Blogs/>
      <Newsletter/>
    </div>
  )
}

export default Home