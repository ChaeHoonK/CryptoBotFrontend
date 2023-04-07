import styles from "./ButtonHongju.module.css";
export default function ButtonHongju() {
    const price = 3000;

    function handleClick() {
        const ans = prompt("how old are you?");
        console.log(ans);
    }
    return (
        <div className={styles.main} onClick = {handleClick}>
        <h4>Button1</h4>
        <h2>{price}</h2>
        </div>    
    );
}