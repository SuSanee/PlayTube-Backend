import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../features/home/home";
import Login from "../features/login/Login";
import Signup from "../signup/Signup";
import UserProfile from "../features/user-profile/user-profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":username",
        element: <UserProfile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
