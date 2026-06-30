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
          onAddFavorite: handleAddFavorites,
        }}
      />
    </div>
  );
}

export default App;
