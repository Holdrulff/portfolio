import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas); // Add the solid icon pack (includes social media icons)

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Wesley Fernandes
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-white hover:text-gray-400">
            Projetos
          </a>
          <a href="#skills" className="mr-5 text-white hover:text-gray-400">
            Habilidades
          </a>
        </nav>
        <a
          href="#contact"
          className="text-white inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contato
        </a>
      </div>
    </header>
  );
}
