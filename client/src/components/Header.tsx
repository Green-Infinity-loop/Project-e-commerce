import React from "react";
// import { Nav, Logo, div, Bars, NavMenu, NavBtn } from "./HeaderElements";

export default function Header() {
  return (
    <>
      <div className="bg-white-800 w-full   rounded  py-40 relative h-[24rem] ">
        <div className="grid grid-cols-2 text-center align-center">
          <div className=" text-center align-center ">
            <h1 className="text-2xl text-black text-center">medZone</h1>
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              adipisci.
            </p>
          </div>

          <img
            src="icon/medical.png"
            className="absolute right-0  w-72 "
            alt=""
          />
        </div>
      </div>
    </>
  );
}
