
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faXTwitter  , faGithub, faMailchimp, faInstagram, faSquareFacebook, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFaceAngry, faLink, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Arizonia ,  Montserrat } from "next/font/google"; // Import fonts used elsewhere
import Link from "next/link";
import { faSquare } from "@fortawesome/free-solid-svg-icons/faSquare";
const arizonia = Arizonia({
  weight: ["400"],
  subsets: ["latin"],
});


const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div
    className=' w-full h-auto bg-black border-solid border-t-2 border-borderColor mt-[150px] py-[70px] px-3 sm:px-0 '
    >

        <div className=" px-20 flex justify-center">
            <h1 className={`animatedText ${arizonia.className} text-[35px] sm:text-[60px] underline decoration-orange-400`}>Muhammad Azan</h1>
        </div>

         <div className={`${montserrat.className} mt-[30px] px-20 flex-wrap smx:flex-nowrap gap-y-8 flex  text-[17px] sm:text-[20px] text-[#CCCCCC] justify-center gap-x-[50px]`}>
           <Link href='#home' className="cursor-pointer hover:underline"  >Home</Link>
           <Link href='#about' className="cursor-pointer hover:underline" >About</Link>
           <Link href='#connect' className="cursor-pointer hover:underline"  >Connect</Link>
           <Link href='#projects' className="cursor-pointer hover:underline " >Projects</Link>
        </div>

        <div className="  text-[#CCCCCC] flex justify-center  cursor-pointer mt-[30px]">
      <Link href='mailto:muhammad.azan18@icloud.com' passHref legacyBehavior>
             <p className="text-[17px] sm:text-[20px]  hover:underline">Email Me : muhammad.azan18@icloud.com  <span  className="pl-2 "> <FontAwesomeIcon fontSize={20}  icon={faEnvelope}/></span></p>
            </Link>
        </div>

           <div className="  text-[#CCCCCC] flex justify-center  cursor-pointer mt-[30px]">
      <Link href='tel:+923357581423' passHref legacyBehavior>
             <p className="text-[17px] sm:text-[20px]  hover:underline">Contact Me : +923357581423 <span className="pl-2"><FontAwesomeIcon  fontSize={25} icon={faPhone}/></span> </p>
            </Link>
        </div>


        <div className="mt-[35px] flex-wrap flex gap-x-10 justify-center">
                <Link
                  target="_blank"
                className={`  text-[2rem] h-[50px] w-[50px] border-solid border-[#CCCCCC] border-[2px] rounded-[50%] flex justify-center items-center
                      text-[#CCCCCC] cursor-pointer  hover:bg-white hover:text-black hover:duration-[0.7s] `}
                href="https://www.linkedin.com/in/muhammad-azan-/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
                <Link
                  target="_blank"
              className={`   text-[2rem] h-[50px] w-[50px] border-solid border-white border-[2px] rounded-[50%] flex justify-center items-center
                     text-white cursor-pointer  hover:bg-white hover:text-black hover:duration-[0.7s] `}
                href="https://github.com/Muhammad-Azan-1"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
                <Link
                  target="_blank"
  className={`   text-[2rem] h-[50px] w-[50px] border-solid border-white border-[2px] rounded-[50%] flex justify-center items-center
                     text-white cursor-pointer  hover:bg-white hover:text-black hover:duration-[0.7s] `}
                href="https://x.com/Muhammad_Azan_"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </Link>
                <Link
                  target="_blank"
      className={`  text-[2rem] h-[50px] w-[50px] border-solid border-white border-[2px] rounded-[50%] flex justify-center items-center
                     text-white cursor-pointer  hover:bg-white hover:text-black hover:duration-[0.7s] `}
                href="https://www.instagram.com/azan.jundullah/?hl=en"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
                <Link
                target="_blank"
                  className={`   text-[2rem] h-[50px] w-[50px] border-solid border-white border-[2px] rounded-[50%] flex justify-center items-center
                     text-white cursor-pointer  hover:bg-white hover:text-black hover:duration-[0.7s] `}
                href="https://www.facebook.com/mohammad.azan.75641"
              >
                <FontAwesomeIcon icon={faSquareFacebook} />
              </Link>
        </div>

        <div className="w-full flex justify-center items-center">
        <div className="w-[90%] mt-[38px] h-[1px]  bg-[#CCCCCC]">
        </div>
        </div>

        <div className="text-center  text-[#CCCCCC] mt-16 text-[16px] sm:text-[18px] ">
            <p>Copyright &#169;2025 All rights reserved | This portfolio is made with &hearts; </p>

        </div>
        
    </div>
  )
}

export default Footer


