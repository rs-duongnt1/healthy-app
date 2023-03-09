import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../layouts/app";
import Home from "../pages/home";
import MyRecord from "../pages/my-record";

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
    ]
  },

]);

export default router