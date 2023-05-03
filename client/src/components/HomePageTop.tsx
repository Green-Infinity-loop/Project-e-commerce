import React, { useState, useEffect } from "react";
import { text } from "stream/consumers";
import Card from "./Card";
import Dashed from "./Dashed";

export default function HomePageTop() {
  const datas = [
    {
      imgUrl: "icon/darhlaa.jpg",
      title: "Дархлаа",
    },
    {
      imgUrl: "icon/em.jpg",
      title: "Эм бэлдмэл",
    },
  ];
  return (
    <>
      <div className="  mx-auto ">
        <div className="grid grid-flow-col gap-4 w-full ">
          {datas.map((data, index) => {
            let odd = index === 2;
            return (
              <>
                <div
                  className={`${
                    odd && "row-start-1  row-end-4 "
                  } group relative overflow-hidden duration-500  shadow-2xl`}
                >
                  <div className="group relative overflow-hidden duration-500 flex flex-wrap border   m-auto">
                    <img
                      src={data.imgUrl}
                      alt=" darhlaa bolon em "
                      className="m-auto group-hover:scale-110 transition duration-300 ease-in-out h-[650px] w-full "
                    />
                    <div className="z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2  text-white ">
                      <div className="h-[400px]   text-white font-bold opacity-75 flex justify-center align-center transform-gpu  p-4 space-y-20  text-6xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                        {data.title}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      
    </>
  );
}
