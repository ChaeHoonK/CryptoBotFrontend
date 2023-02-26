import { Inter } from "@next/font/google";
import styles from "@/styles/chaehoon.module.css";
import CHButton from '../components/CHButton'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <div className={styles.main}>
      <CHButton />
      <CHButton />
      <CHButton />
      <CHButton />
    </div>
  );
}
