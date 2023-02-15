import style from "./Navbar.module.css";
// import { GiHamburgerMenu } from "react-icons/gi";
import { useState,useEffect, useRef } from "react";

function useOutsideAlerter(ref:any, cb : Function) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          cb()
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

    const ref = useRef(null)
    useOutsideAlerter(ref, ()=>setIsOpen(false));

  function handleClick() {
    setIsOpen(!isOpen);
  }
  const menus =
      [<a href="#info" className={style.navbarMenu} key = '0'>
        Home
      </a>,
      <a href="#about" className={style.navbarMenu} key = '1'>
        메뉴 버튼 1
      </a>,
      <a href="#career" className={style.navbarMenu} key = '2'>
        메뉴 버튼 2
    </a>,
      <a href="#portfolio" className={style.navbarMenu} key = '3'>
        메뉴 버튼 3
      </a>,
      <a href="#contact" className={style.navbarMenu} key = '4'>
        메뉴 버튼 4
      </a>
      
    ]
  ;
  return (
    <nav className={style.navbar}>
      <div className={style.hidden} ref = {ref}>
        <a onClick={handleClick}>
          {/* <GiHamburgerMenu size="30px" color="#FFFFFF" style={{marginTop : '5px'}}/> */}
          펼치기 (임시)
        </a>
        {isOpen ? menus : null}
      </div>
      {menus}
    </nav>
  );
}
