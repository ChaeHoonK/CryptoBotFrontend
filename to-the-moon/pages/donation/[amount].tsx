import styles from "@/styles/donation.module.css";
import DonationImg from "@/components/DonationImg";
import BottomNavigation from "@/components/BottomNavigation";
import { useRouter } from "next/router";


export default function Donation2() {
  const router = useRouter()
  const { amount } = router.query
  return (
    <>
    <main className={styles.donation}>
      
      <div className={styles.donateNow}>
        <h1>Donate Now</h1>
        <img
        src="/TTM Logo.png"
        width="55px"
        height="55px"
        alt="TTM Logo"
      />
      </div>
      <div className={styles.thankYou}>
        <h1>Thank</h1>
        <h1>You</h1>
        <br  />
        <h4 className={styles.donateButton2}>for ${amount}</h4>
        <br  />
        <h4 className={styles.ttm}>-To The Moon-</h4>
      </div>
      
      <br />
      <br />
      <div className={styles.ChooseAmountGroup}>

      <DonationImg />
     
      <br />
  
          <br />
          <div className = {styles.donateButton}>
            <h4>Donate Again</h4>
          </div>
      </div>
    
      
    </main>
    <BottomNavigation />
    </>
  );
}
