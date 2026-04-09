import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Auth from "../pages/Auth";
import AppLayout from "../pages/AppLayout";
import Login from "../pages/Login";
import Register from "../pages/register";
import BlogDetails from "../pages/BlogDetails";
import CreateArticle from "../pages/CreateArticle";

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
          path: "/dashboard/new",
          element: <CreateArticle />,
        },
        {
          path: "/blog/:id",
          element: <BlogDetails />,
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
