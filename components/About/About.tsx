import React from "react";
import Link from "next/link";
import { Open_Sans, Montserrat , Arizonia } from "next/font/google"; // Import fonts used elsewhere


// Assuming these fonts are defined in your file structure
const openSans = Open_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: ["700"],
  subsets: ["latin"],
});
const arizonia = Arizonia({
  weight: ["400"],
  subsets: ["latin"],
});

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSquareInstagram,faLinkedin, faSquareFacebook,faXTwitter , faMediumM , faGithub} from "@fortawesome/free-brands-svg-icons";



const AboutMe = () => {

  return (
    <>
    <div  className="h-auto w-full mt-[50px]

    ">
             <div
          className={`${openSans.className} mt-24 sm:mt-36 w-full h-auto  flex justify-start items-center flex-col`}
        >
          <h1 className=" dark:text-white text-center text-[35px] sm:text-[50px] md:text-[60px]  mdx:text-[70px] lg:text-[85px] xl:text-[100px] font-extrabold">
            About{" "}
            <span className=" text-transparent animatedText">Me</span>{" "}
          </h1>
        </div>


        <div className={`dark:${montserrat.className} dark:text-white dark:font-semibold text-[20px] px-[20px] sm:px-[60px] text-center tracking-wider font-light mt-10 flex justify-center items-center`}>
            <h1>Hello, I'm <span className={`${arizonia.className} first-line:uppercase animatedText text-[35px]`}>Muhammad Azan</span>, an aspiring Frontend Developer with a robust foundation in core web technologies.
                I specialize in crafting clean, visually precise, and responsive interfaces using <span className={`${montserrat.className} bg-orange-200 text-orange-800 text-[22px]`}>HTML5</span>, modern <span className={`${montserrat.className} bg-orange-200 text-orange-800 text-[22px]`}>CSS</span>, and 
                the efficiency of <span className={`${montserrat.className} bg-blue-200 text-blue-800 text-[22px]`}> Tailwind CSS</span>. My strong understanding of <span className={`${montserrat.className} bg-yellow-200 text-yellow-800 text-[22px]`}>JavaScript (ES6+)</span> and <span className={`${montserrat.className} bg-sky-200 text-sky-800 text-[22px]`}>Typescript</span> allows me to implement dynamic 
                functionality, and I am currently dedicated to mastering  <span className={`${montserrat.className} bg-green-200 text-green-800 text-[22px]`}>React.js</span> to build scalable, component-based 
                applications. I am currently expanding my knowledge through formal training in <span className={`${montserrat.className} bg-green-200 text-green-800 text-[22px]`}>Full-Stack Mobile and Web Development (SMIT)</span>  and <span className={`${montserrat.className} bg-blue-200 text-blue-800 text-[22px]`}>Agentic AI Development (GIAIC)</span>, preparing me for diverse and challenging roles.

                I'm driven by   <span className={`${montserrat.className} text-[22px]`}>continuous learning</span> and the goal of creating AI based Mobile and Web Apps</h1>
        </div>

        <div>
            
        </div>
    </div>



        <div id="connect" className="h-screen mt-[50px]    [background-size:150px_150px] bg-repeat [background-image:radial-gradient(circle_at_25%_50%,_rgba(255,165,0,0.2)_1px,_transparent_10%),radial-gradient(circle_at_85%_20%,_rgba(255,165,0,0.2)_1px,_transparent_10%),radial-gradient(circle_at_40%_80%,_rgba(255,165,0,0.2)_1px,_transparent_10%)]
        dark:[background-image:radial-gradient(circle_at_25%_50%,_rgba(255,255,255,0.09)_1px,_transparent_10%),radial-gradient(circle_at_85%_20%,_rgba(255,255,255,0.09)_1px,_transparent_10%),radial-gradient(circle_at_40%_80%,_rgba(255,255,255,0.05)_1px,_transparent_10%)]

  w-full">
      <div className={`${openSans.className} mt-24   w-full h-auto  flex justify-start items-center flex-col`}
        >
          <h1 className="text-center dark:text-white text-[35px] sm:text-[50px] md:text-[60px]  mdx:text-[70px] lg:text-[85px] xl:text-[100px] font-extrabold">
            Let's{" "}
            <span className=" text-transparent animatedText">Connect</span>{" "}
          </h1>
        </div>

      <div className="w-full mt-[20px] ">
        <div className="flex justify-between w-full px-[20px]  mdx2:px-[100px] lg:px-[150px] xl:px-[200px] mt-12">
           <Link className={`  mr-12 text-[2rem] h-[90px] w-[90px] sm:h-[100px] sm:w-[100px] border-solid border-blue-800 border-[2px] rounded-[50%] flex justify-center items-center
                text-blue-800 cursor-pointer  hover:bg-blue-200  dark:bg-blue-200  dark:hover:bg-blue-300   hover:duration-[0.7s] `} href={'https://www.linkedin.com/in/muhammad-azan-/'} target="_blank">
                 <FontAwesomeIcon fontSize={55} icon={faLinkedin}/>
           </Link>

            <Link className={` text-[2rem] h-[90px] w-[90px] sm:h-[100px] sm:w-[100px] border-solid border-blue-800 border-[2px] rounded-[50%] flex justify-center items-center
                text-blue-800 cursor-pointer  hover:bg-blue-200  dark:bg-blue-200   dark:hover:bg-blue-300   hover:duration-[0.7s] `} href={'https://www.facebook.com/mohammad.azan.75641'} target="_blank">
                 <FontAwesomeIcon fontSize={55} icon={faSquareFacebook}/>
           </Link>
        </div>


            <div className="flex justify-center w-full mt-10 sm:mt-1">
           <Link className={` text-[2rem] h-[110px] w-[110px] sm:h-[130px] sm:w-[130px] border-solid border-black border-[2px] rounded-[50%] flex justify-center items-center
                text-black cursor-pointer  hover:bg-gray-300 dark:bg-gray-300  dark:hover:bg-gray-400  hover:duration-[0.7s] `} href={'https://github.com/Muhammad-Azan-1'} target="_blank">
                 <FontAwesomeIcon fontSize={80} icon={faGithub}/>
           </Link>
        </div>



            <div className="flex justify-between w-full  px-[20px] sm:px-[100px] mdx2:px-[200px] lg:px-[250px] xl:px-[300px] mt-24 md:mt-12">
           <Link className={`  mr-12 text-[2rem]  h-[90px] w-[90px] sm:h-[100px] sm:w-[100px] border-solid border-black   border-[2px] rounded-[50%] flex justify-center items-center
                text-black cursor-pointer  hover:bg-gray-300 dark:bg-gray-300   dark:hover:bg-gray-400   hover:duration-[0.7s] `} href={'https://x.com/Muhammad_Azan_'} target="_blank">
                 <FontAwesomeIcon fontSize={55} icon={faXTwitter}/>
           </Link>

            <Link className={`  md:mr-12 text-[2rem]  h-[90px] w-[90px] sm:h-[100px] sm:w-[100px] border-solid border-black-800 border-[2px] rounded-[50%] flex justify-center items-center
                text-black-800 cursor-pointer  hover:bg-blue-200 dark:bg-blue-200   dark:hover:bg-blue-300   hover:duration-[0.7s] `} href={'https://medium.com/@azan96593'} target="_blank">
                 <FontAwesomeIcon fontSize={55} icon={faMediumM}/>
           </Link>
        </div>



         <div className="flex justify-center w-full sm:mt-32 lg:mt-24 xl:mt-12">
           <Link className={`  sm:mr-12 text-[2rem]  h-[90px] w-[90px] sm:h-[100px] sm:w-[100px] border-solid border-pink-800 border-[2px] rounded-[50%] flex justify-center items-center
                text-pink-800 cursor-pointer  hover:bg-pink-200  dark:bg-pink-200    dark:hover:bg-pink-300   hover:duration-[0.7s] `} href={'https://www.instagram.com/azan.jundullah/?hl=en'} target="_blank">
                 <FontAwesomeIcon fontSize={55} icon={faSquareInstagram}/>
           </Link>
        </div>

     
      
        </div>

        </div>
        </>

  );
};

export default AboutMe;