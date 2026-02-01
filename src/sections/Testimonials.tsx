import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function Testimonials() {
  return (
    <div className="h-screen w-full text-white grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
      <div className=" flex justify-center items-start flex-col text-left">
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
