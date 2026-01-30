import images from "../constants/images";

export default function Hero() {
  return (
    <div className="h-[80vh] bg-blue-300 my-5 text-white flex justify-between relative">
      <div className="bg-blue-200 z-0 w-[500px] h-[500px] fixed right-0 bottom-0 rounded-full blur-[100px] opacity-20"></div>
      {/* Left Container: Text */}
      <div className="w-1/2 flex z-10 justify-start items-center">
        <div className="w-[80%]">
          <div className="w-[80%]">
            <h1 className="text-left text-5xl">
              Where <b>Comfort</b> <br></br> Meets <b>Quality Care</b>
            </h1>
            <p className="text-left pt-5">
              We are dedicated to creating a calm and guided experience where
              comfort supports each step of your dental visit
            </p>
          </div>
          <div className="flex float-start mt-10 z-10">
            <button className="bg-white text-blue-300 px-7 py-2 rounded-lg mr-5">
              Get Started
            </button>
            <button className="px-7 py-2 rounded-lg border border-white">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      {/* Right Container: Image */}
      <div className="w-1/2  flex justify-center items-center z-10">
        <div className="h-[90%]">
          <img className="h-full" src={images.heroImage} />
        </div>
      </div>
    </div>
  );
}
