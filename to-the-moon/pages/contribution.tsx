import { Inter } from "@next/font/google";
import styles from "@/styles/contribution.module.css";
import Profile from "../components/Profile";
import ChooseAmount from "@/components/ChooseAmount";
import BottomNavigation from "@/components/BottomNavigation";
import BottomNavigationLayout from "@/components/layouts/BottomNavigationLayout";




export default function contribution() {

  return (
    <BottomNavigationLayout currentPage="contribution">
    <main className={styles.main}>
        <div className={styles.team}>
            <img src="team.jpg" width="390px" height="254px" />
            <strong className = {styles.centered}>Meet our Team</strong>
        </div>
        <br />
        
        <div className={styles.people}>
            <Profile ImgSrc="chaehoon.png" MemberName="Chae Hoon Kim" Role="Project Manager"/>
            <Profile ImgSrc="mooyoung.png" MemberName="Mooyoung Jung" Role="FrontEnd"/>
            <Profile ImgSrc="sally.JPG" MemberName="Sehyun Seo" Role="FrontEnd"/>
            <Profile ImgSrc="heonjang.jpeg" MemberName="Heonjang Lee" Role="Backend"/>
            <Profile ImgSrc="seunghwan.jpeg" MemberName="Seunghwan Hong" Role="Backend"/>
            <Profile ImgSrc="jaeyoung.png" MemberName="Jaeyoung Kang" Role="Backend"/>
            <Profile ImgSrc="hongju.jpeg" MemberName="Hong Ju Jin" Role="Design"/>
        </div>
        
        
        
    </main>
    </BottomNavigationLayout>
  );
}
