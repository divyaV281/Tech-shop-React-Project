import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import productsData from '../Data/ProductsData'
import { TiTick } from 'react-icons/ti';
import ProductsDetailsOverView from './ProductsDetailsOverView';
import RelatedProducts from './RelatedProducts';
import { add } from '../Redux/addCartReducer';
import { useDispatch } from 'react-redux';

const ProductsDetails = () => {
    const {id} = useParams();
    const details = productsData[id-1];
    const {images,title,info,rateCount,finalPrice,originalPrice,category} = details;
    const [displayImage, setDisplayImage] = useState(images[0]);
    const dispatch = useDispatch();
    // console.log(id);
    // console.log(productsData);
    // console.log(details);
    // console.log(category);
    let star ='';
    const rating = () => {
        for(let i=1; i<=rateCount; i++){
            star += "⭐"
        }
        return star
    }

    let discountPrice = originalPrice - finalPrice;
    
    // add to cart
    const AddCart = (list) => {
        dispatch(add(list));
    }

  return (
    <>
        <div className="container-fluid pt-5 mt-5">
            <div className="row">
                <div className="col-lg-1">
                    {
                        images.map(image => (
                            <img 
                                src = {image} 
                                style={{width:'150px', cursor:'pointer'}} 
                                className='border m-3 p-2' 
                                alt='image.id' 
                                key={image} 
                                onClick={() => setDisplayImage(image)}
                            />
                        ))
                    }
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6">
                    <img src={displayImage} style={{width:'700px'}} className='image-fluid' alt='' />
                </div>
                <div className="col-lg-3 text-start text-light">
                    <h3 className='mt-4'>{title}</h3>
                    <h6>{info}</h6>
                    <p className='border-bottom pb-4'>{rating()}</p>
                    <p className='fs-4 fw-bold mt-4'>Rs.{finalPrice} <strike className='fs-5 text-secondary'> Rs.{originalPrice}</strike></p>
                    <div className="d-flex justify-content-between">
                    <div className='text-success'>You Save: Rs. {discountPrice}</div>
                        <button className='btn btn-success'><TiTick className='text-light' /> <span>In Stock</span></button>
                    </div>
                    <div className='text-secondary mt-2 border-bottom pb-4'>(Inclusive of all taxes)</div>
                    <h5 className='mt-4'>Offers and Discounts</h5>
                    <div className="d-flex mt-4 border-bottom pb-4">
                        <button className="btn btn-outline-secondary me-2 text-start">No cost EMI on Credit card</button>
                        <button className="btn btn-outline-secondary text-start">Pay Later and Avail Casback</button>
                    </div>
                    <button className='btn text-light mt-5 px-5' id='btn' onClick={() => {AddCart(details)}}>Add to Cart</button>
                </div>
            </div>
        </div>
        <ProductsDetailsOverView details={details} />
        <RelatedProducts category={category} productsData={productsData} id={id} />
    </>
  )
}

export default ProductsDetails