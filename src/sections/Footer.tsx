import images from "@/constants/images";

export default function Footer() {
  return (
    <div className="h-fit min-h-fit w-full grid grid-cols-3 grid-rows-3 py-10 text-white text-left gap-5">
      {/* Row 1 */}
      <div className=" row-span-3 w-full col-span-1 flex flex-col">
        <img className="w-[50%] min-w-[150px]" src={images.mainLogo} />
        <p className="text-left text-[11px] max-w-[80%] leading-5 tracking-wide font-light">
          Lumina Dental offers dependable dental treatments supported by modern
          facilities and an experienced dental team. We focus on delivering
          consistent, patient centered care in a clean and professional
          environment.
        </p>
      </div>
      {/* Row 2 */}
      <div className="  row-span-full grid col-start-2 row-start-1">
        <h2 className="font-bold text-lg">Contact Us</h2>
        <div className="text-xs">
          <p className="font-semibold">Marcelius Branch</p>
          <p className="font-light">+63 917 123 4567</p>
        </div>
        <div className="text-xs">
          <p className="font-semibold">San Dico Branch</p>
          <p className="font-light">+63 905 234 7890</p>
        </div>
      </div>
      {/* Row 3 */}
      <div className=" col-start-3">
        <h2 className="font-semibold text-lg">Follow Us</h2>
      </div>
      <div className="w-full border-t col-span-full flex items-center justify-between py-5 text-sm font-light">
        <p>All rights reserved</p>
        <div className="flex items-center">
          <p className="ml-5">Privacy Policy</p>
          <p className="ml-5">Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
}
