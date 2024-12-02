import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const SearchInput = () => {
  
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <CiSearch className="text-light mx-4 fs-2" onClick={handleShow} style={{cursor:'pointer'}} title='Search' />

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <form>
                        <input type="search" className='form-control' placeholder='Search for products...' />
                    </form>
                </Modal.Body>
            </Modal>
        </>
)  
}

export default SearchInput