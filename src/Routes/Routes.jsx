import { createBrowserRouter } from "react-router";
import RootLayout from "../components/RootLayout";
import Navber from "../components/Navber";
import Banner from "../components/Banner";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        path:"/",
        element:<Banner></Banner>
      }
    ]
  },
  
]);