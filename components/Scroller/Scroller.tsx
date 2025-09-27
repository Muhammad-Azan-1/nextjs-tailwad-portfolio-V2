"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling 200px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility); // when ever user scroll this will trigger
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className=" border-animated fixed bottom-12 right-6 h-[40px]  flex justify-center items-center w-[40px]  rounded-[50%] bg-black text-white shadow-lg hover:bg-gray-800 transition duration-300"
        >
          <FontAwesomeIcon fontSize={15} icon={faArrowUp}/>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
