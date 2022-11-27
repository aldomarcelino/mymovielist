import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
  },
]);

export default router;
