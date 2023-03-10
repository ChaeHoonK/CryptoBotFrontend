import styles from "./BottomNavigation.module.css";
import { FaHome, FaBeer, FaReceipt } from "react-icons/fa";
import { BsCoin, BsPeople } from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai"
import Link from "next/link";

export default function BottomNavigation() {
  return (
    <div className={styles.main}>
      
        <Link href="/">
          <div style={{textAlign:'center'}}>
            <h1>
              <FaHome />
            </h1>
            <h4 style={{position:'relative', top:'-10px'}}>Home</h4>
          </div>
        </Link>
      
      
        <Link href="/investment_detail">
        <div style={{textAlign:'center'}}>
          <h1>
            <BsCoin />
          </h1>
          <h4 style={{position:'relative', top:'-10px'}}>Order</h4>
          </div>
        </Link>
      
      <Link href="/donation">
        <div style={{textAlign:'center'}}>
          <h1>
            <AiOutlineHeart />
          </h1>
          <h4 style={{position:'relative', top:'-10px'}}>Donate</h4>
        </div>
      </Link>

      <Link href="/order">
        <div style={{textAlign:'center'}}>
          <h1>
            <FaReceipt />
          </h1>
          <h4 style={{position:'relative', top:'-10px'}}>Invest</h4>
        </div>
      </Link>

      <Link href="/contribution">
        <div style={{textAlign:'center'}}>
          <h1>
            <BsPeople />
          </h1>
          <h4 style={{position:'relative', top:'-10px'}}>People</h4>
        </div>
      </Link>
      </div>
    
  );
}
