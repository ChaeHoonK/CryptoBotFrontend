import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import ForFun from "@/components/ForFrun";
import InvestmentSummaryComponent from "@/components/InvestmentSummaryComponent";
import InvestmentCardComponent from "@/components/InvestmentCardComponent";

import BottomNavigation from "@/components/BottomNavigation";

import TopTitle from "@/components/TopTitle";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  async function connectHandler() {
    const res = await fetch("/api/connect");
    const data = await res.json();
    // await alert(data.name)
  }

  return (
    <>
      <Head>
        <title>To The Moon:부자됩시다</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navbar/> */}

      <main className={styles.main}>
        <TopTitle/>

        <br/>
        
        <InvestmentSummaryComponent />

        <br />

        <div className={styles.totalInvestmentContainer}>
          <h2 style={{ color: "black" }}>Total Investment</h2>
          <br />
          <div className={styles.investCardContainer}>
            <InvestmentCardComponent title="stock" price={150} />
            <InvestmentCardComponent title="Bit Coin" price={110} />
            <InvestmentCardComponent title="Etherium" price={130} />
            <InvestmentCardComponent title="Etherium" price={140} />
            <InvestmentCardComponent title="Etherium" price={140} />
            <InvestmentCardComponent title="Etherium" price={140} />
          </div>
        </div>

        <BottomNavigation />
        {/* <ForFun></ForFun> */}
      </main>
    </>
  );
}
