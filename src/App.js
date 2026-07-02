import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("https://react-project-recipe-box-backend.onrender.com/favorites")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to retrieve data!");
        return res.json();
      })
      .then(setFavorites)
      .catch(console.error);
  }, []);

  function handleAddFavorites(newFavoriteRecipe) {
    const alreadyFavorited = favorites.some(
      (favorite) => favorite.id === newFavoriteRecipe.id,
    );

    if (alreadyFavorited) return;

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
        setFavorites((currentFavorites) => [
          ...currentFavorites,
          savedFavoriteRecipe,
        ]);
      })
      .catch(console.error);
  }

  return (
    <div>
      <Header />
      <Outlet
        context={{
          favorites,
          onAddFavorite: handleAddFavorites,
        }}
      />
    </div>
  );
}

export default App;
