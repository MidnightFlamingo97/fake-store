import React from 'react'
import './Header.css'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <Link to='/'><h2 className='logo w700'>Fake Store</h2></Link>
        <Cart />
    </header>
  )
}

export default Header