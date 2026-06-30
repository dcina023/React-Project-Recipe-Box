import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import NewRecipeForm from "./NewRecipeForm";
import Recipes from "./Recipes";
import Favorites from "./Favorites";
import Discover from "./Discover";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes))
      .catch(console.error);
  }, []);

 function handleAddNewRecipe(newRecipe) {
   fetch("http://localhost:5000/recipes", {
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
       setRecipes((currentRecipes) => [...currentRecipes, savedRecipe]);
     })
     .catch(console.error);
 }

  function handleAddFavorites(recipeToAdd) {
    const alreadyFavorited = favorites.find(
      (favorite) => favorite.id === recipeToAdd.id,
    );

    if (!alreadyFavorited) setFavorites([...favorites, recipeToAdd]);
  }

  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<NewRecipeForm onAddNewRecipe={handleAddNewRecipe} />}
        />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} />}
        />
        <Route
          path="/discover"
          element={
            <Discover recipes={recipes} onAddFavorite={handleAddFavorites} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
