import React from 'react'
import { Link } from 'react-router-dom'
import Switch from '../components/ToggleButton'

function Navbar() {
  return (
    <div className='flex justify-between items-center py-4 px-6'>
      <h2>Dhanwis</h2>
      <div className='lg:flex gap-5 hidden'>
      <Link to={'/'}>Home</Link>
      <Link to={'/aboutus'}>About Us</Link>

      <Link to={'/ourworks'}>Our Work</Link>
      <Link to={'/contactus'}>Contact Us</Link>

      </div>
      <div>
        <Switch/>
      </div>
    </div>
  )
}

export default Navbar
