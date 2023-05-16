import ProductCard from "@/components/ProductCard/ProductCard";
import { useBasket } from "@/Hooks/useBasket";
import { IProduct } from "@/interfaces/product";
import axios from "axios";
import style from '../basket/style.module.css'

import { useEffect, useState } from "react";

const styles = {};

const Basket = () => {
  const { basket } = useBasket();
  const [data, setData] = useState([]);
  // const data = basket.items[0].productId
  useEffect(() => {
    fetchBasketItems();
  }, [basket]);
  const fetchBasketItems = async () => {
    const ids = { ids: basket.items.map((item: any) => item.productId) };
    console.log("ids:", ids);
    const options = {
      headers: {
        "Content-Type": "Application/json",
      },
    };
    const response = await axios.post(
      `http://localhost:8080/products/ids`,
      ids
    );
    const datas = await response.data;
    setData(datas);
  };

  // })
  console.log("datas:", data);
  return (
    <>
      <h1>
        {data.map((item) => (
          <div>{item.title}</div>
          <ProductCard styles={style}/>
        ))}
      </h1>
    </>
  );
};
export default Basket;
