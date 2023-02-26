import styles from "./InvestmentSummaryComponent.module.css";

import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'

import { useEffect, useState } from "react";

function getRandomInt(max : number) {
  return Math.floor(Math.random() * max);
}

function numberWithCommas(x : number):string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function InvestmentSummaryComponent() {

  const [gain, setGain] = useState(6400)
  const [loss, setLoss] = useState(3100)
  const[total, setTotal] = useState(82000)

  useEffect(()=> {
    const random_gain = getRandomInt(1000)
    const random_loss = getRandomInt(1000)
    setGain (gain + random_gain)
    setLoss(loss+random_loss)
    setTotal(total + random_gain - random_loss)
  },[])

  //const [gain_amount, setGainAmount] = useState(gain)
  

  return (
    <div className={styles.main}>
      <div className={styles.total}>
        <h4>Total Investments</h4>
        <h2>$ {numberWithCommas(total)}</h2>
      </div>
        <hr className = {styles.horizontal_line}/>

        

      <div className={styles.gain_loss}>
        <div className={styles.gain}>
          <h5>Gain <AiFillCaretUp/></h5>
          <h4 className={styles.bold}>$ {numberWithCommas(gain)}</h4>
        </div>
            <hr className={styles.vertical_line}/>
        <div className={styles.gain}>
          <h5>Loss <AiFillCaretDown/></h5>
          <h4 className={styles.bold}>$ {numberWithCommas(loss)}</h4>
        </div>
      </div>
    </div>
  );
}
