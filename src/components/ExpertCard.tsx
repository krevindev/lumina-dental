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
    <div className="bg-white w-full lg:w-87.5 m-2 h-full min-h-fit flex flex-col sm:flex-row lg:flex-col justify-between rounded-3xl overflow-hidden text-[#739FEC] shadow-xl border-2 border-white">
      {/* Expert Image */}
      <div
        className="min-h-62.5 w-full rounded-br-[50px] bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundPositionX: "center",
        }}
      ></div>
      <div className="w-full p-5 pb-7 text-left flex flex-col justify-between">
        <p className="italic">{role}</p>
        <h3 className="font-bold text-[clamp(24px,9vw,24px)] leading-tight md:leading-tight">
          {name}
        </h3>
        <p className="text-[clamp(7px,4vw,16px)] my-3">{description}</p>
        <div className="flex justify-start items-center">
          <img className="mr-3 size-6" src={images.fbLogo} />
          <img className="size-6" src={images.liLogo} />
        </div>
      </div>
    </div>
  );
}
