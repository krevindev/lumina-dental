import MeetTheExperts from "./about-us-sections/MeetTheExperts";
import OurLocation from "./about-us-sections/OurLocation";
import TrustedCare from "./about-us-sections/TrustedCare";

export default function AboutUs() {
  return (
    <div id="about-us" className="w-full min-h-screen py-10">
      <TrustedCare />
      <MeetTheExperts/>
      <OurLocation/>
    </div>
  );
}
