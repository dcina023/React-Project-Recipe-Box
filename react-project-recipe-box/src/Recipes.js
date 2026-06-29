import React from "react";
import { useOutletContext } from "react-router-dom";
import RecipeCard from "./RecipeCard";

function Recipes({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default Recipes;
