import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

import Bottom from "@/components/Bottom";

import HomePageTop from "@/components/HomePageTop";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useModal } from "@/Hooks/useModal";

export default function Home(): any {
  const showModal = useModal();
  return (
    <>
      <Navbar />

      <Button onClick={showModal}>modal</Button>
      <HomePageTop />

      {/* <HomePageTop /> */}

      <Card />
      {/* <Bottom /> */}
      <Footer />
      {/* <Card /> */}
      {/* <Bottom /> */}
      {/* <Footer /> */}
    </>
  );
}
