import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeBox from "./RecipeBox";
import Recipes from "./Recipes";
import Favorites from "./Favorites";
import Discover from "./Discover";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RecipeBox />,
    children: [
      {
        index: true,
        element: <Recipes />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "discover",
        element: <Discover />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
