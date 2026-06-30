import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NewRecipeForm from "./NewRecipeForm";
import Discover from "./Discover";
import Favorites from "./Favorites";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <NewRecipeForm />,
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
