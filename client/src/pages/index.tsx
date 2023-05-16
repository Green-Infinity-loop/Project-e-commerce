import { Card } from "@/components/Main-Section/Card";
import Footer from "@/components/atoms/Footer";

import Bottom from "@/components/Main Page/Main-Bottom/Bottom";
import { useQuery } from "@/Hooks/useQuery";
import HomePageTop from "@/components/Main Page/Main-Section/HomePageTop";
import LogIn from "@/pages/login";

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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const { limit = 24 } = query;
  const response = await axios.get(
    `http://localhost:8080/products/?limit=${limit}`
  );
  const { data } = await response;
  console.log(data);

  return {
    props: { data },
  };
}

const product = [
  {
    image:
      "https://i.pinimg.com/564x/b0/22/0a/b0220acdcabfba9e999f22db349c95c6.jpg",
    title: "hi",
    price: "1234",
  },
  {
    image:
      "https://i.pinimg.com/564x/b0/22/0a/b0220acdcabfba9e999f22db349c95c6.jpg",
    title: "hi",
    price: "1234",
  },
  {
    image:
      "https://i.pinimg.com/564x/b0/22/0a/b0220acdcabfba9e999f22db349c95c6.jpg",
    title: "hi",
    price: "1234",
  },
];

export default function Home({ data }: { data: any }): JSX.Element {
  // const showModal = useModal();
  const showToast = useToast();
  const products = data;
  const router = useRouter();
  const { query } = router;
  const loading = useLoader();
  const { limit = 24 } = query;
  const { addQuery } = useQuery();

  console.log("products:", products);
  return (
    <Layout>
      {/* <div className="bg-gradient-to-r from-cyan-100 to-blue-500 "> */}
      {/* <Button onClick={showToast}>Open simple snackbar</Button> */}
      <Header />
      {/* <Button onClick={showModal}>modal</Button> */}
      <HomeCard />
      <ProductCard styles={style} products={product} />
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
