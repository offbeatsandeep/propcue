'use client'

import About from "./components/Homepage/About";
import Contact from "./components/Homepage/Contact";
import Footer from "./components/Homepage/Footer";
import Header from "./components/Homepage/Header";
import Hero from "./components/Homepage/Hero";
import Project from "./components/Homepage/Projects";
import Testimonials from "./components/Homepage/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Testimonials />
      <Contact />
      <Project />
      <About />
      <Footer />
    </div>
  );
}
     