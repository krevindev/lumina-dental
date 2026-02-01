import AboutUs from "../sections/AboutUs";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";

export default function Home() {
  return (
    <div className="w-screen h-fit px-[10%] pt-30 flex flex-col">
      <Hero />
      <Services/>
      <AboutUs/>
      <Testimonials/>
    </div>
  );
}
