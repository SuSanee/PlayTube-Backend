import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import ChannelProfile from "../features/channel-profile/channel-profile";
import Home from "../features/home/home";

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
        path: "channel-user/",
        element: <ChannelProfile/>
      }
    ],
  },
]);

export default router;
