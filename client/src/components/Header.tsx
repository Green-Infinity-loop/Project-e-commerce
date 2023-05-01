import React from "react";

export default function Header() {
  return (
    <>
      <div className="bg-white-800 w-full  h-[100px ]  mb-5">
        <img
          src="https://t4.ftcdn.net/jpg/05/96/37/27/240_F_596372762_DEJWKaoGsQmY5x6mCFU8EsIXWzA2NQiZ.jpg"
          className="relative w-full h-[20rem]"
          alt=""
        />
        <div className=" text-center align-center absolute inset-y-44 inset-x-24 ">
          <h1 className="text-2xl text-black text-center">medZone</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            adipisci.
          </p>
        </div>
      </div>
    </>
  );
}
