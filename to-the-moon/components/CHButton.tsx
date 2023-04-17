import styles from "./CHButton.module.css";
import { useState } from "react";

export default function CHButton() {  
    const [ans, setAns] = useState<any>('init')
    
    function handleClick() {
        const tmp = prompt("몇살이신가요?")

        setAns(tmp)

        console.log(ans)
    }

  return (
    <div className={styles.main} onClick = {handleClick}>
        <h4>{ans}</h4>
    </div>
  );
}
