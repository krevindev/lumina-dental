type ServiceCardProps = {
  title: string;
  description: string;
  imgSrc: string;
};

const ServiceCard = ({ title, description, imgSrc }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-3xl max-w-[70vw] h-full py-4 md:py-6 px-10 shadow-lg hover:-translate-y-1 transition-all ease-in grid grid-rows-2 relative overflow-hidden">
      {/* Card BG Element */}
      <div className="size-75 z-0 bg-blue-300 opacity-8 absolute right-0 bottom-0 rounded-full translate-x-1/2 translate-y-1/2"></div>
      {/* Card Heading */}
      <div className="flex justify-start items-center">
        <img src={imgSrc} className="mr-3 size-10 md:size-13" />
        <h1 className="text-[clamp(15px,6vw,24px)] leading-[25px] md:leading-tight text-left font-bold text-[#6591DE]">
          {title}
        </h1>
      </div>
      {/* Card Description */}
      <p className="text-[clamp(10px,4vw,18px)] text-[#6591DE] leading-tight text-left py-1 z-10">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
