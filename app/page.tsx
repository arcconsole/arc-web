import NavBar from "@/components/navBar";
import Hero from "./sections/hero";
import Nemo from "./sections/nemo";
import Features from "./sections/features";
import Footer from "./sections/footer";
import Mainfeatures from "./sections/mainfeatures";
import GlowSection from "./sections/glowSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Nemo />
      <Features />
      <GlowSection />
      <Mainfeatures />
      <Footer />
    </>
  );
}
