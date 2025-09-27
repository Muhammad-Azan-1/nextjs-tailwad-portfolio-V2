"use client";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import Link from "next/link";

const openSans = Open_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  stack: string[];
  link?: string;
  id?:string
}

const ProjectCard = ({ id, title, description, image, stack, link }: ProjectCardProps) => {
  return (
    <Link target="_blank" href={link ? link : ''}>
    <div className={`${id == '3' ? 'mt-20' : ''} ${id == '2' ? 'mt-20' : ''} ${id == '9' ? 'mt-20' : ''} ${id == '8' ? 'mt-20' : ''}  ${id =='6' ? 'mt-0' : ''}   h-[500px] px-3 w-full smx:px-0 smx:w-[380px] transition cursor-pointer duration-300 transform hover:-translate-y-2  group`}>
      {/* Image */}
      <div className="w-full h-auto">
        <Image
          src={image}
          alt={title}
          width={380}
          height={380}
          className="w-full rounded-t-[6px] h-auto"
          quality={75}
          loading="lazy"
        />
      </div>

   
      <div
        className={`${openSans.className} h-auto w-full flex flex-col justify-start py-5 px-[16px]  rounded-b-[6px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] group-hover:hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]`}
      >
        <h3 className="text-[20px] font-[700]">{title}</h3>

        <p className="text-black py-2  text-[17px] leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col pt-4">
          <h4 className="text-[18px]  font-[600]">Stack used</h4>
          <ol className="list-disc ml-5 mt-1 space-y-1 text-[15px]">
            {stack.map((tech, idx) => (
              <li className="py-1" key={idx}>{tech}</li>
            ))}
          </ol>
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#151875] text-2xl pt-4 font-medium group-hover:underline group-hover:text-[#FB2E86]"
          >
            Read More  
          </a>
        )}
      </div>
    </div>
    </Link>
  );
};

export default ProjectCard;
