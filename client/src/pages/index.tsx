import Navbar from "@/components/Navbar";
import {Card} from "@/components/Card";
import Footer from "@/components/Footer";

import Bottom from "@/components/Bottom";

import HomePageTop from "@/components/HomePageTop";
import LogIn from "@/pages/login";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useModal } from "@/Hooks/useModal";
import HomeCard from "@/components/HomeCard";
import Header from "@/components/Header";
import SignUp from "@/pages/signup";
import Sidebar from "@/components/Sidebar";
import { useToast } from "@/Hooks/useToast";
import { Alert, AlertTitle, IconButton, Select, Snackbar, Stack } from "@mui/material";
import { GetServerSidePropsContext } from "next";
import axios from "axios";
import { IProduct } from "@/interfaces/product";
import { useRouter } from "next/router";
import { nanoid } from "nanoid";
import { CardSkelton } from "@/components/CardSkelton";
import useLoader from "@/Hooks/useLoader";

export async function getServerSideProps(context: GetServerSidePropsContext){
  const { query } = context;
  const {limit = 24 } = query;
  const response = await axios.get(
    `http://localhost:8080/products?limit=${24}`
  );
  const { data } = await response;
  console.log(data)

  return {
    props: { data },
  }
}


export default function Home({data}:{data:any}): JSX.Element {
  const showModal = useModal();
  const showToast = useToast();
  const products = data;
  const router = useRouter();
  const {query} = router;
  const loading = useLoader();
  const { limit = 24 } = query

  console.log("products:", products)
  return (
    <>
      <Navbar />
      <Sidebar />

      {/* <Button onClick={showToast}>Open simple snackbar</Button> */}

      {/* <HomePageTop /> */}



      {/* <Header /> */}
      {/* <Button onClick={showModal}>modal</Button> */}
      {/* <HomeCard /> */}
      {/* <HomePageTop /> */}
      
        <div className="container">
          <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-4"> 
          {!loading 
          ? products?.map((product)=>(
            <Card product={product} key={product._id}/>
        )) 
          : Array.from(Array(limit), ()=>(
            <CardSkelton key={nanoid()}/>
          ))}
        </div>
        </div>
      

      {/* <Bottom /> */}
      <Footer />
    </>
  )
    
  
}
