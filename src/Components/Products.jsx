import React from 'react'
import './style.css'
import productsData from '../Data/ProductsData'

const Products = () => {
    console.log(productsData)
  return (
    <>
        <h2 className='text-light my-5'>Top Products</h2>
        <div className="container">
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-2">
                    <button className='btn text-light active'>All</button>
                </div>
                <div className="col-lg-2">
                    <button className='btn text-light'>Headphones</button>
                </div>
                <div className="col-lg-2">
                    <button className='btn text-light'>Earbuds</button>
                </div>
                <div className="col-lg-2">
                    <button className='btn text-light'>Earphones</button>
                </div>
                <div className="col-lg-2">
                    <button className='btn text-light'>Neckbands</button>
                </div>
            </div>
        </div>

        {/* products card */}
        <div className="container-fluid">
            <div className="row">
                
            </div>
        </div>
    </>
  )
}

export default Products