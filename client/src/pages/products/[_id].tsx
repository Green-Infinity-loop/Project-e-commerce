
import { Navbar } from "@/components/Main Page/Navbar/Navbar";
import { useBasket } from "@/Hooks/useBasket";
import { IProduct } from "@/interfaces/product";
import { Button } from "@mui/material";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { toast } from "react-toastify";

interface ProductViewProps{
    product:IProduct;
}

const ProductView: FC<ProductViewProps> = ({product}) =>{
    

    return (
        <>
            <Navbar/>
                <div className="container">
                    <Image
                    src={`https://back.emonos.mn/${product.image}`}
                    alt={product.title}
                    width={100}
                    height={100}
                    className=" inset-0 w-3/3 h-full object-contain"
                    />   
                    <h1>{product.title}</h1>  
                    <Link href='/maps'>
                        <Button className="bg-black text-white">
                        MAP
                    </Button>
                    </Link>
                </div>    
        </>
    )
}


export const getServerSideProps = async (ctx:GetServerSidePropsContext) =>{
    console.log('server deer param', ctx.params)
    const { _id } =ctx.params;
    const productRequest = await axios.get(
        `http://localhost:8080/products/${_id}`
    );
    const product:IProduct = await productRequest.data;
    console.log('product:',product)
    return{
        props:{
            product,
        },
    };
};

export default ProductView


