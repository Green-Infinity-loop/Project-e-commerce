import { useBasket } from "@/Hooks/useBasket";
import { IProduct } from "@/interfaces/product";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";





export const SearchPageCard:FC = ({products})=> {
  
  
  const [quantity, setQuantity] = useState(1);
  const { addToBasket } = useBasket();
  return (
    <div className="container bg-white">
      {products?.map((product) => (
          <div
            key={product.title}
            className="text-black w-100% border-4 bg-white ">
            <div className="grid grid-cols-3">
              <div className="bg-[#c7d2fe] mx-auto w-80 center">
                <Link href={`/products/${product._id}`}>
                  <Image
                  alt=""
                  className="object-cover"
                  src={product.image}
                  width={520}
                  height={400}
                />
                </Link>

              </div>
              
              <div className="">
                <Link href={`/products/${product._id}`}>
                  <div className="m-7"> {product.title}</div>
                </Link>
                <div className="m-7">Үнэ : {product.price}</div>
                
                <button onClick={()=> addToBasket(product._id, quantity)} className="border-2 rounded-lg m-7 border-pink-200 hover:bg-[#ea4c89]">
                  <div className="m-4">Сагсанд нэмэх</div>
                </button>
                <Link href='/maps'>
                  <button className="border-2 border-pink-200 rounded-lg hover:bg-[#ea4c89]">
                    <div className="m-4">Байршил</div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
      ))}
    </div>
  );
}




