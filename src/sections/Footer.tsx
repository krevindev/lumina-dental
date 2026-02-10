import images from "@/constants/images";
import fbIcon from "../assets/icons/fb-icon.svg";
import liIcon from "../assets/icons/li-icon.svg";
import igIcon from "../assets/icons/ig-icon.svg";

export default function Footer() {
  return (
    <footer className="w-full text-white px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
        {/* Brand */}
        <div className="flex flex-col gap-2 md:items-start md:flex justify-center items-center">
          <img
            className="w-44"
            src={images.mainLogo}
            alt="Lumina Dental Logo"
          />
          <p className="text-xs md:text-left leading-5 w-full font-light max-w-md">
            Lumina Dental offers dependable dental treatments supported by
            modern facilities and an experienced dental team. We focus on
            delivering consistent, patient centered care in a clean and
            professional environment.
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4 items-center">
          <h2 className="font-semibold text-lg text-center md:text-left">
            Contact Us
          </h2>

          <div className="flex flex-row md:flex-col gap-3 justify-center md:justify-start md:items-start items-center text-center md:text-left">
            <div className="text-xs">
              <p className="font-semibold">Marcelius Branch</p>
              <p className="font-light">+63 917 123 4567</p>
            </div>

            <div className="text-xs">
              <p className="font-semibold">San Dico Branch</p>
              <p className="font-light">+63 905 234 7890</p>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-4 justify-start items-center">
          <h2 className="font-semibold text-lg">Follow Us</h2>
          <div className="flex gap-3 items-center">
            <img className="size-6" src={fbIcon} />
            <img className="size-6" src={liIcon} />
            <img className="size-6" src={igIcon} />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 py-5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p>All rights reserved</p>
          <div className="flex gap-6">
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
