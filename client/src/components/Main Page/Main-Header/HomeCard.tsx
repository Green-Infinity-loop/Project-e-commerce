import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const datas = [
  {
    name: "Шүд",
    imgUrl: "icon/teeth.png",
    title:
      "Шүдний завсраар ор­сон хоол хүнсний үлдэг­дэл, амны хөндийг сайтар цэвэрлэ. ",
  },
  {
    imgUrl: "icon/nose.png",
    title: " MEN Clothes",
  },
  {
    imgUrl: "icon/brain.png",
    title: " MEN Clothes",
  },
  {
    imgUrl: "icon/eye.png",
    title: " MEN Clothes",
  },
  {
    imgUrl: "icon/heart.png",
    title: " MEN Clothes",
  },
  {
    imgUrl: "icon/lung.png",
    title: " MEN Clothes",
  },
  {
    imgUrl: "icon/lung.png",
    title: " MEN Clothes",
  },
  {
    imgUrl: "icon/lung.png",
    title: " MEN Clothes",
  },
  {
    imgUrl: "icon/lung.png",
    title: " MEN Clothes",
  },

  {
    imgUrl: "icon/nose.png",
    title: " MEN Clothes",
  },
  {
    imgUrl: "icon/brain.png",
    title: " MEN Clothes",
  },
  {
    imgUrl: "icon/eye.png",
    title: " MEN Clothes",
  },
  {
    imgUrl: "icon/heart.png",
    title: " MEN Clothes",
  },
  {
    imgUrl: "icon/lung.png",
    title: " MEN Clothes",
  },
  {
    imgUrl: "icon/lung.png",
    title: " MEN Clothes",
  },
  {
    imgUrl: "icon/lung.png",
    title: " MEN Clothes",
  },
  {
    imgUrl: "icon/lung.png",
    title: " MEN Clothes",
  },
];

export default function App() {
  return (
    <>
      <div className="h-[50vh] p-9 bg-[#615cbe]">
        <h1 className="text-5xl font-semibold text-center my-4 text-white  my-12 mb-16 border-b-4 border-[#ea4c89] pb-9">
          Hunii dotood gadaad erhten shuude
        </h1>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
            960: {
              slidesPerView: 9,
              slidesPerGroup: 3,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {datas.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="mb-24  xl:w-36 xl:h-36 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-16 sm:h-16 cl:w-12 cl:h-12   group relative overflow-hidden duration-500 flex flex-wrap border rounded-full p-3 m-auto">
                <img
                  src={data.imgUrl}
                  alt=""
                  className="m-auto group-hover:scale-110 transition duration-300 ease-in-out  w-12 "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
