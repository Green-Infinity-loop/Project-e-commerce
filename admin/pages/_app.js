import { DialogProvider } from "@/contexts/DialogContext";
import { ToastProvider } from "@/contexts/ToastContext";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ToastProvider>
        <DialogProvider>
          <Component {...pageProps} />
        </DialogProvider>
      </ToastProvider>
    </SessionProvider>
  );
}
