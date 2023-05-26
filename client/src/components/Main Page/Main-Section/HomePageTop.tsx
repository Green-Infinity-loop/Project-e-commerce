import Image from "next/image";
import React, { useState, useEffect } from "react";

import pills from "../../../image/icon/icons8-pills-100.png";
import business from "../../../image/icon/icons8-briefcase-100.png";
import bottle from "../../../image/icon/icons8-supplement-bottle-100.png";

export default function HomePageTop() {
  const datas = [
    {
      imgUrl:
        "https://images.pexels.com/photos/7956965/pexels-photo-7956965.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Эм бэлдмэл",
      description: "Create an account to transfer your existing prescription",
    },
    {
      imgUrl: business,
      title: "Send In a Prescription",
      description: "Create an account to transfer your existing prescription",
    },
  ];

  return (
    <>
      <div className="container h-[40vh] grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <div className="relative">
          <Image
            alt="Хэрэглэгчээ эрхэмлэгч эрүүл мэндийн"
            src={
              "https://images.pexels.com/photos/7956965/pexels-photo-7956965.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            className="object-cover w-full h-96 rounded-2xl"
            width={900}
            height={900}
          />
          <p className="absolute text-black z-10 top-20  right-4  text-white text-lg">
            Эмчилгээ & урьдчилан сэргийлэх
          </p>
          <h1 className="absolute text-black z-10 top-28 md:top-36 right-6 text-white font-bold text-7xl">
            Эм бэлдмэл
          </h1>
          <button className="absolute text-black z-10 top-[10rem] md:top-[14rem] right-8  text-white border w-48 p-3 w-24 rounded-xl">
            Shop now
          </button>
        </div>
        <div className="relative">
          <Image
            alt="Хаврын ядаргааг тайлж дархлаагаа дэмжье"
            width={900}
            height={900}
            src={
              "https://images.pexels.com/photos/4352102/pexels-photo-4352102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            className="object-cover w-full rounded-2xl h-96"
          />
          <p className="absolute text-black z-10 top-20  left-8  text-white text-md">
            Хаврын ядаргааг тайлж дархлаагаа дэмжье
          </p>
          <h1 className="absolute text-black z-10 top-36 left-8  text-white font-bold text-6xl">
            Дархлаа
          </h1>
          <button className="absolute text-black z-10 top-[14rem]  left-8  text-white border w-48 p-3 w-24 rounded-xl">
            Shop now
          </button>
        </div>
      </div>
    </>
  );
}
