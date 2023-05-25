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
    title: "    Believe in Obatin for Medicine",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiisipsa consequatur quas, alias officia harum!",
    image: zurag,
  },
  {
    title: "    Believe in Obatin for Medicine",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiisipsa consequatur quas, alias officia harum!",
    image: zurag,
  },
  {
    title: "    Believe in Obatin for Medicine",
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
            <>
              <SwiperSlide>
                <div className=" sm:h-[30vh] md:h-[40vh] lg:h-[60vh] xl:h-[75vh]  bg-[#115061] ">
                  <div className="grid grid-cols-2 ">
                    <div className="sm: md:p-[120px] lg:p-[200px] xl:p-64  animate-fade-in">
                      <h1 className="text-white  font-bold m-auto ">
                        {head.title}
                      </h1>
                      <p className="my-6 text-white">{head.description}</p>
                      <div className="grid grid-cols-2 gap-8">
                        <button className="bg-white p-6 rounded-lg text-black sm: md: lg: xl:p-4">
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
                      className=" m-auto p-40 transition duration-150 ease-in-out animate-slide-left "
                      width={650}
                      height={300}
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
