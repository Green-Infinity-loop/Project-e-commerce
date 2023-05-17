import Sort from "@/components/Search Page/Sort";
import Filter from "@/components/Search Page/Filter";
import Footer from "@/components/atoms/Footer";
import Search from "@/components/Search Page/Search";
import axios from "axios";
import { Select } from "@mui/material";
import { useRouter } from "next/router";
import { useQuery } from "@/Hooks/useQuery";
import { GetServerSidePropsContext } from "next";
import ProductCard from "@/components/ProductCard/ProductCard";
import { nanoid } from "nanoid";
import { IProduct } from "@/interfaces/product";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { useState } from "react";
import { useBasket } from "@/Hooks/useBasket";
import { toast } from "react-toastify";
import { Navbar } from "@/components/Main Page/Navbar/Navbar";
import { Layout } from "./layout";
import styles from "../styles/style.module.css";
import style from "../styles/ShopGrid.module.css";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const { ordering = "", limit = 36 } = query;
  const response = await axios.get(
    `http://localhost:8080/products?limit=${limit}`
  );
  const { data } = response;
  return {
    props: { data },
  };
}

export default function searchPage({ data }) {
  // const router = useRouter();
  // const { query } = router;
  // const { addQuery } = useQuery();
  // const { ordering = "", limit = 24 } = query;
  return (
    <div className="container">
      <h1 className="text-[44px] font-[500] mb-[6px]">Shop Grid</h1>
      <div className="my-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">
            <div className="text-black">
              <Filter />
            </div>
          </div>
          <div className="col-span-9 text-black">
            <div>
              <Sort />
              <div>
                <ul className="m-5 grid grid-cols-3 flex w-[100/3] p-[12px] gap-2">
                  {data?.map((products) => (
                    <li className="h-[490px]" key={nanoid()}>
                      <ProductCard product={products} styles={style} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
