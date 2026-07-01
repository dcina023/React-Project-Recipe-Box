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

  useEffect(() => {
    fetch("https://react-project-recipe-box-backend.onrender.com/favorites")
      .then((res) => res.json())
      .then(setFavorites)
      .catch(console.error);
  }, []);

  function handleAddFavorites(newFavoriteRecipe) {
    fetch("https://react-project-recipe-box-backend.onrender.com/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFavoriteRecipe),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to save recipe");
        return res.json();
      })
      .then((savedFavoriteRecipe) => {
        const alreadyFavorited = favorites.find(
          (favorite) => favorite.id === newFavoriteRecipe.id,
        );

        if (!alreadyFavorited) setFavorites([...favorites, newFavoriteRecipe]);
      });
  }

  return (
    <div>
      <Header />
      <Outlet
        context={{
          recipes,
          favorites,
          onAddFavorite: handleAddFavorites,
        }}
      />
    </div>
  );
}

export default App;
