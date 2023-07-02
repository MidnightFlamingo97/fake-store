import React, { useContext, useEffect, useState } from 'react'
import './ProductCard.css'
import { CartContext } from '../../Contexts/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {

  //access global cart state and functions
  const {cart, addToCart, removeFromCart} = useContext(CartContext);

  //determine if products is in cart and store in state
  const [inCart, setInCart] = useState(false);

  useEffect(()=>{
    setInCart(cart.find(item => item.id == product.id))
  },[cart]);

  //create product card/ strip based on product passed in props
  return (
    <div className='product-card'>
          <div className='image-container' style={{backgroundImage:`url(${product?.image})`}}>
            {
              inCart?
              <p className='fav-btn in-cart clickable' onClick={()=>{removeFromCart(product)}}>&#10084;</p>
              :
              <p className='fav-btn clickable' onClick={()=>{addToCart(product)}}>&#10084;</p>
            }
          </div>
          <div className='info-container'>
            <p className='p12 w700'>{product?.title}</p>
            <p className='p10 grey-txt'>{product?.category.replace(/(^|\s)\S/g, match => match.toUpperCase())}</p>
            {/* using .replace() to capitalize letters of words in category*/}
          </div>
          <div className='price-container'>
            <p className='p12 w600'>{`${product?.price}€`}</p>
            <Link to={`/details/${product?.id}`}><button className='details-btn clickable'>View</button></Link>
          </div>
        </div>
  )
}

export default ProductCard