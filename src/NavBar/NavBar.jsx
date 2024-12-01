import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CiSearch, CiUser } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className='bg-black fixed-top mb-5'>
        <nav className="navbar navbar-expand-lg bg-body-subtle">
          <div className="container-fluid">
            <Link to='/' className="navbar-brand"><h3 className='text-light'>Tech-Shop</h3></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
            <div>
              <CiSearch className='text-light mx-4 fs-3' type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" title='Search' />
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body bg-transparent">
                      <form className='bg-transparent'>
                        <input type="text" className='form-control bg-transparent' placeholder='Search for products...' />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div>
            <Link to='/cart'> 
              <AiOutlineShoppingCart className='text-light mx-4 fs-3' title='Cart' /> 
            </Link>
          </div>
          <div>
            <Link> 
              <CiUser className='text-light mx-4 fs-3' /> 
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar