import styles from "./CHButton.module.css";

export default function InvestmentSummaryComponent() {  

    function handleClick() {
        const ans = prompt("몇살이신가요?")
        console.log(ans)
    }

  return (
    <div className={styles.main} onClick = {handleClick}>
        <h4>Button</h4>
    </div>
  );
}
