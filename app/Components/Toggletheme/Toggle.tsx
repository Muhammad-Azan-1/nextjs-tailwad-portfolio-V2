'use client'
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import style from "./theme.module.css";

const Theme = () => {

  const [darkMode, setdarkMode] = useState(
    () => {
      if (typeof window !== 'undefined') {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme === "dark";
      
      }
      return false;
    } 
  );
  
  useEffect(() => {

    if (typeof window !== 'undefined') {
      // Get the theme from localStorage if available
      const storedTheme = localStorage.getItem("theme");
      console.log("COMPLETED222222222222222222")
      console.log("STORED THEME2",storedTheme )
      setdarkMode(storedTheme === "dark");
    }
  }, []);

  useEffect(() => {

  if(typeof window !== 'undefined'){
          if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("COMPLETED33333333333333333333333")
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }
  
  }, [darkMode]);



 function changeTHeme(){
  setdarkMode((prevVal: boolean) => !prevVal);
 }

  return (
    <>
      <div
        className={`${style.main} relative ml-[5rem] flex items-center text-[1.7rem] w-20 h-8 rounded-full dark:bg-white bg-main cursor-pointer p-1 `}
        onClick={() => {
          changeTHeme();
          console.log("AUTOMATIC SET THE VALUE");
        }}
      >
        <FontAwesomeIcon icon={faMoon} className="text-white" />
        <div
          className="absolute bg-white dark:bg-black rounded-full w-[17px] h-[17px] shadow-md transform transition-transform duration-300"
          style={darkMode ? { left: "2px" } : { right: "2px" }}
        ></div>
        <FontAwesomeIcon
          icon={faSun}
          className="text-yellow-400 ml-auto w-[15px] h-[15]"
        />
      </div>
    </>
  );
};

export default Theme;

// localStorage is a browser feature that allows you to persist key-value data across page reloads and sessions.
  // Data in localStorage will remain until it is explicitly changed or removed.
  // initally return nfalse to the darkMode because there is no value in localStorage  so null === "string" (false)


//   The useEffect hook will always run when the darkMode state changes.
// It also runs immediately when the component mounts, because React runs the useEffect hook after the initial render, regardless of whether the state has changed or not.