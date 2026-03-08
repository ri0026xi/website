import Navigation from "@/components/layout/Navigation";
import SmoothScroll from "@/components/layout/SmoothScroll";
import MouseFollower from "@/components/canvas/MouseFollower";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <MouseFollower />
      <SmoothScroll>
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
