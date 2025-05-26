// import React from "react";
// import "./VisitDistillery.css";
// import image1 from "../assets/statue.jpg";
// import image2 from "../assets/still.jpg";
// import image3 from "../assets/distillery.jpg";

import React from "react";
import "./VisitDistillery.css";
import mainImg from "../assets/still.jpg";       // big background image
import topImg from "../assets/statue.jpg";      // top-right overlapping
import bottomImg from "../assets/distillery.jpg";    // bottom-left overlapping

const VisitDistillery = () => {
  return (
    <div className="visit-distillery">
      <img src={mainImg} alt="Distillery" className="main-img" />
      
      <img src={topImg} alt="Top statue" className="overlay-img top-right" />
      <img src={bottomImg} alt="Still" className="overlay-img bottom-left" />

      <div className="text-overlay">
        <h2>VISIT OUR<br />DISTILLERY</h2>
        <button className="explore-btn">PLAN & EXPLORE</button>
      </div>
    </div>
  );
};

export default VisitDistillery;
