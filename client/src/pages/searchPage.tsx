
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



export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const { ordering = "", limit = 24 } = query;
  const response = await axios.get(
    `http://localhost:8080/products?limit=${limit}`
  );
  const { data } = response;
  return {
    props: { data },
  };
}


export default function searchPage({data}) {
  const [quantity, setQuantity] = useState(1);
    const { addToBasket } = useBasket();
    const updateProductCount = (count: number) => {
    if (count < 0 && quantity === 1) {
      toast.warning("1 ээс бага бараа сагслах боломжгүй");
      return;
    }
    if (count > 0 && quantity === 10) {
      toast.warning("10 аас их бараа сагслах боломжгүй");
      return;
    }
    setQuantity(quantity + count);
  };

  function myFunction(){
    updateProductCount(1);
    addToBasket(data._id, quantity)
  }
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
                                <Button onClick={()=> myFunction()} className="border-2 rounded-lg m-7 border-pink-200 hover:bg-[#ea4c89]">
                                    <div className="m-4">Сагсанд нэмэх</div>
                                    <input
                    type="number"
                    name="quantity"
                    value={quantity}
                    readOnly={true}
                    className="text-center text-gray-700 w-16 rounded-md px-2 py-1 mx-2 border-gray-300 border focus:outline-none focus:ring-2  focus:ring-gray-500 focus:ring-offset-2"
                  />
                                </Button>
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
