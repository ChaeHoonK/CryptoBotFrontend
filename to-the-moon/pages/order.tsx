import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import ForFun from "@/components/ForFrun";
import InvestmentSummaryComponent from "@/components/InvestmentSummaryComponent";
import InvestmentCardComponent from "@/components/InvestmentCardComponent";
import { ChangeEvent, useEffect, useState } from "react";

import BottomNavigation from "@/components/BottomNavigation";

import TopTitle from "@/components/TopTitle";
import { numberWithCommas } from "@/library/string";
import { borderRadius, width } from "@mui/system";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [wallet, setWallet] = useState<any>(undefined);
  const [bitcoin, setBitcoin] = useState(0);
  const [etherium, setEtherium] = useState(0);
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data_res = await fetch("/api/wallet/1");
      const bitcoin_res = await fetch(`/api/price/BTC`);
      const ether_res = await fetch(`/api/price/ETC`);

      const data = await data_res.json();
      const bit = await bitcoin_res.json();
      const ether = await ether_res.json();

      console.log(data);
      setWallet(data);
      setBitcoin(Number(bit.price));
      setEtherium(Number(ether.price));
    };
    
    const interval = setInterval(async() => {
      await fetchData()
    }
    , 15000);

    return ()=>clearInterval(interval)

  }, [loading]);

  function handleChange(e:any) {
    setNumber(e.target?.value)
  }



  async function handleClick(type: string) {
    setLoading(true)
    const response = await fetch('api/order', {
        method:"POST",
        body:JSON.stringify({
            "user_id": 1,
            "type": `${type}`,
            'coin_num':Number(number)
        })
    })
    setNumber(0)
    setLoading(false)
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
        <TopTitle />

        <br />

        {loading?
        <h1>loading...</h1>
        :
        <InvestmentSummaryComponent
          total={wallet?.total}
          coin={wallet?.bitcoin}
          cash={wallet?.cash}
        />
        }
        

        <br />

        <div style={{display:'flex', alignItems:'baseline'}}>
          <h3 style={{color:'#E14D28'}}>Coin: </h3>
          <h2>₩ {numberWithCommas(bitcoin)}</h2>
        </div>

        <br />

        <input type="text" onChange={handleChange} value={number}
          style={{
            border:'1px solid #E14D28',
            backgroundColor:'white',
            width:'230px',
            height:'55px',
            borderRadius:'20px',
            textAlign:'center',
            color:'black',
            fontSize:'20px'
          }}
        />

        <br />

        <div>
          <button 
          onClick={()=>{
            handleClick('buy')
          }}
          style={{
            border:'none',
            background:'linear-gradient(90deg, #EE9B27 0%, #E14D28 100%)',
            width:'140px',
            height:'60px',
            marginRight:'10px',
            borderRadius:'20px'
          }}
          >buy</button>
          <button 
          onClick={()=>{
            handleClick('sell')
          }}
          style={{
            border:'none',
            background:'linear-gradient(90deg, #E14D28 0%, #6F84B8 100%)',
            width:'140px',
            height:'60px',
            marginLeft:'10px',
            borderRadius:'20px'
          }}
          >sell</button>
        </div>

        <BottomNavigation />
        {/* <ForFun></ForFun> */}
      </main>
    </>
  );
}
