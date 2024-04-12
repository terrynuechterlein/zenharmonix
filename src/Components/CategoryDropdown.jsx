// CategoryDropdown.jsx
import React from "react";
import "./categorydropdown.css";

const CategoryDropdown = ({
  category,
  setShowCategories,
  showCategories,
  handleCategorySelect,
}) => {
  return (
    <>
      <button
        className="category_dropdown"
        onClick={() => setShowCategories(!showCategories)}>
        {category} ▼
      </button>
      {showCategories && (
        <div className="categories_menu">
          <div onClick={() => handleCategorySelect("mood")}>mood</div>
          <div onClick={() => handleCategorySelect("genre")}>genre</div>
          <div onClick={() => handleCategorySelect("worldMusic")}>
            world music
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryDropdown;
