import React from "react";
import RecipeCard from "./RecipeCard"

function Recipes({recipes}) {
  console.log(recipes, "DID WE RECEIVE THE ARRAY OF OBJECTS")

  return (
    <div>
      {recipes.map((recipe) => (
         <RecipeCard 
         key={recipe.id} 
         recipe={recipe}
         
         />
      ))}
     
       

    </div>
  )

}



export default Recipes;