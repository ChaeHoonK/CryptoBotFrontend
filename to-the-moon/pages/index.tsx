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
import { fetchData as fetchWallet } from "@/library/fetch";

import TopTitle from "@/components/TopTitle";
import FloatingChatButton from "@/components/FloatingChatButton";
import ChatGPT from "@/components/ChatGptComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  const [wallet, setWallet] = useState<any>(undefined);
  const [bitcoin, setBitcoin] = useState(0);
  const [etherium, setEtherium] = useState(0);
  const [showChatBox, setShowChatBox] = useState(false);

  const chatBoxRef:any = useRef();

  const handleChatButtonClick = (event:any) => {
    event.stopPropagation();
    setShowChatBox(!showChatBox);
  };

  const handleDocumentClick = (event:any) => {
    if (chatBoxRef.current && !chatBoxRef.current.contains(event.target)) {
      setShowChatBox(false);
    }
  };

  useEffect(() => {
    fetchWallet(setWallet, setBitcoin, setEtherium)

    const interval = setInterval(async() => {
      await fetchWallet(setWallet, setBitcoin, setEtherium)
    }
    , 15000);

    return ()=>{
      clearInterval(interval)
    }
  }, [wallet, bitcoin, etherium]);

  useEffect(() => {
    if (showChatBox) {
      document.addEventListener('click', handleDocumentClick);
    } else {
      document.removeEventListener('click', handleDocumentClick);
    }

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [showChatBox]);

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
      <FloatingChatButton onClick={handleChatButtonClick} />
  
        <div
          ref={chatBoxRef}
          style={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            backgroundColor: 'white',
            borderRadius: 8,
            width: 300,
            height: 400,
            border: '1px solid #ccc',
            overflow: 'hidden',
            display: showChatBox ? 'block' : 'none',
          }}
        >
          <ChatGPT/>
        </div>
      
    </>
    
  );
}
