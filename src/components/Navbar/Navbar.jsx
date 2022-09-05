import React from 'react'; 
import logo from '../images/airbnb.png'; 

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='airbnb logo'/>
    </nav>
  )
}

export default Navbar