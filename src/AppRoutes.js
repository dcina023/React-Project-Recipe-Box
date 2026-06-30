import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Discover from "./Discover";
import Recipes from "./Recipes";
import Favorites from "./Favorites";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Discover />,
      },
      {
        path: "recipes",
        element: <Recipes />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
]);

export default AppRoutes;
