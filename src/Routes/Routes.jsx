import { createBrowserRouter } from "react-router";
import Navber from "../components/Navber";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navber></Navber>,
  },
]);