import ExpertCard from "../../components/ExpertCard";
import images from "../../constants/images";

type ExpertsType = {
  role: string;
  name: string;
  imgSrc: string;
  description: string;
};
const expertsData: ExpertsType[] = [
  {
    role: "General Dentist",
    name: "Dr. Maria Elena Cruz",
    imgSrc: images.expert1,
    description:
      "Provides comprehensive dental care with a focus on patient comfort and preventive treatment.",
  },
  {
    role: "Orthodontic Specialist",
    name: "Dr. Daniel Reyes",
    imgSrc: images.expert2,
    description:
      "Specializes in correcting alignment issues and improving smiles through modern orthodontic care.",
  },
  {
    role: "Registered Dental Technologist",
    name: "Angela Santos, RDT",
    imgSrc: images.expert3,
    description:
      "Supports clinical procedures while ensuring precision, cleanliness, and efficient patient care.",
  },
];

export default function MeetTheExperts() {
  return (
    <div className="min-h-fit mt-20 py-5 pb-20">
      <div className="text-white flex flex-col justify-start items-start text-left">
        <h1 className="text-[clamp(24px,9vw,50px)] text-left sm:text-center w-full lg:text-[clamp(15px,9vw,50px)] leading-tight lg:leading-15">
          Meet Our <b> Dedicated Experts</b>
        </h1>
        <p className="text-[clamp(7px,4vw,20px)] w-full lg:px-30 text-left sm:text-center font-light mt-2">
          Our team consists of experienced dental professionals committed to
          providing safe, reliable, and patient focused care
        </p>
      </div>

      <div className="pt-3 md:pt-10 col-auto row-auto grid-cols-[repeat(auto-fit,minmax(350px,1fr))] md:grid-cols-3 lg:grid-cols-3 gap-2 flex justify-evenly items-center flex-wrap w-full">
        {expertsData.map((expert, idx) => (
          <ExpertCard
            key={idx}
            role={expert.role}
            name={expert.name}
            imgSrc={expert.imgSrc}
            description={expert.description}
          />
        ))}
      </div>
    </div>
  );
}
