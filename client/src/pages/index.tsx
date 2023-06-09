import { useQuery } from "@/Hooks/useQuery";
import HomePageTop from "@/components/Main Page/Main-Section/HomePageTop";
import * as React from "react";
import HomeCard from "@/components/Main Page/Main-Header/HomeCard";
import Header from "@/components/Main Page/Main-Header/Header";
import { GetServerSidePropsContext } from "next";
import axios from "axios";
import { IProduct } from "@/interfaces/product";
import { useRouter } from "next/router";
import useLoader from "@/Hooks/useLoader";
import Nothing from "@/components/Main Page/Main-Section/Nothing";
import ProductCard from "@/components/ProductCard/ProductCard";
import Layout from "./layout";
import style from "../styles/indexstyle.module.css";
import Latest from "@/components/Main Page/Main-Bottom/Latest";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TopBottom from "@/components/Main Page/Main-Bottom/TopBottom";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const { ordering = "", limit = 10 } = query;
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products?limit=${limit}`
  );
  const data = await response.data;

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
      <h1 className="container text-6xl font-bold xl:text-4xl xl:my-9">
        𝑻𝒓𝒆𝒏𝒅𝒊𝒏𝒈 𝑷𝒓𝒐𝒅𝒖𝒄𝒕𝒔
      </h1>
      <div className="container grid grid-cols-5 sm:grid-cols-3 md:grid-cols-4 md:gap-10 lg:grid-cols-5 lg:gap-2 xl:grid-cols-5    my-5 text-center">
        {data.map((datas) => (
          <>
            <ProductCard product={datas} styles={style} />
          </>
        ))}
      </div>

      <HomePageTop />
      <TopBottom />
      <Nothing />
      {/* <Latest /> */}
    </Layout>
  );
}
