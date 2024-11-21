import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../Components/Index'
import Search from '../Components/Search'
import Cart from '../Components/Cart'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={ <Index /> } />
        {/* <Route path='search' element={ <Search />} /> */}
        <Route path='cart' element={ <Cart />} />
    </Routes>
  )
}

export default Routing