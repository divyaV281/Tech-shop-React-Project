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
        modules={[ Pagination, Autoplay, EffectCoverflow]}
      spaceBetween={100}
      slidesPerView={5}
      pagination={{ clickable: true }}
      autoplay= {true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      effect='coverflow'
      grabCursor = { true }
      centeredSlides = { true }
      loop = { true }
      coverflowEffect={
        {
            rotate  : 0,
            stretch : 0,
            depth : 100,
            modifier  :1,
            slideShadows: true,
        }
      }
    >
      <SwiperSlide>
        <img src="../images/products/boat518-1.png" alt="" style={{width:'500px'}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../images/products/jbl760nc-1.png" alt="" style={{width: '500px'}} />
      </SwiperSlide>
      <SwiperSlide>
      <img src="../images/products/boat255r-1.png" alt="" style={{width: '500px'}} />
      </SwiperSlide>
      <SwiperSlide>
      <img src="../images/products/jbl-endu-1.png" alt="" style={{width: '500px'}} />
      </SwiperSlide>
      <SwiperSlide>
      <img src="../images/products/boat203-1.png" alt="" style={{width: '500px'}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../images/products/boat518-1.png" alt="" style={{width:'500px'}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../images/products/jbl760nc-1.png" alt="" style={{width: '500px'}} />
      </SwiperSlide>
      <SwiperSlide>
      <img src="../images/products/boat255r-1.png" alt="" style={{width: '500px'}} />
      </SwiperSlide>
      <SwiperSlide>
      <img src="../images/products/jbl-endu-1.png" alt="" style={{width: '500px'}} />
      </SwiperSlide>
      <SwiperSlide>
      <img src="../images/products/boat203-1.png" alt="" style={{width: '500px'}} />
      </SwiperSlide>
    </Swiper>

    </div>
  )
}

export default Imager3DSwiper