
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
import { Alert, AlertTitle, IconButton, Snackbar, Stack } from "@mui/material";
import { GetServerSidePropsContext } from "next";
import axios from "axios";
import { IProduct } from "@/interfaces/product";
import { useRouter } from "next/router";
import { nanoid } from "nanoid";
import { CardSkelton } from "@/components/ProductCard/CardSkelton";
import useLoader from "@/Hooks/useLoader";
import TopBottom from "@/components/Main Page/Main-Bottom/TopBottom";
import Nothing from "@/components/Main Page/Main-Section/Nothing";
import ProductCard from "@/components/ProductCard/ProductCard";
import Layout from "./layout";
import style from "../styles/indexstyle.module.css";
import Latest from "@/components/Main Page/Main-Bottom/Latest";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const { ordering = "", limit = 10 } = query;
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products?limit=${limit}`
  );
  
  return {
    props: { data },
  };
}

export default function Home({ data }: { data: IProduct[] }) {
  // const showModal = useModal();
  // const products = data;
  const router = useRouter();
  const { query } = router;
  const loading = useLoader();
  const { limit = 24 } = query;
  const { addQuery } = useQuery();

  return (
    <Layout>
      <Header />
      <HomeCard />
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
    </Layout>
  );
}
