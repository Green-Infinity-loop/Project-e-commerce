import React from "react";
import { BsInfinity } from "react-icons/bs";
import { TfiLineDouble } from "react-icons/tfi";

export default function Dashed() {
  return (
    <div className="flex justify-center ">
      <p className="flex ">
        <TfiLineDouble />
        <BsInfinity />
        <TfiLineDouble />
      </p>
    </div>
  );
}
