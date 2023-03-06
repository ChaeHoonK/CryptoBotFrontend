import styles from "./DonationImg.module.css";

export default function DonationImg() {

  
  return (
    <div className={styles.main} >
      <img
        src="donate.jpeg"
        width="332px"
        height="222px"
        alt="Donate"
      />
      <h4>Donate for student developers and designers for <strong style={{color: "black"}}>To The Moon</strong></h4>
    </div>
    
    
  );
}