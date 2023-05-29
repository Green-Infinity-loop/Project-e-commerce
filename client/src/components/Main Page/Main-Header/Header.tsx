import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import zurag1 from "./header1.png";
import zurag from "./header2.png";
import zurag2 from "./header3.png";
import { Navbar } from "../Navbar/Navbar";
import { Pagination, Navigation } from "swiper";

const header = [
  {
    title: "Believe in Obtaining Medicine",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiisipsa consequatur quas, alias officia harum!",
    image: zurag,
  },
  {
    title: "Believe in Obtaining Medicine",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiisipsa consequatur quas, alias officia harum!",
    image: zurag,
  },
  {
    title: "Believe in Obtaining Medicine",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiisipsa consequatur quas, alias officia harum!",
    image: zurag,
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
        className="mySwiper ">
        {header.map((head) => {
          return (
            <SwiperSlide key={head.title}>
              <div className="h-[30vh] sm:h-[40vh] md:h-[60vh] lg:h-[75vh] xl:h-[75vh] bg-[#115061]">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="  animate-fade-in md:m-20 xl:p-20">
                    <h1 className="text-white font-bold   sm:text-xs md:text-[1rem]  lg:text-3xl xl:text-[2.75rem]  ">
                      {head.title}
                    </h1>
                    <p className=" text-white xl:my-3">{head.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <button className="bg-white rounded-lg text-black sm:p-1 md:p-2 lg:p-2 xl:p-[10px]">
                        Set Appointment
                      </button>
                      <button className="text-white p-6 rounded-lg flex items-center sm:p-1 md:p-2 lg:p-2 xl:p-[10px]">
                        Set Appointment
                        <FiArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={head.image}
                      alt="header img"
                      className=" xl:mt-16 xl:p-20 absolute inset-0 object-cover w-350 h-300 transition duration-150 ease-in-out animate-slide-left m-auto"
                      // layout="fill"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
