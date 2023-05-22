import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import zurag from "../../../image/vacc.png";
import zurag1 from "../../../image/hedaer1.jpeg";
import zurag2 from "../../../image/header2.webp";
import { Navbar } from "../Navbar/Navbar";

import { Pagination, Navigation } from "swiper";

const header = [
  {
    title: "    Believe in Obatin for Medicine",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiisipsa consequatur quas, alias officia harum!",
    image:
      "https://o.remove.bg/downloads/43cccd2c-d9eb-4536-8c09-4a19c993348a/Medicine-photo-min-min-removebg-preview.png",
  },
  {
    title: "    Believe in Obatin for Medicine",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiisipsa consequatur quas, alias officia harum!",
    image:
      "https://o.remove.bg/downloads/a627438d-131a-4490-919c-45acb643148f/vitaminpackage-removebg-preview.png",
  },
  {
    title: "    Believe in Obatin for Medicine",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiisipsa consequatur quas, alias officia harum!",
    image:
      "https://o.remove.bg/downloads/4438e791-083d-4d46-a4ea-d9e9d0ac1ef6/omron-removebg-preview.png",
  },
];

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        {header.map((head) => {
          return (
            <>
              <SwiperSlide>
                <div className="h-[75vh]  bg-[#115061] ">
                  <div className="grid grid-cols-2 ">
                    <div className="p-64">
                      <h1 className="text-white  text-6xl font-bold m-auto ">
                        {head.title}
                      </h1>
                      <p className="my-6 text-white">{head.description}</p>
                      <div className="grid grid-cols-2 gap-8">
                        <button className="bg-white p-6 rounded-lg text-black ">
                          Set Appointment
                        </button>
                        <button className="text-white p-6 rounded-lg flex  ">
                          Set Appointment
                          <FiArrowRight className=" w-16 h-6 " />
                        </button>
                      </div>
                    </div>

                    <Image
                      src={head.image}
                      alt="header img"
                      className=" m-auto "
                      width={1000}
                      height={600}
                    />
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}
