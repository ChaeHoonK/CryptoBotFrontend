import styles from './BottomNavigation.module.css'
import { FaHome, FaBeer } from 'react-icons/fa';

export default function BottomNavigation() {
    return (
        <div className={styles.main}>
            <div>
                <h1><FaHome/></h1>
            </div>
            <div>
                <h1><FaBeer/></h1>
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