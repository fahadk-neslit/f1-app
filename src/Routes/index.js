import * as React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Main from "../layouts/main";
import Drivers from "../pages/drivers";
import Teams from "../pages/teams";
import RaceTable from "../components/raceTable/raceTable";
import Results from "../pages/results/results";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/drivers",
        element: <Drivers />,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
      {
        path: "/results",
        element: <Results />
      },
    ],
  },
]);

const MainRoutes = ({ children }) => {
  return <RouterProvider router={router} />;
};

export default MainRoutes;
