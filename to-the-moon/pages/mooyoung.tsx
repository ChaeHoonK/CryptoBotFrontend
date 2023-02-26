import { Inter } from "@next/font/google";
import styles from "@/styles/MY.module.css";
import MyButton from "../components/MYbutton";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

    function handleClick() {
        const ans = prompt("몇살이신가요?")
        console.log(ans)
    }

  return (
    <div className={styles.main} onClick = {handleClick}>
        <MyButton />
        <MyButton />
        <MyButton />
        <MyButton />
    </div>
  );
}
