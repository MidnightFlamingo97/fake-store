import React, {useContext, useEffect, useState} from 'react'
import './Cart.css'
import {IoCartOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Contexts/CartContext'

function Cart() {

  //access global cart state
  const {cart} = useContext(CartContext);

  //cart number state & updating
  const [cartQty, setCartQty] = useState(0);

  useEffect(()=>{
    setCartQty(cart.length)
  },[cart])

  return (
    <div className='cart-container'>
        <Link to='/checkout'>
        <p className='p12 w700 cart-number'>{cartQty}</p>
        <IoCartOutline className='cart'/>
        </Link>
    </div>
  )
}

export default Cart