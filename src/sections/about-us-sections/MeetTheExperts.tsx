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
    <div className="min-h-screen mt-20">
      <div className="text-white flex flex-col justify-start items-start text-left">
        <h1 className="text-5xl">
          Meet Our <b>Dedicated Experts</b>
        </h1>
        <p className="text-xl font-light w-1/2 mt-2">
          Our team consists of experienced dental professionals committed to
          providing safe, reliable, and patient focused care
        </p>
      </div>
      <div className="grid row-auto gap-10 items-stretch w-full mt-5 h-[50vh] grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
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
