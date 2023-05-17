import { useBasket } from "@/Hooks/useBasket";
import { useCurrentUser } from "@/Hooks/useCurrentUser";
import useLoader from "@/Hooks/useLoader";
import Header from "@/components/Main Page/Main-Header/Header";
import { Navbar } from "@/components/Main Page/Navbar/Navbar";
import Footer from "@/components/atoms/Footer";
import axios from "axios";
import { error } from "console";
import Head from "next/head";
import { FC, ReactNode, useEffect, useState } from "react";

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children, title = "MedZone" }) => {
  const { currentUser, setCurrentUser } = useCurrentUser();
  const { basket, setBasket } = useBasket();
  const loading = useLoader();
  console.log("currentUser", currentUser);

  useEffect(() => {
    if (!currentUser) {
      axios
        .get("http://localhost:8080/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log("dtaa", res);
          setCurrentUser(res.data);
        })
        .catch((error) => {
          console.log("User is not signed in");
        });
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      axios
        .get("http://localhost:8080/baskets/main", {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
        .then((res) => {
          console.log("CurrentUser", currentUser);
          console.log("basket", res.data);

          setBasket(res.data);
        });
    }
  }, [currentUser]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Navbar
          currentUser={currentUser}
          cartCount={basket?.items?.length || 0}
        />
        <div>{children}</div>
        {loading}
        <Footer />
      </div>
    </>
  );
};
