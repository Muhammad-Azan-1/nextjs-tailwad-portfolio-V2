'use client'
import style from "./header.module.css";
import Link from "next/link";
import Toggle from "../Toggletheme/Toggle";

//font
import { Open_Sans } from "next/font/google"; // ✅ import from next/font/google
export const openSans = Open_Sans({
    weight: ["300", "400", "600", "700"], 
    subsets: ["latin"],
});


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
    <div className="w-full flex fixed px-6 lg:px-0 justify-center items-center pt-[25px]">
      <div
        className={`${style.main} w-[850px] lg:w-[950px] h-[75px] bg-white justify-center  flex items-center dark:bg-black
      border-1 border-solid border-borderColor  dark:border-borderColor2 rounded-3xl sm:rounded-[60px] px-12 shadow-lg  dark:shadow-[rgba(255,255,255,0.09)]`}
      >
        <Link
          href="/"
          className={`${style.logo} ${openSans.className} mr-auto text-[2.5rem] cursor-pointer font-bold animatedText`}
        >
          Portfolio
        </Link>

        {/* bars to Open menu */}
        <div
          onClick={ToggleMenu}
          className={` ${menu ? style.hideIcon : style.showIcon} cursor-pointer fixed top-[] right-14 inline-block sm:hidden text-black  dark:text-white text-[22px]`}
        >
         <FontAwesomeIcon icon={faBars} />
        </div>

          {/* cross bar to Close menu */}
          <div onClick={ToggleMenu} className={`${menu ? style.showIcon : style.hideIcon } cursor-pointer  fixed top-18 right-14 inline-block sm:hidden text-black dark:text-white text-[24px] `}>
              <FontAwesomeIcon icon={faTimes} />
            </div>


        <div
          className={` ${menu ? style.showMwenu : style.hiddeMenu } 
             absolute bottom-[-213px]  border-1 border-solid border-borderColor sm:border-none 
             sm:dark:border-none rounded-3xl sm:rounded-none   bg-white dark:bg-black dark:shadow-xl dark:shadow-[rgba(255,255,255,0.09)] sm:bg-transparent w-[95%] 
             sm:w-auto sm:static cursor-pointer flex items-center dark:text-white`}
        
        >
          <div className={` ${style.navbarInner} w-full flex flex-col py-6 sm:py-0 gap-y-10 sm:gap-y-0  sm:flex-row`}>

          

            <Link
              className={` ${openSans.className} relative  pl-[2rem] md:ml-[4rem]  text-[1.7rem] after:content-[" "] after:absolute after:w-0 after:h-[2.5px]
         after:bg-[#ff7e5f] after:left-8 sm:after:left-5 after:bottom-[-2px] after:hover:w-[50px] sm:after:hover:w-full after:hover:duration-700`} 
              href="#home"
            >
              Home
            </Link>

            <Link
              className= {` ${openSans.className} relative pl-[2rem]  md:ml-[4rem] text-[1.7rem] after:content-[" "] after:absolute after:w-0 after:h-[2.5px]
         after:bg-[#ff7e5f] after:bg-animatedText after:left-8 sm:after:left-5 after:bottom-[-2px] after:hover:w-[50px] sm:after:hover:w-full after:hover:duration-700`}
              href="#about"
            >
              About
            </Link>

            <Link
              className={` ${openSans.className} relative pl-[2rem]  md:ml-[4rem] text-[1.7rem] after:content-[" "] after:absolute after:w-0 after:h-[2.5px]
         after:bg-[#ff7e5f]  after:left-8 sm:after:left-5 after:bottom-[-2px] after:hover:w-[50px] sm:after:hover:w-full after:hover:duration-700`}
              href="#connect"
            >
              Connect
            </Link>

            <Link
              className={`${openSans.className} relative pl-[2rem]  md:ml-[4rem] text-[1.7rem] after:content-[" "]
         after:absolute after:w-0 after:h-[2.5px] after:bg-[#ff7e5f]  after:left-8 sm:after:left-5 after:bottom-[-2px] after:hover:w-[60px] sm:after:hover:w-full 
         after:hover:duration-700`}
              href="#projects"
            >
             Projects
            </Link>
        </div>
        </div>
        <Toggle />
      </div>
      <div></div>
      </div>
    
    
    </>
  );
};

export default Header;
