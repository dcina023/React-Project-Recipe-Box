import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";

function RecipeCard({ recipe, onAddFavorite }) {
  console.log(recipe, "WHAT JUST HAPPENED?")
  return (
    <article>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} width="300" />
      <p>
        {recipe.cuisine} · {recipe.difficulty}
      </p>
      <p>{recipe.caloriesPerServing} calories per serving</p>
      <button onClick={() => onAddFavorite(recipe)}>Add to Favorites</button>
      <h3>Ingredients</h3>
      <ul>
        console.log("RecipeCard recipe:", recipe);
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <ol>
        {recipe.instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
        ))}
      </ol>
    </article>
  );
}

export default RecipeCard;
