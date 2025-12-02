"use client";

import Footer from "@/components/footer";
import AboutUs from "./_components/about-us";
import ChooseGame from "./_components/choose-game";
import CTADisleksia from "./_components/cta-disleksia";
import Hero from "./_components/hero";
import WhyCaldis from "./_components/why-caldis";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <div className="bg-theme-purple-400 overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <WhyCaldis />
      <ChooseGame />
      <CTADisleksia />
      <AboutUs />
      <Footer />
    </>
  );
}
