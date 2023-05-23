import { useQuery } from "@/Hooks/useQuery";
import HomePageTop from "@/components/Main Page/Main-Section/HomePageTop";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useModal } from "@/Hooks/useModal";
import HomeCard from "@/components/Main Page/Main-Header/HomeCard";
import Header from "@/components/Main Page/Main-Header/Header";
import SignUp from "@/pages/signup";
import Sidebar from "@/components/Main Page/Navbar/Sidebar";
import { useToast } from "@/Hooks/useToast";
import { Alert, AlertTitle, IconButton, Snackbar, Stack } from "@mui/material";
import { GetServerSidePropsContext } from "next";
import axios from "axios";
import { IProduct } from "@/interfaces/product";
import { useRouter } from "next/router";
import { nanoid } from "nanoid";
import { CardSkelton } from "@/components/ProductCard/CardSkelton";
import useLoader from "@/Hooks/useLoader";
import { Select } from "@/components/ProductCard/Select";
import TopBottom from "@/components/Main Page/Main-Bottom/TopBottom";
import Nothing from "@/components/Main Page/Main-Section/Nothing";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Layout } from "./layout";
import style from "../styles/indexstyle.module.css";
import Latest from "@/components/Main Page/Main-Bottom/Latest";
import { Link } from "react-router-dom";
import { data } from "autoprefixer";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const { ordering = "", limit = 10 } = query;
  const response = await axios.get(
    `http://localhost:8080/products?limit=${limit}`
  );
  const { data } = response;
  return {
    props: { data },
  };
}

export default function Home({ data }) {
  // const showModal = useModal();
  const showToast = useToast();
  // const products = data;
  const router = useRouter();
  const { query } = router;
  const loading = useLoader();
  const { limit = 24 } = query;
  const { addQuery } = useQuery();

  return (
    <Layout>
      {/* <div className="bg-gradient-to-r from-cyan-100 to-blue-500 "> */}
      {/* <Button onClick={showToast}>Open simple snackbar</Button> */}
      <Header />
      {/* <Header /> */}

      {/* <Button onClick={showModal}>modal</Button> */}
      <HomeCard />
      {/* <ProductCard styles={style} product={products} /> */}
      <h1 className="container text-3xl font-bold ">Trending Products</h1>
      <div className="container grid grid-cols-5  my-5 text-center">
        {data.map((datas) => (
          <>
            <ProductCard product={datas} styles={style} />
          </>
        ))}
      </div>

      <HomePageTop />
      <Nothing />
      <Latest />
      {/* <HomeCard /> */}
      {/* <Nothing/> */}
      {/* <HomePageTop /> */}
      {/* <HomePageTop /> */}
      {/* <Select
        items={[
          { value: "6", label: "6" },
          { value: "12", label: "12" },
          { value: "24", label: "24" },
          { value: "48", label: "48" },
        ]}
        onChange={(e) => {
          addQuery({ limit: e.target.value });
        }}
        value={limit + ""}
        itemValue={"value"}
        itemLabel={"label"}
      />

      <div className="container">
        <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {!loading
            ? products?.map((product) => (
                <Card product={product} key={product._id} />
              ))
            : Array.from(Array(limit), () => <CardSkelton key={nanoid()} />)}
        </div>
      </div> */}
      {/* <TopBottom/> */}
      {/* <Bottom /> */}
      {/* <Other/> */}
      {/* </div> */}
    </Layout>
  );
}
