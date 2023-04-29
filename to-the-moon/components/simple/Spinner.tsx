
import styles from "./Spinner.module.css";

type Prop = {
    content?:string
}

export default function Spinner({content}:Prop) {
    return (
        <>
        <h4>{content}</h4>
        <span className={styles.spinner}></span>
        </>

        
    )
}

