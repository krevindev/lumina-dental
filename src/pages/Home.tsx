import ContactUs from "@/sections/ContactUs";
import AboutUs from "../sections/AboutUs";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div className="w-screen h-fit px-[10%] pt-25 flex flex-col">
      <Hero />
      <Services/>
      <AboutUs/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
