import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './style.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../Redux/addCartReducer';
// import productsData from '../Data/ProductsData'

const RelatedProducts = ({category,productsData,id}) => {
    // const [{category}] = productsData;
    console.log(category,productsData,id);
    const dispatch = useDispatch()

const addCart = (item) => {
    dispatch(add(item));
}

  return (
    <>
        <h2 className='text-light my-5'>RelatedProducts</h2>
        <div className="container">
            <Swiper
                modules={[ Pagination, Autoplay ]}
                spaceBetween={50}
                slidesPerView={4}
                pagination={{clickable:true}}
                autoplay={{delay:5000}}
            >
                {
                        productsData && productsData.length > 0 && productsData.filter(ele => ele.category === category).filter(ele => ele.id !== id).map(ele => (
                        <SwiperSlide key={ele.id} className='text-light mb-5'>
                            <div className='id'>
                                <div className="card bg-black border-secondary">
                                    <Link to={`/productsDetails/${ele.id}`} className='text-decoration-none'>
                                        <div className='d-flex justify-content-center'>
                                            <img src={ele.images[0]} className="card-img-top image-fluid py-3" style={{width: '200px'}} alt={ele.id}/>
                                        </div>
                                        <div className="card-body text-light text-start">
                                            <h5 className="card-title">{ele.title}</h5>
                                            <p className="card-text text-secondary border-bottom border-secondary pb-3 text-truncate">{ele.info}</p>
                                            <p className='fs-4 fw-bold'>Rs.{ele.finalPrice} <strike className='fs-5 text-secondary'> Rs.{ele.originalPrice}</strike></p>
                                        </div>
                                    </Link>
                                    <button className='btn mx-3 mb-4' id='btn' onClick={() => addCart(ele)}>Add to Cart</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        ))
                    }
            </Swiper>
        </div>
    </>
  )
}

export default RelatedProducts