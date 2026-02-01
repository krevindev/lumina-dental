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
    <div className="min-h-fit mt-40">
      <div className="text-white flex flex-col justify-start items-start text-left">
        <h1 className="text-[clamp(24px,9vw,60px)]">
          Meet Our <b>Dedicated Experts</b>
        </h1>
        <p className="text-[clamp(7px,4vw,20px)] w-full md:w-1/2 font-light mt-2">
          Our team consists of experienced dental professionals committed to
          providing safe, reliable, and patient focused care
        </p>
      </div>
      {/* <div className="grid row-auto gap-10 items-stretch w-full mt-5 h-[50vh] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] min-h-fit bg-gray-400"> */}
      <div className=" pt-3 md:pt-10 row-auto grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2 flex justify-evenly items-center flex-wrap w-full">
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
