import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';
import { CartContext } from '../../Contexts/CartContext';

function Details() {

  //get product id from URL
  const { productId } = useParams();

  //set state for current product object
  const [currentProduct, setCurrentProduct] = useState('');

  //api all using product id to set current project object
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res=>res.json())
    .then(json=>{setCurrentProduct(json)});
  },[])

  //access global cart state and functions
  const {cart, addToCart, removeFromCart} = useContext(CartContext);

  return (
    <main>
      <div className='product-detail-container'>
        <img src={currentProduct?.image}/>
        <div className='product-detail-info'>
          <h2 className='w700'>{currentProduct?.title}</h2>
          <h2 className='w600'>{`${currentProduct?.price}€`}</h2>
          <h3 className='w600'>Description</h3>
          <p>{currentProduct?.description}</p>
          {
            cart.find(item => item.id == currentProduct.id)?
            <button className='clickable grey-btn' onClick={()=>{removeFromCart(currentProduct)}}>Remove from Cart</button>
            :
            <button className='clickable' onClick={()=>{addToCart(currentProduct)}}>Add to Cart</button>
          }
        </div>
      </div>
    </main>
  );
}

export default Details;