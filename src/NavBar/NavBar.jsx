import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CiSearch, CiUser } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import SearchInput from '../Components/SearchInput'
import Login from '../Components/Login'

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
              <SearchInput />
          <div>
            <Link to='/cart'> 
              <AiOutlineShoppingCart className='text-light mx-4 fs-3' title='Cart' /> 
            </Link>
          </div>
          <div>
            <Login />
            {/* <Link> 
              <CiUser className='text-light mx-4 fs-3' title='Login/SignIn' /> 
            </Link> */}
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar