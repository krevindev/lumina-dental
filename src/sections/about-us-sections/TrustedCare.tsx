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
        <div className="bg-white max-h-fit flex-col lg:flex-row rounded-3xl rounded-br-[60px] sm:rounded-br-[13vw] flex items-center py-5 pb-5 mt-5 px-5 sm:py-10">
          {/* Image Element */}
          <div className="self-stretch h-[200px] lg:h-full w-full flex justify-center items-center rounded-5xl">
            <div
              className="w-[90%] h-full bg-no-repeat bg-center bg-cover rounded-4xl bg-left-5 bg-top-100"
              style={{
                backgroundImage: `url(${images.aboutUsImage})`,
              
              }}
            ></div>
          </div>
          {/* Text Part */}
          <div className="text-[#739FEC] md:w-full text-left px-[5%] flex flex-col">
            <div className="flex flex-col justify-start items-start pt-2">
              <h1 className="font-bold text-[clamp(24px,8vw,50px)] leading-10 py-1 md:leading-11 sm:leading-tight mb-3">
                We've been in business since 2015
              </h1>
              <p className="text-[clamp(7px,4vw,15px)] w-full sm:w-[80%]">
                Established in 2015, Lumina Dental combines modern dental
                techniques with a caring approach, focusing on patient comfort,
                personalized treatment, and long term relationships built on
                trust.
              </p>
              <div className="mt-5 md:mt-10">
                <div className="flex items-center italic">
                  <img className="mr-2" src={images.doubleCheckIcon} />{" "}
                  <p className="leading-4 sm:leading-tight">
                    Over 5,000 patients served
                  </p>
                </div>
                <div className="flex items-center italic mt-2">
                  <img className="mr-2" src={images.doubleCheckIcon} />{" "}
                  <p className="leading-4 sm:leading-tight">
                    Philippine Dental Association certified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
