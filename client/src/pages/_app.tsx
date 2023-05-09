// import { ModalContext, ModalProvider } from "@/context/ModalContext";
// import { ToastProvider } from "@/context/ToastContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <ToastProvider>
      // <ModalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      // </ModalProvider>
    // </ToastProvider>
  );
}
