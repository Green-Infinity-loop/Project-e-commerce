import Image from "next/image";
import React, { useState, useEffect } from "react";
import { text } from "stream/consumers";
// import Card from "./Card";
import pills from "../../../image/icon/icons8-pills-100.png";
import business from "../../../image/icon/icons8-briefcase-100.png";
import bottle from "../../../image/icon/icons8-supplement-bottle-100.png";

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
      description: "Create an account to transfer your existing prescription",
    },
    {
      imgUrl: business,
      title: "Send In a Prescription",
      description: "Create an account to transfer your existing prescription",
    },
    // {
    //   imgUrl: bottle,
    //   title: "Receive Your Delivery",
    //   description: "Create an account to transfer your existing prescription",
    // },
  ];

  return (
    <>
      <div className="mx-auto  h-[80vh]  bg-[#615cbe] py-9">
        <Image
          src={
            "https://www.pexels.com/photo/pills-on-blue-background-7956965/"
          }></Image>
      </div>
    </>
  );
}
