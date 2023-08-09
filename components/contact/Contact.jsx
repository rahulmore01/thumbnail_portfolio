import React from "react";
import "./Contact.scss";
import contact from "../../assets/animation/contact.json";
import Lottie from "lottie-react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import logo from "../../assets/images/logo.svg";

export const Foooter = () => {
  return (
    <>
      <footer className="footer">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <p className="copy tomato_g_reg">
          © All rights reserved by Rahul ✦ Rahul More
        </p>
      </footer>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <h1 className="contact_heading tomato_g_med">Let's Get In Touch</h1>

      <div className="contact_section">
        <div className="contact_text tomato_g_med">
          <h3 className="contact_text_heading tomato_g_med">
            Want to create awesomeness together? Got questions?
            <br /> Let’s talk.
          </h3>

          <a className="contact_text_whatsapp_a" href="">
            <p className="contact_text_whatsapp">
              <IoLogoWhatsapp className="icon" />
              <span>Whatsapp</span>
            </p>
          </a>

          <a href="" className="contact_text_email_a">
            <p className="contact_text_mail">
              <MdEmail className="icon" />
              <span>morerahul620@gmail.com</span>
            </p>
          </a>
          <a href="" className="contact_text_linkedin_a">
            <p className="contact_text_linkedin">
              <AiFillLinkedin className="icon" />
              <span>Rahul-More</span>
            </p>
          </a>
        </div>
        <div className="contact_lottie">
          <Lottie animationData={contact} loop={true} />
        </div>
      </div>
      <Foooter />
    </>
  );
};

export default Contact;
