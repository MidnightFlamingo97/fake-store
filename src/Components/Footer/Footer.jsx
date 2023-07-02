import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <p className='p12 w400'>Made with &#10084; by Josh</p>
        <Link to='/contact-us'><p className='p12 w400'>Contact Us</p></Link>
    </footer>
  )
}

export default Footer