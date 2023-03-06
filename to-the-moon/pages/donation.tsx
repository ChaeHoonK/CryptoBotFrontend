import { Inter } from "@next/font/google";
import styles from "@/styles/donation.module.css";
import DonationImg from "../components/DonationImg";
import ChooseAmount from "@/components/ChooseAmount";


const inter = Inter({ subsets: ["latin"] });

export default function donation() {

  return (
    <main className={styles.donation}>
      
      <div className={styles.donateNow}>
        <h1>Donate Now</h1>
        <img
        src="TTM Logo.png"
        width="55px"
        height="55px"
        alt="Donate"
      />
      </div>
      
      <br />
      <br />
      <div className={styles.ChooseAmountGroup}>
      <DonationImg />
     
      <br />
  
        <h3 style={{ color: "black" }}>Choose amount</h3>
        <br />
        
          <div className={styles.ChooseAmount}>
            <ChooseAmount price={50} />
            <ChooseAmount price={100} />
            <ChooseAmount price={150} />
          </div>
          <br />
          <hr />
          <br />
          <div className = {styles.ManualPrice}>
            <h4>Enter Price Manually</h4>
          </div>
          <br />
          <div className = {styles.donateButton}>
            <h4>Donate Now</h4>
          </div>
      </div>
      
    </main>
  );
}
