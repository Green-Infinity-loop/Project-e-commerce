import ProductCard from "@/components/ProductCard/ProductCard";
import { useBasket } from "@/Hooks/useBasket";
import { IProduct } from "@/interfaces/product";
import axios from "axios";

import { useEffect, useState } from "react";
import Image from "next/image";
import trash from '../../image/icon/trash.png'
import style from "../../styles/basket.module.css"


import { FaMinus, FaPlus } from "react-icons/fa";
import MapboxMap from "@/components/mapBox/mapBox";
import { Input } from "@mui/material";
import { Layout } from "../layout";


  

const Basket = ()=> {
    const [quantity, setQuantity] = useState(1);
    const {basket} = useBasket();
    console.log("bakset:",basket)
    const [data, setData] = useState([])
    // const data = basket.items[0].productId
        useEffect(()=>{
            fetchBasketItems()
        },[basket])
        const fetchBasketItems = async()=>{
             const ids = {ids:basket.items.map((item:any)=>item.productId)}
            console.log('ids:', ids)
            const options = {
                headers:{
                    'Content-Type':"Application/json"
                }
            }
             const response= await axios.post(`http://localhost:8080/products/ids`,ids)
                const datas = await response.data
                setData(datas)

        }
        const updateProductCount = (count: number) => {
            setQuantity(quantity + count);
            };
    // })
    console.log('datas:', data)
    return(
        <>
        
            <Layout>
            <h1 className="font-[500] container text-[44px] mb-[70px]">Shopping Cart</h1>
            <div className="grid grid-cols-12 gap-10 container flex mb-20">
            <div className="col-span-9 w-[100%]"> 

                <div className="h-[400px] overflow-y-auto">
                <thead className="w-[100%] grid">
                    <tr className="bg-[#F1F3F4] w-[100%] ">
                    <th scope="col" className="px-10 col-span-6 w-[400px] py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th scope="col" className="px-6 col-span-2   py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    <th scope="col" className="px-6 col-span-2 w-[200px] py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">price</th>
                    <th scope="col" className="px-6  py-3 w-[200px] text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 w-[100%] ">
                    {data.map((row, index) => (
                        
                             <tr  key={index} >
                                <div className="border-b-2 flex">
                                <td className="w-[400px]  flex px-6 py-4 whitespace-nowrap"><Image
                                className='w-[100px]'
                                src={row.image}
                                alt={row.name}
                                width={1000}
                                height={1000}
                                />
                                <div className="m-10 w-[200px]">{row.name}</div>
                                </td>
                                <td className="px-6  py-4 whitespace-nowrap"></td>
                                <td className="px-6 flex items-center w-[200px] py-4 whitespace-nowrap">{row.price}</td>
                                <td className="w-[130px] flex items-center">
                                <div className="">
                                <div className="flex items-center">

                                    <div className="flex  border border-gray-200 rounded">
                                        <button
                                        type="button"
                                        className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                                        >
                                        &minus;
                                        </button>

                                        <input
                                        type="number"
                                        id="Quantity"
                                        value="1"
                                        className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                        />

                                        <button
                                        type="button"
                                        className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                                        >
                                        +
                                        </button>
                                    </div>
                                    </div>
                                            </div>
                                </td>
                                <td className="flex items-center">
                                <button className="flex items-center align-center ml-24 group">
                                    <svg className="my-[11px] text-[#818487] group-hover:text-[#FD4B6B] mx-[5px]" width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.53033 1.53033C9.82322 1.23744 9.82322 0.762563 9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967L5 3.93934L1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L3.93934 5L0.46967 8.46967C0.176777 8.76256 0.176777 9.23744 0.46967 9.53033C0.762563 9.82322 1.23744 9.82322 1.53033 9.53033L5 6.06066L8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033C9.82322 9.23744 9.82322 8.76256 9.53033 8.46967L6.06066 5L9.53033 1.53033Z" fill="currentColor"></path>
                                    </svg>
                                    <span className="my-1 font-[400] hover:color text-[14px]  text-[#818487] group-hover:text-[#FD4B6B]">Remove</span>
                                </button>
                                </td>
                                </div>
                            </tr>
                        
                    ))}
                </tbody>
                </div>
                    
            </div>
            <div className="col-span-3 ">
            <div className="mt-6 h-[60%] rounded-lg  bg-white p-6 shadow-[0px_30px_70px_0_rgba(1,15,28,0.1)] md:mt-0 ">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">$129.99</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">$4.99</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">$134.98 USD</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button className="mt-6 w-full  bg-black py-1.5 font-medium text-white hover:bg-blue-600">Proceed to Checkout</button>
      </div>
             </div>
        </div>
        <div className="container border-xl">
        <div className="my-20">
        <MapboxMap/>
        </div>
        </div>
            </Layout>
        </>
    )
}
export default Basket;
