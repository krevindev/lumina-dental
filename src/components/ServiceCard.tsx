type ServiceCardProps = {
  title: string;
  description: string;
  imgSrc: string;
};

const ServiceCard = ({ title, description, imgSrc }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-3xl h-full py-6 px-10 shadow-lg hover:-translate-y-1 transition-all ease-in grid grid-rows-2 relative">
      <div className="size-[300px] z-0 bg-blue-300 opacity-15 absolute right-0 bottom-0 rounded-full blur-2xl translate-x-1/2 translate-y-1/2"></div>
      <div className="size-[300px] z-0 bg-blue-300 opacity-15 absolute left-0 bottom-0 rounded-full blur-2xl -translate-x-1/2 translate-y-[30px]"></div>
      <div className="flex justify-start items-center">
        <img src={imgSrc} className="mr-3 size-13" />
        <h1 className="text-2xl mb-2 text-left font-bold text-[#6591DE]">
          {title}
        </h1>
      </div>
      <p className="text-lg text-[#6591DE] text-justify z-10">{description}</p>
    </div>
  );
};

export default ServiceCard;
