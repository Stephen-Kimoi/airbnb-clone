import React from 'react'
import group from '../images/group.png'

const Hero = () => {
  return (
    <div className='hero'>

       <img src={group} alt="hero section"/> 

       <div className='hero-description'>
           <h1>Online Experiences</h1>
           <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
       </div>
       
    </div>
  )
}

export default Hero