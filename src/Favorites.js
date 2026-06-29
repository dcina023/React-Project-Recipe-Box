import React from "react";
import RecipeCard from "./RecipeCard";

function Favorites({ favorites }) {
  return (
    <div>
      <h2>My Favorite Recipes</h2>

      {favorites.length === 0 ?
        <p>No favorite recipes yet!</p>
      : favorites.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      }
    </div>
  );
}

export default Favorites;
