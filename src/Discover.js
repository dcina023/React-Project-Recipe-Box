import React, { useState } from "react";
import RecipeCard from "./RecipeCard";

function Discover({ recipes, onAddFavorite }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesDifficulty =
      selectedCategory ? recipe.difficulty === selectedCategory : true;

    const matchesMealType =
      selectedType ? recipe.mealType.includes(selectedType) : true;

    return matchesDifficulty && matchesMealType;
  });

  return (
    <div>
      <label htmlFor="difficulty">Filter By Difficulty: </label>
      <select
        id="difficulty"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      <label htmlFor="mealType">Filter By Meal-Type: </label>
      <select
        id="mealType"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="">All</option>
        <option value="Appetizer">Appetizer</option>
        <option value="Beverage">Beverage</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Dinner">Dinner</option>
        <option value="Lunch">Lunch</option>
        <option value="Side">Side</option>
        <option value="Snack">Snack</option>
      </select>

      <div>
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onAddFavorite={onAddFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Discover;
