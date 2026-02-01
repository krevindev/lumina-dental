import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function Testimonials() {
  return (
    <div className="max-h-screen min-h-[70vh] h-[70vh] w-full text-white grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] z-10 relative">
      <div className="bg-[#739FEC] w-125 h-125 opacity-60 absolute rounded-full z-0 left-[15%] -top-[90%] translate-y-[20%]" />
      <div className="bg-white w-125 h-125 fixed left-0 bottom-0 -translate-x-[80%] translate-y-[50%] rounded-full blur-[150px] z-0 opacity-40"></div>

      <div className=" flex justify-center items-start flex-col text-left z-10">

        <h1 className="text-5xl">
          Complete <b>Dental Care</b>, <br></br>
          <b>Personalized</b> for You
        </h1>
        <p className="text-2xl font-light mt-5">
          Patient feedback reflects the quality of care, professionalism, and
          patient focused approach provided by our clinic.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <TestimonialCarousel />
      </div>
    </div>
  );
}
