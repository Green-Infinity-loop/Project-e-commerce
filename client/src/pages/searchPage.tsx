import Range from "@/components/Search Page/Range";

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
import {Layout} from "./layout";
import styles from "../styles/style.module.css";



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


export default function searchPage({data}) {
  
  // const router = useRouter();
  // const { query } = router;
  // const { addQuery } = useQuery();
  // const { ordering = "", limit = 24 } = query;
  return (
    <Layout>
      <div className="my-10">
        <div className="container">
          <div className="text-black">
            <Search />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-100 ">
              <div className="my-0 ">
                <div className="container">
                  <div className="text-black">{/* <Search /> */}</div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-black">
                      <Filter />
                    </div>
                    <div className="col-span-2 text-black">
                      <div>
                        <Sort />
                        <SearchPageCard />
                      </div>
                    </div>
                  </div>
                <div className="text-black">
                  <Search />
                </div>
          <div className="grid grid-cols-3 gap-4">
                {/* <div className="grid grid-cols-3 gap-4"> */}
                  <div className="text-black">
                    <Filter />
                  </div>
                  <div className="col-span-2 text-black">
                    <div>
                      <Sort />
                      <div>
                        <ul className="m-5 grid grid-cols-4 gap-2">
                          {data.map((products)=>(
                            <li key={nanoid()} >
                              <ProductCard product={products}/>
                              <div className="flex">
                                
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                {/* </div> */}
            
        </div>
        </div>
        </div>
      {/* <Select
        items={[
          { value: "", label: "Sort..." },
          { value: "releasedAsc", label: "Oldest" },
          { value: "releasedDesc", label: "Newest" },
          { value: "imdbRatingDesc", label: "Most popular" },
          { value: "titleAsc", label: "A-Z" },
          { value: "titleDesc", label: "Z-A" },
        ]}
        onChange={(e) => {
          addQuery({ ordering: e.target.value });
        }}
        value={ordering + ""}
        itemValue={"value"}
        itemLabel={"label"}
      /> */}
      {/* <Footer/> */}

    </Layout>
  );
}
