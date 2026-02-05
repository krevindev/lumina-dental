import images from "../../constants/images";

export default function TrustedCare() {
  return (
    <div className="text-white h-fit min-h-fit py-5">
      {/* Heading */}
      <div className="text-left flex flex-col items-start justify-start">
        <h1 className="text-[clamp(24px,9vw,60px)] mr-5">
          Trusted <b>Care</b>
        </h1>
        <p className="text-[clamp(7px,4vw,20px)] flex justify-start items-start md:items-center font-light w-full">
          Dedicated to providing gentle, modern dental care backed by years of
          trusted service
        </p>
      </div>
      <div className="w-full h-fit py-2 md:py-5 flex">
        {/* Content Card */}
        <div className="bg-white max-h-fit flex-col md:flex-row rounded-3xl rounded-br-[13vw] flex items-center py-5 pb-10 px-5 md:py-10">
          {/* Image Part */}
          <div className="self-stretch h-[250px] md:h-full w-full flex justify-center items-center rounded-5xl">
            <div
              className="w-[90%] h-[70%] sm:h-full bg-no-repeat rounded-4xl"
              style={{
                backgroundImage: `url(${images.aboutUsImage})`,
                backgroundPositionX: "100%",
                backgroundPositionY: "100%",
              }}
            ></div>
          </div>
          {/* Text Part */}
          <div className="text-[#739FEC] md:w-full text-left px-[5%] flex flex-col">
            <h1 className="font-bold text-[clamp(24px,9vw,50px)] leading-11 py-1 sm:leading-tight mb-3 md:mb-10">
              We've been in business since 2015
            </h1>
            <p className="text-[clamp(7px,4vw,15px)]">
              Established in 2015, Lumina Dental combines modern dental
              techniques with a caring approach, focusing on patient comfort,
              personalized treatment, and long term relationships built on
              trust.
            </p>
            <div className="mt-5 md:mt-10">
              <div className="flex items-center italic">
                <img className="mr-2" src={images.doubleCheckIcon} />{" "}
                <p className="leading-4 sm:leading-tight">Over 5,000 patients served</p>
              </div>
              <div className="flex items-center italic mt-2">
                <img className="mr-2" src={images.doubleCheckIcon} />{" "}
                <p className="leading-4 sm:leading-tight">Philippine Dental Association certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
