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
            <Profile ImgSrc="chaehoon.png" MemberName="Chae Hoon Kim" Role="Project Manager" link="https://www.linkedin.com/in/chae-hoon-kim/"/>
            <Profile ImgSrc="mooyoung.png" MemberName="Mooyoung Jung" Role="FrontEnd"/>
            <Profile ImgSrc="sally.JPG" MemberName="Sehyun Seo" Role="FrontEnd" link="https://www.linkedin.com/in/sally-seo-92a86b204/"/>
            <Profile ImgSrc="heonjang.jpeg" MemberName="Heonjang Lee" Role="Backend" link = "https://www.linkedin.com/in/heonjang-lee-766927169"/>
            <Profile ImgSrc="seunghwan.jpeg" MemberName="Seunghwan Hong" Role="Backend" link="https://www.linkedin.com/in/seunghwan-hong-7b4646250/"/>
            <Profile ImgSrc="jaeyoung.png" MemberName="Jaeyoung Kang" Role="Backend" link = "https://www.linkedin.com/in/jaeyoung-kang-653aa8250/"/>
            <Profile ImgSrc="hongju.jpeg" MemberName="Hong Ju Jin" Role="Design" link = "www.linkedin.com/in/hongju-jin-509b32225"/>
            <Profile ImgSrc="emily_shin.jpeg" MemberName="Emily Shin" Role="Design" link="https://www.linkedin.com/in/yuneyong-emily-shin-/"/>
        </div>
        
        <h3 className={styles.notification}> Click for More Information </h3>
        
        
    </main>
    </BottomNavigationLayout>
  );
}
