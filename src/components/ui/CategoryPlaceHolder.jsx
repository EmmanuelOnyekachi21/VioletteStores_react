import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import CategoryCardPlaceHolder from './CategoryCardPlaceHolder';
// import '../home/styles.css';

const CategoryPlaceHolder = () => {
  return (
    <>
    <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {Array.from({length: '4'}, (_, i) => (
            <SwiperSlide key={i}>
                <CategoryCardPlaceHolder i={i} />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default CategoryPlaceHolder