import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper bg-[#17887a] h-[60vh] container object-cover"
      >
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/405031/pexels-photo-405031.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/5995029/pexels-photo-5995029.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/6156975/pexels-photo-6156975.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/6156998/pexels-photo-6156998.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/6070373/pexels-photo-6070373.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
