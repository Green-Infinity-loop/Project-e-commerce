import { IProduct } from "@/interfaces/product";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CardProps {
  product: IProduct;
}

const ProductCard: FC<CardProps> = ({ product, styles }) => {
  const { image, title, price } = product;
  const placeholder = "https://via.placeholder.com/160x230";
  return (
    <>
      <div className={styles.main}>
        <div className={styles.card}>
          <div className={styles.content}>
            <Link href={`/products/${product._id}`}>
              <Image
                className={styles.cardImage}
                src={image || placeholder}
                alt={title}
                style={{ width: "100%" }}
                width={500}
                height={500}
              />
            </Link>
          </div>

          <div className={styles.container}>
            <Link href={`/products/${product._id}`}>
              <h3>{title}</h3>
            </Link>

            <p>price:{price}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
