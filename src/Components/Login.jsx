import React from 'react'
import { CiUser } from 'react-icons/ci'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './style.css'

const Login = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <CiUser className='text-light mx-4 fs-3' title='Login/SignIn' onClick={handleShow} id='hoverData' style={{cursor:'pointer'}}  /> 
        <div className='text-light border p-3' id='popup'>
            <h4>Hello..!</h4>
            <p>Access account and manage orders</p>
            <button className='mb-3 btn btn-outline-light'>Login/Signup</button>
            <div className='border-top'>Please Login</div>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Login