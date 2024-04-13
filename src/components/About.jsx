import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
              Prazer, eu sou o Wesley!
            </h1>
          </div>
          <div>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
              Seja bem-vindo(a) a minha pagina
            </h1>
          </div>

          <p className="mb-8 leading-relaxed">
            Como estudante de Sistemas de Informação, estou profundamente imerso
            no mundo da tecnologia, com grande interesse em linguagens de
            programação como C, Python e JavaScript. Através de experiência
            prática e projetos acadêmicos, aprimorei minhas habilidades nessas
            linguagens, permitindo-me enfrentar problemas complexos e
            desenvolver soluções inovadoras.
          </p>
          <p className="mb-8 leading-relaxed">
            Além da programação, minha paixão está na segurança cibernética,
            onde exploro constantemente novas técnicas e estratégias para
            proteger ativos digitais e contra ameaças cibernéticas. Estou
            comprometido em me manter atualizado sobre as últimas tendências e
            avanços em segurança cibernética para garantir que estou bem
            equipado para lidar com o cenário em evolução dos riscos
            cibernéticos.
          </p>
          <p className="mb-8 leading-relaxed">
            Além disso, sou um entusiasta ávido de testes de penetração,
            fascinado pelas complexidades do hacking ético e testes de
            penetração. Através do aprendizado autodirigido e da participação em
            competições Capture The Flag (CTF), aprimoro continuamente meu
            conhecimento e experiência em identificar vulnerabilidades e
            proteger sistemas.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Trabalhe comigo
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Veja meus projetos
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
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
