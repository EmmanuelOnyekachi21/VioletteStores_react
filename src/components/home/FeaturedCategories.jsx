import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import './styles.css';
import FeaturedCategoriesCard from './FeaturedCategoriesCard';
// import FeaturedCategoriesCard from './FeaturedCategoriesCard'

const FeaturedCategories = ({categories}) => {
  // console.log('Categories:', categories); 
  return (
    <section className="py-5 bg-light">
    <h1 className="poppins-bold text-center mb-5">FEATURED CATEGORIES</h1>
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
        {/* <SwiperSlide>
          {categories.map((category) => {
            <FeaturedCategoriesCard key={category.id} category={category} />
          })}
        </SwiperSlide> */}
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <FeaturedCategoriesCard category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  </section>
  )
}

export default FeaturedCategories