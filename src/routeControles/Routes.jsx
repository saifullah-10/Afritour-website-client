import { createBrowserRouter } from "react-router-dom";

import Error from "../pages/Error";
import Root from "../Root";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export default routes;
