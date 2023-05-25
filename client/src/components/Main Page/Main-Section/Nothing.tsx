import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";
import Colon from "../../../image/icon/colon.png";
import Sale from "../../../image/icon/sale.png";
import imageC from '../Main-Section/vitaminC.png'
import vitaminFiber from '../Main-Section/vitaminFiber.png'
import vitaminWal from '../Main-Section/vitaminWal-Born.png'

const data = [
  {
    title:
      "Vitamin C Immune Support Gummies, 1000 mg, Assorted Fruit (Packaging May Vary)",
    description:
      "May help support immune system. Compare to Airborne Original Immune Support.",
    imgUrl: imageC,
  },
  {
    title: "Fiber Gummies",
    description:
      "Natural orange flavor with other natural flavors.5 g of fiber per serving.No sugar added.Promotes digestive health.",
    imgUrl: vitaminFiber,
  },
  {
    title: "Immune Support Elderberry Gummies",
    description:
      "Compare vs. Airborne Elderberry Immune Support Supplement Gummies.May support your immune system.Antioxidant Support.High in Vitamins C & EExcellent source of Vitamin D .Natural Blackberry Flavor",
    imgUrl: vitaminWal,
  },
];

const Stopwatch = () => {
  const [time, setTime] = useState(4915200);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (timeInSeconds: any) => {
    const days = Math.floor(timeInSeconds / 86400);
    const hours = Math.floor((timeInSeconds % 86400) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return (
      <div className="stopwatch-time flex mt-6">
        <span className="border p-3 text-xl  rounded mb-3 mt-3">{days}day</span>
        <Image
          src={Colon}
          alt="Хаврын ядаргааг тайлж дархлаагаа дэмжье"
          width={30}
          height={30}
          className="w-6 h-6 p-0 mb-3 mt-7 "
        ></Image>
        <span className="border p-3 text-xl  rounded mb-3 mt-3 ">
          {hours}hours{" "}
        </span>
        <Image
          src={Colon}
          alt="Хаврын ядаргааг тайлж дархлаагаа дэмжье"
          width={30}
          height={30}
          className="w-6 h-6 p-0 mb-3 mt-7 rounded"
        />

        <span className="border p-3 text-xl rounded mb-3 mt-3 ">
          {minutes}min
        </span>
        <Image
          alt="Хаврын ядаргааг тайлж дархлаагаа дэмжье"
          src={Colon}
          width={30}
          height={30}
          className="w-6 h-6 p-0 mb-3 mt-7"
        />
        <span className="border p-3 text-xl rounded mb-3 mt-3">
          {seconds}sec
        </span>
      </div>
    );
  };
  return <div className="stopwatch-container">{formatTime(time)}</div>;
};

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
        className="mySwiper relative sm:h-[20vh] md:h-[20vh] lg:h-[40vh] xl:h-[60vh] container bg-[#115061] my-6 rounded-xl border border-bg-[#115061] "
      >
        {data.map((datas) => {
          return (
            <SwiperSlide key={datas.title}>
              <div className="grid grid-cols-2 absolute top-0">
                <div className="text-white m-auto p-24relative">
                  <Image
                    alt="Хаврын ядаргааг тайлж дархлаагаа дэмжье"
                    src={Sale}
                    width={200}
                    height={200}
                    className="absolute top-0 -rotate-[16deg] left-7 w-28 "
                  />
                  <div className="p-40 pt-0">
                    <h1 className="text-4xl font-bold mb-6">{datas.title}</h1>
                  <p className="text-lg font-semibold mb-6">
                    {datas.description}
                  </p>
                  <Link href={"./"} className="border p-4 rounded-lg w-48">
                    Shop now
                  </Link>
                  <Stopwatch />
                  </div>
                </div>
                <div className=" sm:p-20  xl:p-20">
                  <Image
                    src={datas.imgUrl}
                    alt=""
                    width={500}
                    height={600}
                    className="w-full  py-40 sm:py-60  lg:px-20 lg:h-[32rem]  sm:pt-0  md:pt-0 pt-0 md:h-[39.5rem]  rounded-xl"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
