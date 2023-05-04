import React, { useState, useEffect } from "react";
import { text } from "stream/consumers";
import Card from "./Card";
import Dashed from "./Dashed";

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
      imgUrl: "icon/darhlaaa.svg",
      title: "Дархлаа",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, itaque?",
    },
    {
      imgUrl: "icon/darhlaaa.svg",
      title: "Эм бэлдмэл",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, itaque?",
    },
    {
      imgUrl: "icon/darhlaaa.svg",
      title: "Эм бэлдмэл",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, itaque?",
    },
  ];

  return (
    <>
      <div className="   mx-auto  h-[80vh]  bg-[#615cbe] py-9">
        <h1 className="my-8 font-bold text-4xl text-center text-white">
          Эмийн төрөл
        </h1>
        <div className="grid grid-flow-col grid-cols-3 gap-4 container">
          {datas.map((data) => {
            return (
              <>
                <div className="group relative">
                  <div className=" h-96 group duration-500 flex flex-wrap bg-[#c4b5fd] border-t-4 border-[#d946ef] group-hover:bg-white group-hover:translate-y-0 translate-y-4 transform transition duration-300 ease-in-out">
                    <img
                      src={data.imgUrl}
                      alt=" darhlaa bolon em "
                      className=" group-hover:scale-110 transition duration-300 ease-in-out  object-cover w-66 m-auto h-60 flex justify-center p-5"
                    />
                    <div className="text-white font-bold opacity-75 p-5  transform-gpu space-y-6  group-hover:text-slate-900">
                      <h1 className="text-2xl"> {data.title}</h1>
                      <p className="text-white-600/25 text-start">
                        {data.description}
                      </p>
                    </div>
                    <div className=" transition duration-300 ease-in-out cursor-pointer absolute to-transparent  inset-x-0 text-white ">
                      <button className="text-black rounded-lg my-4 flex justify-center bg-[#d946ef] absolute hidden group-hover:block z-50 -bottom-50 ">
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
