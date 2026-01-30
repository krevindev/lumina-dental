import images from "../constants/images";

export default function Header() {
  return (
    <div className=" w-full fixed z-[100] px-20 top-0 left-0 flex justify-between items-center box-border z-10 text-white h-30">
      {/* Right Container (Logo) */}
      <div>
        <img className="h-20 backdrop-blur-sm px-5 rounded-xl" src={images.mainLogo} />
      </div>
      {/* Left Container (Menu Nav)*/}
      <div className="w-1/2 flex justify-end">
        <ul className="px-5 rounded-2xl flex justify-end h-full items-stretch backdrop-blur-sm py-5">
          <li className="mr-10">Home</li>
          <li className="mr-10">Services</li>
          <li className="mr-10">About Us</li>
          <button className="bg-white text-blue-300 px-5 rounded-lg">
            Contact
          </button>
        </ul>
      </div>
    </div>
  );
}
