import React, { useRef, useState } from "react";
import mobileIcon from "../public/img/mobileIcon.png";
import emailIcon from "../public/img/mailIco.png";
import emailjs from "@emailjs/browser";

import avatar from "../public/img/avatar.png";

export default function Contact() {
  const form = useRef();
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ox3539s",
        "template_e9m2pvb",
        form.current,
        "TllB92PtIX2KGPW-i"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSucess(true);
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );
  };


  return (
    <div className="section-contact" id="contact">
      <div className="contact-container">
        <div className="left-container">

          <form onSubmit={handleSubmit} ref={form}>
            <h1>Contact me:</h1>
            <input type="text" placeholder="Your name" name="name" required />
            <input
              type="email"
              placeholder="Your email"
              name="email"
              required
            />
            <textarea
              placeholder="Type your message"
              rows={10}
              name="message"
            />
            <button type="submit" value="Send">
              Send
            </button>
            <span>
              {sucess
                ? "Your message has been sent! Thank you!"
                : ""}{" "}
            </span>
            <span>{error ? "Something went wrong :(" : ""} </span>
          </form>
          <div className="contact">
            <span>
              <img src={mobileIcon} /> +94772422777
            </span>
            <span>
              <img src={emailIcon} ></img>
              <a
                href="mailto:nipunadk@gmal.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                nipunadk@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}