import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";


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
      <Outlet
        context={{
          recipes,
          favorites,
          onAddNewRecipe: handleAddNewRecipe,
          onAddFavorite: handleAddFavorites,
        }}
      />
    </div>
  );
}

export default App;
