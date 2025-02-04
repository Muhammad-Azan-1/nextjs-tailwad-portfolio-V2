'use client'
import style from "./header.module.css";
import Link from "next/link";
import Toggle from "../Toggletheme/Toggle";

//font
import { poppins } from "@/app/page";
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { useState } from "react";
const Header = () => {
  const [menu,setmenu] = useState(false);

  function ToggleMenu() {
    setmenu((prevsVal:boolean) => !prevsVal);
  }

  return (
    <>
      <div
        className={`${style.main} ${poppins.className} w-full h-[75px] fixed flex items-center dark:bg-[#14073e] bg-primary top-0 left-0 pt-[2rem] pb-[2rem] pl-[7%] pr-[7%]
      border-main border-b-[10px] border-solid border-t-0 border-r-0 border-l-0 `}
      >
        <Link
          href="/"
          className={`${style.logo} mr-auto text-[2.5rem] cursor-pointer font-bold text-main`}
        >
          Portfolio
        </Link>

        {/* bars to Open menu */}
        <div
          onClick={ToggleMenu}
          className={`${style.barIcon} text-main dark:text-white`}
        >
    
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div
          className={` ${menu ? style.showMwenu : style.hiddeMenu } ${
            style.navbar
          } cursor-pointer font-semibold flex items-center dark:text-white text-secondary`}
        
        >
          <div className={`${style.navbarInner} w-full`}>
            {/* cross bar to Close menu */}
            <div onClick={ToggleMenu} className={`${style.closeIcon}`}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <Link
              className='relative ml-[4rem] text-[1.7rem] after:content-[" "] after:absolute after:w-0 after:h-[2.5px]
         after:bg-main after:left-0 after:bottom-[-2px] after:hover:w-full after:hover:duration-700'
              href="/"
            >
              Home
            </Link>

            <Link
              className=' relative ml-[4rem] text-[1.7rem] after:content-[" "] after:absolute after:w-0 after:h-[2.5px]
         after:bg-main after:left-0 after:bottom-[-2px] after:hover:w-full after:hover:duration-700'
              href="/About"
            >
              About
            </Link>

            <Link
              className='relative ml-[4rem] text-[1.7rem] after:content-[" "] after:absolute after:w-0 after:h-[2.5px]
         after:bg-main after:left-0 after:bottom-[-2px] after:hover:w-full after:hover:duration-700'
              href="/Portfolio"
            >
              Portfolio
            </Link>

            <Link
              className='relative ml-[4rem] text-[1.7rem] after:content-[" "]
         after:absolute after:w-0 after:h-[2.5px] after:bg-main after:left-0 after:bottom-[-2px] after:hover:w-[100%] 
         after:hover:duration-700'
              href="/Contact"
            >
              Contact
            </Link>
        </div>
        </div>
        <Toggle />
      </div>
    
    </>
  );
};

export default Header;
