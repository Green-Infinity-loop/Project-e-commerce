

import { IProduct } from "@/interfaces/product";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface ProductCardProps{
  product:IProduct
}

export const Card: FC<ProductCardProps> = ({product}) => {
  const placeholder = 'https://via.placeholder.com/160x230'
  return (
    <div className="container">
      <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-4">
          <div className="m-4 bg-white  text-center center  rounded-lg row xl:h-[16vh] lg:h-[35vh] md:h-[40vh] sm:h-[50vh] cl:h-[100vh]  lg:w-[18vh] gap-3  relative   shadow-xl">
                <div className="absolute w-[100%] ">
                  <Image className="rounded-lg object-cover" alt="product image" src={`https://back.emonos.mn/${product.image}` || placeholder} width={165} height={165} />
                  
                </div>
          </div>
      </div>
    </div>
  );
}
