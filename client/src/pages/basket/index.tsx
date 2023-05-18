import ProductCard from "@/components/ProductCard/ProductCard";
import { useBasket } from "@/Hooks/useBasket";
import { IProduct } from "@/interfaces/product";
import axios from "axios";
import style from '../basket/style.module.css'

import { useEffect, useState } from "react";
import Image from "next/image";
import trash from '../../image/icon/trash.png'


import { FaMinus, FaPlus } from "react-icons/fa";


  

const Basket = ()=> {
    const [quantity, setQuantity] = useState(1);
    const {basket} = useBasket();
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
        <div className="grid grid-cols-6 gap-4 container">
            <div className="col-span-4 border h-[420px] rounded-3xl mt-[100px] p-10 bg-[#fafafa]"> 
                <h1 className="font-bold text-3xl mb-10">My Card</h1>
                    {data.map((item)=>(
                        <div className="container">
                            
                            <div className="">
                                <div>
                                    <div className="border-b-[3px]">
                                        <div className="grid grid-cols-2 p-4">
                                            <div className="flex w-[600px] mt-5">
                                                <Image className="mr-6 rounded-xl" src={`https://back.emonos.mn/${item.image}`} width={150} height={200}/>
                                                <div className="text-xl font-bold">{item.title}</div>
                                            </div>
                                            <div className="grid justify-items-end">
                                                <button className="">
                                                    <Image src={trash} width={30} height={10}/>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 p-4">
                                        <div className="align-items-center">
                                            <button
                                                    type="button"
                                                    className="text-gray-700 rounded-full py-1 px-3 border-gray-300 border hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                                    onClick={() => updateProductCount(-1)}
                                                >
                                                    <FaMinus />
                                                </button>
                                                <input
                                                    type="number"
                                                    name="quantity"
                                                    value={quantity}
                                                    readOnly={true}
                                                    className="text-center text-xl ml-5 text-gray-700 w-12 rounded-2xl px-2 py-1 mx-2 focus:outline-none focus:ring-offset-2"
                                                />
                                                <button
                                                    type="button"
                                                    className="text-gray-700 rounded-full py-1 px-3 border-gray-300 border hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                                    onClick={() => updateProductCount(1)}
                                                >
                                                    <FaPlus />
                                                </button>
                                        </div>
                                        <div className="grid font-bold text-3xl justify-items-end">
                                                {item.price}₮
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="col-span-2 text-3xl border rounded-3xl mt-[100px] p-10 bg-[#fafafa]">
                <h1 className="container  h-[400px] font-bold text-3xl">Total</h1>
                <div className="">
                    
                    <div className="flex items-end border-b-[3px] items-end">
                        <div className="py-10 flex grid grid-cols-2 gap-40">
                            <div>total</div>
                            <div>12355$</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}
export default Basket;
