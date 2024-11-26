import React from 'react'
import { Link } from 'react-router-dom'

const ProductsDetailsOverView = () => {
  return (
    <>
      <div className='container'>
        <div className="row mt-5">
          <div className="col-3"></div>
          <div className="col-2">
            <Link>
              <button className='btn text-light' id='btn'>Specifications</button>
            </Link>
          </div>
          <div className="col-2">
          <Link>
              <button className='btn text-light' id='btn'>Overview</button>
            </Link>
          </div>
          <div className="col-2">
            <Link>
              <button className='btn text-light' id='btn'>Reviews</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsDetailsOverView