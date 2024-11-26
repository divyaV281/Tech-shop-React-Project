import React from 'react'
import './style.css'
import productsData from '../Data/ProductsData'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight, FaStar } from 'react-icons/fa'

const Products = () => {
    console.log(productsData)
    // const [{rateCount}] = productsData
    
    const rating = (rateCount) => {
        // console.log(rateCount)
        let star ='';
        for(let i=1; i<=rateCount; i++){
            // star += <FaStar className='text-warning' />
            star += "⭐";
        }
        return star
    }

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
                {
                    productsData && productsData.length > 0 && productsData.filter(ele => ele.id<=11).map(ele => (
                        <div className="col-lg-3 my-3" key={ele.id}>
                            <div className="card bg-black border-light">
                                <Link to={`/productsDetails/${ele.id}`} className='text-decoration-none'>
                                    <div className='d-flex justify-content-center'>
                                        <img src={ele.images[0]} className="card-img-top image-fluid py-3" style={{width: '200px'}} alt={ele.id}/>
                                    </div>
                                    <div className="card-body text-light text-start">
                                        <div className='my-2'>{rating(ele.rateCount)}</div>
                                        <h5 className="card-title">{ele.title}</h5>
                                        <p className="card-text text-secondary border-bottom border-secondary pb-3">{ele.info}</p>
                                        <p className='fs-4 fw-bold'>Rs.{ele.finalPrice} <strike className='fs-5 text-secondary'> Rs.{ele.originalPrice}</strike></p>
                                    </div>
                                </Link>
                                <button className='btn mx-3 mb-4' id='btn'>Add to Cart</button>
                            </div>
                        </div>
                    ))
                }
                <div className="col col-lg-3">

                <div className="card bg-black border-light my-3">
                    <Link to='allProducts' className='text-decoration-none text-light m-5 p-5'>
                        <div className='py-5 my-5 fs-4'>Browse all Products <FaLongArrowAltRight /></div>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Products