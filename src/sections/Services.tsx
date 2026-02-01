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
    description:
      "Personalized cosmetic treatments to enhance your smile and improve overall appearance",
    imgSrc: images.service2Icon,
  },
  {
    title: "Orthodontic Care",
    description:
      "Advanced braces and aligners to straighten teeth and improve bite alignment",
    imgSrc: images.service3Icon,
  },
  {
    title: "Dental Implants",
    description:
      "Strong tooth replacements designed to restore function and natural appearance",
    imgSrc: images.service4Icon,
  },
  {
    title: "Pediatic Dentistry",
    description:
      "Gentle dental care focused on children’s comfort and healthy smile development",
    imgSrc: images.service5Icon,
  },
  {
    title: "Restorative Dentistry",
    description:
      "Comprehensive treatments to restore tooth function and support long term oral health",
    imgSrc: images.service6Icon,
  },
];

export default function Services() {
  return (
    <div className="h-[90vh] min-h-fit flex justify-center items-center flex-col relative py-20 z-10">
      <div className="bg-[#739FEC] z-0 w-75 h-75 opacity-70 absolute rounded-full right-0 top-0 translate-x-[70%] translate-y-[20%]" />

      <div className="text-white w-full flex flex-col justify-center items-center">
        <h1 className="text-[clamp(24px,9vw,60px)] leading-tight md:leading-15">
          Our <b>Dental Services</b>
        </h1>
        <p className="w-[90%] md:w-1/2 z-10 text-[clamp(7px,4vw,20px)] font-light py-2">
          Our dentists at Lumina Dental provide preventive, restorative, and
          cosmetic care, all tailored to each patient’s needs.
        </p>
      </div>
      <div className="w-[90%] items-stretch pt-5 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 z-10">
        {servicesData.map((sData, idx) => (
          <ServiceCard
            key={idx}
            title={sData.title}
            description={sData.description}
            imgSrc={sData.imgSrc}
          />
        ))}
      </div>
      <button className="rounded-full border border-white px-5 py-2 text-white mt-7">
        Get in Touch
      </button>
    </div>
  );
}
