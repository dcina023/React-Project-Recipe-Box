# Online Recipe Box

Online Recipe Box is a full-stack recipe application where users can browse recipes, discover new meal ideas, add their own recipes, and save favorites.

As a food enthusiast, I created this project to showcase one of my interests while practicing core React concepts such as components, state, props, forms, routing, filtering, and CRUD functionality.

## Live Application

- [Frontend](https://react-project-recipe-box.onrender.com/)
- [Backend API](https://react-project-recipe-box-backend.onrender.com/)

> The application is hosted on Render, so it may take a moment to load after a period of inactivity.

## Features

Users can:

- Discover recipes shared by other users
- Filter recipes by meal type and cooking difficulty
- View recipe details
- Add recipes to their personal recipe collection
- Favorite any recipe
- View favorited recipes in a dedicated collection
- Access their recipes and favorites between visits

## Client-Side Routes

| Route | Description |
|---|---|
| `/discover` | Home dashboard where users can discover and filter recipes shared by others |
| `/recipes` | Personal recipe collection where a user can add their own recipes through a form and build their personal cook book |
| `/favorites` | Collection containing all recipes the user has favorited |

## User Stories

- As a user, I can discover recipes shared by other users.
- As a user, I can filter recipes by cooking difficulty and meal type.
- As a user, I can view the details of a recipe.
- As a user, I can add my own recipes to my personal collection.
- As a user, I can favorite any recipe.
- As a user, I can view all my favorited recipes on the Favorites page.
- As a user, my recipes and favorites persist between visits.

## Components

- `NavBar`
- `Header`
- `Recipes`
- `RecipeCard`
- `AddNewRecipeForm`
- `Discover`
- `Favorites`

## Challenges

Some of the main challenges encountered during development included:

- Deciding where shared state should live
- Keeping the Discover and Favorites pages visually and functionally distinct
- Synchronizing frontend state with persistent backend data
- Managing recipe creation and favorite functionality across multiple routes

## Future Improvements

- Allow users to edit and delete their own recipes
- Add recipe search
- Support recipe images uploaded by users
- Add ingredient-based filtering
