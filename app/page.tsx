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
