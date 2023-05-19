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
      "https://beautysecrets.mn/wp-content/uploads/2023/05/23-5-1-800x600.png",
  },
  {
    title: "    Believe in Obatin for Medicine",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiisipsa consequatur quas, alias officia harum!",
    image:
      "https://beautysecrets.mn/wp-content/uploads/2023/05/23-5-1-800x600.png",
  },
  {
    title: "    Believe in Obatin for Medicine",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiisipsa consequatur quas, alias officia harum!",
    image:
      "https://beautysecrets.mn/wp-content/uploads/2023/05/23-5-1-800x600.png",
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
                <div className="h-[80vh]  bg-[#115061] ">
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

                    <img
                      src={head.image}
                      alt="header img"
                      className="p-5  "
                      width={1000}
                      height={500}
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
