import React, { useRef } from "react";
import mobileIcon from "../public/img/mobileIcon.png";
import emailIcon from "../public/img/mailIco.png";
import twitterIcon from "../public/img/twitter.png";
import emailjs from "@emailjs/browser";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ulqxuyp",
        "template_e9m2pvb",
        form.current,
        "TllB92PtIX2KGPW-i"
      )
      .then(
        (result) => {
          var allInputs = document.querySelectorAll("input");
          allInputs.forEach((singleInput) => (singleInput.value = ""));
          var textArea = document.querySelectorAll("textarea");
          textArea.forEach((singleInput) => (singleInput.value = ""));
          toast("Your email has been sent !");
        },
        (error) => {
          toast.error(
            "Something went wrong :( Please use LinkedIn/mobile to reach"
          );
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
              rows={5}
              name="message"
            />
            <button type="submit" value="Send">
              Send Email
            </button>
          </form>
          <div className="contact">
            <span>
              <img src={emailIcon} alt="email"></img>
              <a
                href="mailto:dkcngomes@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                dkcngomes@gmail.com
              </a>
            </span>
            <span>
              <img src={mobileIcon} alt="mobile" /> +94 77 24 22 777
            </span>
            <span>
              <img src={twitterIcon} alt="twitter" />
              <a
                href="https://twitter.com/dkcnipuna"
                target="_blank"
                rel="noreferrer"
              >
                https://twitter.com/dkcnipuna
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
