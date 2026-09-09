import { useForm } from "react-hook-form"

type FormFields = {
  name: string;
  image: string;
  caloriesPerServing: number;
  instructions: string;
  ingredients: string;
  cuisine: string;
  difficulty: string;
  mealType: string;
};

type Recipe = {
  name: string;
  image: string;
  caloriesPerServing: number;
  instructions: string[];
  ingredients: string[];
  cuisine: string;
  difficulty: string;
  mealType: string[];
};

type NewRecipeFormProps = {
  onAddNewRecipe: (recipe: Recipe ) => void
};
function NewRecipeForm({ onAddNewRecipe }: NewRecipeFormProps) {
  const {
     register,
    handleSubmit,
    reset,
   } = useForm<FormFields>({
    defaultValues: {
    name: "",
    image: "",
    caloriesPerServing: 0,
    instructions: "",
    ingredients: "",
    cuisine: "",
    difficulty: "",
    mealType: "",
    }
   });

  
function onSubmit(formValues: FormFields) {
    const newRecipe: Recipe  = {
      name: formValues.name,
      image: formValues.image,
      caloriesPerServing: formValues.caloriesPerServing,
      instructions: [formValues.instructions],
      ingredients: [formValues.ingredients],
      cuisine: formValues.cuisine,
      difficulty: formValues.difficulty,
      mealType: [formValues.mealType],
    };

    onAddNewRecipe(newRecipe);
    reset();
  }

  return (
    <div>
      <h1> Add your recipes to build your own collection!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Recipe Name:
          <input
            {...register("name")}
            type="text"
            required
          />
        </label>

        <label>
          Recipe Image:
          <input
            {...register("image")}
            type="url"
            required
          />
        </label>

        <label>
          Calories per serving:
          <input
            {...register("caloriesPerServing")}
            type="text"
            required
          />
        </label>

        <label>
          Recipe Instructions:
          <input
            {...register("instructions")}
            type="text"
            name="instructions"
            required
          />
        </label>

        <label>
          Recipe Ingredients:
          <input
            {...register("ingredients")}
            type="text"
            name="ingredients"
            required
          />
        </label>

        <label>
          Cuisine:
          <input
            {...register("cuisine")}
            type="text"
            name="cuisine"
            required
          />
        </label>

        <label>
          Difficult Level:
          <select
            {...register("difficulty")}
            name="difficulty"
            required
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
            {...register("mealType")}
            name="mealType"
            required
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
