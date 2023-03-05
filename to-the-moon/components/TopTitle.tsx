
import styles from "./TopTitle.module.css";
import Link from "next/link";

export default function TopTitle() {
    return <div
    style={{
      display: "flex",
      justifyContent: 'space-between',
      alignItems: "center",
      width  : '100%',
      marginTop : '10px',
      paddingLeft: '5%',
      paddingRight: '5%',
    }}
  >
    <Link href='/'>
    <div>
      <img
        src="/TTM Logo.png"
        width="60px"
        height="60px"
        alt="TTM logo"
      />
    </div>
    </Link>
      

    <div
      style={{
        textAlign: "right",
        // alignSelf: "flex-end",
        // marginRight: "5%",
      }}
    >
      <h1 className={styles.title}>To The Moon</h1>
      <h4 className={styles.sub}>Market Summary</h4>
    </div>
  </div>
}