import React, { useState } from "react";
import { text } from "stream/consumers";
import Card from "./Card";
import Dashed from "./Dashed";

export default function HomePageTop() {
  return (
    <>
      <div className="container  mx-auto py-10">
        <div className="grid grid-flow-col gap-4  ">
          <div className="group relative overflow-hidden ">
            <img src="  https://placeimg.com/600/400/nature" alt="" />
            <p className="  absolute text-white -bottom-52 group-hover:inset-0 right-2 left-2 transition-all delay-300 duration-100  dark:bg-gray-900 p-4 rounded shadow dark:shadow-gray-200">
              MEN Clothes
              <hr />
              <p className="py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, rerum.
              </p>
            </p>
          </div>

          <div className="group relative overflow-hidden duration-500">
            <img src="  https://placeimg.com/600/400/nature" alt="" />
            <p className=" absolute text-white -bottom-52 group-hover:inset-0 right-2 left-2 transition-all duration-500  dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-200">
              MEN Clothes
              <hr />
              <p className="py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, rerum.
              </p>
            </p>
          </div>

          <div className=" row-start-1  row-end-4 group relative overflow-hidden duration-500 ">
            <img src="   https://placeimg.com/600/840/nature" alt="" />
            <p className="absolute text-white -bottom-52 group-hover:inset-0 right-2 left-2 transition-all  duration-500  dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-200">
              MEN Clothes
              <hr />
              <p className="py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, rerum.
              </p>
            </p>
          </div>

          <div className="group relative overflow-hidden duration-500">
            <img src="  https://placeimg.com/600/400/nature" alt="" />
            <p className="absolute text-white -bottom-52 group-hover:inset-0 right-2 left-2 transition-all duration-500  dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-200">
              MEN Clothes
              <hr />
              <p className="py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, rerum.
              </p>
            </p>
          </div>

          <div className="group relative overflow-hidden duration-500">
            <img src="  https://placeimg.com/600/400/nature" alt="" />
            <p className="absolute text-white -bottom-52 group-hover:inset-0 right-2 left-2 transition-all duration-500  dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-200">
              MEN Clothes
              <hr />
              <p className="py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, rerum.
              </p>
            </p>
          </div>
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
