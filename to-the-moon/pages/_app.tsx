import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme } from "@mui/material/styles";
import { ChatProvider } from "../context/ChatContext";
import { WalletProvider } from "../context/WalletContext";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
      <ChatProvider>
        <Component {...pageProps} />
        <Analytics />
      </ChatProvider>
    </WalletProvider>
  );
}
