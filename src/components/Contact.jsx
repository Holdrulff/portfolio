import React from "react";
import { faEnvelope, fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    console.log("Iniciando o envio de email");
    const body = encode({ "form-name": "contact", name, email, message });
    console.log(body);
    e.preventDefaul();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
    console.log("Envio de email finalizado");
  }

  return (
    <section
      id="contact"
      className="relative text-gray-400 bg-gray-900 body-font"
    >
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=usp+leste&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ENDEREÇO
              </h2>
              <p className="mt-1 text-gray-200">
                Vila Silvia - Z/L - SP. <br />
                Próximo à USP - LESTE
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                wesley.fernan1@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                TELEFONE
              </h2>
              <p className="leading-relaxed text-gray-200">(19-99584-2471)</p>
            </div>
          </div>
        </div>
        <form netlify name="contact" onSubmit={handleSubmit}>
          <h2 className="text-white text-center sm:text-4xl text-3xl mb-1 font-medium title-font">
            CONTATE-ME:
          </h2>
          <p>
            <br />
          </p>
          <nav>
            <div className=" text-white inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              <a
                href="https://www.instagram.com/accounts/login/?hl=en"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faInstagram} /> wfernvndes
              </a>
              <div className="social-link">
                <a
                  href="https://www.instagram.com/accounts/login/?hl=en"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className=" text-white inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              <a href="https://wa.me/+5519995842471">
                <FontAwesomeIcon icon="comment-dots" /> WhatsApp
              </a>
            </div>
            <div className=" text-white inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              <a
                href="mailto:wesley.fernan1@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faEnvelope} /> E-Mail
              </a>
            </div>
            <div className=" text-white inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              <a
                href="https://github.com/Holdrulff"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </div>
          </nav>
        </form>
      </div>
    </section>
  );
}
