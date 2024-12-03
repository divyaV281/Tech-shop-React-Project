import React from 'react'
import { CiUser } from 'react-icons/ci'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './style.css'
import Login from './Login';

const SignIn = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <CiUser className='text-light mx-4 fs-3' title='Login/SignIn' onClick={handleShow} id='hoverData' style={{cursor:'pointer'}}  /> 
        <div className='text-light border p-3 d-none' id='popup'>
            <h4>Hello..!</h4>
            <p>Access account and manage orders</p>
            <button className='mb-3 btn btn-outline-light'>Login/Signup</button>
            <div className='border-top'>Please Login</div>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Body className='bg-dark text-light text-center'>
          <form className='p-3'>
            <h2 className='my-1'>SignUp</h2>
            <p>Already have an account? <span> <Login /> </span></p>
            <input type="text" className='form-control my-4 bg-dark text-light' placeholder='Username'  id='placeHolder'/>
            <input type="text" className='form-control my-4 bg-dark text-light' placeholder='Email'  id='placeHolder'/>
            <input type="text" className='form-control my-4 bg-dark text-light' placeholder='Password' id='placeHolder' />
            <input type="text" className='form-control my-4 bg-dark text-light' placeholder='Confirm Password' id='placeHolder' />
            <button className='btn btn-danger px-5'>Signup</button>
            <p className='text-center my-3'>or login with</p>
            <div className="btn btn-primary px-3 mx-2">Facebook</div>
            <div className="btn btn-danger px-3 mx-2">Google</div>
            <div className="btn btn-info px-3 mx-2">Twitter</div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default SignIn