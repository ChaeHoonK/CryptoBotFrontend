import { Inter } from "@next/font/google";
import styles from "@/styles/contribution.module.css";
import Profile from "../components/Profile";
import ChooseAmount from "@/components/ChooseAmount";
import BottomNavigation from "@/components/BottomNavigation";




export default function contribution() {

  return (
    <>
    <main className={styles.main}>
        <div className={styles.team}>
            <img src="team.jpg" width="390px" height="254px" />
            <strong className = {styles.centered}>Meet our Team</strong>
        </div>
        <br /> 
        <div className={styles.people}>
            <Profile ImgSrc="sally.JPG" MemberName="Sehyun Seo" Role="FrontEnd"/>
            <Profile ImgSrc="sally.JPG" MemberName="Sehyun Seo" Role="FrontEnd"/>
            <Profile ImgSrc="sally.JPG" MemberName="Sehyun Seo" Role="FrontEnd"/>
            <Profile ImgSrc="sally.JPG" MemberName="Sehyun Seo" Role="FrontEnd"/>
            <Profile ImgSrc="sally.JPG" MemberName="Sehyun Seo" Role="FrontEnd"/>
        </div>
        
    </main>
    <BottomNavigation />
    </>
  );
}
