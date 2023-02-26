import styles from "./SHButton.module.css";

export default function SHButton() {

    function handleClick() {
        const ans = prompt("how old are you?")
        console.log(ans)
    }
  return (
    <div className={styles.main} onClick = {handleClick}>
      <h4>Button</h4>
    </div>
  );
}
