import React, { useRef, useState } from "react";
import mobileIcon from "../public/img/mobileIcon.png";
import emailIcon from "../public/img/mailIco.png";
import emailjs from "@emailjs/browser";

import avatar from "../public/img/dp2.jpg";

export default function Contact() {
  const form = useRef();
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_737h1hq",
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
              placeholder="Type your contact and message"
              rows={10}
              name="message"
            />
            <button type="submit" value="Send">
              Send
            </button>
            <span>
              {sucess
                ? "Your message has been sent !"
                : ""}{" "}
            </span>
            <span>{error ? "Something went wrong :( Please use linkedIn/mobile to reach him while we look into it. Email-Team" : ""} </span>
          </form>
          <div className="contact">
            <span>
              <img src={mobileIcon} /> +94 77 24 22 777
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
