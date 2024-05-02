import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Foods from "./pages/Foods";
import FoodDetails from "./pages/FoodDetails";
import Report from "./pages/Report";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/foods",
    element: <Foods />,
  },
  {
    path: "/foods/:foodId",
    element: <FoodDetails />,
  },
  {
    path: "/report",
    element: <Report />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
