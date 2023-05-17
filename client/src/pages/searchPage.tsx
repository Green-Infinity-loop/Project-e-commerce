

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
import style from "../styles/ShopGrid.module.css"
import style2 from '../styles/ShopGrid2.module.css'
import image from '../image/product/product.png'
import ShopGrid from "./ShopGrid";



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

const json = [
  {
    image:
      image,
    category:"Whitetails Store",
    title: "Whitetails Women's Open Sky",
    price: "$340.00",
    star:2
  },
  {
    image:
      image,
    category:"Whitetails Store",
    title: "Whitetails Women's Open Sky",
    price: "$340.00",
  },
  {
    image:
      image,
    category:"Whitetails Store",
    title: "Whitetails Women's Open Sky",
    price: "$340.00",
    star:5
  },
  {
    image:
      image,
    category:"Whitetails Store",
    title: "Whitetails Women's Open Sky",
    price: "$340.00",
  },
  {
    image:
      image,
    category:"Whitetails Store",
    title: "Whitetails Women's Open Sky",
    price: "$340.00",
  }
]


export default function searchPage({data}) {
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
                    <div className="container">
                      <div className="flex">
                        <div className="nav-item">
                          <button className="nav-link w-[40px] h-[40px] border grid justify-items-center content-center mr-2" id="grid-tab" data-bs-toggle="tab" data-bs-target="#grid-tab-pane" type="button" role="tab" aria-controls="grid-tab-pane" aria-selected="true">
                           <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.3327 6.01341V2.98675C16.3327 2.04675 15.906 1.66675 14.846 1.66675H12.1527C11.0927 1.66675 10.666 2.04675 10.666 2.98675V6.00675C10.666 6.95341 11.0927 7.32675 12.1527 7.32675H14.846C15.906 7.33341 16.3327 6.95341 16.3327 6.01341Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M16.3327 15.18V12.4867C16.3327 11.4267 15.906 11 14.846 11H12.1527C11.0927 11 10.666 11.4267 10.666 12.4867V15.18C10.666 16.24 11.0927 16.6667 12.1527 16.6667H14.846C15.906 16.6667 16.3327 16.24 16.3327 15.18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M7.33268 6.01341V2.98675C7.33268 2.04675 6.90602 1.66675 5.84602 1.66675H3.15268C2.09268 1.66675 1.66602 2.04675 1.66602 2.98675V6.00675C1.66602 6.95341 2.09268 7.32675 3.15268 7.32675H5.84602C6.90602 7.33341 7.33268 6.95341 7.33268 6.01341Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M7.33268 15.18V12.4867C7.33268 11.4267 6.90602 11 5.84602 11H3.15268C2.09268 11 1.66602 11.4267 1.66602 12.4867V15.18C1.66602 16.24 2.09268 16.6667 3.15268 16.6667H5.84602C6.90602 16.6667 7.33268 16.24 7.33268 15.18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        </div>
                        <div className="nav-item">
                          <button className="nav-link active w-[40px] h-[40px] border grid justify-items-center content-center" id="list-tab" data-bs-toggle="tab" data-bs-target="#list-tab-pane" type="button" role="tab" aria-controls="list-tab-pane" aria-selected="true">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15 7.11108H1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M15 1H1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M15 13.2222H1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                          </button>
                        </div>
                      <ShopGrid/>
                      </div>
                      <div className="add">
                        <ul className=" grid grid-cols-3 flex w-[100%] gap-[20px]">
                          {json?.map((products)=>(
                            <li className="h-[490px] " key={nanoid()} >
                              <ProductCard product={products} styles={style}/>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="add">
                        <ul className=" w-[100%] gap-[20px]">
                          {json?.map((products)=>(
                            <li className="mb-10" key={nanoid()} >
                              <ProductCard product={products} styles={style2}/>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="flex items-center justify-between border-t border-gray-200 bg-white sm:px-1">
                          <div className="flex flex-1 justify-between sm:hidden">
                            <a
                              href="#"
                              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                              Previous
                            </a>
                            <a
                              href="#"
                              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                              Next
                            </a>
                          </div>
                          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                            <div>
                              <nav
                                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                aria-label="Pagination"
                              >
                                <a
                                  href="#"
                                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                >
                                  <span className="sr-only">Previous</span>
                                  <svg
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                      clip-rule="evenodd"
                                    />
                                  </svg>
                                </a>

                                <a
                                  href="#"
                                  aria-current="page"
                                  className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                  1
                                </a>
                                <a
                                  href="#"
                                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                >
                                  2
                                </a>
                                <a
                                  href="#"
                                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                >
                                  3
                                </a>
                                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                                  ...
                                </span>

                                <span className="sr-only">Next</span>
                                <svg
                                  className="h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </nav>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
          </div>
        
      </div>
   </div>
  );
}
