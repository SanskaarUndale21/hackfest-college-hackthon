import { Hero } from "@/components/Hero";
import { CaptainsLog } from "@/components/CaptainsLog";
import { Tracks } from "@/components/Tracks";
import { VoyageLogs } from "@/components/VoyageLogs";
import { PrizePool } from "@/components/PrizePool";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { ScrollAnimation } from "@/components/ScrollAnimation"; // We will create this

export default function Home() {
  return (
    <div className="relative bg-black">
      {/* Hero is full-screen */}
      <Hero />

      {/* Scrollable content below hero */}
      <div className="relative pointer-events-auto z-10 bg-transparent overflow-hidden">
        <ScrollAnimation><CaptainsLog /></ScrollAnimation>
        <ScrollAnimation><Tracks /></ScrollAnimation>
        <ScrollAnimation><VoyageLogs /></ScrollAnimation>
        <ScrollAnimation><PrizePool /></ScrollAnimation>
        <ScrollAnimation><FAQ /></ScrollAnimation>
        <Footer />
      </div>
    </div>
  );
}
