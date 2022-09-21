import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import firstBanner from '../../assets/images/banner-1.png';
import secondBanner from '../../assets/images/banner-2.png';
import thirdBanner from '../../assets/images/banner-3.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './ImageSlider.scss';

// import required modules
import { Pagination, Navigation } from 'swiper';

function SimpleSlider() {
  return (
    <Swiper
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={firstBanner}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={secondBanner}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={thirdBanner}></img>
      </SwiperSlide>
    </Swiper>
  );
}
export default SimpleSlider;
