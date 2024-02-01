import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MoviDetails from "../Pages/MoviDetails/MoviDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "movie/:movieId",
    element: <MoviDetails></MoviDetails>,
  },
]);
export default router;
