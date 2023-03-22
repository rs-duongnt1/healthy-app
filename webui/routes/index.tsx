import {
  createBrowserRouter,
} from "react-router-dom";
import App from "@/layouts/app";
import Column from "@/pages/column";
import Home from "@/pages/home";
import MyRecord from "@/pages/record";
import Dashboard from "@/pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
   
    ]
  },

]);

export default router