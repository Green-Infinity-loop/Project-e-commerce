import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Panadol",
    description: "Үе мөч, булчин, өвдөлт намдаах",
    imgUrl:
      "https://i.pinimg.com/474x/6a/81/a6/6a81a651fcd502f56e67669245b6d426.jpg",
  },
  {
    title: "Panadol",
    description: "Үе мөч, булчин, өвдөлт намдаах",
    imgUrl:
      "https://i.pinimg.com/474x/04/18/48/041848a8ac3d8d7d6c88657abb36b148.jpg",
  },
  {
    title: "Panadol",
    description: "Үе мөч, булчин, өвдөлт намдаах",
    imgUrl:
      "https://i.pinimg.com/474x/86/7f/9f/867f9f37a9fe9c838d8844cc338135f3.jpg",
  },
];

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
        className="mySwiper  h-[60vh] container bg-[#17887a] my-6 rounded-xl border  border-bg-[#17887a] "
      >
        {data.map((datas) => {
          return (
            <>
              <SwiperSlide>
                <div className="grid grid-cols-2 ">
                  <div className=" text-white m-auto ">
                    <h1 className=" text-6xl font-bold mb-6">{datas.title}</h1>
                    <p className="text-2xl font-semibold mb-6">
                      {datas.description}
                    </p>
                    <Link href={"./"} className="border p-4 rounded-lg w-48">
                      Shop now
                    </Link>
                  </div>
                  <Image
                    src={datas.imgUrl}
                    alt=""
                    width={500}
                    height={300}
                    className="w-full h-[38rem]"
                  />
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}
