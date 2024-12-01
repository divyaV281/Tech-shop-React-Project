import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import './style.css'

const Imager3DSwiper = () => {
  return (
    <div>
        <h2 className='my-5 text-light'>Featured Products</h2>
        <Swiper
        modules={[ Autoplay, EffectCoverflow]}
      spaceBetween={10}
      slidesPerView={3}
      // pagination={{ clickable: true }}
      autoplay= {true}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      effect='coverflow'
      grabCursor = { true }
      centeredSlides = { true }
      loop = { true }
      coverflowEffect={
        {
            rotate  : 0,
            stretch : 0,
            depth : 250,
            modifier  :1,
            slideShadows: true,
        }
      }
    >
      <SwiperSlide>
        <div className='text-secondary'>
          <h5>boAt Rockerz 518</h5>
          <img src="../images/products/boat518-1.png" alt="" style={{width:'250px'}} />
          <h5 className='mt-3'>Rs. 1,299 <strike>Rs. 3,990</strike></h5>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='text-secondary'>
          <h5>JBL Tune 760NC</h5>
          <img src="../images/products/jbl760nc-1.png" alt="" style={{width: '250px'}} />
          <h5 className='mt-3'>Rs. 5,999 <strike>Rs. 7,999</strike></h5>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='text-secondary'>
          <h5>boAt Rockerz 255</h5>
          <img src="../images/products/boat255r-1.png" alt="" style={{width: '250px'}} />
          <h5 className='mt-3'>Rs. 899 <strike>Rs. 2,990</strike></h5>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='text-secondary'>
          <h5>JBL Endurance Run Sports</h5>
          <img src="../images/products/jbl-endu-1.png" alt="" style={{width: '250px'}} />
          <h5 className='mt-3'>Rs. 999 <strike>Rs. 1,599</strike></h5>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='text-secondary'>
          <h5>boAt Airdopes 203</h5>
          <img src="../images/products/boat203-1.png" alt="" style={{width: '250px'}} />
          <h5 className='mt-3'>Rs. 1,074 <strike>Rs. 3,999</strike></h5>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='text-secondary'>
          <h5>boAt Rockerz 518</h5>
          <img src="../images/products/boat518-1.png" alt="" style={{width:'250px'}} />
          <h5 className='mt-3'>Rs. 1,299 <strike>Rs. 3,990</strike></h5>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='text-secondary'>
          <h5>JBL Tune 760NC</h5>
          <img src="../images/products/jbl760nc-1.png" alt="" style={{width: '250px'}} />
          <h5 className='mt-3'>Rs. 5,999 <strike>Rs. 7,999</strike></h5>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='text-secondary'>
          <h5>boAt Rockerz 255</h5>
          <img src="../images/products/boat255r-1.png" alt="" style={{width: '250px'}} />
          <h5 className='mt-3'>Rs. 899 <strike>Rs. 2,990</strike></h5>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='text-secondary'>
          <h5>JBL Endurance Run Sports</h5>
          <img src="../images/products/jbl-endu-1.png" alt="" style={{width: '250px'}} />
          <h5 className='mt-3'>Rs. 999 <strike>Rs. 1,599</strike></h5>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='text-secondary'>
          <h5>boAt Airdopes 203</h5>
          <img src="../images/products/boat203-1.png" alt="" style={{width: '250px'}} />
          <h5 className='mt-3'>Rs. 1,074 <strike>Rs. 3,999</strike></h5>
        </div>
      </SwiperSlide>
    </Swiper>

    </div>
  )
}

export default Imager3DSwiper