import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

function NewRecipeForm() {
  const { onAddNewRecipe } = useOutletContext()
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    instructions: "",
    ingredients: "",
    cuisine: "",
    difficulty: "",
    mealType: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newRecipe = {
      id: crypto.randomUUID(),
      name: formData.name,
      image: formData.image,
      instructions: [formData.instructions],
      ingredients: [formData.ingredients],
      cuisine: formData.cuisine,
      difficulty: formData.difficulty,
      mealType: [formData.mealType],
    };

    onAddNewRecipe(newRecipe);

    setFormData({
      name: "",
      image: "",
      instructions: "",
      ingredients: "",
      cuisine: "",
      difficulty: "",
      mealType: "",
    });
  }

  return (
    <div>
      <h1> Add your own recipes!</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Recipe name"
        />

        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <input
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          placeholder="Cooking instructions"
        />
        <input
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          placeholder="Recipe ingredients"
        />

        <input
          name="cuisine"
          value={formData.cuisine}
          onChange={handleChange}
          placeholder="Cuisine"
        />

        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
        >
          <option value="">Select difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <select
          name="mealType"
          value={formData.mealType}
          onChange={handleChange}
        >
          <option value="">Select meal type</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
          <option value="Dessert">Dessert</option>
        </select>

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default NewRecipeForm;
