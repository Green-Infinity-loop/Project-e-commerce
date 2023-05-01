import { ModalContext, ModalProvider } from "@/context/ModalContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ProSidebarProvider } from "react-pro-sidebar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <ProSidebarProvider>
        <Component {...pageProps} />
      </ProSidebarProvider>
    </ModalProvider>
  );
}
