// import { ModalContext, ModalProvider } from "@/context/ModalContext";
// import { ToastProvider } from "@/context/ToastContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "@/components/Layout";
import { RecoilRoot } from "recoil";
import { LocationProvider } from "@/context/LocationContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <ToastProvider>
    // <ModalProvider>
    <RecoilRoot>
      <Layout>
        <LocationProvider>
          <Component {...pageProps} />
        </LocationProvider>
      </Layout>
    </RecoilRoot>

    // </ModalProvider>
    // </ToastProvider>
  );
}
