import React from "react";
import RecipeCard from "./RecipeCard";

function Recipes({ recipes, onAddFavorite }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onAddFavorite={onAddFavorite}
        />
      ))}
    </div>
  );
}

export default Recipes;
