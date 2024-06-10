import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SetRating from '../../hooks/SetRating';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const ShowFeedBack = () => {

    const [feedback]=SetRating()
    return (
        <div>
            <h2 className='text-3xl text-blue-400 py-4 text-center'>FeedBack</h2>
                <Swiper
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
            feedback.map(feed=>(
                <SwiperSlide>
                                   <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='h-[200px]' src={feed.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{feed.title}!</h2>
    <p>{feed.feedback}</p>
    <div className="card-actions justify-center">
    <Rating
      style={{ maxWidth: 130 }}
      value={feed.rating}
      
      readOnly
    />
    </div>
  </div>
</div>
                </SwiperSlide>
            ))
        }
        
      </Swiper>
    
        </div>
    );
};

export default ShowFeedBack;