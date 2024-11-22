import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import './style.css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const IndexSlider1 = () => {
  return (
    <>
        <Swiper
            spaceBetween={50}
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            autoplay={{delay:5000}}
            pagination={{clickable:true}}
        >
      <SwiperSlide>
        <div className="text-light">
          <div className="container">
            <div id='JBL'></div>
            <div className='me-5'></div>
            <div className='text-start ms-5 mt-5' id='content'>
              <h4 className='mt-5 ms-5'>JBL Live 660NC</h4>
              <div className='mt-3 ms-5 fs-1 fw-bold textDisplay'>Keep The Noise Out <br /> Or In. You Choose </div>
              <p className='mt-5 ms-5 fs-4 fw-bold'>Rs. 9,999 <strike className='fs-5 text-secondary'>Rs.14,999</strike></p>
              <button className='btn mt-4 ms-5 text-light' id='btn'>Shop Now</button>
            </div>
            <div id='overlap'>Over Ear</div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text-light">
            <div className="container">
              <div id='boat'></div>
              <div className='text-start ms-5 mt-5' id='content'>
                <h4 className='mt-5 ms-5'>boAt Airdopes 131</h4>
                <div className='mt-3 ms-5 fs-1 fw-bold textDisplay'>Featherweight For <br /> Comfort All-Day.</div>
                <p className='mt-5 ms-5 fs-4 fw-bold'>Rs. 1,099 <strike className='fs-5 text-secondary'>Rs.2,990</strike></p>
                <button className='btn mt-4 ms-5 text-light' id='btn'>Shop Now</button>
              </div>
              <div id='overlap1'>In Ear</div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text-light">
          <div className="container">
            <div id='sony'></div>
            <div className='text-start ms-5 mt-5' id='content'>
              <h4 className='mt-5 ms-5'>Sony WH-XB910N</h4>
              <div className='mt-3 ms-5 fs-1 fw-bold textDisplay'>Give Your Favourite <br /> Music A Boost.</div>
              <p className='mt-5 ms-5 fs-4 fw-bold'>Rs. 13,489 <strike className='fs-5 text-secondary'>Rs.19,990</strike></p>
              <button className='btn mt-4 ms-5 text-light' id='btn'>Shop Now</button>
            </div>
            <div id='overlap'>Over Ear</div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </>
  )
}

export default IndexSlider1