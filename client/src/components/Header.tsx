import React from "react";
import Navbar from "@/components/Navbar";
export default function Header() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 my-9 ">
        <div>
          <h1>dsfgv</h1>
        </div>
        <div className="h-[600px]">
          <img
            src="https://img.freepik.com/premium-vector/online-consultation-doctor-concept-medical-diagnostics-internet_162329-437.jpg?w=2000"
            alt="header img"
            className="p-5 "
          />
        </div>
      </div>
    </div>
  );
}
