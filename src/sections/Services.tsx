import images from "../constants/images";

type ServiceCardProps = {
  title: string;
  description: string;
  imgSrc: string;
};

const ServiceCard = ({ title, description, imgSrc }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-3xl p-10 py-8 shadow-lg hover:-translate-y-1 transition-all ease-in">
      <div className="flex justify-start items-center mb-2">
        <img src={imgSrc} className="mr-5" />
        <h1 className="text-3xl text-left font-bold text-[#6591DE]">{title}</h1>
      </div>
      <p className="text-lg mt-3 text-[#6591DE] text-justify">{description}</p>
    </div>
  );
};
type ServiceType = {
  title: string;
  description: string;
  imgSrc: string;
};
const servicesData: ServiceType[] = [
  {
    title: "Dental Cleaning and Whitening",
    description:
      "Gentle cleaning treatments to brighten teeth and maintain healthy gums",
    imgSrc: images.service1Icon,
  },
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with modern aesthetic solutions",
    imgSrc: images.service2Icon,
  },
  {
    title: "Orthodontic Care",
    description: "Customized braces and aligners to correct alignment and bite",
    imgSrc: images.service3Icon,
  },
  {
    title: "Dental Implants",
    description: "Durable and natural-looking replacements for missing teeth",
    imgSrc: images.service4Icon,
  },
  {
    title: "Pediatic Dentistry",
    description:
      "Caring treatments designed specifically for children’s comfort",
    imgSrc: images.service5Icon,
  },
  {
    title: "Restorative Dentistry",
    description:
      "Restorative treatments focused on comfort, function, and long term oral health.",
    imgSrc: images.service6Icon,
  },
];

export default function Services() {
  return (
    <div className="h-screen flex justify-center items-center flex-col  min-h-fit relative">
      <div className="bg-[#739FEC] z-0 w-[300px] h-[300px] opacity-70 absolute rounded-full right-0 top-0 translate-x-[70%] translate-y-[20%]" />

      <div className="text-white w-full flex flex-col justify-center items-center">
        <h1 className="text-5xl">
          Our <b>Dental Services</b>
        </h1>
        <p className="text-xl font-light py-6 w-1/2">
          Our dentists at Lumina Dental provide preventive, restorative, and
          cosmetic care, all tailored to each patient’s needs.
        </p>
      </div>
      <div className="w-full pt-5 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 z-10">
        {servicesData.map((sData) => (
          <ServiceCard
            title={sData.title}
            description={sData.description}
            imgSrc={sData.imgSrc}
          />
        ))}
      </div>
      <button className="rounded-full border border-white px-5 py-2 text-white mt-10">
        Get in Touch
      </button>
    </div>
  );
}
