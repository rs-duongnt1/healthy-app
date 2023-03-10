import {
  createBrowserRouter,
} from "react-router-dom";
import App from "@/layouts/app";
import Column from "@/pages/column";
import Home from "@/pages/home";
import MyRecord from "@/pages/record";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/records",
        element: <MyRecord />,
      },
      {
        path: "/columns",
        element: <Column />,
      },
    ]
  },

]);

export default router