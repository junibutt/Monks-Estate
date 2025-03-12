import React from 'react'
import img1 from '../assets/logo-1.png';
import img2 from '../assets/logo-2.png';
import img3 from '../assets/logo-3.png';
import img4 from '../assets/logo-4.png';
import img5 from '../assets/logo-5.png';
import img6 from '../assets/logo-6.png';

const LogoList = () => {
  return (
    <div className='max-w-screen-2xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-6 my-10 p-5'>

      <div>
        <img src={img1}></img>
      </div>
      <div>
        <img src={img2}></img>
      </div>
      <div>
        <img src={img3}></img>
      </div>
      <div>
        <img src={img4}></img>
      </div>
      <div>
        <img src={img5}></img>
      </div>
      <div>
        <img src={img6}></img>
      </div>
    </div>
  )
}

export default LogoList