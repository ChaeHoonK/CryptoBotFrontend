import { Inter } from "@next/font/google";
import styles from "@/styles/chaehoon.module.css";
import CHButton from '../../components/CHButton'
import SHButton from "@/components/SHButton";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  const [count, setCount] = useState<any>(0)

  function handleClick() {
    setCount(count+1)
  }


  return (
    <div className={styles.main}>
      <CHButton />
      <CHButton />
      <CHButton />
      <CHButton />
      <SHButton price = {150}/>
      <h1>{count}</h1>
      <button onClick = {handleClick}>add 1</button>
      {count % 2 == 0 ? <h1>Even!</h1> : null}
    </div>
  );
}
