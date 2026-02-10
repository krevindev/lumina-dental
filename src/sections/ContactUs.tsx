import { FormButton } from "@/components/FormButton";
import { FormInput } from "@/components/FormInput";
import { FormSelect } from "@/components/FormSelect";
import { FormTextArea } from "@/components/FormTextArea";
import images from "@/constants/images";

export default function ContactUs() {
  return (
    <div id="contact-us" className="min-h-[80vh] relative flex flex-col justify-center items-center text-[#6591DF] bg-radial from-[#B3CEFF] to-white py-20">
      <div className="w-[150vw] bg-white h-full left-1/2 -translate-x-1/2 absolute z-10" />

      {/* Body */}
      <div className="w-full h-full grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-1 text-black z-10">
        <div className="w-full h-full flex flex-col justify-center items-start">
          {/* Get in Touch Card */}
          <div className="bg-[#6591DF] w-full md:max-w-[450px] md:w-[90%] bg-radial from-[rgba(255,255,255,.2)] text-left rounded-xl rounded-br-xl md:rounded-br-[100px] text-white py-[6%] sm:py-10 px-5">
            <h2 className="text-white text-xl">NEED HELP?</h2>

            <h1 className="text-[clamp(24px,4vw,45px)] leading-tight font-bold py-2">Get in Touch</h1>
            <p className="font-light text-[clamp(7px,3vw,15px)]">
              Have a question or dental concern? Get in touch with Lumina Dental
              and receive personalized support from our experienced team.
            </p>
          </div>
          <div>
            <div className="hidden sm:grid grid-rows-1 grid-cols-2 md:grid-cols-1 md:grid-rows-2 w-full py-5">
              {/*  */}
              <div className="grid text-[#6591DF] my-1 h-full grid-cols-[auto_1fr] grid-rows-2 gap-x-3 text-left">
                <img
                  className="row-start-1 col-start-1 size-5 col-end-1 row-end-1"
                  src={images.phoneOutlineIcon}
                />
                <h5 className="row-start-1 font-bold text-md">
                  Emergency Contact
                </h5>
                <p className="col-start-2 text-sm">+639 35345 345</p>
              </div>
              {/*  */}
              <div className="grid my-1 h-full text-[#6591DF] grid-cols-[auto_1fr] grid-rows-2 gap-x-3  text-left">
                <img
                  className="row-start-1 col-start-1 size-5 col-end-1 row-end-1 "
                  src={images.emailOutlineIcon}
                />
                <h5 className="row-start-1 font-bold text-md">Mail Us</h5>
                <p className="col-start-2 text-sm">luminadentalph@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-fit ">
          <form className="bg-white h-fit my-3 p-6 sm:p-10 xl:p-20 w-full max-w-[600px] rounded-2xl border-[rgba(101,145,223,.43)] border shadow-lg py-12]">
            {/*  Heading*/}
            <div className="z-20 text-center w-full mb-3 md:mb-10">
              <h1 className="text-[#6591DF] text-[clamp(24px,9vw,45px)] text-nowrap">
                <b>Contact</b> Us
              </h1>
            </div>
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
