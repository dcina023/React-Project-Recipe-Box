import React from "react";

interface Recipe {
  id: number;
  name: string;
  image: string;
  caloriesPerServing: number;
  cuisine: string;
  difficulty: string;
  ingredients: string[];
  instructions: string[];
}
interface RecipeCardProps {
  recipe: Recipe;
  onAddFavorite?: (recipe: Recipe) => void;
  onDeleteRecipe?: (id: number) => void;
}

function RecipeCard({ 
  recipe, 
  onAddFavorite, 
  onDeleteRecipe,
 }: RecipeCardProps) {
  return (
    <article>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} width="300" />
      <p>
        {recipe.cuisine} · {recipe.difficulty}
      </p>
      <p>{recipe.caloriesPerServing} calories per serving</p>
      {onAddFavorite && (
        <button onClick={() => onAddFavorite(recipe)}>Add to Favorites</button>
      )}
      <h3>Ingredients</h3>
      <ul>
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
      {onDeleteRecipe && (
        <button onClick={() => onDeleteRecipe(recipe.id)}>Delete Recipe</button>
      )}
    </article>
  );
}

export default RecipeCard;
