import React, { useState, useEffect } from "react";
import Header from "./Header";
import Recipes from "./Recipes";

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
      Welcome To Your Recipe Box!
      <Header />
      <Recipes recipes={recipes} />
    </div>
  );
}

export default RecipeBox;
