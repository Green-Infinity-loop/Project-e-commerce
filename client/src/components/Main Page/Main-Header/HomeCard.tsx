import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const datas = [
  {
    name: "chih",
    imgUrl: "https://img.icons8.com/?size=2x&id=GomslqqZw36f&format=png",
  },
  {
    imgUrl: "https://img.icons8.com/?size=2x&id=1yXIPxCIhy07&format=png",
    title: " shud",
  },
  {
    imgUrl: "https://img.icons8.com/?size=2x&id=p76I4bVdJYan&format=png",
    title: " nud",
  },
  {
    imgUrl: "https://img.icons8.com/?size=2x&id=R74BY2VxaPge&format=png",
    title: " hamap hooloi",
  },
  {
    imgUrl: "https://img.icons8.com/?size=2x&id=Cd5cFqgNuG2N&format=png",
    title: "hamap",
  },
  {
    imgUrl: "https://img.icons8.com/?size=2x&id=8udy2TLwRZ6X&format=png",
    title: "uruul",
  },
  {
    imgUrl: "https://img.icons8.com/?size=2x&id=mmigUAx1pXjO&format=png",
    title: " tarhi",
  },
  {
    imgUrl: "https://img.icons8.com/?size=2x&id=1reb9OrWnSEX&format=png",
    title: "gar",
  },
  {
    imgUrl: "https://img.icons8.com/?size=2x&id=GY1eqMdVZ80s&format=png",
    title: "uushig",
  },
  {
    imgUrl: "https://img.icons8.com/?size=2x&id=7edbQpkXo0DN&format=png",
    title: "boop",
  },
  {
    imgUrl: "https://img.icons8.com/?size=2x&id=mqJvYoRsxDyl&format=png",
    title: "hoh",
  },
  {
    imgUrl: "https://img.icons8.com/?size=2x&id=BArniDef2af6&format=png",
    title: "zurh",
  },
  {
    imgUrl: "https://img.icons8.com/?size=2x&id=KVkgglaPwIJb&format=png",
    title: "eleg",
  },

  {
    imgUrl: "https://img.icons8.com/?size=2x&id=LcZH31FxredK&format=png",
    title: "nariin gedes",
  },
  {
    imgUrl: "https://img.icons8.com/?size=2x&id=1fO9DO1RE0Iu&format=png",
    title: " nuruu",
  },
  {
    imgUrl: "https://img.icons8.com/?size=2x&id=mF9wmEXiLHE4&format=png",
    title: "turuu bulcirhai",
  },

  {
    imgUrl: "https://img.icons8.com/?size=2x&id=OeOXTEjwtEXk&format=png",
    title: "hol",
  },
];

export default function App() {
  return (
    <>
      <div className="h-[50vh] p-9 ">
        <h1 className="text-5xl font-semibold my-4   my-12 mb-16 border-b-4 border-[#115061] pb-9">
          𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲
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
            delay: 6000,
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
              <div className="bg-[#e0f2fe] mb-24   xl:w-44 xl:h-44 lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-16 sm:h-16 cl:w-12 cl:h-12   group relative overflow-hidden duration-500 flex flex-wrap border rounded-full p-3 m-auto">
                <Image
                  src={data.imgUrl}
                  alt=""
                  className="m-auto group-hover:scale-110 transition duration-300 ease-in-out  w-20 "
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
