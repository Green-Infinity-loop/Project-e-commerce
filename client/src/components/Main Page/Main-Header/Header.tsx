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
        className="mySwiper "
      >
        {header.map((head) => {
          return (
            <SwiperSlide key={head.title}>
              <div className="h-[30vh] sm:h-[40vh] md:h-[60vh] lg:h-[75vh] xl:h-[75vh] bg-[#115061]">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="p-8 sm:p-12 md:p-20 lg:p-32 xl:p-64 animate-fade-in">
                    <h1 className="text-white font-bold">{head.title}</h1>
                    <p className="my-6 text-white">{head.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <button className="bg-white p-6 rounded-lg text-black">
                        Set Appointment
                      </button>
                      <button className="text-white p-6 rounded-lg flex items-center">
                        Set Appointment
                        <FiArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={head.image}
                      alt="header img"
                      className="absolute inset-0 object-cover w-full h-full transition duration-150 ease-in-out animate-slide-left"
                      layout="fill"
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
