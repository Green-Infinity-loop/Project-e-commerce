import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title:
      "Vitamin C Immune Support Gummies, 1000 mg, Assorted Fruit (Packaging May Vary)",
    description:
      "May help support immune system. Compare to Airborne Original Immune Support.",
    imgUrl: "https://pics.walgreens.com/prodimg/628003/450.jpg",
  },
  {
    title: "Fiber Gummies",
    description:
      "Natural orange flavor with other natural flavors.5 g of fiber per serving.No sugar added.Promotes digestive health.",
    imgUrl: "https://pics.walgreens.com/prodimg/658353/450.jpg",
  },
  {
    title: "Immune Support Elderberry Gummies",
    description:
      "Compare vs. Airborne Elderberry Immune Support Supplement Gummies.May support your immune system.Antioxidant Support.High in Vitamins C & EExcellent source of Vitamin D .Natural Blackberry Flavor",
    imgUrl: "https://pics.walgreens.com/prodimg/647556/450.jpg",
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

  const formatTime = (timeInSeconds:any) => {
    const days = Math.floor(timeInSeconds / 86400);
    const hours = Math.floor((timeInSeconds % 86400) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return (
      <div className="stopwatch-time">
        <span className="border p-6 text-2xl rounded  m-3">{days}day</span>
        <span className="border p-6 text-2xl rounded  m-3">{hours}hours </span>
        <Image
          alt="Хаврын ядаргааг тайлж дархлаагаа дэмжье"
          src={"https://icons8.com/icon/25583/colon"}
          width={100}
          height={100}></Image>

        <span className="border p-6 text-2xl rounded m-3">
          {minutes}minutes{" "}
        </span>
        <span className="border p-6 text-2xl rounded m-3">
          {seconds}seconds{" "}
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
        className="mySwiper h-[60vh] container bg-[#115061] my-6 rounded-xl border border-bg-[#115061] ">
        {data.map((datas) => {
          return (
            <SwiperSlide key={datas.title}>
              <div className="grid grid-cols-2">
                <div className="text-white m-auto p-24">
                  <h1 className="text-4xl font-bold mb-6">{datas.title}</h1>
                  <p className="text-lg font-semibold mb-6">
                    {datas.description}
                  </p>
                  <Link href={"./"} className="border p-4 rounded-lg w-48">
                    Shop now
                  </Link>
                  <Stopwatch />
                </div>
                <Image
                  src={datas.imgUrl}
                  alt=""
                  width={500}
                  height={600}
                  className="w-full h-[39.5rem]"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
