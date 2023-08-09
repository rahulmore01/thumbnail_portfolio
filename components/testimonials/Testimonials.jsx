import React from "react";
import star from "../../assets/images/star.svg";
import ce from "../../assets/images/code_eater.png";
import piyush from "../../assets/images/piyush.png";
import smit from "../../assets/images/smit.png";
import "./Testimonials.scss";

export const TestimonialCard = ({
  card_text,
  user_name,
  user_position,
  user_img,
}) => {
  return (
    <div className="testi_card">
      <div className="stars">
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
      <div className="testi_card_text tomato_g_reg">{card_text}</div>
      <div className="testi_card_user">
        <img src={user_img} alt="" />
        <div className="user_details">
          <p className="card_user_name tomato_g_bold">{user_name}</p>
          <p className="card_user_position tomato_g_reg">{user_position}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="testimonial_section">
      <p className="testi_heading tomato_g_med">
        Our Happy clients say about us
      </p>
      <div className="testi_cards">
        <TestimonialCard
          card_text="the best lorem ispo hernn sdfskd,the be,st lorem ispo hernn sdfskd,st lorem ispo hernn sdfskd"
          user_name="Code Eater"
          user_position="Blockchain Instructor"
          user_img={ce}
        />
        <TestimonialCard
          card_text="the best lorem ispo hernn sdfskd,the be,st lorem ispo hernn sdfskd,st lorem ispo hernn sdfskd"
          user_name="Piyush Garg"
          user_position="Softwere Developer"
          user_img={piyush}
        />
        <TestimonialCard
          card_text="the best lorem ispo hernn sdfskd,the be,st lorem ispo hernn sdfskd,st lorem ispo hernn sdfskd"
          user_name="Dr Smit"
          user_position="Health Instructor"
          user_img={smit}
        />
      </div>
    </div>
  );
};

export default Testimonials;
