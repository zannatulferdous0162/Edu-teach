import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../../assets/banner/img1-c25b1879.png';
import img2 from '../../assets/banner/img2-cdf7835f.png';
import img3 from '../../assets/banner/img3-1c5d6480.png';

const Banner = () => {
    return (
        // <div className='z-0 py-2'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide >
          <div className='bg-blue-500 lg:py-0 flex py-4 px-4 lg:flex-row flex-col  items-center mx-auto w-[96%]'>
            <div>
              <img  src={img1} alt="" />
            </div>
            <div>
              <h2 className='text-3xl font-semibold text-white'>Unleash Your Creativity Through The Lens</h2>
              <p className='font-semibold text-white'>Discover the power of your creative vision as you learn the art of photography with our expert instructors. From mastering composition to understanding lighting techniques, we'll guide you on a journey to unlock your true potential and capture stunning images that speak volumes</p>
              <button className='border rounded-lg py-3 px-3 text-white my-4'>Explor Our Course</button>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='bg-[#FF773F] lg:py-0 flex py-4 px-4 lg:flex-row flex-col  items-center mx-auto w-[96%]'>
            <div> 
              <img src={img2} alt="" />
            </div>
            <div>
              <h2 className='text-3xl font-semibold text-white'>Capture Moments. Tell Stories. Make Memories</h2>
              <p className='font-semibold text-white'> Discover the power of your creative vision as you learn the art of photography with our expert instructors. From mastering composition to understanding lighting techniques, we'll guide you on a journey to unlock your true potential and capture stunning images that speak volumes</p>
              <button className='border rounded-lg py-3 px-3 text-white my-4'>Explor Our Course</button>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='bg-[#FD40F8] lg:py-0 flex py-4 px-4 lg:flex-row flex-col  items-center mx-auto w-[96%]'>
            <div> 
              <img src={img3} alt="" />
            </div>
            <div>
              <h2 className='text-3xl font-semibold text-white'>Master the Art of Photography with Expert Instructors</h2>
              <p className='font-semibold text-white'>Discover the power of your creative vision as you learn the art of photography with our expert instructors. From mastering composition to understanding lighting techniques, we'll guide you on a journey to unlock your true potential and capture stunning images that speak volumes</p>
              <button className='border rounded-lg py-3 px-3 text-white my-4'>Explor Our Course</button>
            </div>
          </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Banner;
