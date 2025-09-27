import React from "react";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import ProjectCard from "../ProjectCard/ProjectCard";
import Link from "next/link";
const openSans = Open_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

const Projects = () => {
  const stack = ["Javascript", "Html", "BootStrap", "CSS"];
  return (
    <>
      <div className="h-auto w-full     [background-size:200px_200px] bg-repeat
     [background-image:radial-gradient(circle_at_15%_50%,_rgba(173,216,230,0.5)_1px,_transparent_10%),_radial-gradient(circle_at_85%_20%,_rgba(173,216,230,0.2)_1px,_transparent_10%),_radial-gradient(circle_at_40%_80%,_rgba(173,216,230,0.4)_1px,_transparent_10%)]
      dark:[background-image:radial-gradient(circle_at_25%_50%,_rgba(255,255,255,0.09)_1px,_transparent_10%),radial-gradient(circle_at_85%_20%,_rgba(255,255,255,0.09)_1px,_transparent_10%),radial-gradient(circle_at_40%_80%,_rgba(255,255,255,0.05)_1px,_transparent_10%)]

 
 ">
        <div
          className={`${openSans.className}  w-full h-auto  flex justify-start items-center flex-col`}
        >
          <h1 id="projects" className="text-center dark:text-white text-[35px] sm:text-[50px] md:text-[60px]  mdx:text-[70px] lg:text-[85px] xl:text-[100px] font-extrabold">
            Chapters{" "}
            <span className=" text-transparent animatedText">I&apos;ve</span>{" "}
            Written
          </h1>
        </div>

        <div className="w-full mt-[60px]  ">
          <div
            className={`${openSans.className}  mt-24 sm:mt-32 w-full h-auto  flex justify-center items-center `}
          >
            <h1 className=" text-[30px] sm:text-[40px] dark:text-white  xl:text-[60px] font-extrabold">
              Javascript
              <span className=" text-transparent animatedText"> Projects</span>
            </h1>
          </div>

          <div className="flex h-auto  justify-center gap-y-20 lg:gap-y-0 sm:gap-x-8 content-between flex-wrap items-center w-full mt-8">
            <ProjectCard
              id="1"
              title="CURRENCY CONVERTER APP"
              description="Quickly generate and customize professional resumes for download, focusing on speed and intuitive design."
              image="/images/currency.webp"
              stack={["TypeScript", "HTML", "CSS"]}
              link="https://javascript-projects-4uur.vercel.app/"
            />

            <ProjectCard
              id="2"
              title="Bidding Game"
              description="A classic two-player game implemented digitally to demonstrate core logic and interactive state management."
              image="/images/dice.jpg"
              stack={["TypeScript", "HTML", "CSS"]}
              link="https://javascript-project-cgze-qr9b2s6yj.vercel.app/"
            />

            <ProjectCard
              id="3"
              title="Resume Builder APP"
              description="Quickly generate and customize professional resumes for download, focusing on speed and intuitive design."
              image="/images/resume.jpeg"
              stack={["TypeScript", "HTML", "CSS"]}
              link="https://resume-day7.vercel.app/"
            />
          </div>

          <div className=" mt-[150px] flex h-auto justify-center gap-y-20 lg:gap-y-0 gap-x-8 content-between flex-wrap   items-center w-full">
            <ProjectCard
              id="4"
              title="TODO APP"
              description="An efficient task manager allowing users to add, track, and mark daily to-dos as complete."
              image="/images/todo.jpg"
              stack={["TypeScript", "HTML", "CSS"]}
              link="https://javascript-projects-nu-rose.vercel.app/"
            />

            <ProjectCard
              id="5"
              title="CARD FLIPPER APP"
              description="An interactive web utility showcasing smooth CSS/JS transitions for flipping cards and revealing content."
              image="/images/cardf.png"
              stack={["TypeScript", "HTML", "CSS"]}
              link="https://javascript-projects-dnud-bcfm4nr2i.vercel.app/"
            />

            <ProjectCard
              id="6"
              title="SIMPLE COUNTER APP"
              description="An interactiveinteraction for incrementing and decrementing a numerical value."
              image="/images/counter.png"
              stack={["TypeScript", "HTML", "CSS"]}
              link="https://javascript-projects-pt85.vercel.app/"
            />
          </div>
        </div>

        {/* mega project */}
        <div className="w-full  mt-[150px] sm:mt-[170px] md:mt-[180px] h-auto">
          <div
            className={`${openSans.className} mt-24 sm:mt-32 w-full h-auto  flex justify-center items-center `}
          >
            <h1 className=" text-black dark:text-white text-[30px] sm:text-[40px]  xl:text-[60px] font-extrabold">
              Javascript
              <span className=" text-transparent animatedText"> Mega </span>{" "}
              Project
            </h1>
          </div>

        <Link href={'https://amazon-cloned-2.vercel.app/'} target="_blank">
          <div className="mt-14 w-full  flex flex-col justify-center items-center  transition cursor-pointer duration-300 transform hover:-translate-y-2  group">
            <div className=" w-full px-5 mdx:px-0 mdx:w-[800px] h-[600px] transition cursor-pointer duration-300 transform hover:-translate-y-2  group">
              <div className="w-full h-auto">
                <Image
                  src={"/images/aaa.webp"}
                  alt="mega project"
                  width={600}
                  height={500}
                  className="w-full rounded-t-[6px]"
                />
              </div>

              <div
                className={`${openSans.className} h-auto  flex flex-col justify-start py-5 px-[16px] rounded-b-[6px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] group-hover:hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]`}
              >
                <h3 className="text-[20px] font-[700]">AMAZON CLONED</h3>

                <p className="text-black py-2  text-[17px] leading-relaxed ">
                  A detailed clone of the Amazon UI, developed using HTML, CSS,
                  Bootstrap and Javascript for rapid styling. Features include responsive
                  design, interactive product listings,
                </p>

                <div className="flex flex-col pt-4">
                  <h4 className="text-[18px]  font-[600]">Stack used</h4>
                  <ol className="list-disc ml-5 mt-1 space-y-1 text-[15px]">
                    {stack.map((tech, idx) => (
                      <li className="py-1" key={idx}>
                        {tech}
                      </li>
                    ))}
                  </ol>
                </div>

                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#151875] text-2xl pt-4 font-medium group-hover:underline group-hover:text-[#FB2E86]"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>



      <div className="h-auto mt-[150px]   sm:mt-[200px] md:mt-[230px] w-full
       [background-size:200px_200px] bg-repeat
     [background-image:radial-gradient(circle_at_15%_50%,_rgba(173,216,230,0.5)_1px,_transparent_10%),_radial-gradient(circle_at_85%_20%,_rgba(173,216,230,0.2)_1px,_transparent_10%),_radial-gradient(circle_at_40%_80%,_rgba(173,216,230,0.4)_1px,_transparent_10%)]
           dark:[background-image:radial-gradient(circle_at_25%_50%,_rgba(255,255,255,0.09)_1px,_transparent_10%),radial-gradient(circle_at_85%_20%,_rgba(255,255,255,0.09)_1px,_transparent_10%),radial-gradient(circle_at_40%_80%,_rgba(255,255,255,0.05)_1px,_transparent_10%)]

 
 ">
    

       
            <div
            className={`${openSans.className}   mt-24 sm:mt-32 w-full h-auto  flex justify-center items-center `}
          >
            <h1 className=" dark:text-white text-[30px] sm:text-[50px]  xl:text-[60px] font-extrabold">
              ReactJS
              <span className=" text-transparent animatedText"> Projects</span>
            </h1>
          </div>


        <div className=" mt-[50px] flex h-auto justify-center gap-y-20 lg:gap-y-0 gap-x-8 content-between flex-wrap  px-2 xl:px-0 items-center w-full">

            <ProjectCard
              id="7"
              title="ADVENTURE WEB APP"
              description="An exploratory project built with React and TypeScript to learn component-based architecture and manage simple UI state. Features a modern, responsive layout."
              image="/images/ad2.png"
              stack={["React.js", "Tailwad CSS", "Typescript"]}
              link="https://nextjs-milestone2-tailwad-css-vmea-2dxp0vss5.vercel.app/"
            />

            <ProjectCard
              id="8"
              title="BLOG WEB APP"
              description="A functional blog interface built with React to understand data fetching and rendering. Styled with Tailwind CSS and integrated with a headless CMS to practice API use."
              image="/images/blog.png"
               stack={["React.js", "Tailwad CSS", "Javascript"]}
              link="https://blog-website-xi-woad.vercel.app/"
            />

            <ProjectCard
              id="9"
              title="SCOOTER WEB LANDING PAGE"
              description="A highly polished, fully responsive landing page for a scooter brand. Built with React to solidify functional components and styled using the flexibility of Tailwind CSS."
              image="/images/scootr.png"
               stack={["React.js", "Tailwad CSS", "Custom CSS" , "Typescript"]}
              link="https://next-js-class-assignment3-cadr-58ldmp5i2.vercel.app/"
            />
     
        </div>


         {/* <div className="w-full  mt-[150px] sm:mt-[170px] md:mt-[180px] h-auto">
          <div
            className={`${openSans.className} mt-24 sm:mt-32 w-full h-auto  flex justify-center items-center `}
          >
            <h1 className=" text-[30px] sm:text-[40px]  xl:text-[60px] font-extrabold">
              ReactJS
              <span className=" text-transparent animatedText"> Mega </span>{" "}
              Project
            </h1>
          </div> */}

        {/* <Link href={'https://nextjs-ui-ux-hackathon-six.vercel.app/'} target="_blank">
          <div className="mt-14 w-full  flex flex-col justify-center items-center  transition cursor-pointer duration-300 transform hover:-translate-y-2  group">
            <div className=" w-full px-5 mdx:px-0 mdx:w-[800px] h-[600px] transition cursor-pointer duration-300 transform hover:-translate-y-2  group">
              <div className="w-full h-auto">
                <Image
                  src={"/images/a.png"}
                  alt="mega project"
                  width={600}
                  height={500}
                  className="w-full rounded-[6px]"
                />
              </div>

              <div
                className={`${openSans.className} h-auto  flex flex-col justify-start py-5 px-[16px] rounded-[6px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] group-hover:hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] dark:bg-gray-800 dark:text-white`}
              >
                <h3 className="text-[20px] font-[700]">E - COMMERCE APP</h3>

                <p className="text-black py-2  text-[17px] leading-relaxed dark:text-gray-300">
                  A modern, component-based shopping application built with React / Next JS. Features include global state management for the cart, 
                  dynamic routing for product details, and a clean, responsive layout styled with Tailwind CSS.
                </p>

                <div className="flex flex-col pt-4">
                  <h4 className="text-[18px]  font-[600]">Stack used</h4>
                  <ol className="list-disc ml-5 mt-1 space-y-1 text-[15px]">
                    {stack2.map((tech, idx) => (
                      <li className="py-1" key={idx}>
                        {tech}
                      </li>
                    ))}
                  </ol>
                </div>

                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#151875] text-2xl pt-4 font-medium group-hover:underline group-hover:text-[#FB2E86]"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          </Link> */}
        {/* </div> */}
      

      </div>
    </>
  );
};

export default Projects;
