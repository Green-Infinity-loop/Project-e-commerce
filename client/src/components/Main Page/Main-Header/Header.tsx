import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import zurag from "../../../image/vacc.png";
import { Navbar } from "../Navbar/Navbar";

export default function Header() {
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

        <Image src={zurag} alt="header img" className="p-5 h-[800px] " />
      </div>
    </div>
  );
}
