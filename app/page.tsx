"use client";

import Footer from "@/components/footer";
import AboutUs from "./_components/about-us";
import ChooseGame from "./_components/choose-game";
import CTADisleksia from "./_components/cta-disleksia";
import Hero from "./_components/hero";
import WhyCaldis from "./_components/why-caldis";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyCaldis />
      <ChooseGame />
      <CTADisleksia />
      <AboutUs />
      <Footer />
    </>
  );
}
