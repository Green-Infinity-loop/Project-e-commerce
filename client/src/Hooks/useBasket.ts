import { BasketState } from "@/atoms/atoms"
import axios from "axios";
import { checkPrimeSync } from "crypto";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil"
import { useCurrentUser } from "./useCurrentUser";

export const useBasket = () =>{
    const [basket, setBasket] = useRecoilState<any>(BasketState);

    useEffect(()=>{
        console.log('basket:', basket);
    }, [basket]);

    const {currentUser} = useCurrentUser();
    const addToBasket = async (productId:string, quantity:number,title:string, price:number,image:string ) =>{
        if(quantity > 10){
            toast.warn("Та 10 аас дээш бараа сагслаж болохгүй");
            return;
        }
        if (quantity < 0) {
            toast.warn("Та дор хаяж 1 бараа сагслах ёстой");
            return;
        }
        const basket = await updateBasket(productId, quantity,title, price,image);
        setBasket(basket);
        toast.success("Барааг амжилттай сагсаллаа")
    }

    const updateBasket = async (productId:string, quantity:number, title:string, price:number,image:string) =>{
        if(!currentUser){
            if(!basket){
                console.log("basket is empty so craeted");
                return {items:[{productId, quantity}]};
            }
            const newBasket: any = { items:[]};
        let {items} = basket;
        items = [...items];
        let updateQuantity = false;

        newBasket.items = items.map((item:any, index:number)=>{
            if(item.productId === productId){
                const newQuantity = item.quantity + quantity;
                updateQuantity = true;
                return {
                    productId:productId,
                    quantity:newQuantity,
                }
            }
            return item;
        })
        console.log("newBasket:", newBasket);
        if(!updateQuantity){
            newBasket.items.push({productId, quantity});
        }
        return newBasket;
    }
     const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/baskets/add`,
        {
            productId,
            quantity,
        },
        { headers: {Authorization: 'Bearer' + localStorage.getItem("token")}}
    );
    console.log("response is:", response)
    return response.data;
    }
    return { basket, setBasket, addToBasket }; 
}