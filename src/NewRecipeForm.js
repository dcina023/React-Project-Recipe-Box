import React, { useState } from "react";

function NewRecipeForm({ onAddNewRecipe }) {
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
      id: "",
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
      <h1> Add your recipes to build your own collection!</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Recipe Name:
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Recipe Image:
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>

        <label>
          Recipe Instructions:
          <input
            name="instructions"
            value={formData.instructions}
            className="input-larger-section"
            onChange={handleChange}
          />
        </label>

        <label>
          Recipe Ingredients:
          <input
            name="ingredients"
            value={formData.ingredients}
            className="input-larger-section"
            onChange={handleChange}
          />
        </label>

        <label>
          Cuisine:
          <input
            name="cuisine"
            value={formData.cuisine}
            onChange={handleChange}
          />
        </label>

        <label>
          Difficult Level:
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
        </label>

        <label>
          Meal Type:
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
        </label>
        <button className="button-submit-form" type="submit">
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default NewRecipeForm;
