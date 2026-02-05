import images from "@/constants/images";
import { useState } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  imgSrc: string;
};

const ServiceCard = ({ title, description, imgSrc }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div
      onMouseOver={() => setIsExpanded(true)}
      onMouseOut={() => setIsExpanded(false)}
      className={`${!isExpanded ? "bg-white" : "bg-[#6591DE] border-[rgba(255,255,255,.4)] border"} rounded-2xl w-full h-full py-3 px-0 md:py-[4%] box-border sm:px-10 shadow-lg hover:-translate-y-1 transition-all ease-in-out justify-center items-center flex flex-col relative overflow-hidden sm:pointer-events-none`}
    >
      {/* Card BG Element */}
      <div className="size-75 z-0 bg-blue-300 opacity-8 absolute right-0 bottom-0 rounded-full translate-x-1/2 translate-y-1/2"/>



      {/* Card Heading */}
      <div
        className={`${isExpanded ? "hidden" : ""} flex px-4 flex-col py-5 sm:py-0 text-center w-full sm:flex-row sm:px-0 justify-center sm:justify-start items-center`}
      >
        <img src={imgSrc} className="m-0 sm:mr-3 size-10 md:size-13" />
        <h1 className="sm:text-[clamp(10px,5vw,24px)] my-2 leading-tight sm:leading-[25px] md:leading-tight text-center sm:text-left font-bold text-[#6591DE]">
          {title}
        </h1>
      </div>

      {/* Card Description */}
      <div
        className={`${isExpanded ? "flex" : "hidden"} px-5 justify-start w-full items-start flex-col`}
      >
        {/* <img className="size-10" src={imgSrc} /> */}
        <h2 className="leading-4 font-bold text-white text-left pt-2">{title}</h2>
      </div>
      <p
        className={`${!isExpanded && "hidden"} pt-3 h-full sm:flex text-[clamp(5px,3vw,17px)] text-white sm:text-[#6591DE] leading-tight text-left px-4 sm:px-0 z-10 transition-all ease-in`}
      >
        {description}
      </p>

      <img
        className={`size-3 sm:hidden flex transition-all ease-out absolute top-4 opacity-50 right-4 ${isExpanded ? "rotate-180" : "-rotate-360"}`}
        src={!isExpanded ? images.vLeftIcon : images.vLeftIconWhite}
      />
    </div>
  );
};

export default ServiceCard;
