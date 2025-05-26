import React from "react";
import "./FooterLegal.css";

const FooterLegal = () => {
  return (
    <div className="footer-legal">
      <div className="language-selector">
        🌐 GLOBAL – ENGLISH ▼
      </div>

      <p className="location">Jack Daniel Distillery Lynchburg, Tennessee</p>

      <p className="legal-text">
        JACK, JACK DANIEL’S, OLD NO. 7, JD, GENTLEMAN JACK, JACK HONEY, JACK FIRE,
        and COUNTRY COCKTAILS are registered trademarks of Jack Daniel’s Properties, Inc.
        ©2025. All rights reserved. Please do not share or forward with anyone under the
        legal drinking age.
      </p>

      <a href="#" className="legal-link">Do Not Sell or Share My Data</a>

      <p className="legal-text">
        To learn more about responsible consumption, please visit
        <a href="https://www.responsibility.org/"> Responsibility.org</a> and
        <a href="#"> Our Thinking About Drinking</a>.
      </p>

      <p className="legal-text">All other trademarks and trade names are properties of their respective owners.</p>
      <p className="legal-text">Please do not share or forward with anyone under the legal drinking age.</p>
      <p className="legal-text">Products depicted, including proof and package, may vary by country.</p>

      <button className="cookie-btn">🍪 COOKIE PREFERENCES</button>
    </div>
  );
};

export default FooterLegal;
