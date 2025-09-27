// just for responsiveness
import style from "./hero.module.css";
import Link from "next/link";

import { Arizonia, Montserrat, Open_Sans } from "next/font/google";
const openSans = Open_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const arizonia = Arizonia({
  weight: ["400"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["700"],
  subsets: ["latin"],
});

// font icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareInstagram,
  faLinkedin,
  faSquareFacebook,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

//Fonts

const Hero = () => {
  const skills = [
    "JavaScript (ES6+)",
    "React.js",
    "HTML/CSS",
    "Bootstrap",
    "Tailwind CSS",
    "Git/GitHub",
  ];
  return (
    <>
      <div
      id="home"
        className={`${style.main}  w-full h-min-screen flex items-center justify-evenly`}
      >
        <div
          className={` w-full h-full bg-white  dark:bg-black pt-[150px] 
    [background-image:linear-gradient(to_right,rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.07)_1px,transparent_1px)]
    dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.09)_1px,transparent_1px)]
    [background-size:50px_50px] flex items-center flex-col `}
        >
          <div
            className={` ${openSans.className} px-10 bg-black dark:bg-white dark:text-black w-[300px] text-3xl py-[10px] rounded-[60px] flex justify-center items-center   text-white`}
          >
            Frontend Web Developer
          </div>

          <div className="mt-14 w-full flex items-center justify-center gap-x-10">
            <h1
              className={`${montserrat.className}  text-black dark:text-white  text-center text-[35px] sm:text-[50px] md:text-[60px]  mdx:text-[70px] lg:text-[85px] xl:text-[100px] font-extrabold`}
            >
              HELLO I AM{" "}
              <span
                className={`${arizonia.className} animatedText text-[45px] sm:text-[60px] md:text-[70px]  mdx:text-[80px] lg:text-[100px] xl:text-[130px] font-extrabold pr-6`}
              >
                {" "}
                Muhammad <br /> Azan
              </span>
              A FRONTEDN DEVELOPER
            </h1>
          </div>

          <div
            className={`${openSans.className}  text-[20px] sm:text-[22px] mt-2 px-2 sm:px-12 font-light text-center tracking-wider`}
          >
            <p>
              I can transforms ideas into smooth, high-impact websites that
              actually help your business grow and your users stick around.
            </p>
          </div>


          <div id="about" >
            <Link href="#projects" >
            <button className= {` ${openSans.className} mt-12 font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-10 bg-white dark:bg-black w-[200px] text-[18px] py-[15px] rounded-[60px] flex justify-center items-center border-solid border-2 border-black dark:border-white   text-black dark:text-white`}>View Projects <span className="ml-5 mt-1">→</span> </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

