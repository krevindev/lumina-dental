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
    <div className="bg-white rounded-2xl w-full h-full pt-3 pb-0 px-0 md:py-[5%] sm:px-10 shadow-lg hover:-translate-y-1 transition-all ease-in grid grid-rows-1 sm:grid-rows-2 relative overflow-hidden">
      {/* Card BG Element */}
      <div className="size-75 z-0 bg-blue-300 opacity-8 absolute right-0 bottom-0 rounded-full translate-x-1/2 translate-y-1/2"></div>
      {/* Card Heading */}
      <div className="flex px-4 flex-col text-center w-full sm:flex-row sm:px-0 justify-center sm:justify-start items-center">
        <img src={imgSrc} className="m-0 sm:mr-3 size-10 md:size-13" />
        <h1 className="sm:text-[clamp(10px,5vw,24px)] leading-tight sm:leading-[25px] md:leading-tight text-center sm:text-left font-bold text-[#6591DE]">
          {title}
        </h1>
      </div>

      {/* Card Description */}
      <p
        className={`${!isExpanded && "hidden"} sm:flex text-[clamp(5px,4vw,17px)] text-[#6591DE] leading-tight text-left px-4 py-2 z-10 transition-all ease-in`}
      >
        {description}
      </p>

      <div className="sm:hidden flex self-end justify-self-end sm:hidden w-full">
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="border border-[rgba(101,145,222,.2)] mt-3 w-full flex py-2 justify-center items-center px-4 text-[#6591DE] opacity-80
        "
        >
          <img className="size-3" src={images.vLeftIcon} />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
