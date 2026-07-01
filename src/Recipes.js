import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import NewRecipeForm from "./NewRecipeForm";
import { useOutletContext } from "react-router-dom";

function Recipes() {
  const [userRecipes, setUserRecipes] = useState([]);
  const { onAddFavorite } = useOutletContext();

  useEffect(() => {
    fetch("https://react-project-recipe-box-backend.onrender.com/recipes")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to retrieve saved recipes");
        return res.json();
      })
      .then(setUserRecipes)
      .catch(console.error);
  }, []);

  function handleAddNewRecipe(newRecipe) {
    fetch("https://react-project-recipe-box-backend.onrender.com/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to save recipe");
        return res.json();
      })
      .then((savedRecipe) => {
        setUserRecipes((currentRecipes) => [...currentRecipes, savedRecipe]);
      })
      .catch(console.error);
  }

  function handleDeleteRecipe(id) {
    fetch(
      `https://react-project-recipe-box-backend.onrender.com/recipes/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete recipe");
        return res.json();
      })
      .then(() => {
        setUserRecipes((prevUserRecipes) =>
          prevUserRecipes.filter((userRecipe) => userRecipe.id !== id),
        );
      })
      .catch(console.error);
  }

  return (
    <div>
      <NewRecipeForm onAddNewRecipe={handleAddNewRecipe} />
      {userRecipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onAddFavorite={onAddFavorite}
          onDeleteRecipe={handleDeleteRecipe}
        />
      ))}
    </div>
  );
}

export default Recipes;
