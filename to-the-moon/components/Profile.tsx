import styles from "./Profile.module.css";

export default function Profile({
    ImgSrc,
    MemberName, 
    Role
  }: {
    ImgSrc: string;
    MemberName: string;
    Role: string;
  }) {
  
      
    return (
      
      <div className={styles.main} >
        <img src = {ImgSrc} />
        <h4><strong>{MemberName}</strong></h4>
        <h5>{Role}</h5>
      </div>
    );
  }