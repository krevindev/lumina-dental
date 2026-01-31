type ServiceCardProps = {
  title: string;
  description: string;
  imgSrc: string;
};

const ServiceCard = ({ title, description, imgSrc }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-3xl h-full p-10 py-8 shadow-lg hover:-translate-y-1 transition-all ease-in">
      <div className="flex justify-start items-center mb-2">
        <img src={imgSrc} className="mr-5" />
        <h1 className="text-3xl text-left font-bold text-[#6591DE]">{title}</h1>
      </div>
      <p className="text-lg mt-3 text-[#6591DE] text-justify">{description}</p>
    </div>
  );
};

export default ServiceCard;
