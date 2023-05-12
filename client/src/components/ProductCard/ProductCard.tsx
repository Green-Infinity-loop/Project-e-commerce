import { IProduct } from '@/interfaces/product';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './style.module.css'

interface CardProps {
  product: IProduct;
}

const ProductCard:FC<CardProps> = ({product}) => {
    const { image, title, price } = product
    const placeholder = 'https://via.placeholder.com/160x230'
return (
   <div>
       
            <div className={styles.card}>
                <Link href={`/products/${product._id}`}>
                    <Image src={`https://back.emonos.mn/${image}` || placeholder} alt={title} style={{width: '100%'}} width={200} height={200} />
                </Link>
                
                <div className={styles.container}>
                    <Link href={`/products/${product._id}`}>
                        <h3>{title}</h3>
                    </Link>
                    
                    <p>price:{price}</p>
                </div>
            </div>
       
   </div>
);
}
export default ProductCard;