import { Urbanist, Poppins } from "next/font/google";
 export const urbanist = Urbanist({
  weight: [ "900"],
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ["500","600"],
  subsets: ["latin"],
});
import Header from './Components/Header/Header';
import Hero from "./Components/Hero/Hero";
export default function Home() {
  return (
   <>
   <div className="scroll-smooth">
   <Header/>
    <Hero />
    </div>
   </>
  );
}
