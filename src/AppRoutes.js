import { createBrowserRouter } from "react-router-dom";
import RecipeBox from "./RecipeBox";
import Recipes from "./Recipes";
import Discover from "./Discover";
import Favorites from "./Favorites";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RecipeBox />,
    children: [
      {
        index: true,
        element: <Recipes />,
      },
      {
        path: "discover",
        element: <Discover />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
]);

export default AppRoutes;
