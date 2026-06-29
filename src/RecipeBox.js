import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Recipes from "./Recipes";
import Favorites from "./Favorites";
import Discover from "./Discover";

function RecipeBox() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Recipes recipes={recipes} />} />
        <Route path="/favorites" element={<Favorites recipes={recipes} />} />
        <Route path="/discover" element={<Discover recipes={recipes} />} />
      </Routes>
    </div>
  );
}

export default RecipeBox;
