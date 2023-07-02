import React, { useContext } from 'react'
import './CheckoutCard.css'
import {BsTrash3} from 'react-icons/bs'
import { CartContext } from '../../Contexts/CartContext'
import { Link } from 'react-router-dom'

const CheckoutCard = ({product}) => {

  //access global cart function to remove
  const {removeFromCart} = useContext(CartContext);


  //create product card/ strip based on product passed in props
  return (
    <div className='checkout-section-container cart-item-section'>
        <Link to={`/details/${product.id}`} className='cart-image-container' style={{backgroundImage:`url(${product.image})`}}></Link>
        <Link to={`/details/${product.id}`} className='link-no-style'><h3 className='w700 cart-product-title'>{product.title}</h3></Link>
        <h2 className='w700 flex-align-center'>{product.price}€</h2>
        <h2 className='w700 flex-align-center'>1</h2>
        <span className='flex-align-center'><BsTrash3 className='bin clickable' onClick={()=>{removeFromCart(product)}}/></span>
    </div>
  )
}

export default CheckoutCard