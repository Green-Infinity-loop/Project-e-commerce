import React, { useState, useEffect } from "react";
import { text } from "stream/consumers";
import Card from "./Card";
import Dashed from "./Dashed";

export default function HomePageTop() {
  const datas = [
    {
      imgUrl:
        "https://as1.ftcdn.net/v2/jpg/02/74/13/16/1000_F_274131656_Ka8pLtBxBHRGac7lE8PIjpsF4UFZBh8M.jpg",
      title: "Эм",
    },
    {
      imgUrl:
        "https://as1.ftcdn.net/v2/jpg/05/68/70/24/1000_F_568702434_tqwvZpefxE5pN8bErAAGnmCgoP0P7Pun.jpg",
      title: "Анхны тусламж",
    },
    {
      imgUrl:
        "https://as2.ftcdn.net/v2/jpg/02/50/92/75/1000_F_250927506_3nLOCLHtzF0sdsqAxxrp8NEzN536dd7X.jpg",
      title: " kk",
    },
    {
      imgUrl:
        "https://as1.ftcdn.net/v2/jpg/02/91/94/82/1000_F_291948291_spxq4o5NKJi6A6B2eAkhgNh9xWR364Ap.jpg",
      title: " Витамин",
    },
    {
      imgUrl:
        "https://as1.ftcdn.net/v2/jpg/05/91/69/08/1000_F_591690857_htChInuCUbApCcAgmUAlE5uqFNFEi2OL.jpg",
      title: "Дархлаа",
    },
  ];
  return (
    <>
      <div className="container  mx-auto ">
        <div className="grid grid-flow-col gap-4  ">
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
                      alt=""
                      className="m-auto group-hover:scale-110 transition duration-300 ease-in-out "
                    />
                    <div className="z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2  text-white ">
                      <div className="transform-gpu  p-4 space-y-20  text-2xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                        {/* <div className="font-bold">{data.name}</div> */}

                        <div className="opacity-75 text-2xl flex justify-center align-center h-20">
                          {data.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* <div className="bg-slate-200 my-16">
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
      </div> */}
    </>
  );
}
