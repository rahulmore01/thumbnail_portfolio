import React from "react";
import "./ImgGrid.scss";
import img1 from "../../assets/thumbnails/degree.jpg";
import img2 from "../../assets/thumbnails/degree 2.jpg";
import img3 from "../../assets/thumbnails/degree 3.jpg";
import img4 from "../../assets/thumbnails/degree 4.jpg";
import img5 from "../../assets/thumbnails/degree 5.jpg";
import img6 from "../../assets/thumbnails/degree 6.jpg";
import heart from "../../assets/images/heart.png";

const thumbnails = [img1, img2, img6, img3, img4, img5];
// const thumbnails = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const ImgGrid = () => {
  return (
    <>
      <div className="imggrid_heading_wrapper">
        <h1 className="imggrid_heading tomato_g_med">Designs close to</h1>
        <img src={heart} alt="" />
      </div>
      <div className="thumbnail-grid">
        {thumbnails.map((thumbnail, index) => (
          <div className="thumbnail-item" key={index}>
            <img src={thumbnail} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImgGrid;
