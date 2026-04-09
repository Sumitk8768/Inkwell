import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Blog from "../pages/Blog";
import Auth from "../pages/Auth";
import AppLayout from "../pages/AppLayout";
import Login from "../pages/Login";
import Register from "../pages/register";

const AppRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,

      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/blog/:id",
          element: <Blog />,
        },
        {
          path: "/auth",
          element: <Auth />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default AppRoutes;
