// import styles from "./InvestmentSummaryComponent.module.css";
// import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'
// import { numberWithCommas } from "@/library/string";
// import CountUp from "react-countup";

// export default function InvestmentSummaryComponent({total,cash,coin} : any) {

//   return (
//     <div className={styles.main}>
//       <div className={styles.total}>
//         <h4>Total Investments</h4>
//         <h2>₩ {numberWithCommas(total)}</h2>
//       </div>
//         <hr className = {styles.horizontal_line}/>

//       <div className={styles.gain_loss}>
//         <div className={styles.gain}>
//           <h5>Balance <AiFillCaretUp/></h5>
//           <h4 className={styles.bold}>₩ {numberWithCommas(cash)}</h4>
//         </div>
//             <hr className={styles.vertical_line}/>
//         <div className={styles.gain}>
//           <h5>Coin <AiFillCaretDown/></h5>
//           <h4 className={styles.bold}>{coin}</h4>
//         </div>
//       </div>
//     </div>
//   );
// }

import styles from "./InvestmentSummaryComponent.module.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import CountUp from "react-countup";
import { numberWithCommas } from "@/library/string";

const initial_balance = 100_000_000;

function returnRate(current: number, initial: number) {
  const result = Math.ceil((100 * (current - initial)) / initial);
  return result;
}

export default function InvestmentSummaryComponent({ total, cash, coin }: any) {
  return (
    <div className={styles.main}>
      <div className={styles.total}>
        <h4>Total Investments</h4>
        {!total ? (
          <span className={styles.spinner}></span>
        ) : (
          <div style={{ display: "inline-flex", gap: "10px" }}>
            <h2>
              ₩ <CountUp key={total} end={total} duration={1.1} />
            </h2>

            <h3
              style={
                returnRate(total, initial_balance) > 0
                  ? { color: "limegreen" }
                  : { color: "salmon" }
              }
            >
              <CountUp key={total} end={returnRate(total, initial_balance)} start={0} duration={2} />%
            </h3>
          </div>
        )}
      </div>
      <hr className={styles.horizontal_line} />

      <div className={styles.gain_loss}>
        <div className={styles.gain}>
          <h5>
            Balance <AiFillCaretUp />
          </h5>
          <h4 className={styles.bold}>
            ₩ <CountUp key={cash} end={cash} duration={1.2} />
          </h4>
        </div>
        <hr className={styles.vertical_line} />
        <div className={styles.gain}>
          <h5>
            Coin <AiFillCaretDown />
          </h5>
          <h4 className={styles.bold}>
            <CountUp key={coin} end={coin} decimals={2} duration={0.9} />
          </h4>
        </div>
      </div>
    </div>
  );
}
