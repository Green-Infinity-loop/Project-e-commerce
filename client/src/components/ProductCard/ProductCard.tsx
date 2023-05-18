import ReactStars from 'react-rating-stars-component'
import { IProduct } from "@/interfaces/product";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import React from 'react'

interface CardProps {
  product: IProduct;
}
const ProductCard:FC<CardProps> = ({product, styles}) => {
    const { image, category, title, price, star } = product
    const placeholder = 'https://via.placeholder.com/160x230'
    const count = 1
    // const starLoop = ({}) =>{
        
    //     while(count < star){
    //                 <div>
    //             star
    //             </div>
                
    //         }
        
    // }
    
return (
   <div className={styles.main}>
            <div className={styles.card}>
                <div className={styles.content}>
                    <Link href={`/products/${product._id}`}>
                        <Image className={styles.cardImage} src={image || placeholder} alt={title} style={{width: '100%'}} width={1000} height={1000} />
                    </Link>
                </div>
                
                <div className={styles.container}>
                    <Link href={`/products/${product._id}`}>
                        <h3 className={styles.category}>{category}</h3>
                        <h3 className={styles.title}>{title}</h3>
                    </Link>
                    <div className={styles.star}><ReactStars count={star} color1={'#FFB21D'} color2={'#FFB21D'} size={14} /></div>
                    <span className={styles.price}>{price}</span>
                </div>
            </div>
       
   </div>
);
}

export default ProductCard;
