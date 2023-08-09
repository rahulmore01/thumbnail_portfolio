import React from "react";
import "./Hero.scss";
import Logo from "../../assets/images/logo.svg";
import ai from "../../assets/images/ai.png";
import canva from "../../assets/images/canva.png";
import ps from "../../assets/images/ps.png";
import lr from "../../assets/images/lr.png";
import figma from "../../assets/images/figma.png";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="hero_wrapper">
        <main className="hero_section tomato_g_bold">
          <h1 className="hero_title">Hire For Mind-Blowing Thumbnails </h1>
          <p className="hero_subtitle tomato_g_reg ">
            "Unlock New Dimensions of Visual Appeal, Captivate Your Audience,
            and Accelerate Your YouTube Channel's Success! also Command
            Attention and Make Your Content the Star of the Show, Drive Higher
            CTR, and Ignite Your YouTube Channel Growth!
          </p>
          <div className="btn tomato_g_med">
            <button className="tomato_g_med">Hire Me</button>
          </div>
        </main>
        <div className="hero_brands">
          <img className="start_img" src={ps} alt="" />
          <img src={lr} alt="" />
          <img src={canva} alt="" />
          <img src={figma} alt="" />
          <img className="end_img" src={ai} alt="" />
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="btn tomato_g_med">
          <button className="tomato_g_med">Hire Me</button>
        </div>
      </header>
    </>
  );
};

export default Hero;
