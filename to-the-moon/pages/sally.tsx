import { Inter } from "@next/font/google";
import styles from "@/styles/sally.module.css";
import SHButton from "../components/SHButton";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <div className={styles.main}>
      <SHButton />
      <SHButton />
      <SHButton />
      <SHButton />
    </div>
  );
}
