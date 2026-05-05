import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Differentials from "@/components/sections/Differentials";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
