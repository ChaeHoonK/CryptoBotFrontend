import styles from "./BottomNavigation.module.css";
import { FaHome, FaBeer, FaReceipt } from "react-icons/fa";
import { BsCoin, BsPeople } from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai"
import Link from "next/link";

type Props = {
  currentPage: string;
};

export default function BottomNavigation({ currentPage }: Props) {

  const getActiveClass = (pageName: string) => {
    return currentPage === pageName ? styles.active : '';
  };

  return (
    <div className={styles.main}>
      
        <Link href="/">
          <div className={`${styles.iconContainer} ${getActiveClass('home')}`}>
            <h1>
              <FaHome />
            </h1>
            <h4 style={{position:'relative', top:'-10px'}}>Home</h4>
          </div>
        </Link>
      
      
        <Link href="/investment_detail">
        <div className={`${styles.iconContainer} ${getActiveClass('investment_detail')}`}>
          <h1>
            <BsCoin />
          </h1>
          <h4 style={{position:'relative', top:'-10px'}}>Order</h4>
          </div>
        </Link>
      
      <Link href="/donation">
      <div className={`${styles.iconContainer} ${getActiveClass('donation')}`}>
          <h1>
            <AiOutlineHeart />
          </h1>
          <h4 style={{position:'relative', top:'-10px'}}>Donate</h4>
        </div>
      </Link>

      <Link href="/order">
        <div className={`${styles.iconContainer} ${getActiveClass('order')}`}>
          <h1>
            <FaReceipt />
          </h1>
          <h4 style={{position:'relative', top:'-10px'}}>Invest</h4>
        </div>
      </Link>

      <Link href="/contribution">
        <div className={`${styles.iconContainer} ${getActiveClass('contribution')}`}>
          <h1>
            <BsPeople />
          </h1>
          <h4 style={{position:'relative', top:'-10px'}}>People</h4>
        </div>
      </Link>
      </div>
    
  );
}
