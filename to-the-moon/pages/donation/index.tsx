import { Inter } from "@next/font/google";
import styles from "@/styles/donation.module.css";
import DonationImg from "../../components/DonationImg";
import ChooseAmount from "@/components/ChooseAmount";
import BottomNavigation from "@/components/BottomNavigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import BottomNavigationLayout from "@/components/layouts/BottomNavigationLayout";

const inter = Inter({ subsets: ["latin"] });

const amounts = [5, 10, 15];

export default function Donation() {
  const [index, setIndex] = useState(-1);
  const [amount, setAmount] = useState(0);
  const cardNum = "4242 4242 4242 4242";

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

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
    <BottomNavigationLayout currentPage="donation">
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

          <div className={styles.ChooseAmount}>{amountList}</div>
          <br />
          <hr className={styles.horizontal_line} />

          <br />
          {/* <Link href={`/donation/${amount}`}> */}
          <h3>Currently in Test Mode, use the card number below.</h3>
          <p>Click below to Copy</p>
          <div
            onClick={() => {
              navigator.clipboard.writeText(cardNum).then(()=>{
                alert("복사 되었습니다");
              });
            }}
            style={{
              cursor: "copy",
              border: "solid 1px grey",
              padding: "10px 20px 10px 20px",
              borderRadius: "20px",
            }}
          >
            4242 4242 4242 4242
          </div>
          <form action="/api/checkout_sessions" method="POST">
            <div className={styles.ManualPrice}>
              <label htmlFor="amount">Donation Amount</label>
              <input
                className={styles.ManualPrice}
                type="number"
                id="amount"
                name="amount"
                placeholder="Enter Price Manually"
                maxLength={10}
                onChange={(e) => {
                  setAmount(Number(e.target.value));
                }}
                value={amount == 0 ? "" : amount}
                required
              />
            </div>
            <button className={styles.donateButton} type="submit">
              <h4>Donate Now</h4>
            </button>
          </form>

          {/* </Link> */}
        </div>
      </main>
    </BottomNavigationLayout>
  );
}
