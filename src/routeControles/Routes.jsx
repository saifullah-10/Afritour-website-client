import { createBrowserRouter } from "react-router-dom";

import Error from "../pages/Error";
import Root from "../Root";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AllSpot from "../pages/AllSpot";
import AddSpot from "../pages/AddSpot";
import MyList from "../pages/MyList";
import PackageDeatils from "../pages/PackageDeatils";

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
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/allspot",
        element: <AllSpot></AllSpot>,
      },
      {
        path: "/addspot",
        element: <AddSpot></AddSpot>,
      },
      {
        path: "/mylist",
        element: <MyList></MyList>,
      },
      {
        path: "/places/:id",
        element: <PackageDeatils />,
      },
    ],
  },
]);
export default routes;
