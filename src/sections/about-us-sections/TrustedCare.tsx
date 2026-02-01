import images from "../../constants/images";

export default function TrustedCare() {
  return (
    <div className="text-white">
      {/* Heading */}
      <div className="text-left flex flex-col items-start justify-start">
        <h1 className="text-5xl mr-5">
          Trusted <b>Care</b>
        </h1>
        <p className="text-xl font-light w-1/2 pt-2">
          Dedicated to providing gentle, modern dental care backed by years of
          trusted service
        </p>
      </div>
      <div className="w-full h-[70vh] my-10">
        {/* Content Card */}
        <div className="bg-white h-full rounded-3xl rounded-br-[120px] flex items-center">
          {/* Image Part */}
          <div className="w-1/2 h-full flex justify-center items-center rounded-5xl">
            <div
              className="w-[90%] h-[90%] bg-no-repeat rounded-4xl"
              style={{
                backgroundImage: `url(${images.aboutUsImage})`,
                backgroundPositionX: "100%",
                backgroundPositionY: "100%",
              }}
            ></div>
          </div>
          {/* Text Part */}
          <div className="text-[#739FEC] text-left w-1/2 px-20">
            <h1 className="font-bold text-5xl mb-10">
              We've been in business since 2015
            </h1>
            <p className="text-xl">
              Established in 2015, Lumina Dental combines modern dental
              techniques with a caring approach, focusing on patient comfort,
              personalized treatment, and long term relationships built on
              trust.
            </p>
            <div className="mt-10">
              <div className="flex items-center italic">
                <img src={images.doubleCheckIcon} />{" "}
                <p>Over 5,000 patients served</p>
              </div>
              <div className="flex items-center italic">
                <img src={images.doubleCheckIcon} />{" "}
                <p>Philippine Dental Association certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
