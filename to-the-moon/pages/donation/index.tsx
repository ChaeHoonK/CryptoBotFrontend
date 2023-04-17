import { Inter } from "@next/font/google";
import styles from "@/styles/donation.module.css";
import DonationImg from "../../components/DonationImg";
import ChooseAmount from "@/components/ChooseAmount";
import BottomNavigation from "@/components/BottomNavigation";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const amounts = [50, 100, 150];

export default function donation() {
  const [index, setIndex] = useState(-1);
  const [amount, setAmount] = useState(0);

  const amountList = amounts.map((elem, index) => {
    return (
      <ChooseAmount
        price={elem}
        onClick={() => {
          setAmount(elem);
          setIndex(index);
        }}
        key={elem}
      />
    );
  });

  function handleClick() {}

  return (
    <>
      <main className={styles.donation}>
        <div className={styles.donateNow}>
          <h1>Donate Now</h1>
          <img src="TTM Logo.png" width="55px" height="55px" alt="Donate" />
        </div>

        <br />
        <br />
        <div className={styles.ChooseAmountGroup}>
          <DonationImg />

          <br />

          <h3 style={{ color: "black" }}>Choose amount</h3>
          <br />

          <div className={styles.ChooseAmount}>
            {/* <ChooseAmount price={50} onClick={() => setAmount(50)} />
            <ChooseAmount price={100} onClick={() => setAmount(100)} />
            <ChooseAmount price={150} onClick={() => setAmount(150)} /> */}
            {amountList}
          </div>
          <br />
          <hr className={styles.horizontal_line} />
          <br />
          <div className={styles.ManualPrice}>
            <input
              className={styles.ManualPrice}
              type="number"
              id="amount"
              placeholder="Enter Price Manually"
              maxLength={10}
              onChange={(e) => {
                setAmount(Number(e.target.value));
              }}
              value={amount == 0 ? "" : amount}
            ></input>
          </div>

          <br />
          <Link href={`/donation/${amount}`}>
            <div className={styles.donateButton}>
              <h4>Donate Now</h4>
            </div>
          </Link>
        </div>
      </main>
      <BottomNavigation />
    </>
  );
}
