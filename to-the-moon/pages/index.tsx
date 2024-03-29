import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import ForFun from "@/components/ForFrun";
import InvestmentSummaryComponent from "@/components/InvestmentSummaryComponent";
import InvestmentCardComponent from "@/components/InvestmentCardComponent";
import { useEffect, useState, useRef } from "react";
import BottomNavigationLayout from "@/components/layouts/BottomNavigationLayout";

import TopTitle from "@/components/TopTitle";
import FloatingChatButton from "@/components/FloatingChatButton";
import ChatGptComponent from "@/components/ChatGptComponent";

import { useContext } from "react";
import { WalletContext } from "@/context/WalletContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { wallet, bitcoin, etherium }:any = useContext(WalletContext);

  return (
    <>
      <Head>
        <title>To The Moon:부자됩시다</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navbar/> */}
      <BottomNavigationLayout currentPage="home">
      <main className={styles.main}>
        <TopTitle />

        <br />

        <InvestmentSummaryComponent
          total={wallet?.total}
          coin={wallet?.bitcoin}
          cash={wallet?.cash}
        />

        <br />

        <div className={styles.totalInvestmentContainer}>
          <h2 style={{ color: "black" }}>Total Investment</h2>
          <br />
          <div className={styles.investCardContainer}>
            <InvestmentCardComponent title="Bitcoin" price={bitcoin} />
            <InvestmentCardComponent title="Etherium" price={etherium} />
          </div>
        </div>

        
        {/* <ForFun></ForFun> */}
      </main>
      </BottomNavigationLayout>
    
  
      
    </>
    
  );
}
