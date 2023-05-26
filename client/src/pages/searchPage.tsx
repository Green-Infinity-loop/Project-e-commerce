import Sort from "@/components/Search Page/Sort";
import Filter from "@/components/Search Page/Filter";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import ProductCard from "@/components/ProductCard/ProductCard";
import { nanoid } from "nanoid";
import { IProduct } from "@/interfaces/product";
import { Button } from "@/components/atoms/Button";
import { FC, useState } from "react";
import { useBasket } from "@/Hooks/useBasket";
import Layout from "./layout";
import style from "../styles/ShopGrid.module.css";
import style2 from "../styles/ShopGrid2.module.css";
import ShopGrid from "./ShopGrid";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  console.log("query", query);

  const { search } = query;
  console.log("search :", search);

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products?search=${search}`
    // `http://localhost:8080/products`
  );
  const { data } = response;
  console.log("data", data);

  return {
    props: { data },
  };
}

interface ProductViewProps {
  product: IProduct;
  data: Array<IProduct>;
}

const SearchPage: FC<ProductViewProps> = ({ data }) => {
  const [show, setShow] = useState<string>("button1");
  const [quantity, setQuantity] = useState<number>(1);
  const { addToBasket } = useBasket();
  const updateProductCount = (count: number) => {
    setQuantity(quantity + count);
  };

  const toggle = (buttonId: string) => {
    if (buttonId !== show) {
      setShow(buttonId);
    }
  };

  // const myFunction = (_id, quantity,name, price,image) =>{
  //   updateProductCount(1)
  //   addToBasket(_id, quantity,name, price,image  )
  // }
  return (
    <Layout>
      <div className="container ">
        <h1 className="text-[44px] font-[500] mb-[6px]">Shop Grid</h1>
        <div className="my-10">
          <div className="grid lg:grid-cols-12 md:grid-cols-1 gap-4">
            <div className="col-span-3">
              <div className="text-black">
                <Filter />
              </div>
            </div>
            <div className="col-span-9 text-black">
              <div className="col-span-9 text-black">
                <div className="container">
                  <div className="flex">
                    <div className="nav-item">
                      <button
                        className={`nav-link w-[40px] h-[40px] border grid justify-items-center content-center mr-2 focus:border-2 focus:border-gray-950 ${
                          show === "button1" ? "active" : ""
                        }`}
                        id="button1"
                        onClick={() => toggle("button1")}
                        data-bs-toggle="tab"
                        data-bs-target="#grid-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="grid-tab-pane"
                        aria-selected="true"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.3327 6.01341V2.98675C16.3327 2.04675 15.906 1.66675 14.846 1.66675H12.1527C11.0927 1.66675 10.666 2.04675 10.666 2.98675V6.00675C10.666 6.95341 11.0927 7.32675 12.1527 7.32675H14.846C15.906 7.33341 16.3327 6.95341 16.3327 6.01341Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M16.3327 15.18V12.4867C16.3327 11.4267 15.906 11 14.846 11H12.1527C11.0927 11 10.666 11.4267 10.666 12.4867V15.18C10.666 16.24 11.0927 16.6667 12.1527 16.6667H14.846C15.906 16.6667 16.3327 16.24 16.3327 15.18Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M7.33268 6.01341V2.98675C7.33268 2.04675 6.90602 1.66675 5.84602 1.66675H3.15268C2.09268 1.66675 1.66602 2.04675 1.66602 2.98675V6.00675C1.66602 6.95341 2.09268 7.32675 3.15268 7.32675H5.84602C6.90602 7.33341 7.33268 6.95341 7.33268 6.01341Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M7.33268 15.18V12.4867C7.33268 11.4267 6.90602 11 5.84602 11H3.15268C2.09268 11 1.66602 11.4267 1.66602 12.4867V15.18C1.66602 16.24 2.09268 16.6667 3.15268 16.6667H5.84602C6.90602 16.6667 7.33268 16.24 7.33268 15.18Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div className="nav-item">
                      <button
                        className={`nav-link active w-[40px] h-[40px] border grid justify-items-center content-center focus:border-2 focus:border-gray-950 ${
                          show === "button2" ? "active" : ""
                        }`}
                        onClick={() => toggle("button2")}
                        id="button2"
                        data-bs-toggle="tab"
                        data-bs-target="#list-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="list-tab-pane"
                        aria-selected="true"
                      >
                        <svg
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 7.11108H1"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M15 1H1"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M15 13.2222H1"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ShopGrid />
                    <Sort />
                  </div>
                  {show === "button1" && (
                    <div className="add">
                      <ul className=" grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 flex w-[100%] gap-[20px]">
                        {data?.map((products) => (
                          <li
                            className="h-[490px] relative group"
                            key={nanoid()}
                          >
                            <ProductCard product={products} styles={style} />
                            <div className="absolute top-10 left-0 group-hover:left-5 invisible  hover:visible  transition-all	ease-in-out duration-10000 delay-400">
                              <Button
                                id="addToCard"
                                className=""
                                onClick={() =>
                                  addToBasket(
                                    products?._id,
                                    quantity,
                                    products?.name || "",
                                    products?.price || 0,
                                    products?.image || ""
                                  )
                                }
                              >
                                <div className="flex group relative">
                                  <div className="border p-2 rounded-full invisible group-hover:visible hover:bg-black hover:text-white">
                                    <svg
                                      className=""
                                      width="17"
                                      height="17"
                                      viewBox="0 0 17 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M3.34706 4.53799L3.85961 10.6239C3.89701 11.0923 4.28036 11.4436 4.74871 11.4436H4.75212H14.0265H14.0282C14.4711 11.4436 14.8493 11.1144 14.9122 10.6774L15.7197 5.11162C15.7384 4.97924 15.7053 4.84687 15.6245 4.73995C15.5446 4.63218 15.4273 4.5626 15.2947 4.54393C15.1171 4.55072 7.74498 4.54054 3.34706 4.53799ZM4.74722 12.7162C3.62777 12.7162 2.68001 11.8438 2.58906 10.728L1.81046 1.4837L0.529505 1.26308C0.181854 1.20198 -0.0501969 0.873587 0.00930333 0.526523C0.0705036 0.17946 0.406255 -0.0462578 0.746256 0.00805037L2.51426 0.313534C2.79901 0.363599 3.01576 0.5995 3.04042 0.888012L3.24017 3.26484C15.3748 3.26993 15.4139 3.27587 15.4726 3.28266C15.946 3.3514 16.3625 3.59833 16.6464 3.97849C16.9303 4.35779 17.0493 4.82535 16.9813 5.29376L16.1747 10.8586C16.0225 11.9177 15.1011 12.7162 14.0301 12.7162H14.0259H4.75402H4.74722Z"
                                        fill="currentColor"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.6629 7.67446H10.3067C9.95394 7.67446 9.66919 7.38934 9.66919 7.03804C9.66919 6.68673 9.95394 6.40161 10.3067 6.40161H12.6629C13.0148 6.40161 13.3004 6.68673 13.3004 7.03804C13.3004 7.38934 13.0148 7.67446 12.6629 7.67446Z"
                                        fill="currentColor"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M4.38171 15.0212C4.63756 15.0212 4.84411 15.2278 4.84411 15.4836C4.84411 15.7395 4.63756 15.9469 4.38171 15.9469C4.12501 15.9469 3.91846 15.7395 3.91846 15.4836C3.91846 15.2278 4.12501 15.0212 4.38171 15.0212Z"
                                        fill="currentColor"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M4.38082 15.3091C4.28477 15.3091 4.20657 15.3873 4.20657 15.4833C4.20657 15.6763 4.55592 15.6763 4.55592 15.4833C4.55592 15.3873 4.47687 15.3091 4.38082 15.3091ZM4.38067 16.5815C3.77376 16.5815 3.28076 16.0884 3.28076 15.4826C3.28076 14.8767 3.77376 14.3845 4.38067 14.3845C4.98757 14.3845 5.48142 14.8767 5.48142 15.4826C5.48142 16.0884 4.98757 16.5815 4.38067 16.5815Z"
                                        fill="currentColor"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M13.9701 15.0212C14.2259 15.0212 14.4333 15.2278 14.4333 15.4836C14.4333 15.7395 14.2259 15.9469 13.9701 15.9469C13.7134 15.9469 13.5068 15.7395 13.5068 15.4836C13.5068 15.2278 13.7134 15.0212 13.9701 15.0212Z"
                                        fill="currentColor"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M13.9692 15.3092C13.874 15.3092 13.7958 15.3874 13.7958 15.4835C13.7966 15.6781 14.1451 15.6764 14.1443 15.4835C14.1443 15.3874 14.0652 15.3092 13.9692 15.3092ZM13.969 16.5815C13.3621 16.5815 12.8691 16.0884 12.8691 15.4826C12.8691 14.8767 13.3621 14.3845 13.969 14.3845C14.5768 14.3845 15.0706 14.8767 15.0706 15.4826C15.0706 16.0884 14.5768 16.5815 13.969 16.5815Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </div>
                                  <span className="absolute left-10 border rounded-full   bg-black w-20 top-2 text-white font-[500] text-[12px]">
                                    Add to Cart
                                  </span>
                                </div>
                              </Button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {show === "button2" && (
                    <div className="add">
                      <ul className=" w-[100%] gap-[20px]">
                        {data?.map((products) => (
                          <li className="mb-10 border" key={nanoid()}>
                            <ProductCard product={products} styles={style2} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

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
      </div>
    </Layout>
  );
};

export default SearchPage;
