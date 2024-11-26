import React from 'react'
import { useParams } from 'react-router-dom'
import productsData from '../Data/ProductsData'
import { FaStar } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import ProductsDetailsOverView from './ProductsDetailsOverView';
import RelatedProducts from './RelatedProducts';

const ProductsDetails = () => {
    const {id} = useParams();
    const details = productsData[id-1];
    // console.log(id);
    // console.log(productsData);
    // console.log(details);
    const {images,title,info,rateCount,finalPrice,originalPrice,category} = details;
    // console.log(category);
    // let star ='';
    const rating = () => {
        for(let i=1; i<=rateCount; i++){
            if(i<=rateCount){
            return <FaStar className='text-danger' />
            }
            // star += ""
        }
        // return star
    }
    // rating()

    const [img1,img2,img3,img4] = images;
    let discountPrice = originalPrice - finalPrice;
    
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-1">
                    <img src={img1} style={{width:'150px'}} className='border m-3 p-2' />
                    <img src={img2} style={{width:'150px'}} className='border m-3 p-2' />
                    <img src={img3} style={{width:'150px'}} className='border m-3 p-2' />
                    <img src={img4} style={{width:'150px'}} className='border m-3 p-2' />
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6">
                    <img src={img1} style={{width:'700px'}} className='image-fluid'/>
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
                    <button className='btn text-light mt-5 px-5' id='btn'>Add to Cart</button>
                </div>
            </div>
        </div>
        <ProductsDetailsOverView />
        <RelatedProducts category={category} productsData={productsData} id={id} />
    </>
  )
}

export default ProductsDetails