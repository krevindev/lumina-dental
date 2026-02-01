import MeetTheExperts from "./about-us-sections/MeetTheExperts";
import TrustedCare from "./about-us-sections/TrustedCare";

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen py-10">
      <TrustedCare />
      <MeetTheExperts/>
    </div>
  );
}
