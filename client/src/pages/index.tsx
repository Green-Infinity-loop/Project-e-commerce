import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

import Bottom from "@/components/Bottom";

import HomePageTop from "@/components/HomePageTop";


export default function Home(): any {
  return (
    <>

      {/* <Navbar /> */}
      {/* <Card /> */}
      {/* <Footer /> */}
      <Bottom/>

      <Navbar />
      <HomePageTop />
      {/* <Card /> */}
      <Footer />

    </>
  );
}
