import { useEffect, useState } from "react";
import images from "../constants/images";

const heroImagesData = [
  images.heroImage1,
  images.heroImage2,
  images.heroImage3,
];

export default function Hero() {
  const [heroIndex, setHeroIndex] = useState<number>(0);

  useEffect(() => {
    const heroIndexInterval = setInterval(() => {
      setHeroIndex((prev) =>
        prev >= heroImagesData.length - 1 ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(heroIndexInterval);
  }, []);

  return (
    <div
      id="home"
      className="h-[80vh] text-white flex flex-col-reverse lg:flex-row justify-center lg:justify-between relative min-h-fit z-10"
    >
      {/* BG Elements */}
      <div className="bg-white z-0 w-125 h-125 fixed right-0 bottom-0 rounded-full blur-[100px] opacity-30"></div>
      <div className="bg-blue-200 z-0 w-125 h-125 absolute bottom-0 left-0 translate-y-[70%] -translate-x-[70%] rounded-full blur-[100px] opacity-40"></div>

      <div className="bg-[#739FEC] w-125 h-125 opacity-40 absolute rounded-full left-0 top-0 -translate-x-[70%] -translate-y-[70%]" />
      <div className="bg-[#739FEC] w-125 h-125 opacity-80 absolute rounded-full right-0 top-0 translate-x-[70%] -translate-y-[70%]" />

      {/* Left Container: Text */}
      <div className="w-full flex z-10 justify-center items-center lg:justify-start lg:w-1/2 text-left">
        <div className="w-full">
          <div className="w-full md:w-[80%] min-w-fit">
            {/* Header */}
            <h1 className="text-[clamp(24px,9vw,50px)] lg:text-[clamp(20px,9vw,50px)] leading-tight lg:leading-15">
              Where <b>Comfort</b> <br></br> Meets <b>Quality Care</b>
            </h1>
            {/* Subheader/ Description */}
            <p className="w-full lg:w-[70%] pt-3 lg:pt-7 text-[clamp(7px,4vw,20px)] font-light">
              We are dedicated to creating a calm and guided experience where
              comfort supports each step of your dental visit
            </p>
          </div>
          <div className="w-full flex justify-start items-center flex-wrap mt-3 lg:mt-10 z-10 text-[clamp(5px,4vw,16px)]">
            <button className="bg-white px-[4%] py-[1.5%] text-[#7ba2e6] rounded-lg active:translate-y-1 mr-2 my-2  h-fit text-nowrap">
              Get Started
            </button>
            <button className="rounded-lg border text-nowrap px-[4%] py-[1.5%] my-2 h-fit active:translate-y-1">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      {/* Right Container: Image */}
      <div className="lg:w-1/2 max-h-[80vh] flex-col z-10 h-full w-full flex justify-center items-center">
        {/* Hero Image */}
        <div
          className="h-[80%] lg:border-2 border-0 border-white w-full lg:w-[95%] bg-center bg-cover rounded-4xl rounded-br-[50px] lg:rounded-br-[150px] bg-no-repeat shadow-lg relative transition-all duration-1000 bg-white"
          style={{
            backgroundImage: `url(${heroImagesData[heroIndex]})`,
          }}
        >
          {/* Glass Phone Number */}
          <div
            style={{ animationDuration: "5s" }}
            className="bg-[rgba(0,0,0,.1)] lg:animate-bounce shadow-xl backdrop-blur ease-in-out px-5 py-2 rounded-2xl border border-[rgba(255,255,255,.3)] absolute -left-3 -bottom-3 lg:bottom-9 lg:-translate-x-1/4 flex justify-center items-center"
          >
            <img src={images.heroPhoneIcon} className="mr-2 size-8" />
            <div className="flex flex-col justify-start items-center">
              <p className="text-[10px] lg:text-sm">24 hour service</p>
              <h4 className="text-[12px] lg:text-sm font-bold">
                (302) 555-0107
              </h4>
            </div>
          </div>
          {/* Pagination Circles */}
          <div className="hidden lg:flex justify-between items-center self-center w-[10%] z-10 top-full left-1/2 -translate-x-1/2 absolute mt-5">
            {heroImagesData.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setHeroIndex(idx)}
                style={{
                  backgroundColor: `${idx === heroIndex ? "rgba(255,255,255,1)" : "rgba(0,0,0,0)"}`,
                }}
                className="min-w-2 min-h-2 h-2 w-2 mx-1 border-white border-2 rounded-full transition-all ease-in-out duration-1000"
              ></div>
            ))}
          </div>
          <div className="bg-white w-125 h-125 absolute right-0 -translate-x-1/2 -translate-y-1/2 bottom-0 rounded-full blur-[100px] opacity-40"></div>
          <div className="bg-white w-125 h-125 absolute left-0 top-0 translate-x-1/2 translate-y-1/2 rounded-full blur-[100px] opacity-40"></div>
        </div>
      </div>
    </div>
  );
}
