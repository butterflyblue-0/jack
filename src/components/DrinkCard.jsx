import React from "react";
import "./DrinkCard.css";

const DrinkCard = ({ front, back }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={front.image} alt={front.name} className="card-image" />
          <div className="card-text">
            <h3>{front.name}</h3>
            <p>{front.brand}</p>
          </div>
        </div>

        <div
          className="card-back"
          style={{ backgroundImage: `url(${front.image})` }}
        >
          <div className="card-overlay">
            <div className="card-back-content">
              <p className="description">{back.description}</p>
              <div className="middle-group">
                <p className="difficulty">DIFFICULTY: {back.difficulty}</p>
                <p className="tags">{back.tags.join(" • ")}</p>
              </div>
              <button className="view-button">VIEW RECIPE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
