import images from "@/constants/images";

type ServiceCardProps = {
  title: string;
  description: string;
  imgSrc: string;
};

const ServiceCard = ({ title, description, imgSrc }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-2xl w-full h-full pt-3 pb-0 px-0 md:py-[5%] sm:px-10 shadow-lg hover:-translate-y-1 transition-all ease-in grid grid-rows-2 relative overflow-hidden overflow-hidden">
      {/* Card BG Element */}
      <div className="size-75 z-0 bg-blue-300 opacity-8 absolute right-0 bottom-0 rounded-full translate-x-1/2 translate-y-1/2"></div>
      {/* Card Heading */}
      <div className="flex px-4 sm:px-0 justify-start items-center">
        <img src={imgSrc} className="mr-3 size-10 md:size-13" />
        <h1 className="text-[clamp(10px,5vw,24px)] leading-[25px] md:leading-tight text-left font-bold text-[#6591DE]">
          {title}
        </h1>
      </div>

      {/* Card Description */}
      <p className="hidden sm:flex text-[clamp(5px,4vw,17px)] text-[#6591DE] leading-tight text-left py-1 z-10">
        {description}
      </p>
            <div className="flex sm :hidden w-[100%] mt-2">
        <button className="border w-full flex py-1 justify-center items-center px-4 text-[#6591DE] opacity-80
        ">
          <img className="size-3" src={images.vLeftIcon}/>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
