import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function Testimonials() {
  return (
    <div className=" max-h-screen min-h-fit h-fit py-20 w-full text-white grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] z-10 relative">
      {/* <div className="bg-[#739FEC] w-125 h-125 opacity-60 absolute rounded-full z-0 left-[15%] -top-[90%] translate-y-[20%]" /> */}
      <div className="bg-white w-125 h-125 fixed left-0 bottom-0 -translate-x-[80%] translate-y-[50%] rounded-full blur-[150px] z-0 opacity-40"></div>

      <div className="pb-10 md:pb-0 flex justify-center items-start flex-col text-left z-10">
        <h1 className="text-[clamp(24px,9vw,50px)] text-left w-full lg:text-[clamp(15px,9vw,50px)] leading-tight lg:leading-15">
          Complete <b>Dental Care</b>, <b>Personalized</b> for You
        </h1>
        <p className="text-[clamp(7px,4vw,20px)] w-full text-left font-light mt-2 flex justify-start items-start">
          Patient feedback reflects the quality of care, professionalism, and
          patient focused approach provided by our clinic.
        </p>
      </div>
      <div className="flex justify-center items-center min-h-fit">
        <TestimonialCarousel />
      </div>
    </div>
  );
}
