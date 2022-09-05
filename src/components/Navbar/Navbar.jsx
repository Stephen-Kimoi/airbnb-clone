import React from 'react'
import logo from '../images/airbnb.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
       <div>
         <img src={logo} alt='airbnb logo'/>
       </div>
    </nav>
  )
}

export default Navbar