import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../Components/Index'
// import Search from '../Components/Search'
import Cart from '../Components/Cart'
import ProductsDetails from '../Components/ProductsDetails'
import AllProducts from '../Components/AllProducts'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={ <Index /> } />
        {/* <Route path='search' element={ <Search />} /> */}
        <Route path='cart' element={ <Cart />} />
        <Route path='productsDetails/:id' element={ <ProductsDetails /> } />
        <Route path='allProducts' element={ <AllProducts /> } />
    </Routes>
  )
}

export default Routing