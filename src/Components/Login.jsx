import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './style.css'

const Login = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        {/* <CiUser className='text-light mx-4 fs-3' title='Login/SignIn' onClick={handleShow} id='hoverData' style={{cursor:'pointer'}}  />  */}
        <span onClick={handleShow}>Login</span>
        <Modal show={show} onHide={handleClose}>
        <Modal.Body className='bg-dark text-light'>
        <form className='p-3'>
        <h2>Login</h2>
        <p>New to Tech-Shop? <span>Create an Account</span></p>
            <input type="text" className='form-control my-5 bg-dark text-light' placeholder='Email'  id='placeHolder'/>
            <input type="text" className='form-control my-5 bg-dark text-light' placeholder='Password'  id='placeHolder'/>
            <button className='btn btn-danger px-5'>Signup</button>
            <p className='text-center my-5'>or login with</p>
            <div className="btn btn-primary px-3 mx-2">Facebook</div>
            <div className="btn btn-danger px-3 mx-2">Google</div>
            <div className="btn btn-info px-3 mx-2">Twitter</div>
          </form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  )
}

export default Login