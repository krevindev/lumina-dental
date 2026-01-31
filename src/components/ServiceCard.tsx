type ServiceCardProps = {
  title: string;
  description: string;
  imgSrc: string;
};

const ServiceCard = ({ title, description, imgSrc }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-3xl h-full py-6 px-10 shadow-lg hover:-translate-y-1 transition-all ease-in grid grid-rows-2">
      <div className="flex justify-start items-center">
        <img src={imgSrc} className="mr-3 size-13" />
        <h1 className="text-2xl text-left font-bold text-[#6591DE]">{title}</h1>
      </div>
      <p className="text-lg text-[#6591DE] text-justify">{description}</p>
    </div>
  );
};

export default ServiceCard;
