import React from "react";

export default function About() {
  return (
    <section id="about" className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="flex justify-center items-center">
            <h1 className="lg:text-center md:text-3xl title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Wesley Fernandes
            </h1>
          </div>
          <div>
            <h1 className="text-left title-font md:text-2xl sm:text-2xl text-3xl mb-4 font-medium text-white">
              Estudante de Sistemas de Informação - USP
            </h1>
          </div>
          <span class="text-justify">
            <p className="mb-8 leading-relaxed">
              Estudante de Sistemas de Informação que ama resolver problemas
              complexos e trabalhar com pessoas. Busco participar de projetos
              que desafiem minhas habilidades e conhecimentos, e que motivem o
              aprendizado constante.
            </p>
            <p className="mb-8 leading-relaxed">
              Além da programação, minha paixão está na segurança cibernética,
              onde exploro constantemente novas técnicas e estratégias para
              proteger ativos digitais e contra ameaças cibernéticas.
            </p>
            <p className="mb-8 leading-relaxed">
              Entusiasta ávido de testes de penetração, fascinado pelas
              complexidades do hacking ético. Aprimoro continuamente meu
              conhecimento e experiência em identificar vulnerabilidades e
              proteger sistemas.
            </p>
          </span>
          <div class="flex justify-center">
            <a
              href="#contact"
              class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Trabalhe comigo
            </a>
            <a
              href="#projects"
              class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Veja meus projetos
            </a>
          </div>
        </div>
        <div className="lg:p-16 md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./me.jpg"
          />
        </div>
      </div>
    </section>
  );
}
