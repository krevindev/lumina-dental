import { useEffect, useState } from "react";
import images from "../constants/images";

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div
      className={`${scrolled ? "backdrop-blur-2xl border-b h-20 shadow-lg shadow-[rgb(46,46,46, .4)]" : "bg-transparent h-30"} transition-all ease-in-out w-full border-[rgba(255,255,255,.4)] fixed z-100 px-[10%] top-0 left-0 flex justify-between items-center box-border text-white`}
    >
      {/* Right Container (Logo) */}
      <div>
        <img className="h-20 px-5 rounded-xl" src={images.mainLogo} />
      </div>
      {/* Left Container (Menu Nav)*/}
      <div className="w-1/2 text-xl flex justify-end">
        <ul className="px-5 rounded-2xl font-light flex justify-end items-center h-full py-5">
          <li className="mr-10">Home</li>
          <li className="mr-10">Services</li>
          <li className="mr-10">About Us</li>
          <button className="bg-white text-[#6591DF] px-5 py-1 rounded-lg">
            Contact
          </button>
        </ul>
      </div>
    </div>
  );
}
