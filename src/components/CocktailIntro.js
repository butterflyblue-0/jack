import React from "react";
import "./CocktailIntro.css";

const CocktailIntro = () => {
  return (
    <section className="cocktail-intro">
      <div className="breadcrumb">
        <span>Home</span> / <span className="active">Cocktails</span>
      </div>
      <h1 className="intro-heading">
        LET'S TALK <br /> COCKTAILS!
      </h1>
    </section>
  );
};

export default CocktailIntro;
