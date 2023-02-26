import styles from "./InvestmentSummaryComponent.module.css";

import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'

export default function InvestmentSummaryComponent() {
  return (
    <div className={styles.main}>
      <div className={styles.total}>
        <h4>Total Investments</h4>
        <h2>$872,000</h2>
      </div>
        <hr className = {styles.horizontal_line}/>

        

      <div className={styles.gain_loss}>
        <div className={styles.gain}>
          <h5>Gain <AiFillCaretUp/></h5>
          <h4 className={styles.bold}>$6,400</h4>
        </div>

            <hr className={styles.vertical_line}/>

        <div className={styles.gain}>
          <h5>Loss <AiFillCaretDown/></h5>
          <h4 className={styles.bold}>$3,200</h4>
        </div>
      </div>
    </div>
  );
}
