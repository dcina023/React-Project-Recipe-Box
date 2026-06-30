import React from "react";
import RecipeCard from "./RecipeCard";
import NewRecipeForm from "./NewRecipeForm";

function Recipes({ recipes, onAddFavorite, onAddNewRecipe }) {
  let showRecipes = 4 
  return (
    <div>
      {recipes.map((recipe) => (
        <React.Fragment key={recipe.id}>
          <RecipeCard
            recipe={recipe}
            onAddFavorite={onAddFavorite}
            onAddNewRecipe={onAddNewRecipe}
          />
          <NewRecipeForm onAddNewRecipe={onAddNewRecipe} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Recipes;
