import styles from './BottomNavigation.module.css'
import { FaHome, FaBeer } from 'react-icons/fa';
import Link from 'next/link';

export default function BottomNavigation() {
    return (
        <div className={styles.main}>
            <div>
                <Link href="/">
                <h1><FaHome/></h1>
                </Link>
            </div>
            <div>
                <Link href = "/investment_detail">
                <h1><FaBeer/></h1>
                </Link>
            </div>
            <div>
                <h1><FaBeer/></h1>
            </div>
            <div>
                <h1><FaBeer/></h1>
            </div>
        </div>
    )
}