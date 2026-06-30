import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import RecipeCard from "./RecipeCard";

function Discover() {
  const { recipes, onAddFavorite } = useOutletContext();
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const difficulties = [...new Set(recipes.map((recipe) => recipe.difficulty))];

  const mealTypes = [...new Set(recipes.flatMap((recipe) => recipe.mealType))];

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesDifficulty =
      selectedDifficulty ? recipe.difficulty === selectedDifficulty : true;

    const matchesMealType =
      selectedType ? recipe.mealType.includes(selectedType) : true;

    return matchesDifficulty && matchesMealType;
  });

  return (
    <div>
      <label htmlFor="difficulty">Filter By Difficulty: </label>
      <select
        id="difficulty"
        value={selectedDifficulty}
        onChange={(e) => setSelectedDifficulty(e.target.value)}
      >
        <option value="">All</option>
        {difficulties.map((difficulty) => (
          <option key={difficulty} value={difficulty}>
            {difficulty}
          </option>
        ))}
      </select>

      <label htmlFor="mealType">Filter By Meal-Type: </label>
      <select
        id="mealType"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="">All</option>
        {mealTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
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
