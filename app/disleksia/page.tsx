import Footer from "@/components/footer";
import EarlySign from "./_components/early-signs";
import HeroDisleksia from "./_components/hero-disleksia";
import HowWeHelp from "./_components/how-we-hep";
import MythVsFact from "./_components/myth-vs-fact";
import RunningTextSection from "../../components/running-text-section";
import TheStrengths from "./_components/the-strengths";
import UnderstandingDisleksia from "./_components/understanding-disleksia";
import Navbar from "@/components/navbar";

export default function page() {
  return (
    <>
      <div className="bg-theme-coral relative overflow-hidden">
        <Navbar />
        <HeroDisleksia />
      </div>
      <UnderstandingDisleksia />
      <RunningTextSection />
      <MythVsFact />
      <TheStrengths />
      <EarlySign />
      <HowWeHelp />
      <Footer />
    </>
  );
}
