import { createBrowserRouter } from "react-router";
import RootLayout from "../components/RootLayout";

import Home from "../components/Home";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
     
    ]
  },
  
]);