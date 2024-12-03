import React, { useEffect, useMemo } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import productsData from '../Data/ProductsData';

const SearchInput = () => {
    const [data, setData] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        setData(productsData)
    },[])

    let searchItem = useMemo(() => {
        return data.filter(list => {
            let name = list.title
                return name.toLowerCase().includes(searchValue.toLowerCase())
        },[data,searchValue])
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <CiSearch className="text-light mx-4 fs-2" onClick={handleShow} style={{cursor:'pointer'}} title='Search' />

            <Modal show={show} onHide={handleClose}>
                <Modal.Body className='bg-dark'>
                    <form>
                        <input type="search" 
                        className='form-control' 
                        placeholder='Search for products...' 
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </form>
                    <div>
                        {searchItem.map(ele => (
                            <Link to={`/productsDetails/${ele.id}`} className='text-decoration-none text-light' key={ele.id}>
                                <h2 className='my-3'>{ele.title}</h2>
                            </Link>
                        ))}
                    </div>
                </Modal.Body>
            </Modal>
        </>
)  
}

export default SearchInput