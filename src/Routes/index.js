import { useRoutes } from "react-router-dom";
import Login from "../Pages/login";
import Signup from "../Pages/signup";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "Signup",
      element: <Signup />,
    },
  ]);
}
