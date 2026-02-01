import { FormButton } from "@/components/FormButton";
import { FormInput } from "@/components/FormInput";
import { FormSelect } from "@/components/FormSelect";
import { FormTextArea } from "@/components/FormTextArea";
import images from "@/constants/images";

export default function ContactUs() {
  return (
    <div className="min-h-[80vh] relative flex flex-col justify-center items-center text-[#6591DF] bg-radial from-[#B3CEFF] to-white py-20">
      <div className="w-[150vw] bg-white h-full left-1/2 -translate-x-1/2 absolute z-10" />
      {/*  Heading*/}
      <div className="z-20 text-center w-full mb-20">
        <h1 className="text-[#6591DF] text-5xl">
          <b>Contact</b> Us
        </h1>
      </div>
      {/* Body */}
      <div className="w-full h-full grid grid-cols-2 text-black z-10">
        <div className="w-full h-full flex flex-col justify-start items-start">
          <h2 className="text-[#6591DF] py-5 text-xl">NEED HELP?</h2>
          {/* Get in Touch Card */}
          <div className="bg-[#6591DF] bg-radial from-[rgba(255,255,255,.2)] w-[70%] text-left rounded-xl rounded-br-[100px] text-white py-10 px-5">
            <h1 className=" text-5xl font-bold">Get in Touch</h1>
            <p className="font-light pt-5">
              Have a question or dental concern? Get in touch with Lumina Dental
              and receive personalized support from our experienced team.
            </p>
          </div>
          <div>
            {/*  */}
            <div className="grid mt-10 text-[#6591DF] grid-cols-[auto_1fr] gap-x-3  text-left">
              <img
                className="row-start-1 col-start-1 col-end-1 row-end-1 "
                src={images.phoneOutlineIcon}
              />
              <h5 className="row-start-1 font-bold text-lg">
                Emergency Contact:
              </h5>
              <p className="col-start-2">+639 35345 345</p>
            </div>
            {/*  */}
            <div className="grid mt-5 text-[#6591DF] grid-cols-[auto_1fr] gap-x-3  text-left">
              <img
                className="row-start-1 col-start-1 col-end-1 row-end-1 "
                src={images.phoneOutlineIcon}
              />
              <h5 className="row-start-1 font-bold text-lg">Mail Us:</h5>
              <p className="col-start-2">luminadentalph@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="px-5 w-full h-fit ">
          <form className="bg-white h-fit w-full rounded-3xl p-10 border-[rgba(101,145,223,.43)] border shadow-lg py-12">
            <FormInput placeholder="Full Name" type="text" />
            <FormInput placeholder="Phone Number" type="text" />
            <FormInput placeholder="Email (Optional)" type="email" />
            <FormSelect />
            <FormTextArea />
            <FormButton />
          </form>
        </div>
      </div>
    </div>
  );
}
