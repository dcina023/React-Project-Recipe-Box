import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
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
          element={
            <Recipes recipes={recipes} onAddFavorite={handleAddFavorites} />
          }
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
