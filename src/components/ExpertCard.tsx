import images from "../constants/images";

type ExpertCardProps = {
  role: string;
  name: string;
  imgSrc: string;
  description: string;
};

export default function ExpertCard({
  role,
  name,
  imgSrc,
  description,
}: ExpertCardProps) {
  return (
    <div className="bg-white h-full min-h-fit flex flex-col justify-between rounded-3xl overflow-hidden text-[#739FEC] shadow-xl border-2 border-white">
      <div
        className="w-full h-[70%] rounded-br-[100px] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></div>
      <div className="w-full p-5 pb-7 text-left flex flex-col justify-between">
        <div>
          <p className="italic">{role}</p>
          <h3 className="font-bold text-2xl">{name}</h3>
          <p className="text-lg my-3">{description}</p>
        </div>
        <div className="flex mt-5 justify-start items-center">
          <img className="mr-3 size-6" src={images.fbLogo} />
          <img className="size-6" src={images.liLogo} />
        </div>
      </div>
    </div>
  );
}
