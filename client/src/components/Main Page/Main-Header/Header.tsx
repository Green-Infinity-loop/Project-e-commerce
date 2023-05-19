import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import zurag from "../../../image/vacc.png";
import zurag1 from "../../../image/hedaer1.jpeg";
import zurag2 from "../../../image/header2.webp";
import { Navbar } from "../Navbar/Navbar";

import { Pagination, Navigation } from "swiper";

const header = [
  {
    title: "    Believe in Obatin for Medicine",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiisipsa consequatur quas, alias officia harum!",
    image:
      "https://i.pinimg.com/564x/85/9c/9b/859c9bd1bd0925f2ee0df12352332848.jpg",
  },
  {
    title: "    Believe in Obatin for Medicine",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiisipsa consequatur quas, alias officia harum!",
    image:
      "https://i.pinimg.com/564x/85/9c/9b/859c9bd1bd0925f2ee0df12352332848.jpg",
  },
];

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>{Header1}</SwiperSlide>
        <SwiperSlide>{Header2}</SwiperSlide>
      </Swiper>
    </>
  );
}
//   function Header() {
//     return (
//       <>
//         {header.map((head) => {
//           return (
//             <>
//               <div className="h-[80vh]  bg-[#115061] ">
//                 <div className="grid grid-cols-2 ">
//                   <div className="p-64">
//                     <h1 className="  text-6xl font-bold m-auto ">
//                       {head.title}
//                     </h1>
//                     <p className="my-6">{head.description}</p>
//                     <div className="grid grid-cols-2 gap-8">
//                       <button className="bg-[#ea4c89] p-6 rounded-lg text-white ">
//                         Set Appointment
//                       </button>
//                       <button className=" p-6 rounded-lg flex  ">
//                         Set Appointment <FiArrowRight className=" w-16 h-6 " />
//                       </button>
//                     </div>
//                   </div>

//                   <Image
//                     src={head.image}
//                     alt="header img"
//                     className="p-5 h-[800px] "
//                     width={100}
//                     height={100}
//                   />
//                 </div>
//               </div>
//             </>
//           );
//         })}
//       </>
//     );
//   }
// }

export function Header1() {
  return (
    <div className="h-[80vh]  bg-white">
      <div className="grid grid-cols-2 ">
        <div className="p-64">
          <h1 className="  text-6xl font-bold m-auto ">
            Believe in Obatin for Medicine
          </h1>
          <p className="my-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            ipsa consequatur quas, alias officia harum!
          </p>
          <div className="grid grid-cols-2 gap-8">
            <button className="bg-[#115061] p-6 rounded-lg text-white ">
              Set Appointment
            </button>
            <button className=" p-6 rounded-lg flex  ">
              Set Appointment <FiArrowRight className=" w-16 h-6 " />
            </button>
          </div>
        </div>

        <Image
          src={zurag1}
          alt="header img"
          className="p-5 h-[800px] w-full "
        />
      </div>
    </div>
  );
}

export function Header2() {
  return (
    <div className="h-[80vh]  bg-white">
      <div className="grid grid-cols-2 ">
        <div className="p-64">
          <h1 className="  text-6xl font-bold m-auto ">
            Believe in Obatin for Medicine
          </h1>
          <p className="my-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            ipsa consequatur quas, alias officia harum!
          </p>
          <div className="grid grid-cols-2 gap-8">
            <button className="bg-[#ea4c89] p-6 rounded-lg text-white ">
              Set Appointment
            </button>
            <button className=" p-6 rounded-lg flex  ">
              Set Appointment <FiArrowRight className=" w-16 h-6 " />
            </button>
          </div>
        </div>

        <Image
          src={zurag2}
          alt="header img"
          className="p-5 h-[800px] w-full "
        />
      </div>
    </div>
  );
}
