import { useEffect, useState } from "react";
import images from "../constants/images";
import menuIcon from "../assets/icons/menu-icon.svg";
import closeIcon from "../assets/icons/close-icon.svg";

export default function Header() {
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`${scrolled ? "backdrop-blur-2xl bg-[rgba(101,145,223,.5)] border-b h-20 shadow-xl shadow-[rgba(46,46,46,.05)]" : "bg-transparent h-30 border-none "} transition-all ease-in-out w-full border-[rgba(255,255,255,.4)] fixed z-100 px-[10%] top-0 left-0 flex justify-between items-center box-border text-white`}
    >
      {/* Right Container (Logo) */}
      <div>
        <img
          className="h-15 md:h-20 min-w-fit rounded-xl"
          src={images.mainLogo}
        />
      </div>
      {/* Left Container (Menu Nav)*/}
      <div className="w-1/2 text-xl flex flex-col justify-end text-nowrap">
        <button
          onClick={() => setIsSideNavOpen(true)}
          className="self-end justify-self-end h-full w-fit lg:hidden"
        >
          <img className="min-w-10" src={menuIcon} />
        </button>
        <ul className="px-5 rounded-2xl text-[16px] justify-end items-center h-full py-5 hidden lg:flex">
          <a href="#home">
            <li className="mr-10">Home</li>
          </a>
          <a href="#services">
            <li className="mr-10">Services</li>
          </a>
          <a href="#about-us">
            <li className="mr-10">About Us</li>
          </a>
          <a href="#contact-us">
            <button className="bg-white text-[#6591DF] px-5 py-1 rounded-lg cursor-pointer">
              Contact
            </button>
          </a>
        </ul>
      </div>
      {isSideNavOpen && (
        <div
          onClick={() => setIsSideNavOpen(false)}
          className={`fixed w-full bg-[rgba(0,0,0,.5)] top-0 right-0 flex flex-col lg:hidden h-screen text-black backdrop-blur-2xl transition-all ease-in`}
        ></div>
      )}
      <div
        className={`${isSideNavOpen ? "w-[200px] min-w-fit p-5" : "w-0 p-0"} fixed bg-white top-0 right-0 h-screen transition-all ease-in text-black flex flex-col box-border`}
      >
        <button onClick={() => setIsSideNavOpen(false)} className="">
          <img src={closeIcon} className="size-10" />
        </button>
        <ul className="self-center justify-self-center flex flex-col justify-center h-full items-center border w-full min-w-fit p-3 text-[#6591DF]">
          {[
            { title: "Home", href: "#home" },
            { title: "Services", href: "#services" },
            { title: "About Us", href: "#about-us" },
            { title: "Contact Us", href: "#contact-us" },
          ].map((navLink) => (
            <a
              className={`${isSideNavOpen ? "flex" : "hidden"} text-[clamp(18px,5vw,30px)] text-nowrap`}
              onClick={() => setIsSideNavOpen(false)}
              href={navLink.href}
            >
              <li>{navLink.title}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
