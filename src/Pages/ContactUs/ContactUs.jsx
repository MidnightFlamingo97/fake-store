import React, { useState } from 'react'
import './ContactUs.css'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const overlayBackground = {
  overlay: {
    backgroundColor: 'rgba(217, 217, 217, 0.7)'
  },
};

Modal.setAppElement(document.getElementById('root'));

function ContactUs() {

  //create state for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  //create state to manage modal
  const [msgModalOpen, setMsgModalOpen] = useState(false);

  return (
    <main>
      <div className='contact-container'>
        <h1 className='w700'>Contact Us</h1>
        <form className='contact-form' onSubmit={e => {
          e.preventDefault();
          setMsgModalOpen(true);
        }}>
  
          <input
          type='text'
          className='contact-form-input'
          placeholder='First Name'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          required/>

          <input type='text'
          className='contact-form-input'
          placeholder='Last Name'
          value={lastName}
          onChange={e => setLastName(e.target.value)}/>

          <textarea
          type='text-area'
          className='contact-form-input'
          placeholder='Write your message here'
          value={message}
          onChange={e => setMessage(e.target.value)}
          required>
          </textarea>

          <button className='submit-btn clickable' type='submit'>Submit</button>
        </form>
      </div>

      <Modal isOpen={msgModalOpen} className='modal-style' style={overlayBackground} contentLabel="Message Modal">
        <h3>{firstName}, Thank you for your message!</h3>
        <p>"{message}"</p>
        <h3>This is a fake store, so unfortunately nothing will happen. Thank you for testing the form!</h3>
        <Link to='/'><button className='clickable return-btn'>Return to Main Page</button></Link>
      </Modal>
    </main>
  )
}

export default ContactUs