"use client";

import { Linkedin } from "@/app/components/icons/linkedin";
import "./contact.scss";
import { ChevronRight } from "@/app/components/icons/chevron-right";
import { Github } from "@/app/components/icons/github";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParam = {
      from_name: name,
      email: email,
      message: message,
      subject: subject,
    };

    emailjs
      .send(
        "service_4g9rz9n",
        "template_y8a1rlc",
        templateParam,
        "UWnQjeUN0cQaSq3lv"
      )
      .then(
        (response) => {
          console.log("Email enviado", response);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (err) => {
          console.log("Erro: ", err);
        }
      );
  }

  return (
    <div className="contact" id="contact">
      <div className="contact-content">
        <div className="contact-inputs">
          <div className="title">
            <ChevronRight />
            <h1>Contato</h1>
          </div>
          <form className="form" onSubmit={sendEmail} id="myForm">
            <div className="inputs">
              <input
                type="text"
                value={name}
                placeholder="Digite seu nome e sobrenome"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                value={email}
                placeholder="Digite seu e-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                value={subject}
                placeholder="Digite o assunto"
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                placeholder="Sua mengagem..."
                value={message}
                cols={30}
                rows={10}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>

        <div className="contact-infos">
          <div className="email">
            <h1>E-mail para contato</h1>
            <p>lucas09.eiji@gmail.com</p>
          </div>

          <div className="social-midia">
            <div className="git">
              <a href="https://github.com/eijilucas" target="_blank">
                <Github />
              </a>
              <p>/eijilucas</p>
            </div>
            <div className="linkedin">
              <a href="https://www.linkedin.com/in/eijilucas/" target="_blank">
                <Linkedin />
              </a>
              <p>/eijilucas</p>
            </div>
          </div>
        </div>
      </div>
      <p>© 2023 / Lucas Eiji / Todos os direitos reservados</p>
    </div>
  );
}
