import React from "react";
import Navbar from "./components/navbar";
import About from "./componets/About"
import Projects from "./componets/Projects"
import Skills from "./componets/Skills"
import Testimonials from "./componets/Testimonials"
import Contact from "./componets/Contact"

export default function App() {
  return (
    <main className="text-gray 400 gb-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills/>
      <Testimonials/>
      <Contact/>
    </main>
  );
}
