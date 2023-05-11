import { useBasket } from "@/Hooks/useBasket";
import { IProduct } from "@/interfaces/product";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import { FC, useEffect, useState } from "react";


// export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
//   // const { _id } = ctx.params
//   // console.log('serversize', _id, ctx.params)
//   const productsRequest = await axios.get(
//     `http://localhost:8080/products`
//   );
//   const products = await productsRequest.data;
//   console.log(products)
//   return {
//     props: {
//       products
//     },
//   };
// };

interface ProductViewProps {
  products: IProduct;
}

export const SearchPageCard:FC<ProductViewProps> = ({products}:any)=> {
  
  
  const data = products
  const [quantity, setQuantity] = useState(1);
  const { addToBasket } = useBasket();

  return (
    <div className="container bg-white">
      {data?.map((producto:any) => {
        return (
          <div
            key={producto.name}
            className="text-black w-100% border-4 bg-white ">
            <div className="grid grid-cols-3">
              <div className="bg-[#c7d2fe] mx-auto w-80 center">
                <Image
                  alt=""
                  className="object-cover"
                  src={producto.image}
                  width={520}
                  height={400}
                />
              </div>
              <div className="m-7 space-y-4">
                <div>Гарал үүсэл : {producto["Гарал үүсэл"]}</div>
                <div>Хэлбэр : {producto["Хэлбэр"]}</div>
                <div>Хайрцаг дахь тоо : {producto["Хайрцаг дахь тоо"]}</div>
                <div>Жортой эсэх : {producto["Жортой эсэх"]}</div>
                <div>Тун, хэмжээ : {producto["Тун, хэмжээ"]}</div>
                <div>Олон улсын нэршил : {producto["Олон улсын нэршил"]}</div>
              </div>
              <div className="">
                <div className="m-7">Үнэ : {producto.price}</div>
                <div className="m-7">
                  Бүтээгдэхүүний мэдээлэл : {producto.info}
                </div>
                <button onClick={()=> addToBasket(producto._id, quantity)} className="border-2 rounded-lg m-7 border-pink-200 hover:bg-[#ea4c89]">
                  <div className="m-4">Сагсанд нэмэх</div>
                </button>
                <button className="border-2 border-pink-200 rounded-lg hover:bg-[#ea4c89]">
                  <div className="m-4">Байршил</div>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}



