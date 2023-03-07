import styles from "./InvestmentCardComponent.module.css";
import {BsCoin} from "react-icons/bs"
import { numberWithCommas } from "@/library/string";

export default function InvestmentCardComponent({
  title,
  price,
}: {
  title: string;
  price: number;
}) {

    function handleClick() {
        alert('아직 준비중 입니다')
    }

  return (
    
    <div className={styles.main} onClick = {handleClick}>
      <div className={styles.sample}>
        <h1><BsCoin/></h1>
      </div>
      <h4>{title}</h4>
      <h3>₩ {numberWithCommas(price)}</h3>
    </div>
  );
}
