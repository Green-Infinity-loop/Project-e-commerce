import { useBasket } from "@/Hooks/useBasket";
import { IProduct } from "@/interfaces/product";
import axios from "axios";

import { useEffect, useState } from "react"



const Basket = ()=> {
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
     
    // })
    console.log('datas:', data)
    return(
        <>
        <h1>{data.map((item)=>(
            <div>{item.title}</div>
        ))}</h1>
        </>
    )
}
export default Basket