import React, { useState, useEffect } from "react";
import { text } from "stream/consumers";
import Card from "./Card";
import Dashed from "./Dashed";

export default function HomePageTop() {
  const datas = [
    {
      imgUrl: "https://via.placeholder.com/600x400",
      title: " MEN Clothes",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, rerum",
    },
    {
      imgUrl: "https://via.placeholder.com/600x400",
      title: " MEN Clothes",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, rerum",
    },
    {
      imgUrl: "https://via.placeholder.com/600x830",
      title: " MEN Clothes",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, rerum",
    },
    {
      imgUrl: "https://via.placeholder.com/600x400",
      title: " MEN Clothes",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, rerum",
    },
    {
      imgUrl: "https://via.placeholder.com/600x400",
      title: " MEN Clothes",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, rerum",
    },
  ];
  return (
    <>
      <div className="container  mx-auto py-10">
        <div className="grid grid-flow-col gap-4  ">
          {datas.map((data, index) => {
            let odd = index === 2;
            return (
              <div
                className={`${
                  odd && "row-start-1  row-end-4 "
                } group relative overflow-hidden duration-500`}
              >
                <img src={data.imgUrl} alt="" />
                <p className="  absolute text-white -bottom-52 group-hover:inset-0 right-2 left-2 transition-all delay-300 duration-100  dark:bg-gray-900 p-4 rounded shadow dark:shadow-gray-200">
                  {data.title}
                  
                  <p className="py-6">{data.description}</p>
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-slate-200 my-16">
        <p className="block text-center text-bold text-2xl font-semibold w-full pt-16">
          MOST POPULAR PRODUCT
          <Dashed />
        </p>
        <div className="flex justify-center py-8 text-lg">
          <p className="px-2">MOST POPULAR</p>
          <p>|</p>
          <p className="px-2"> BEST SELLAR </p>
          <p>|</p>
          <p className="px-2">NEW ARRIVAL</p>
        </div>
        <div className="pb-16">
          <Card />
        </div>
      </div>
    </>
  );
}