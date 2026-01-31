import images from "../constants/images";
import ServiceCard from "../components/ServiceCard";

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
    <div className="h-[90vh] min-h-fit flex justify-center items-center flex-col relative py-20">
      <div className="bg-[#739FEC] z-0 w-75 h-75 opacity-70 absolute rounded-full right-0 top-0 translate-x-[70%] translate-y-[20%]" />

      <div className="text-white w-full flex flex-col justify-center items-center">
        <h1 className="text-5xl">
          Our <b>Dental Services</b>
        </h1>
        <p className="text-xl font-light py-6 w-1/2">
          Our dentists at Lumina Dental provide preventive, restorative, and
          cosmetic care, all tailored to each patient’s needs.
        </p>
      </div>
      <div className="w-[90%] items-stretch pt-5 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 z-10">
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
