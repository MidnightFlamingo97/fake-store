import React, {useContext, useState} from 'react'
import './Checkout.css'
import { CartContext } from '../../Contexts/CartContext'
import CheckoutCard from '../../Components/CheckoutCard/CheckoutCard'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'

//modal styling
const overlayBackground = {
  overlay: {
    backgroundColor: 'rgba(217, 217, 217, 0.7)'
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

const Checkout = () => {

  //access global cart state and setState function for resetting cart after checkout
  const {cart, setCart} = useContext(CartContext);

  //state for managing modal open/ closed
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      <div className='checkout-container'>
        {
          cart.length > 0? //check if cart is empty before
          <>
            <div className='checkout-section-container'>
              <h3 className='w700 grey-txt checkout-field-title'>Item</h3>
              <div className='checkout-field-title'></div>
              {/* using div for spacing to create grid like effect*/}
              <h3 className='w700 grey-txt checkout-field-title'>Price</h3>
              <h3 className='w700 grey-txt checkout-field-title'>Quantity</h3>
              <h3 className='w700 grey-txt checkout-field-title'>Remove</h3>
            </div>

            <div className='cart-items'>
              {cart.map(item => <CheckoutCard product={item} key={item?.id}/>)}
            </div>

            <div className='purchase-container'>
              <div className='total-container'>
                <h2 className='w600'>Total</h2>
                <h2 className='w600'>{cart.reduce((total, current) => total + current.price, 0).toFixed(2)}€</h2>
                {/* using reduce method to get total of all items in cart */}
              </div>

              <button className='clickable' onClick={()=>{setModalOpen(true)}}>Checkout</button>
              <Modal isOpen={modalOpen} className='modal-style' style={overlayBackground} contentLabel="Purchase Modal">
                <h3>Your Order was successful!</h3>
                <h3>Check your email for the order confirmation. Thank you for shopping with Fake Store!</h3>
                <Link to='/'><button className='clickable return-btn' onClick={()=>{setCart([])}}>Return to Main Page</button></Link>
              </Modal>

            </div>
          </>
          :
          <div className='empty-message'>
            <h2>Cart is Empty</h2>
            <Link to='/'><button className='clickable'>Continue Shopping</button></Link>
          </div>
        }
      </div>
    </main>
  )
}

export default Checkout