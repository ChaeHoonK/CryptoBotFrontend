import styles from "./ChooseAmount.module.css";

export default function ChooseAmount({
    price,
  }: {
    price: number;
  }) {
  
      function handleClick() {
          alert('아직 준비중 입니다')
      }
  
    return (
      
      <div className={styles.main} onClick = {handleClick}>
        <h4>$ {price}</h4>
      </div>
    );
  }