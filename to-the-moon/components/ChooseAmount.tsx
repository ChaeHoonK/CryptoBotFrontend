import styles from "./ChooseAmount.module.css";
import { useState, useEffect, useRef } from "react";

export default function ChooseAmount({
  price,
  onClick = () => {},
}: {
  price: number;
  onClick?: any;
}) {
  const [color, setColor] = useState("normalColor");
  const cardRef: any = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setColor("normalColor");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickInside = () => {
    setColor("clickedColor");
  };

  function handleClick() {
    alert("아직 준비중 입니다");
  }

  return (
    <div className={styles.main} onClick={()=>{
      onClick()
      handleClickInside()
    }} style={{
      
      backgroundColor: color === 'normalColor' ? '#f0f0f0' : '#f0a0a0'
    }}
    ref = {cardRef}>
      <h4>$ {price}</h4>
    </div>
  );
}
