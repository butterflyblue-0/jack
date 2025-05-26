import React from "react";
import "./LimitedEdition.css";
import bottleImg from "../assets/bottle.png"; // your image here

const LimitedEdition = () => {
  return (
    <section className="limited-edition">
      <div className="limited-left">
        <p className="code-label">MCLXJD</p>
        <h2 className="headline">LIMITED EDITION<br />BOTTLE</h2>
        <p className="limited-description">
          As the 2025 race season is under way, Jack Daniel's and McLaren Racing enter into
          the third year of a multi-year partnership. The collaboration brings special edition
          bottles, a variety of events, and themed programs to new and seasoned race fans
          across the globe.
        </p>
        <button className="track-button">STAY ON TRACK</button>
      </div>

      <div className="limited-right">
        <img src={bottleImg} alt="Jack Daniel's MCLXJD bottle" />
      </div>
    </section>
  );
};

export default LimitedEdition;
