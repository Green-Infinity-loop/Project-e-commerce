import { Navbar } from "@/components/Main Page/Navbar/Navbar";
import { IProduct } from "@/interfaces/product";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import { FC } from "react";

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
                    <button>

                    </button>
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


