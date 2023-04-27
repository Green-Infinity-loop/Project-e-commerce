

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Apple Watch Series 7 GPS",
    image: "http://via.placeholder.com/480x600",
    price: "599$",
  },
  {
    name: "Apple Watch Series 7 GPS",
    image: "http://via.placeholder.com/480x600",
    price: "599$",
  },
  {
    name: "Apple Watch Series 7 GPS",
    image: "http://via.placeholder.com/480x600",
    price: "599$",
  },
  {
    name: "Apple Watch Series 7 GPS",
    image: "http://via.placeholder.com/480x600",
    price: "599$",
  },
  {
    name: "Apple Watch Series 7 GPS",
    image: "http://via.placeholder.com/480x600",
    price: "599$",
  },
  {
    name: "Apple Watch Series 7 GPS",
    image: "http://via.placeholder.com/480x600",
    price: "599$",
  },
  {
    name: "Apple Watch Series 7 GPS",
    image: "http://via.placeholder.com/480x600",
    price: "599$",
  },
  {
    name: "Apple Watch Series 7 GPS",
    image: "http://via.placeholder.com/480x600",
    price: "599$",
  },
  {
    name: "Apple Watch Series 7 GPS",
    image: "http://via.placeholder.com/480x600",
    price: "599$",
  },
  {
    name: "Apple Watch Series 7 GPS",
    image: "http://via.placeholder.com/480x600",
    price: "599$",
  },
  {
    name: "Apple Watch Series 7 GPS",
    image: "http://via.placeholder.com/480x600",
    price: "599$",
  },
  {
    name: "Apple Watch Series 7 GPS",
    image: "http://via.placeholder.com/480x600",
    price: "599$",
  },
  {
    name: "Apple Watch Series 7 GPS",
    image: "http://via.placeholder.com/480x600",
    price: "599$",
  },
  {
    name: "Apple Watch Series 7 GPS",
    image: "http://via.placeholder.com/480x600",
    price: "599$",
  },
  {
    name: "Apple Watch Series 7 GPS",
    image: "http://via.placeholder.com/480x600",
    price: "599$",
  },
  {
    name: "Apple Watch Series 7 GPS",
    image: "http://via.placeholder.com/480x600",
    price: "599$",
  },

  {
    name: "Apple Watch Series 7 GPS",
    image: "http://via.placeholder.com/480x600",
    price: "599$",
  },
  {
    name: "Apple Watch Series 7 GPS",
    image: "http://via.placeholder.com/480x600",
    price: "599$",
  },
  {
    name: "Apple Watch Series 7 GPS",
    image: "http://via.placeholder.com/480x600",
    price: "599$",
  },
  {
    name: "Apple Watch Series 7 GPS",
    image: "http://via.placeholder.com/480x600",
    price: "599$",
  },
];

export default function Card(): any {
  return (
    <div className="container">
      <div className="grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {products.map((product) =>{
            return (
              <div className="m-4 bg-white border text-center center  rounded-lg row xl:h-[36vh] lg:h-[35vh] md:h-[40vh] sm:h-[50vh] cl:h-[100vh]  lg:w-[16vh]  relative   shadow-xl">
                <div className="absolute w-[100%]">
                  <Image className="rounded-lg" alt="product image" src={product.image} width={300} height={200} />
                  <div className="xl:p-2 lg:p-2 md:p-3 sm:p-5 cl:p-5">
                    <Link href="#">
                      <h5 className=" text-[#214842] hover:text-[#17887A]   xl:text-xl tracking-tight text-black">{product.name}</h5>
                    </Link>
                    <p className=" font-normal text-gray-500 dark:text-gray-400">{product.price}</p>
                    <Link className="text-black  border-2 border-[#17887A] p-2 rounded-2xl hover:bg-[#17887A] hover:text-white" href='#'><button className="p-5">Add to Cart</button></Link>
                  </div>
                </div>
          </div>
            )
          })}
      </div>
    </div>
  );
}
