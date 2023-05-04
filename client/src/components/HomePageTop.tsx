import Image from "next/image";
import React, { useState, useEffect } from "react";
import { text } from "stream/consumers";
// import Card from "./Card";
import Dashed from "./Dashed";
import pills from "../image/icon/icons8-pills-100.png";
import business from "../image/icon/icons8-business-80.png";
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
      <div className="   mx-auto  h-[80vh]  bg-[#615cbe] py-9">
        <h1 className="my-8 font-bold text-[80px] p-10  text-4xl text-center text-white ease-in-out">
          Getting started is easy
        </h1>
        <div className="grid  grid-flow-col grid-cols-3 gap-4 container">
          {datas.map((data) => {
            return (
              <>
                <div className="group relative p-10">
                  <div className=" h-96  group duration-500 flex flex-wrap bg-[#c4b5fd] group-hover:h-[35vh] border-t-4 border-[#d946ef] rounded-lg group-hover:bg-white group-hover:translate-y-0 translate-y-4 transform transition duration-1000 ease-in-out">
                    {/* <img
                      src={data.imgUrl}
                      alt=" darhlaa bolon em "
                      className=" group-hover:scale-110 transition duration-300 ease-in-out  object-cover w-66 m-auto h-60 flex justify-center p-5"
                    /> */}
                   <div className="p-5 m-5 ">
                      <Image src={data.imgUrl} width={"100%"} height={'100%'}></Image>
                   </div>
                    <div className="text-white p-10 font-bold opacity-75 p-5  transform-gpu space-y-6  group-hover:text-slate-900">
                      <h1 className="text-2xl"> {data.title}</h1>
                      <p className="text-white-600/25 text-start">
                        {data.description}
                      </p>
                    </div>
                    <div className=" transition duration-300 ease-in-out cursor-pointer  to-transparent  inset-x-0 text-white ">
                      <button className="text-black group hidden group-hover:block  rounded-lg my-4 p-3 px-4 m-10 flex justify-center bg-[#d946ef]  ">
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
