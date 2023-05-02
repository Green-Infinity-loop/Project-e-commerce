import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

import Bottom from "@/components/Bottom";

import HomePageTop from "@/components/HomePageTop";
import LogIn from "@/pages/login";

import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useModal } from "@/Hooks/useModal";
import HomeCard from "@/components/HomeCard";
import Header from "@/components/Header";
import SignUp from "@/pages/signup";
import { useToast } from "@/Hooks/useToast";
import { Alert, AlertTitle, IconButton, Snackbar, Stack } from "@mui/material";

export default function Home(): any {
  const showModal = useModal();
  const showToast = useToast();

  return (
    <>
      <Navbar />

      <Button onClick={showToast}>Open simple snackbar</Button>

      {/* <HomePageTop /> */}



      <Header />
      {/* <Button onClick={showModal}>modal</Button> */}
      <HomeCard />
      <HomePageTop />
      {/* <Card /> */}

      {/* <Bottom /> */}
      <Footer />
    </>
  );
}
