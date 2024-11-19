import React from 'react'
import png from '../../assets/puma.png'
import  Carousel  from './crousel'

const Home = () => {
  return (
    <div className='Home w-100 h-100 fs-2'>
 <marquee> Welcome <img src={png} alt="" /> </marquee>


    </div>
  )
}

export default Home
