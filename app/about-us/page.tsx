import RunningTextSection from "@/components/running-text-section";
import Definition from "./_components/definition";
import HeroAboutUs from "./_components/hero-about-us";
import VisionAndMission from "./_components/vision-and-mission";
import GetToKnowMaskots from "./_components/get-to-know-maskots";
import OurTeam from "./_components/our-team";
import Footer from "@/components/footer";

export default function page() {
  return (
    <>
      <HeroAboutUs />
      <Definition />
      <VisionAndMission />
      <RunningTextSection />
      <GetToKnowMaskots />
      <OurTeam />
      <Footer />
    </>
  );
}
