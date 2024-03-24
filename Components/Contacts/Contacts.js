"use client";
import React, { useRef } from "react";
import "./Contacts.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_2rn0qz1", "template_u9y438a", form.current, {
        publicKey: "dGd4u8GpxTAEhXlO1",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <section id="contacts" className="jk">
        <div className="cc">
          <div className="ci">Contact Me</div>
          <div className="ck">
            Please fill out the form below to discuss any work opportunities
          </div>
          <form onSubmit={sendEmail} ref={form} className="form">
            <input
              type="text"
              name="your_name"
              placeholder="Your Name"
              className="i1"
            />
            <input
              type="email"
              name="your_email"
              placeholder="Your Email"
              className="i2"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              className="i3"
            ></textarea>
            <button value="Send" className="ds">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Contact;
