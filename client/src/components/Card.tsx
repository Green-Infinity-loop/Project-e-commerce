
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
];


export default function Card(): any {
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-5 flex ">
          {products.map((product) =>{
            return (
              <div className="m-5 bg-white border text-center  rounded-lg h-[42vh] relative w-[100%]  shadow-xl">
                <div className="absolute">
                  <Image className="" alt="product image" src={product.image} width={300} height={200}/>
                  <Link href="#">
                      <h5 className="mb-2 text-[#214842] hover:text-[#17887A] p-8 pb-0 text-2xl tracking-tight text-black">{product.name}</h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{product.price}</p>
                  <Link className="text-black mt-1 p-2 border-2 border-[#17887A] rounded-xl hover:bg-[#17887A] hover:text-white" href='#'><button className="p-5">Add to Cart</button></Link>
                </div>
          </div>
            )
          })}
      </div>
    </div>
  );
}
