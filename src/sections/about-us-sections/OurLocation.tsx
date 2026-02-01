import { act, useState } from "react";
import images from "../../constants/images";

type BranchNameProps = {
  branchName: string;
  location: string;
  idx: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

const BranchName = ({
  branchName,
  location,
  idx,
  activeIndex,
  setActiveIndex,
}: BranchNameProps) => {
  return (
    <div
      onClick={() => setActiveIndex(idx)}
      className={`text-left grid grid-cols-[auto_1fr] w-fit grid-rows-2 mt-2 gap-x-3 cursor-pointer ${activeIndex === idx ? "border-2 bg-[#8FB9FF] text-white" : "border-2 border-[rgba(0,0,0,0)]"} transition-all ease-in py-3 px-5 rounded-2xl relative text-[#8FB9FF]`}
    >
      {activeIndex === idx && (
        <div className="absolute w-[100%] h-0.5 bg-[#8FB9FF] left-full -translate-y-1/2 top-1/2"></div>
      )}
      <div className="row-span-1 col-span-1 row-start-1 col-start-1 flex justify-start items-center">
        {
          <img
            src={
              idx === activeIndex ? images.locationPinWhite : images.locationPin
            }
          />
        }
      </div>
      <h2 className="text-2xl font-medium col-start-2 row-start-1 col-span-17">
        {branchName}
      </h2>
      <p className="row-span-11 col-span-17 col-start-2 row-start-2">
        {location}
      </p>
    </div>
  );
};

const branchesData = [
  {
    branchName: "Marcelius Branch",
    location: "1010 Marcelius St, Angeles, Pampanga",
  },
  {
    branchName: "San Dico Branch",
    location: "San Dico St, Diamond Subd, Angeles, 2009 Pampanga",
  },
];
const locationSrcs = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.8735024575362!2d120.59272899999998!3d15.1652902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f2744b40e50f%3A0xe518d7ba71ad65a8!2sMarcelius%20St%2C%20Balibago%2C%20Angeles%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1769935924848!5m2!1sen!2sph",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15403.87425760549!2d120.59743780000001!3d15.160070999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f3867ae0be61%3A0xab5211f9f351412c!2sDiamond%20subd%2C%2010-1%20Road%201%2C%20Balibago%2C%20Angeles%2C%202009%20Pampanga!5e0!3m2!1sen!2sph!4v1769938765334!5m2!1sen!2sph",
];

export default function OurLocation() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=" h-[500px] relative grid grid-cols-2">
      <div className="bg-white absolute z-0 h-full w-[150vw] left-1/2 -translate-x-1/2"></div>
      {/* Left: Text */}
      <div className="text-[#6591DF] z-10 text-left flex flex-col justify-center">
        <h1 className="text-6xl pb-3">
          Our <b>Location</b>
        </h1>
        <div className="my-5">
          {branchesData.map((branchData, idx) => (
            <BranchName
              idx={idx}
              activeIndex={activeIndex}
              branchName={branchData.branchName}
              location={branchData.location}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
        <button className="border-[#6591DF] border text-[#6591DF] w-fit px-5 mt-5 py-3 rounded-lg">
          Book Appointment
        </button>
      </div>
      {/* Right: Map */}
      <div className=" w-full h-full z-10 flex justify-center items-start flex-col">
        <iframe
          src={locationSrcs[activeIndex]}
          className="w-full h-[70%] rounded-4xl rounded-br-[100px] shadow-lg border-2 border-[#8FB9FF]"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
