import Image from "next/image";
import React, { useState, useEffect } from "react";
import { text } from "stream/consumers";
// import Card from "./Card";
import Dashed from "./Dashed";
import pills from "../image/icon/icons8-pills-100.png";
import business from "../image/icon/icons8-briefcase-100.png";
import bottle from "../image/icon/icons8-supplement-bottle-100.png"


// export default function HomePageTop() {
//   const datas = [
//     {
//       imgUrl: "icon/darhlaaa.svg",
//       title: "Дархлаа",
//       description:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, itaque?",
//     },
//     {
//       imgUrl: "icon/darhlaaa.svg",
//       title: "Эм бэлдмэл",
//       description:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, itaque?",
//     },
//     {
//       imgUrl: "icon/darhlaaa.svg",
//       title: "Эм бэлдмэл",
//       description:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, itaque?",
//     },
//   ];
// }
export default function HomePageTop() {
  const datas = [
    {
      imgUrl: pills,
      title: "See Your Current Saving",
      description:
        "Create an account to transfer your existing prescription",
    },
    {
      imgUrl: business,
      title: "Send In a Prescription",
      description:
       "Create an account to transfer your existing prescription",
    },
    {
      imgUrl: bottle,
      title: "Receive Your Delivery",
      description:
        "Create an account to transfer your existing prescription",
    },
  ];

  return (
    <>
      <div className="mx-auto  h-[80vh]  bg-[#615cbe] py-9">
        <h1 className="my-8 mb-4 font-bold text-[60px] p-10 px-[900px] leading-[70px] text-4xl text-center text-white ">
          Getting started is easy
        </h1>
        <div className="grid w-[60vw]  grid-flow-col grid-cols-3 gap-4 container  text-white ">
          {datas.map((data) => {
            return (
              <>
                <div className="group relative p-10 ">
                  <div className=" h-[300px]  group flex flex-wrap bg-[white] bg-opacity-10 group-hover:h-[370px] transition-all group-hover:duration-1000 border-t-4 border-[#d946ef] hover:border-none rounded-lg group-hover:bg-white transition duration-1000 hover:duration-1000">
                    {/* <img
                      src={data.imgUrl}
                      alt=" darhlaa bolon em "
                      className=" group-hover:scale-110 transition duration-300 ease-in-out  object-cover w-66 m-auto h-60 flex justify-center p-5"
                    /> */}
                   <div className="p-3 mx-10 ">
                      <Image src={data.imgUrl} width={70} height={70}></Image>
                   </div>
                    <div className="text-white font-bold opacity-75 p-5  space-y-6 group-hover:text-slate-900 duration-1000">
                      <h1 className="text-xl px-4"> {data.title}</h1>
                      <p className="text-white-600/25 px-4 text-start">
                        {data.description}
                      </p>
                    </div>
                    <div className="cursor-pointer mx-4 mx-auto">
                      <button className="text-black p-3   w-[235px] bg-white group hidden group-hover:block group-hover:text-[white]  group-hover:bg-[#d946ef] hover:shadow-2xl transition-all group-hover:duration-1000  rounded-lg ">
                        Learn more
                      </button>
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
