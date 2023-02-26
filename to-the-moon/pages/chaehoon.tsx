import { Inter } from "@next/font/google";
import styles from "@/styles/chaehoon.module.css";
import CHButton from '../components/CHButton'
import SHButton from "@/components/SHButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <div className={styles.main}>
      <CHButton />
      <CHButton />
      <CHButton />
      <CHButton />
      <SHButton price = {150}/>
    </div>
  );
}
