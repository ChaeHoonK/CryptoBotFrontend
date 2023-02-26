import styles from './InvestmentCardComponent.module.css'

export default function InvestmentCardComponent ({title, price} : {title:string, price:number}) {
    return (
        <div className={styles.main}>
            <div className={styles.sample}/>
            <h4>{title}</h4>
            <h3>$ {price}</h3>
        </div>
    )
}