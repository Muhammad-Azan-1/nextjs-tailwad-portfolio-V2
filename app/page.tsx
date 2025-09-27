import { Urbanist, Arizonia, Montserrat, Open_Sans} from "next/font/google";

 export const urbanist = Urbanist({
  weight: [ "900"],
  subsets: ["latin"],
});



 export const poppins = Urbanist({
  weight: [ '400' , '500',"900"],
  subsets: ["latin"],
});


export const openSans = Open_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
export const arizonia = Arizonia({
  weight: ["400"],
  subsets: ["latin"],
});


export const montserrat = Montserrat({
  weight: ["700"],
  subsets: ["latin"],
});
import Header from '@/components/Header/Header';
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import  AboutMe from "@/components/About/About";
import  Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
   <>
   <div className="scroll-smooth heroEnter">
   <Header/>
    <Hero />
    <AboutMe/>
    <Projects/>
    <Footer/>


    </div>
   </>
  );
}
