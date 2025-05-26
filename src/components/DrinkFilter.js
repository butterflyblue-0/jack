import React, { useState } from "react";
import "./DrinkFilter.css";

const productOptions = [
  "PRODUCT",
  "SINGLE BARREL SELECT",
  "GENTLEMAN JACK",
  "JACK DANIEL'S BONDED",
  "TENNESSEE APPLE",
  "TENNESSEE HONEY",
  "TENNESSEE FIRE",
  "OLD NO. 7"
];

const occasionOptions = [
  "OCCASION",
  "HOLIDAYS & SPECIAL OCCASIONS",
  "RELAXING AT HOME",
  "BACKYARD BBQ",
  "DINNER PARTY",
  "BRUNCH",
  "GAME DAY / WATCH PARTY",
  "HOME MOVIE NIGHT",
  "DATE NIGHT",
  "BIRTHDAYS",
  "GAME NIGHT",
  "BATCH",
  "AFTER WORK",
  "SEASONAL"
];

const flavorTags = [
  "BITTER", "FRUITY", "SOUR", "SPICY", "SMOOTH", "SWEET", "CITRUS",
  "REFRESHING", "HERBAL", "SAVORY", "CRISP", "ON THE ROCKS",
  "ZERO ALCOHOL", "NEAT"
];

const DrinkFilter = ({ onFilterChange }) => {
  const [selectedProduct, setSelectedProduct] = useState("PRODUCT");
  const [selectedOccasion, setSelectedOccasion] = useState("OCCASION");
  const [activeTags, setActiveTags] = useState([]);

  const toggleTag = (tag) => {
    const updated =
      activeTags.includes(tag)
        ? activeTags.filter((t) => t !== tag)
        : [...activeTags, tag];
    setActiveTags(updated);
    onFilterChange({ product: selectedProduct, occasion: selectedOccasion, tags: updated });
  };

  const handleSelectChange = (type, value) => {
    if (type === "product") {
      setSelectedProduct(value);
      onFilterChange({ product: value, occasion: selectedOccasion, tags: activeTags });
    } else {
      setSelectedOccasion(value);
      onFilterChange({ product: selectedProduct, occasion: value, tags: activeTags });
    }
  };

  return (
    <section className="drink-filter">
      <h2 className="filter-title">I LIKE MY DRINKS</h2>

      <div className="filter-controls">
        <select
          className="dropdown"
          value={selectedProduct}
          onChange={(e) => handleSelectChange("product", e.target.value)}
        >
          {productOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>

        <select
          className="dropdown"
          value={selectedOccasion}
          onChange={(e) => handleSelectChange("occasion", e.target.value)}
        >
          {occasionOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="tag-grid">
        {flavorTags.map((tag) => (
          <button
            key={tag}
            className={`tag-button ${activeTags.includes(tag) ? "active" : ""}`}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
};

export default DrinkFilter;
