import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import SignIn from "../pages/SignIn/SignIn";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>
        },
        {
            path:'/signup',
            element:<SignIn></SignIn>
        }
      ]
    },
  ]);

  export default router;