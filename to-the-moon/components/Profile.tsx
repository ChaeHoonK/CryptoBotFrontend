import styles from "./Profile.module.css";

export default function Profile({
    MemberName, 
    Role
  }: {
    MemberName: string;
    Role: string
  }) {
  
      
    return (
      
      <div className={styles.main} >
        <image></image>
        <h4>{MemberName}</h4>
        <h3>{Role}</h3>
      </div>
    );
  }