import React, { useState } from 'react'
import './style.css'
import productsData from '../Data/ProductsData'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { add } from '../Redux/addCartReducer'

const Products = () => {
    const [products, setProducts] = useState(productsData);
    const dispatch = useDispatch();
    // console.log(products)
    // const [{rateCount}] = productsData
    
    const rating = (rateCount) => {
        // console.log(rateCount)
        let star ='';
        for(let i=1; i<=rateCount; i++){
            star += "⭐";
        }
        return star
    }

    const filteredProducts = (category) => {
        // console.log(category)
        const updatedItems = productsData.filter(ele => ele.category === category);
        setProducts(updatedItems)
    }

    // Add to cart
    const AddCart = (list) => {
        dispatch(add(list));
    }

    return (
    <>
        <h2 className='text-light my-5'>Top Products</h2>
        <div className="container">
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-2">
                    <button className='btn btn-outline-danger text-light my-2 px-4 py-2' onClick={() => setProducts(productsData)} >All</button>
                </div>
                <div className="col-lg-2">
                    <button className='btn btn-outline-danger text-light my-2 px-4 py-2' onClick={() => filteredProducts("Headphones") } >Headphones</button>
                </div>
                <div className="col-lg-2">
                    <button className='btn btn-outline-danger text-light my-2 px-4 py-2' onClick={() => filteredProducts("Earbuds") } >Earbuds</button>
                </div>
                <div className="col-lg-2">
                    <button className='btn btn-outline-danger text-light my-2 px-4 py-2' onClick={() => filteredProducts("Earphones") } >Earphones</button>
                </div>
                <div className="col-lg-2">
                    <button className='btn btn-outline-danger text-light my-2 px-4 py-2' onClick={() => filteredProducts("Neckbands") } >Neckbands</button>
                </div>
            </div>
        </div>

        {/* products card */}
        <div className="container-fluid mt-5">
            <div className="row">
                {
                    products && products.length > 0 && products
                    .filter(ele => ele.id<=11)
                    .map(ele => (
                        <div className="col-lg-3 my-3" key={ele.id}>
                            <div className="card bg-black border-light">
                                <Link to={`/productsDetails/${ele.id}`} className='text-decoration-none'>
                                    <div className='d-flex justify-content-center'>
                                        <img src={ele.images[0]} className="card-img-top image-fluid py-3" style={{width: '200px'}} alt={ele.id}/>
                                    </div>
                                    <div className="card-body text-light text-start">
                                        {/* <div className='my-2'>{rating(ele.rateCount)}</div>
                                         */}
                                        <h5 className="card-title">{ele.title}</h5>
                                        <p className="card-text text-secondary border-bottom border-secondary pb-3">{ele.info}</p>
                                        <p className='fs-4 fw-bold'>Rs.{ele.finalPrice} <strike className='fs-5 text-secondary'> Rs.{ele.originalPrice}</strike></p>
                                    </div>
                                </Link>
                                <button className='btn mx-3 mb-4' id='btn' onClick={() => {AddCart(ele)}}>Add to Cart</button>
                            </div>
                        </div>
                    ))
                }
                <div className="col col-lg-3">
                    <div className="card bg-black border-light my-3 py-4">
                        <Link to='allProducts' className='text-decoration-none text-light m-5 p-5'>
                            <div className='py-5 my-4 fs-4'>Browse all Products <FaLongArrowAltRight /></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Products