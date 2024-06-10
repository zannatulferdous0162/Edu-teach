import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

import image1 from '../../assets/download (4).png';
import image2 from '../../assets/download (10).png';
import image3 from '../../assets/download (6).png';
import image4 from '../../assets/download (7).png';


const Branding = () => {
    return (
        <div className='mt-10'>
            <Swiper
        slidesPerView={3}
        spaceBetween={1}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='h-[90px]' src={image1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[90px]' src={image2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[90px]' src={image3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[90px]' src={image4} alt="" /></SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Branding;