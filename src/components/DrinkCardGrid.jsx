import React from "react";
import DrinkCard from "./DrinkCard";
import "./DrinkCardGrid.css";

const DrinkCardGrid = ({ cocktails, filters }) => {
  const { product, tags } = filters;

  const filteredCocktails = cocktails.filter(({ front, back }) => {
    const matchesProduct =
      product === "PRODUCT" || front.brand.toUpperCase() === product.toUpperCase();

    const matchesTags =
      tags.length === 0 || tags.every((tag) => back.tags.includes(tag));

    return matchesProduct && matchesTags;
  });

  return (
    <div className="card-grid">
      {filteredCocktails.map(({ front, back }, i) => (
        <DrinkCard key={i} front={front} back={back} />
      ))}
    </div>
  );
};

export default DrinkCardGrid;
