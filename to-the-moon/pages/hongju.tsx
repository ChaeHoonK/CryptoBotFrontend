import styles from "@/styles/hongju.module.css";
import ButtonHongju from "../components/ButtonHongju";
export default function Home() {
    return (
        <div className={styles.main}>
            <ButtonHongju />
            <br />
            <ButtonHongju />
            <br />
            <ButtonHongju />
            <br />
            <ButtonHongju />
        </div>
    );
}