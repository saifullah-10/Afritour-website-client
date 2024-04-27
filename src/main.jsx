import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ContextServer from "./routeControles/ContextServer";
import { RouterProvider } from "react-router-dom";
import routes from "./routeControles/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextServer>
      <RouterProvider router={routes}></RouterProvider>
    </ContextServer>
  </React.StrictMode>
);
